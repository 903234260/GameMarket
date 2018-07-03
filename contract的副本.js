
var fs = require("fs");
var Web3 = require('web3')
var TruffleContract = require('truffle-contract')
// var contractartifacts = require('./demo.js')

var contractartifacts = null;
fs.readFile('Adoption.json','utf8',function (err, data) {
        if(err) console.log(err);
        var test1=JSON.parse(data);
        console.log(data);
});

var App = {}
App.initWeb3 = function() {
    App.web3 = new Web3('http://localhost:8545');
    // console.log("web3:", App.web3);
}

App.initWeb3();

App.contracts = {};
App.initContract = function() {
    //App.contracts.ToolGenManager = TruffleContract(contractartifacts);
    //App.contracts.ToolGenManager.setProvider(App.web3Provider);
}

App.initContract();

App.bindEvents = function() {
    $(document).on('click', '.btn-adopt', App.handleAdopt);
}

App.sec_passed = 0;
App.genTools = function(playerId,playerName,address) {
    // 判断玩家信息是否为空
    if(playerId == undefined || playerId == null || playerId <=0) {
        // 提醒登录或注册
    }
    if(playerName == undefined || playerName == null || playerName === "") {
        // 设置一个默认玩家名字
    }
    if(address == undefined || address == null || address === "") {
        // 提示账户地址找不到 , 请联系官方电话找回。
    }

    // 不够30秒不生成道具,直接返回
    if(App.sec_passed<30) {
        return;
    }


    var playerName = "";
    var playerId = "";
    var address = "";
    var tool_id = "";
    // 每30秒生成意见道具给账户
    if(App.sec_passed>=30) {

        // 创造意见物品 
        tool_id = 1;
        // testrpc 的 第1个账户
        address = "0x3941cd30fe72e1a9f477a7af48d681603c5345dc";
        playerName = "Icy Fire";
        playerId = "1900293";

        // 重置计时
        App.sec_passed = 0;
    }

    // 使用区块链记录这次道具生成事件,便于追溯财产
    var contract_instance;
    App.contracts.Adoption.deployed().then(function(instance) {
      contract_instance = instance;
      return contract_instance.save(playerId,playerName,address,tool_id).call();
    }).then(function(result){
      console.log("保存-后-反馈数据:");
      console.log(result);
    }).catch(function(err) {
      console.log(err.message);
    })
}

App.genTools = 30;

