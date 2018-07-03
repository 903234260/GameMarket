

//var contractartifacts = null;
//$.getJSON("http://47.52.232.90/Adoption.json", function(data) {
//      console.log(data);  
//});

var App = {}
App.initWeb3 = function() {
    //web3 = new Web3('http://localhost:8545');
    // console.log("web3:", App.web3);
    App.web3Provider = new Web3.providers.HttpProvider('http://localhost:8545');
    App.web3 = new Web3(App.web3Provider);
}


App.initWeb3();
console.log(App.web3);
console.log(App.web3Provider);


App.contracts = {};
App.initContract = function() {
    App.contracts.GameTool = TruffleContract(GameTool);
    App.contracts.GameTool.setProvider(App.web3Provider);
}


App.initContract();

App.loadAccounts = function() {

    App.web3.eth.getAccounts(function(error, accounts){
      if (error) {
        console.log(error);
      }
      console.log(accounts);
      var account = accounts[0];

    });   
}


// 挂单
App.sendOrder = function(tool_id) {
    var contract_instance;
    console.log("tool_id == "+tool_id);
    App.contracts.GameTool.deployed().then(function(instance) {
      contract_instance = instance;
      return contract_instance.sendOrder.sendTransaction(tool_id, {
                from: '0x5842c4874ef0c2fc41433d97a95a0b2f90a49b5b'
       });
    }).then(function(result){
      console.log("挂单 : ");
      console.log(result);
    }).catch(function(err) {
      console.log(err.message);
    })
}



App.bindEvents = function() {
    $(document).on('click', '.btn-adopt', App.handleAdopt);
}

// 给当前用户生成1组道具
App.sec_passed = 0;
App.minerTools = function(playerId,playerName,address) {
    console.log(playerId);
    // 判断玩家信息是否为空
    if(playerId == undefined || playerId == null || playerId <=0) {
        // 提醒登录或注册
        console.log("playerId required");
        retrurn;
    }
    if(playerName == undefined || playerName == null || playerName === "") {
        // 设置一个默认玩家名字
        console.log("playerName required");
        retrurn;
    }
    if(address == undefined || address == null || address === "") {
        // 提示账户地址找不到 , 请联系官方电话找回。
        console.log("address required");
        retrurn;
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

    console.log("-- tool_id ---"+tool_id+";;;--- playerId --- "+playerId + " ---- playerName --- "+playerName);
    // 使用区块链记录这次道具生成事件,便于追溯财产
    var contract_instance;
    App.contracts.GameTool.deployed().then(function(instance) {
      contract_instance = instance;
      return contract_instance.save(playerId,playerName,address,tool_id).call();
    }).then(function(result){
      console.log("保存-后-反馈数据:");
      console.log(result);
    }).catch(function(err) {
      console.log(err.message);
    })
}

App.sec_passed = 30;
App.minerTools(10001,"莉莉","0x3941cd30fe72e1a9f477a7af48d681603c5345dc");


