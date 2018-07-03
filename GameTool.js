var GameTool = {
  "contract_name": "GameTool",
  "abi": [
    {
      "constant": false,
      "inputs": [
        {
          "name": "addr",
          "type": "uint256"
        }
      ],
      "name": "sendOrder",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "myid",
          "type": "bytes32"
        },
        {
          "name": "result",
          "type": "string"
        }
      ],
      "name": "__callback",
      "outputs": [],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "myid",
          "type": "bytes32"
        },
        {
          "name": "result",
          "type": "string"
        },
        {
          "name": "proof",
          "type": "bytes"
        }
      ],
      "name": "__callback",
      "outputs": [],
      "payable": false,
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "adopters",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "playerId",
          "type": "uint256"
        },
        {
          "name": "playerName",
          "type": "string"
        },
        {
          "name": "addr",
          "type": "uint256"
        },
        {
          "name": "toolId",
          "type": "uint256"
        },
        {
          "name": "count",
          "type": "uint256"
        }
      ],
      "name": "minerTools",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "inputs": [],
      "payable": false,
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "info",
          "type": "string"
        }
      ],
      "name": "logword",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "addr",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "toolId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "price",
          "type": "uint256"
        }
      ],
      "name": "logNewOrder",
      "type": "event"
    }
  ],
  "unlinked_binary": "0x606060405234610000575b6000602081815260017fada5013122d395ba3c54772283fb069b10426056ef8ca54750cb9bb552a59e7d81905560027fabbb5caa7dda850e60932de0934eb1f9d0f59695050f761dc64e443e5030a5695560037f101e368776582e57ab3d116ffe2517c0a585cd5b23174b01e275c2d8329c3d835560047f52d75039926638d3c558b2bdefb945d5be8dae29dedd1c313212a4d472d9fde55560057f2b232c97452f0950c94e2539fdc7e69d21166113cf7a9bcb99b220a3fe5d720a5560067f62103cf3131c85df57aad364d21cba02556d3092d6cb54c298c2e7726a7870bd5560078084527f870253054e3d98b71abec8fff9ebf8a15d167f15909091a800d4acaab9266d2b5560408051928301905290819052601e555b505b6110c6806101346000396000f300606060405263ffffffff60e060020a6000350416631586e021811461005057806327dc297e1461007257806338bbfa50146100c857806343ae80d31461015b578063eef5192214610194575b610000565b3461000057610060600435610207565b60408051918252519081900360200190f35b346100005760408051602060046024803582810135601f81018590048502860185019096528585526100c69583359593946044949392909201918190840183828082843750949650610c7e95505050505050565b005b346100005760408051602060046024803582810135601f81018590048502860185019096528585526100c6958335959394604494939290920191819084018382808284375050604080516020601f89358b01803591820183900483028401830190945280835297999881019791965091820194509250829150840183828082843750949650610cae95505050505050565b005b346100005761016b600435610cb4565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b346100005760408051602060046024803582810135601f810185900485028601850190965285855261006095833595939460449493929092019181908401838280828437509496505084359460208101359450604001359250610ce7915050565b60408051918252519081900360200190f35b60408051608081810183526000808352602080840182905283850182905284518082018652828152606094850152845180840186528281528082018390528086018390528551808301875283815281860152855180850187528381528083018490528087018490528651808401885284815281870152865194850187528785526001858401819052858801819052875180890189526007815260c860020a6638383933393239028186015296860196909652878452601d9092529482208054808601808355939686958695909491939192859291908290829080158290116103905760040281600402836000526020600020918201910161039091905b8082111561037d57600060008201600090556001820160009055600282016000905560038201805460018160011615610100020316600290046000825580601f1061034f5750610381565b601f01602090049060005260206000209081019061038191905b8082111561037d5760008155600101610369565b5090565b5b5050600401610304565b5090565b5b505050815481101561000057906000526020600020906004020160005b506000820151816000015560208201518160010155604082015181600201556060820151816003019080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061041f57805160ff191683800117855561044c565b8280016001018555821561044c579182015b8281111561044c578251825591602001919060010190610431565b5b5061046d9291505b8082111561037d5760008155600101610369565b5090565b50509050508560011415610872576040805160208082526008908201527f69666275793d3d310000000000000000000000000000000000000000000000008183015290517f2d6ea4f9e7935cad35e1fe94f1e854009d87419bc5e0d499470d81e371c3ca459181900360600190a1604080516080810182528981526002602080830182905282840191909152825180840184526007815260c860020a66383839333932390281830152606083015260008b8152601b909152919091208054600181018083559294508492908290829080158290116105ec576004028160040283600052602060002091820191016105ec91905b8082111561037d57600060008201600090556001820160009055600282016000905560038201805460018160011615610100020316600290046000825580601f106105ab57506105dd565b601f0160209004906000526020600020908101906105dd91905b8082111561037d5760008155600101610369565b5090565b5b5050600401610560565b5090565b5b505050815481101561000057906000526020600020906004020160005b506000820151816000015560208201518160010155604082015181600201556060820151816003019080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061067b57805160ff19168380011785556106a8565b828001600101855582156106a8579182015b828111156106a857825182559160200191906001019061068d565b5b506106c99291505b8082111561037d5760008155600101610369565b5090565b5050601c8054600181018083558694509192508290829080158290116107905760040281600402836000526020600020918201910161079091905b8082111561037d57600060008201600090556001820160009055600282016000905560038201805460018160011615610100020316600290046000825580601f1061074f5750610781565b601f01602090049060005260206000209081019061078191905b8082111561037d5760008155600101610369565b5090565b5b5050600401610704565b5090565b5b505050815481101561000057906000526020600020906004020160005b506000820151816000015560208201518160010155604082015181600201556060820151816003019080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061081f57805160ff191683800117855561084c565b8280016001018555821561084c579182015b8281111561084c578251825591602001919060010190610831565b5b5061086d9291505b8082111561037d5760008155600101610369565b5090565b505050505b851515610c6e576040805160208082526008908201527f69666275793d3d300000000000000000000000000000000000000000000000008183015290517f2d6ea4f9e7935cad35e1fe94f1e854009d87419bc5e0d499470d81e371c3ca459181900360600190a150604080516080810182528881526002602080830182905282840191909152825180840184526007815260c860020a66383839333932390281830152606083015260008a81526019909152919091208054600181018083558392918290829080158290116109e8576004028160040283600052602060002091820191016109e891905b8082111561037d57600060008201600090556001820160009055600282016000905560038201805460018160011615610100020316600290046000825580601f106109a757506109d9565b601f0160209004906000526020600020908101906109d991905b8082111561037d5760008155600101610369565b5090565b5b505060040161095c565b5090565b5b505050815481101561000057906000526020600020906004020160005b506000820151816000015560208201518160010155604082015181600201556060820151816003019080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610a7757805160ff1916838001178555610aa4565b82800160010185558215610aa4579182015b82811115610aa4578251825591602001919060010190610a89565b5b50610ac59291505b8082111561037d5760008155600101610369565b5090565b5050601a805460018101808355859450919250829082908015829011610b8c57600402816004028360005260206000209182019101610b8c91905b8082111561037d57600060008201600090556001820160009055600282016000905560038201805460018160011615610100020316600290046000825580601f10610b4b5750610b7d565b601f016020900490600052602060002090810190610b7d91905b8082111561037d5760008155600101610369565b5090565b5b5050600401610b00565b5090565b5b505050815481101561000057906000526020600020906004020160005b506000820151816000015560208201518160010155604082015181600201556060820151816003019080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610c1b57805160ff1916838001178555610c48565b82800160010185558215610c48579182015b82811115610c48578251825591602001919060010190610c2d565b5b50610c699291505b8082111561037d5760008155600101610369565b5090565b505050505b600196505b505050505050919050565b610ca982826000604051805910610c925750595b908082528060200260200182016040525b50610cae565b5b5050565b5b505050565b6005816010811015610000570160005b915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60006060604051908101604052806000815260200160008152602001602060405190810160405280600081525081525060a06040519081016040528060008152602001600081526020016000815260200160008152602001602060405190810160405280600081525081525060006060604051908101604052808881526020018a8152602001898152509250826016600089815260200190815260200160002060008201518160000155602082015181600101556040820151816002019080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610ded57805160ff1916838001178555610e1a565b82800160010185558215610e1a579182015b82811115610e1a578251825591602001919060010190610dff565b5b50610e3b9291505b8082111561037d5760008155600101610369565b5090565b50506040805160a0810182528c815260208082018c90528183018b9052606082018a905282518084018452600881527f333932393338383200000000000000000000000000000000000000000000000081830152608083015260008c815260179091529190912080549195506001820194508593509150839081101561000057906000526020600020906005020160005b50600082015181600001556020820151816001015560408201518160020155606082015181600301556080820151816004019080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610f4757805160ff1916838001178555610f74565b82800160010185558215610f74579182015b82811115610f74578251825591602001919060010190610f59565b5b50610f959291505b8082111561037d5760008155600101610369565b5090565b50509050508160186000016000815481101561000057906000526020600020906005020160005b50600082015181600001556020820151816001015560408201518160020155606082015181600301556080820151816004019080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061103757805160ff1916838001178555611064565b82800160010185558215611064579182015b82811115611064578251825591602001919060010190611049565b5b506110859291505b8082111561037d5760008155600101610369565b5090565b50600196505050505b505050959450505050505600a165627a7a7230582022fd314d4b89e531b3bcbad72047b08ae5bc3621bfc781a1ff19257bef25b3cd0029",
  "networks": {
    "1527692642580": {
      "events": {},
      "links": {},
      "address": "0x9f4cca7f186fb56ddab8a414749b59d2bb41296d",
      "updated_at": 1527954071440
    },
    "1528010201093": {
      "events": {
        "0x2d6ea4f9e7935cad35e1fe94f1e854009d87419bc5e0d499470d81e371c3ca45": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "name": "info",
              "type": "string"
            }
          ],
          "name": "logword",
          "type": "event"
        },
        "0xe182742d48f54909e6eda4e232b2ec45e8e0ffb054e966770c4e92aa66ef7674": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "name": "addr",
              "type": "uint256"
            },
            {
              "indexed": false,
              "name": "toolId",
              "type": "uint256"
            },
            {
              "indexed": false,
              "name": "price",
              "type": "uint256"
            }
          ],
          "name": "logNewOrder",
          "type": "event"
        }
      },
      "links": {},
      "address": "0x742a496f80dca07317c74c8ea486f438344c7759",
      "updated_at": 1528010312157
    }
  },
  "schema_version": "0.0.5",
  "updated_at": 1528010312157
}