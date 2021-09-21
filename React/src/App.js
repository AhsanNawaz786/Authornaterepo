import React from 'react';
import { useState } from 'react';
import  Web3 from 'web3';
// var Web3 = require('web3');

const web3 = new Web3(Web3.givenProvider);
const address = '0xcef1d578233F4Cf0d603856C90332e9b5828C8E2';
const abi = [
	{
		"inputs": [],
		"name": "age",
		"outputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "int256",
				"name": "g",
				"type": "int256"
			}
		],
		"name": "getAge",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "setAge",
		"outputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];

const SimpleAdd = new web3.eth.Contract(abi,address)


function App() {
  const[age,getAge] = useState(0);
  const[Age,setAge] = useState(0);
  
const handleSet = async (e) => {
e.preventDefault();
const accounts = await window.ethereum.enable();
const account = accounts[0];

const gas = await SimpleAdd.methods.getAge(age).estimateGas();
const result = await SimpleAdd.methods.getAge(age).send({from: account,gas});
console.log(result);
}



const handleGet = async(e) => {
e.preventDefault();
const result = await SimpleAdd.methods.setAge().call();
console.log(result);
setAge(result);
}
  return (
    <div className="App">
    <form onSubmit={handleSet}>
    <input type = "number" value={age} onChange={e=> getAge(e.target.value)}/>
    <input type="submit" value="Submit"/>
    </form>

    <button onClick={handleGet}>GET VALUES</button> <br/>
    Age{Age}
    </div>
  );
}

export default App;
