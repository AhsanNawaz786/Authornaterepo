var Tx = require('ethereumjs-tx')
const Web3 = require('web3')
const web3 = new Web3('https://ropsten.infura.io/YOUR_INFURA_API_KEY')

const account1 = '0x85Cb7463f907ffC231e74f2B57F83c0a15Ffe287' 
const account2 = '0x499E2b3372102E2aB73F1aFbEfEA01eF2B7CDBE7'

const privateKey1 = Buffer.from('YOUR_PRIVATE_KEY_1', 'hex')
const privateKey2 = Buffer.from('YOUR_PRIVATE_KEY_2', 'hex')

web3.eth.getTransactionCount(account1, (err, txCount) => {
  // Build the transactions
  const txObject = {
    nonce:    web3.utils.toHex(txCount),
    to:       account2,
    value:    web3.utils.toHex(web3.utils.toWei('0.1', 'ether')),
    gasLimit: web3.utils.toHex(21000),
    gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei'))
  }

   // Sign the transaction
   var tx =  new Tx(txObject)
   tx.sign(privateKey1)


   const serializedTx = tx.serialize()
   const raw = '0x' + serializedTx.toString('hex')
 
   // Broadcast the transaction
   web3.eth.sendSignedTransaction(raw, (err, txHash) => {
     console.log('txHash:', txHash)
     // Now go check etherscan to see the transaction!
   })
 })