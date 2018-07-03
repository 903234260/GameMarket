var Adoption = {
  "contractName": "Adoption",
  "abi": [
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
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "petId",
          "type": "uint256"
        }
      ],
      "name": "adopt",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getAdopters",
      "outputs": [
        {
          "name": "",
          "type": "address[16]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b506102d8806100206000396000f300608060405260043610610057576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680633de4eb171461005c57806343ae80d3146100af5780638588b2c51461011c575b600080fd5b34801561006857600080fd5b5061007161015d565b6040518082601060200280838360005b8381101561009c578082015181840152602081019050610081565b5050505090500191505060405180910390f35b3480156100bb57600080fd5b506100da600480360381019080803590602001909291905050506101de565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561012857600080fd5b5061014760048036038101908080359060200190929190505050610213565b6040518082815260200191505060405180910390f35b610165610288565b60006010806020026040519081016040528092919082601080156101d4576020028201915b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001906001019080831161018a575b5050505050905090565b6000816010811015156101ed57fe5b016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008082101580156102265750600f8211155b151561023157600080fd5b3360008360108110151561024157fe5b0160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550819050919050565b610200604051908101604052806010906020820280388339808201915050905050905600a165627a7a7230582030aae29fbe82a56ce4aa0fb66be85a06e0b6b0539c8450b0c0ab76680b7266a30029",
  "deployedBytecode": "0x608060405260043610610057576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680633de4eb171461005c57806343ae80d3146100af5780638588b2c51461011c575b600080fd5b34801561006857600080fd5b5061007161015d565b6040518082601060200280838360005b8381101561009c578082015181840152602081019050610081565b5050505090500191505060405180910390f35b3480156100bb57600080fd5b506100da600480360381019080803590602001909291905050506101de565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561012857600080fd5b5061014760048036038101908080359060200190929190505050610213565b6040518082815260200191505060405180910390f35b610165610288565b60006010806020026040519081016040528092919082601080156101d4576020028201915b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001906001019080831161018a575b5050505050905090565b6000816010811015156101ed57fe5b016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008082101580156102265750600f8211155b151561023157600080fd5b3360008360108110151561024157fe5b0160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550819050919050565b610200604051908101604052806010906020820280388339808201915050905050905600a165627a7a7230582030aae29fbe82a56ce4aa0fb66be85a06e0b6b0539c8450b0c0ab76680b7266a30029",
  "sourceMap": "26:415:0:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;26:415:0;;;;;;;",
  "deployedSourceMap": "26:415:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;356:83;;8:9:-1;5:2;;;30:1;27;20:12;5:2;356:83:0;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;356:83:0;;;;;;;;;;;;;;;;78:27;;8:9:-1;5:2;;;30:1;27;20:12;5:2;78:27:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;127:204;;8:9:-1;5:2;;;30:1;27;20:12;5:2;127:204:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;356:83;400:11;;:::i;:::-;426:8;419:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;356:83;:::o;78:27::-;;;;;;;;;;;;;;;;;;;;;;;;;:::o;127:204::-;169:4;231:1;223:5;:9;;:24;;;;;245:2;236:5;:11;;223:24;215:33;;;;;;;;298:10;280:8;289:5;280:15;;;;;;;;;;;:28;;;;;;;;;;;;;;;;;;321:5;314:12;;127:204;;;:::o;26:415::-;;;;;;;;;;;;29:2:-1;21:6;17:15;117:4;105:10;97:6;88:34;148:4;140:6;136:17;126:27;;0:157;26:415:0;;;;:::o",
  "source": "pragma solidity ^0.4.17;\n\ncontract Adoption {\n  // 保存领养者的地址\n  address[16] public adopters;\n\n  //领养宠物\n  function adopt(uint petId) public returns(uint) {\n    // 确保id在数组长度内\n    require(petId >=0 && petId <= 15);\n\n    //保存调用地址\n    adopters[petId] = msg.sender;\n    return petId;\n  }\n\n  // 返回领养者\n  function getAdopters() public view returns (address[16]) {\n    return adopters;\n  }\n}\n",
  "sourcePath": "/Users/yinzhiqiang/blockchain/pet-shop2/pet-shop/contracts/Adoption.sol",
  "ast": {
    "absolutePath": "/Users/yinzhiqiang/blockchain/pet-shop2/pet-shop/contracts/Adoption.sol",
    "exportedSymbols": {
      "Adoption": [
        43
      ]
    },
    "id": 44,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".17"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:0"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 43,
        "linearizedBaseContracts": [
          43
        ],
        "name": "Adoption",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 5,
            "name": "adopters",
            "nodeType": "VariableDeclaration",
            "scope": 43,
            "src": "78:27:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_address_$16_storage",
              "typeString": "address[16]"
            },
            "typeName": {
              "baseType": {
                "id": 2,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "78:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "id": 4,
              "length": {
                "argumentTypes": null,
                "hexValue": "3136",
                "id": 3,
                "isConstant": false,
                "isLValue": false,
                "isPure": false,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "86:2:0",
                "subdenomination": null,
                "typeDescriptions": {
                  "typeIdentifier": null,
                  "typeString": null
                },
                "value": "16"
              },
              "nodeType": "ArrayTypeName",
              "src": "78:11:0",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_address_$16_storage_ptr",
                "typeString": "address[16]"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 31,
              "nodeType": "Block",
              "src": "175:156:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 19,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 15,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 13,
                            "name": "petId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7,
                            "src": "223:5:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">=",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 14,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "231:1:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "223:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "&&",
                        "rightExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 18,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 16,
                            "name": "petId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7,
                            "src": "236:5:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "<=",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "3135",
                            "id": 17,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "245:2:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_15_by_1",
                              "typeString": "int_const 15"
                            },
                            "value": "15"
                          },
                          "src": "236:11:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "223:24:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 12,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        118,
                        119
                      ],
                      "referencedDeclaration": 118,
                      "src": "215:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 20,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "215:33:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 21,
                  "nodeType": "ExpressionStatement",
                  "src": "215:33:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 27,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 22,
                        "name": "adopters",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5,
                        "src": "280:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$16_storage",
                          "typeString": "address[16] storage ref"
                        }
                      },
                      "id": 24,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 23,
                        "name": "petId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7,
                        "src": "289:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "280:15:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 25,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 115,
                        "src": "298:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 26,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "298:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "280:28:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 28,
                  "nodeType": "ExpressionStatement",
                  "src": "280:28:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 29,
                    "name": "petId",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 7,
                    "src": "321:5:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 11,
                  "id": 30,
                  "nodeType": "Return",
                  "src": "314:12:0"
                }
              ]
            },
            "documentation": null,
            "id": 32,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "adopt",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7,
                  "name": "petId",
                  "nodeType": "VariableDeclaration",
                  "scope": 32,
                  "src": "142:10:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "142:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "141:12:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 11,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 32,
                  "src": "169:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "169:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "168:6:0"
            },
            "scope": 43,
            "src": "127:204:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 41,
              "nodeType": "Block",
              "src": "413:26:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 39,
                    "name": "adopters",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 5,
                    "src": "426:8:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$16_storage",
                      "typeString": "address[16] storage ref"
                    }
                  },
                  "functionReturnParameters": 38,
                  "id": 40,
                  "nodeType": "Return",
                  "src": "419:15:0"
                }
              ]
            },
            "documentation": null,
            "id": 42,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getAdopters",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 33,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "376:2:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 38,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 37,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 42,
                  "src": "400:11:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$16_memory_ptr",
                    "typeString": "address[16]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 34,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "400:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 36,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "3136",
                      "id": 35,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "408:2:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": null,
                        "typeString": null
                      },
                      "value": "16"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "400:11:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$16_storage_ptr",
                      "typeString": "address[16]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "399:13:0"
            },
            "scope": 43,
            "src": "356:83:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 44,
        "src": "26:415:0"
      }
    ],
    "src": "0:442:0"
  },
  "legacyAST": {
    "absolutePath": "/Users/yinzhiqiang/blockchain/pet-shop2/pet-shop/contracts/Adoption.sol",
    "exportedSymbols": {
      "Adoption": [
        43
      ]
    },
    "id": 44,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".17"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:0"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 43,
        "linearizedBaseContracts": [
          43
        ],
        "name": "Adoption",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 5,
            "name": "adopters",
            "nodeType": "VariableDeclaration",
            "scope": 43,
            "src": "78:27:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_address_$16_storage",
              "typeString": "address[16]"
            },
            "typeName": {
              "baseType": {
                "id": 2,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "78:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "id": 4,
              "length": {
                "argumentTypes": null,
                "hexValue": "3136",
                "id": 3,
                "isConstant": false,
                "isLValue": false,
                "isPure": false,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "86:2:0",
                "subdenomination": null,
                "typeDescriptions": {
                  "typeIdentifier": null,
                  "typeString": null
                },
                "value": "16"
              },
              "nodeType": "ArrayTypeName",
              "src": "78:11:0",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_address_$16_storage_ptr",
                "typeString": "address[16]"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 31,
              "nodeType": "Block",
              "src": "175:156:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 19,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 15,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 13,
                            "name": "petId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7,
                            "src": "223:5:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">=",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 14,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "231:1:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "223:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "&&",
                        "rightExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 18,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 16,
                            "name": "petId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7,
                            "src": "236:5:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "<=",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "3135",
                            "id": 17,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "245:2:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_15_by_1",
                              "typeString": "int_const 15"
                            },
                            "value": "15"
                          },
                          "src": "236:11:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "223:24:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 12,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        118,
                        119
                      ],
                      "referencedDeclaration": 118,
                      "src": "215:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 20,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "215:33:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 21,
                  "nodeType": "ExpressionStatement",
                  "src": "215:33:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 27,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 22,
                        "name": "adopters",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5,
                        "src": "280:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$16_storage",
                          "typeString": "address[16] storage ref"
                        }
                      },
                      "id": 24,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 23,
                        "name": "petId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7,
                        "src": "289:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "280:15:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 25,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 115,
                        "src": "298:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 26,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "298:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "280:28:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 28,
                  "nodeType": "ExpressionStatement",
                  "src": "280:28:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 29,
                    "name": "petId",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 7,
                    "src": "321:5:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 11,
                  "id": 30,
                  "nodeType": "Return",
                  "src": "314:12:0"
                }
              ]
            },
            "documentation": null,
            "id": 32,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "adopt",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7,
                  "name": "petId",
                  "nodeType": "VariableDeclaration",
                  "scope": 32,
                  "src": "142:10:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "142:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "141:12:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 11,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 32,
                  "src": "169:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "169:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "168:6:0"
            },
            "scope": 43,
            "src": "127:204:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 41,
              "nodeType": "Block",
              "src": "413:26:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 39,
                    "name": "adopters",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 5,
                    "src": "426:8:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$16_storage",
                      "typeString": "address[16] storage ref"
                    }
                  },
                  "functionReturnParameters": 38,
                  "id": 40,
                  "nodeType": "Return",
                  "src": "419:15:0"
                }
              ]
            },
            "documentation": null,
            "id": 42,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getAdopters",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 33,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "376:2:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 38,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 37,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 42,
                  "src": "400:11:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$16_memory_ptr",
                    "typeString": "address[16]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 34,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "400:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 36,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "3136",
                      "id": 35,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "408:2:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": null,
                        "typeString": null
                      },
                      "value": "16"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "400:11:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$16_storage_ptr",
                      "typeString": "address[16]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "399:13:0"
            },
            "scope": 43,
            "src": "356:83:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 44,
        "src": "26:415:0"
      }
    ],
    "src": "0:442:0"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.23+commit.124ca40d.Emscripten.clang"
  },
  "networks": {
    "5777": {
      "events": {},
      "links": {},
      "address": "0x820f725fe8a842ba110065b7486718c1bd003487"
    },
    "1525765781631": {
      "events": {},
      "links": {},
      "address": "0x1431723f5ac9df85f9d7eaa38079996113a5111a",
      "transactionHash": "0x90aede9647274796f36273390471d91314d5579529c49843adc44d6607372248"
    }
  },
  "schemaVersion": "2.0.0",
  "updatedAt": "2018-05-10T11:10:34.151Z"
}