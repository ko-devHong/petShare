import web3 from "./web3";

//access our local copy to contract deployed on rinkeby testnet
//use your own contract address
const address = "0xaf51130a6b406d37ff33a44b4182d3ac07ab3e7e";
//use the ABI from your contract
const abi = [
  {
    constant: false,
    inputs: [
      {
        name: "x",
        type: "string"
      }
    ],
    name: "sendHash",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "getHash",
    outputs: [
      {
        name: "x",
        type: "string"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  }
];
export default new web3.eth.Contract(abi, address);
