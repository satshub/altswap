/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { PromiseOrValue } from "../../../../common";
import type {
  MultiSigWallet,
  MultiSigWalletInterface,
} from "../../../../src/treasury/MultiSignWallet.sol/MultiSigWallet";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";

const _abi = [
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_owners",
        type: "address[]",
      },
      {
        internalType: "uint256",
        name: "_required",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "transactionId",
        type: "uint256",
      },
    ],
    name: "Confirmation",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "transactionId",
        type: "uint256",
      },
    ],
    name: "Execution",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "transactionId",
        type: "uint256",
      },
    ],
    name: "ExecutionFailure",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "OwnerAddition",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "OwnerRemoval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "required",
        type: "uint256",
      },
    ],
    name: "RequirementChange",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "transactionId",
        type: "uint256",
      },
    ],
    name: "Revocation",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "transactionId",
        type: "uint256",
      },
    ],
    name: "Submission",
    type: "event",
  },
  {
    inputs: [],
    name: "ETH",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MAX_OWNER_COUNT",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "addOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_required",
        type: "uint256",
      },
    ],
    name: "changeRequirement",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "transactionId",
        type: "uint256",
      },
    ],
    name: "confirmTransaction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "confirmations",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "transactionId",
        type: "uint256",
      },
    ],
    name: "executeTransaction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "transactionId",
        type: "uint256",
      },
    ],
    name: "getConfirmationCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "transactionId",
        type: "uint256",
      },
    ],
    name: "getConfirmations",
    outputs: [
      {
        internalType: "address[]",
        name: "_confirmations",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getOwners",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "pending",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "executed",
        type: "bool",
      },
    ],
    name: "getTransactionCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "from",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "to",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "pending",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "executed",
        type: "bool",
      },
    ],
    name: "getTransactionIds",
    outputs: [
      {
        internalType: "uint256[]",
        name: "_transactionIds",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "transactionId",
        type: "uint256",
      },
    ],
    name: "isConfirmed",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "isOwner",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "owners",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "removeOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "replaceOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "required",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "transactionId",
        type: "uint256",
      },
    ],
    name: "revokeConfirmation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "destination",
        type: "address",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "submitERC20Transaction",
    outputs: [
      {
        internalType: "uint256",
        name: "transactionId",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "destination",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "submitTransaction",
    outputs: [
      {
        internalType: "uint256",
        name: "transactionId",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "tokenBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "transactionCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "transactions",
    outputs: [
      {
        internalType: "address",
        name: "destination",
        type: "address",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bool",
        name: "executed",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620026c9380380620026c983398101604081905262000034916200027f565b81518160328211158015620000495750818111155b80156200005557508015155b80156200006157508115155b620000b25760405162461bcd60e51b815260206004820152601660248201527f726571756972656d656e7420697320696e76616c696400000000000000000000604482015260640160405180910390fd5b60005b8451811015620001a85760026000868381518110620000d857620000d862000359565b6020908102919091018101516001600160a01b031682528101919091526040016000205460ff161580156200013c575060006001600160a01b031685828151811062000128576200012862000359565b60200260200101516001600160a01b031614155b6200014657600080fd5b60016002600087848151811062000161576200016162000359565b6020908102919091018101516001600160a01b03168252810191909152604001600020805460ff1916911515919091179055806200019f816200036f565b915050620000b5565b508351620001be906003906020870190620001cb565b5050506004555062000397565b82805482825590600052602060002090810192821562000223579160200282015b828111156200022357825182546001600160a01b0319166001600160a01b03909116178255602090920191600190910190620001ec565b506200023192915062000235565b5090565b5b8082111562000231576000815560010162000236565b634e487b7160e01b600052604160045260246000fd5b80516001600160a01b03811681146200027a57600080fd5b919050565b600080604083850312156200029357600080fd5b82516001600160401b0380821115620002ab57600080fd5b818501915085601f830112620002c057600080fd5b8151602082821115620002d757620002d76200024c565b8160051b604051601f19603f83011681018181108682111715620002ff57620002ff6200024c565b6040529283528183019350848101820192898411156200031e57600080fd5b948201945b838610156200034757620003378662000262565b8552948201949382019362000323565b97909101519698969750505050505050565b634e487b7160e01b600052603260045260246000fd5b6000600182016200039057634e487b7160e01b600052601160045260246000fd5b5060010190565b61232280620003a76000396000f3fe60806040526004361061018f5760003560e01c8063a0e67e2b116100d6578063c64274741161007f578063e20056e611610059578063e20056e6146104d3578063ee22610b146104f3578063eedc966a1461051357600080fd5b8063c642747414610488578063d74f8edd146104a8578063dc8452cd146104bd57600080fd5b8063b77bf600116100b0578063b77bf60014610432578063ba51a6df14610448578063c01a8c841461046857600080fd5b8063a0e67e2b146103c3578063a8abe69a146103e5578063b5dc40c31461041257600080fd5b806354741525116101385780638322fff2116101125780638322fff21461035d5780638b51d13f146103725780639ace38c21461039257600080fd5b806354741525146102fd5780637065cb481461031d578063784547a71461033d57600080fd5b806320ea8d861161016957806320ea8d86146102625780632f54bf6e146102825780633411c81c146102c257600080fd5b8063025e7c27146101d75780630985723014610214578063173825d91461024257600080fd5b366101d25734156101d05760405134815233907fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c9060200160405180910390a25b005b600080fd5b3480156101e357600080fd5b506101f76101f2366004611d3a565b610533565b6040516001600160a01b0390911681526020015b60405180910390f35b34801561022057600080fd5b5061023461022f366004611db8565b61055d565b60405190815260200161020b565b34801561024e57600080fd5b506101d061025d366004611e27565b6105b5565b34801561026e57600080fd5b506101d061027d366004611d3a565b6107de565b34801561028e57600080fd5b506102b261029d366004611e27565b60026020526000908152604090205460ff1681565b604051901515815260200161020b565b3480156102ce57600080fd5b506102b26102dd366004611e49565b600160209081526000928352604080842090915290825290205460ff1681565b34801561030957600080fd5b50610234610318366004611e86565b610941565b34801561032957600080fd5b506101d0610338366004611e27565b6109c2565b34801561034957600080fd5b506102b2610358366004611d3a565b610bc1565b34801561036957600080fd5b506101f7600081565b34801561037e57600080fd5b5061023461038d366004611d3a565b610c5f565b34801561039e57600080fd5b506103b26103ad366004611d3a565b610ce7565b60405161020b959493929190611ebf565b3480156103cf57600080fd5b506103d8610daf565b60405161020b9190611f40565b3480156103f157600080fd5b50610405610400366004611f8d565b610e11565b60405161020b9190611fd7565b34801561041e57600080fd5b506103d861042d366004611d3a565b610fa9565b34801561043e57600080fd5b5061023460055481565b34801561045457600080fd5b506101d0610463366004611d3a565b611181565b34801561047457600080fd5b506101d0610483366004611d3a565b61127a565b34801561049457600080fd5b506102346104a336600461200f565b6113fc565b3480156104b457600080fd5b50610234603281565b3480156104c957600080fd5b5061023460045481565b3480156104df57600080fd5b506101d06104ee366004612069565b611452565b3480156104ff57600080fd5b506101d061050e366004611d3a565b611687565b34801561051f57600080fd5b5061023461052e366004611e27565b6119b3565b6003818154811061054357600080fd5b6000918252602090912001546001600160a01b0316905081565b60006105a186868686868080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250611a6f92505050565b90506105ac8161127a565b95945050505050565b3330146105ff5760405162461bcd60e51b81526020600482015260136024820152726f6e6c792077616c6c6574206578656375746560681b60448201526064015b60405180910390fd5b6001600160a01b038116600090815260026020526040902054819060ff1661065b5760405162461bcd60e51b815260206004820152600f60248201526e1bdddb995c881b9bdd08195e1a5cdd608a1b60448201526064016105f6565b6001600160a01b0382166000908152600260205260408120805460ff191690555b60035461068b906001906120a9565b81101561075a57826001600160a01b0316600382815481106106af576106af6120bc565b6000918252602090912001546001600160a01b03160361074857600380546106d9906001906120a9565b815481106106e9576106e96120bc565b600091825260209091200154600380546001600160a01b039092169183908110610715576107156120bc565b9060005260206000200160006101000a8154816001600160a01b0302191690836001600160a01b0316021790555061075a565b80610752816120d2565b91505061067c565b50600380548061076c5761076c6120eb565b600082815260209020810160001990810180546001600160a01b031916905501905560035460045411156107a6576003546107a690611181565b6040516001600160a01b038316907f8001553a916ef2f495d26a907cc54d96ed840d7bda71e73194bf5a9df7a76b9090600090a25050565b3360008181526002602052604090205460ff1661082f5760405162461bcd60e51b815260206004820152600f60248201526e1bdddb995c881b9bdd08195e1a5cdd608a1b60448201526064016105f6565b60008281526001602090815260408083203380855292529091205483919060ff1661089c5760405162461bcd60e51b815260206004820152601160248201527f6f776e6572206e6f7420636f6e6669726d00000000000000000000000000000060448201526064016105f6565b600084815260208190526040902060040154849060ff16156108f25760405162461bcd60e51b815260206004820152600f60248201526e1d1e081a185cc8195e1958dd5d1959608a1b60448201526064016105f6565b6000858152600160209081526040808320338085529252808320805460ff191690555187927ff6a317157440607f36269043eb55f1287a5a19ba2216afeab88cd46cbcfb88e991a35050505050565b600080805b6005548110156109b85784801561096f575060008181526020819052604090206004015460ff16155b806109935750838015610993575060008181526020819052604090206004015460ff165b156109a6576109a3600183612101565b91505b806109b0816120d2565b915050610946565b5090505b92915050565b333014610a075760405162461bcd60e51b81526020600482015260136024820152726f6e6c792077616c6c6574206578656375746560681b60448201526064016105f6565b6001600160a01b038116600090815260026020526040902054819060ff1615610a645760405162461bcd60e51b815260206004820152600f60248201526e1bdddb995c881a185cc8195e1a5cdd608a1b60448201526064016105f6565b816001600160a01b038116610aad5760405162461bcd60e51b815260206004820152600f60248201526e1859191c995cdcc81a5cc81b9d5b1b608a1b60448201526064016105f6565b600354610abb906001612101565b60045460328211158015610acf5750818111155b8015610ada57508015155b8015610ae557508115155b610b315760405162461bcd60e51b815260206004820152601660248201527f726571756972656d656e7420697320696e76616c69640000000000000000000060448201526064016105f6565b6001600160a01b038516600081815260026020526040808220805460ff1916600190811790915560038054918201815583527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b0180546001600160a01b03191684179055517ff39e6e1eb0edcf53c221607b54b00cd28f3196fed0a24994dc308b8f611b682d9190a25050505050565b600080805b600354811015610c555760008481526001602052604081206003805491929184908110610bf557610bf56120bc565b60009182526020808320909101546001600160a01b0316835282019290925260400190205460ff1615610c3057610c2d600183612101565b91505b6004548203610c43575060019392505050565b80610c4d816120d2565b915050610bc6565b5060009392505050565b600080805b600354811015610ce05760008481526001602052604081206003805491929184908110610c9357610c936120bc565b60009182526020808320909101546001600160a01b0316835282019290925260400190205460ff1615610cce57610ccb600183612101565b91505b80610cd8816120d2565b915050610c64565b5092915050565b60006020819052908152604090208054600182015460028301546003840180546001600160a01b039485169594909316939192610d2390612114565b80601f0160208091040260200160405190810160405280929190818152602001828054610d4f90612114565b8015610d9c5780601f10610d7157610100808354040283529160200191610d9c565b820191906000526020600020905b815481529060010190602001808311610d7f57829003601f168201915b5050506004909301549192505060ff1685565b60606003805480602002602001604051908101604052809291908181526020018280548015610e0757602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610de9575b5050505050905090565b6060600060055467ffffffffffffffff811115610e3057610e30612148565b604051908082528060200260200182016040528015610e59578160200160208202803683370190505b5090506000805b600554811015610ef057858015610e89575060008181526020819052604090206004015460ff16155b80610ead5750848015610ead575060008181526020819052604090206004015460ff165b15610ede5780838381518110610ec557610ec56120bc565b6020908102919091010152610edb600183612101565b91505b80610ee8816120d2565b915050610e60565b610efa88886120a9565b67ffffffffffffffff811115610f1257610f12612148565b604051908082528060200260200182016040528015610f3b578160200160208202803683370190505b5093508790505b86811015610f9e57828181518110610f5c57610f5c6120bc565b6020026020010151848983610f7191906120a9565b81518110610f8157610f816120bc565b602090810291909101015280610f96816120d2565b915050610f42565b505050949350505050565b60035460609060009067ffffffffffffffff811115610fca57610fca612148565b604051908082528060200260200182016040528015610ff3578160200160208202803683370190505b5090506000805b6003548110156110d15760008581526001602052604081206003805491929184908110611029576110296120bc565b60009182526020808320909101546001600160a01b0316835282019290925260400190205460ff16156110bf5760038181548110611069576110696120bc565b9060005260206000200160009054906101000a90046001600160a01b0316838381518110611099576110996120bc565b6001600160a01b03909216602092830291909101909101526110bc600183612101565b91505b806110c9816120d2565b915050610ffa565b8167ffffffffffffffff8111156110ea576110ea612148565b604051908082528060200260200182016040528015611113578160200160208202803683370190505b509350600090505b8181101561117957828181518110611135576111356120bc565b602002602001015184828151811061114f5761114f6120bc565b6001600160a01b039092166020928302919091019091015280611171816120d2565b91505061111b565b505050919050565b3330146111c65760405162461bcd60e51b81526020600482015260136024820152726f6e6c792077616c6c6574206578656375746560681b60448201526064016105f6565b60035481603282118015906111db5750818111155b80156111e657508015155b80156111f157508115155b61123d5760405162461bcd60e51b815260206004820152601660248201527f726571756972656d656e7420697320696e76616c69640000000000000000000060448201526064016105f6565b60048390556040518381527fa3f1ee9126a074d9326c682f561767f710e927faa811f7a99829d49dc421797a9060200160405180910390a1505050565b3360008181526002602052604090205460ff166112cb5760405162461bcd60e51b815260206004820152600f60248201526e1bdddb995c881b9bdd08195e1a5cdd608a1b60448201526064016105f6565b60008281526020819052604090205482906001600160a01b03166113315760405162461bcd60e51b815260206004820152600c60248201527f7478206e6f74206578697374000000000000000000000000000000000000000060448201526064016105f6565b60008381526001602090815260408083203380855292529091205484919060ff161561139f5760405162461bcd60e51b815260206004820152601160248201527f6f776e65722068617320636f6e6669726d00000000000000000000000000000060448201526064016105f6565b6000858152600160208181526040808420338086529252808420805460ff1916909317909255905187927f4a504a94899432a9846e1aa406dceb1bcfd538bb839071d49d1e5e23f5be30ef91a36113f585611687565b5050505050565b600061143f858585858080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250611bfc92505050565b905061144a8161127a565b949350505050565b3330146114975760405162461bcd60e51b81526020600482015260136024820152726f6e6c792077616c6c6574206578656375746560681b60448201526064016105f6565b6001600160a01b038216600090815260026020526040902054829060ff166114f35760405162461bcd60e51b815260206004820152600f60248201526e1bdddb995c881b9bdd08195e1a5cdd608a1b60448201526064016105f6565b6001600160a01b038216600090815260026020526040902054829060ff16156115505760405162461bcd60e51b815260206004820152600f60248201526e1bdddb995c881a185cc8195e1a5cdd608a1b60448201526064016105f6565b60005b6003548110156115ed57846001600160a01b03166003828154811061157a5761157a6120bc565b6000918252602090912001546001600160a01b0316036115db5783600382815481106115a8576115a86120bc565b9060005260206000200160006101000a8154816001600160a01b0302191690836001600160a01b031602179055506115ed565b806115e5816120d2565b915050611553565b506001600160a01b03808516600081815260026020526040808220805460ff1990811690915593871682528082208054909416600117909355915190917f8001553a916ef2f495d26a907cc54d96ed840d7bda71e73194bf5a9df7a76b9091a26040516001600160a01b038416907ff39e6e1eb0edcf53c221607b54b00cd28f3196fed0a24994dc308b8f611b682d90600090a250505050565b3360008181526002602052604090205460ff166116d85760405162461bcd60e51b815260206004820152600f60248201526e1bdddb995c881b9bdd08195e1a5cdd608a1b60448201526064016105f6565b60008281526001602090815260408083203380855292529091205483919060ff166117455760405162461bcd60e51b815260206004820152601160248201527f6f776e6572206e6f7420636f6e6669726d00000000000000000000000000000060448201526064016105f6565b600084815260208190526040902060040154849060ff161561179b5760405162461bcd60e51b815260206004820152600f60248201526e1d1e081a185cc8195e1958dd5d1959608a1b60448201526064016105f6565b6117a485610bc1565b156113f557600085815260208190526040902060048101805460ff191660019081179091558101546001600160a01b03166118be57805460028201546040516000926001600160a01b031691906117ff90600386019061215e565b60006040518083038185875af1925050503d806000811461183c576040519150601f19603f3d011682016040523d82523d6000602084013e611841565b606091505b50909150508015156001036118805760405187907f33e13ecb54c3076d8e8bb8c2881800a4d972b792045ffae98fdf46df365fed7590600090a26118b8565b60405187907f526441bb6c1aba3c9a4a6ca1d6545da9c2333c8c48343ef398eb858d72b7923690600090a260048201805460ff191690555b506119ab565b60018101548154600283015460405163a9059cbb60e01b81526001600160a01b039283166004820152602481019190915291169063a9059cbb906044016020604051808303816000875af115801561191a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061193e91906121d4565b156119735760405186907f33e13ecb54c3076d8e8bb8c2881800a4d972b792045ffae98fdf46df365fed7590600090a26119ab565b60405186907f526441bb6c1aba3c9a4a6ca1d6545da9c2333c8c48343ef398eb858d72b7923690600090a260048101805460ff191690555b505050505050565b6000816001600160a01b0381166119fe5760405162461bcd60e51b815260206004820152600f60248201526e1859191c995cdcc81a5cc81b9d5b1b608a1b60448201526064016105f6565b6040516370a0823160e01b81523060048201526001600160a01b038416906370a0823190602401602060405180830381865afa158015611a42573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a6691906121f1565b91505b50919050565b6000846001600160a01b038116611aba5760405162461bcd60e51b815260206004820152600f60248201526e1859191c995cdcc81a5cc81b9d5b1b608a1b60448201526064016105f6565b846001600160a01b038116611b035760405162461bcd60e51b815260206004820152600f60248201526e1859191c995cdcc81a5cc81b9d5b1b608a1b60448201526064016105f6565b6005546040805160a0810182526001600160a01b03808b16825289811660208084019182528385018b8152606085018b81526000608087018190528881529283905295909120845181549085166001600160a01b0319918216178255925160018201805491909516931692909217909255905160028201559151929550916003820190611b909082612255565b50608091909101516004909101805460ff19169115159190911790556005805460019190600090611bc2908490612101565b909155505060405183907fc0ba8fe4b176c1714197d43b9cc6bcf797a4a7461c5fe8d0ef6e184ae7601e5190600090a25050949350505050565b6000836001600160a01b038116611c475760405162461bcd60e51b815260206004820152600f60248201526e1859191c995cdcc81a5cc81b9d5b1b608a1b60448201526064016105f6565b6005546040805160a0810182526001600160a01b038089168252600060208084018281528486018b8152606086018b8152608087018590528885529284905295909220845181549085166001600160a01b03199182161782559251600182018054919095169316929092179092559251600284015551929450916003820190611cd09082612255565b50608091909101516004909101805460ff19169115159190911790556005805460019190600090611d02908490612101565b909155505060405182907fc0ba8fe4b176c1714197d43b9cc6bcf797a4a7461c5fe8d0ef6e184ae7601e5190600090a2509392505050565b600060208284031215611d4c57600080fd5b5035919050565b80356001600160a01b0381168114611d6a57600080fd5b919050565b60008083601f840112611d8157600080fd5b50813567ffffffffffffffff811115611d9957600080fd5b602083019150836020828501011115611db157600080fd5b9250929050565b600080600080600060808688031215611dd057600080fd5b611dd986611d53565b9450611de760208701611d53565b935060408601359250606086013567ffffffffffffffff811115611e0a57600080fd5b611e1688828901611d6f565b969995985093965092949392505050565b600060208284031215611e3957600080fd5b611e4282611d53565b9392505050565b60008060408385031215611e5c57600080fd5b82359150611e6c60208401611d53565b90509250929050565b8015158114611e8357600080fd5b50565b60008060408385031215611e9957600080fd5b8235611ea481611e75565b91506020830135611eb481611e75565b809150509250929050565b60006001600160a01b03808816835260208188168185015286604085015260a06060850152855191508160a085015260005b82811015611f0d5786810182015185820160c001528101611ef1565b5050600060c0828501015260c0601f19601f830116840101915050611f36608083018415159052565b9695505050505050565b6020808252825182820181905260009190848201906040850190845b81811015611f815783516001600160a01b031683529284019291840191600101611f5c565b50909695505050505050565b60008060008060808587031215611fa357600080fd5b84359350602085013592506040850135611fbc81611e75565b91506060850135611fcc81611e75565b939692955090935050565b6020808252825182820181905260009190848201906040850190845b81811015611f8157835183529284019291840191600101611ff3565b6000806000806060858703121561202557600080fd5b61202e85611d53565b935060208501359250604085013567ffffffffffffffff81111561205157600080fd5b61205d87828801611d6f565b95989497509550505050565b6000806040838503121561207c57600080fd5b61208583611d53565b9150611e6c60208401611d53565b634e487b7160e01b600052601160045260246000fd5b818103818111156109bc576109bc612093565b634e487b7160e01b600052603260045260246000fd5b6000600182016120e4576120e4612093565b5060010190565b634e487b7160e01b600052603160045260246000fd5b808201808211156109bc576109bc612093565b600181811c9082168061212857607f821691505b602082108103611a6957634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b600080835461216c81612114565b600182811680156121845760018114612199576121c8565b60ff19841687528215158302870194506121c8565b8760005260208060002060005b858110156121bf5781548a8201529084019082016121a6565b50505082870194505b50929695505050505050565b6000602082840312156121e657600080fd5b8151611e4281611e75565b60006020828403121561220357600080fd5b5051919050565b601f82111561225057600081815260208120601f850160051c810160208610156122315750805b601f850160051c820191505b818110156119ab5782815560010161223d565b505050565b815167ffffffffffffffff81111561226f5761226f612148565b6122838161227d8454612114565b8461220a565b602080601f8311600181146122b857600084156122a05750858301515b600019600386901b1c1916600185901b1785556119ab565b600085815260208120601f198616915b828110156122e7578886015182559484019460019091019084016122c8565b50858210156123055787850151600019600388901b60f8161c191681555b5050505050600190811b0190555056fea164736f6c6343000811000a";

type MultiSigWalletConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MultiSigWalletConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MultiSigWallet__factory extends ContractFactory {
  constructor(...args: MultiSigWalletConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _owners: PromiseOrValue<string>[],
    _required: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MultiSigWallet> {
    return super.deploy(
      _owners,
      _required,
      overrides || {}
    ) as Promise<MultiSigWallet>;
  }
  override getDeployTransaction(
    _owners: PromiseOrValue<string>[],
    _required: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_owners, _required, overrides || {});
  }
  override attach(address: string): MultiSigWallet {
    return super.attach(address) as MultiSigWallet;
  }
  override connect(signer: Signer): MultiSigWallet__factory {
    return super.connect(signer) as MultiSigWallet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MultiSigWalletInterface {
    return new utils.Interface(_abi) as MultiSigWalletInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MultiSigWallet {
    return new Contract(address, _abi, signerOrProvider) as MultiSigWallet;
  }
}
