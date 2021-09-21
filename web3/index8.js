const Web3 = require('web3')
const web3 = new Web3('https://mainnet.infura.io/YOUR_INFURA_API_KEY')

// Get average gas price in wei from last few blocks median gas price
console.log(web3.utils.sha3('Dapp University'))

console.log(web3.utils.randomHex(32))