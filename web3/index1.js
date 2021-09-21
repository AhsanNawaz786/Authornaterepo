var Web3 = require('web3');

var url = "HTTP://127.0.0.1:7545"

var web3 = new Web3(url);

var address = "0x33d4F8cAae6732EA2b70c2d0D6058e499aCb4e0A"

web3.eth.getBalance(address,(err,wei)=>{
  balance = web3.utils.fromWei(wei,'ether');
})
