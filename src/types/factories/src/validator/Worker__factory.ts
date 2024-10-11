/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Worker, WorkerInterface } from "../../../src/validator/Worker";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "params",
        type: "bytes",
      },
    ],
    name: "run",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50600060208190527ff1725463828e8b08385199398f652be19cd87251564e6b64f75508d26e72124b805460ff19908116600190811790925573f39fd6e51aad88f6f4ce6ab8827279cfffb922669092527f723077b8a1b173adc35e5f0e7e3662fd1208212cb629f9c128551ea7168da7228054909216179055610158806100996000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80633a27652314610030575b600080fd5b61004361003e36600461009a565b610057565b604051901515815260200160405180910390f35b3260009081526020819052604081205460ff1615156001141561007c57506001919050565b506000919050565b634e487b7160e01b600052604160045260246000fd5b6000602082840312156100ac57600080fd5b813567ffffffffffffffff808211156100c457600080fd5b818401915084601f8301126100d857600080fd5b8135818111156100ea576100ea610084565b604051601f8201601f19908116603f0116810190838211818310171561011257610112610084565b8160405282815287602084870101111561012b57600080fd5b82602086016020830137600092810160200192909252509594505050505056fea164736f6c634300080c000a";

type WorkerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: WorkerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Worker__factory extends ContractFactory {
  constructor(...args: WorkerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Worker> {
    return super.deploy(overrides || {}) as Promise<Worker>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Worker {
    return super.attach(address) as Worker;
  }
  override connect(signer: Signer): Worker__factory {
    return super.connect(signer) as Worker__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): WorkerInterface {
    return new utils.Interface(_abi) as WorkerInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Worker {
    return new Contract(address, _abi, signerOrProvider) as Worker;
  }
}