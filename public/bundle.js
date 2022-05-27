let contractABI = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "x",
        type: "uint256",
      },
    ],
    name: "vote",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "x",
        type: "uint256",
      },
    ],
    name: "getItem",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
];
let contractAddress = "0x11bDD936C95cE93c6336976a5aa3F62664a3Ff0E";
let web3 = new Web3("http://127.0.0.1:9545/");
let ipl = new web3.eth.Contract(contractABI, contractAddress);

document.addEventListener("DOMContentLoaded", () => {
  refresh();
});

const refresh = () => {
  for (let i = 0; i < 3; i++)
    ipl.methods
      .getItem(i)
      .call()
      .then((result) => {
        document.getElementById(`v${i}`).innerHTML = result;
      });
};

function vote(e) {
  console.log(e.id[4]);
  ipl.methods
    .vote(e.id[4])
    .send({
      from: `0xb153271b65dd5603871d74cc62258ca25c6ee906`,
    })
    .then((result) => {
      console.log(result);
      refresh();
    });
}
