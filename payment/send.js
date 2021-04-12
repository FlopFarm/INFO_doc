// This scripts invoke smart contract in Rinkeby Testnetwork.

var Web3 = require('web3');

var web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/v3/a3667c58eb5640029a97ef45654fa68f"));

console.log(web3);

