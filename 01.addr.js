#!/usr/bin/env node
let bsv = require('bsv')
let Transaction = bsv.Transaction

//mainnet
// privateKey WIF: starts K or L
//let privateKey = bsv.PrivateKey.fromRandom()

//testnet
// privateKey WIF: starts c 

//*
let privateKey = bsv.PrivateKey.fromRandom()
//let privateKey = bsv.PrivateKey.fromRandom('testnet')
console.log(privateKey.toWIF())

//let address = bsv.Address.fromPrivateKey(privateKey, 'testnet')
let address = bsv.Address.fromPrivateKey(privateKey)
console.log(address.toString())
//*/

/*
addr1: (현재 사용중) 0.46
privateKey WIF: cSygpZafwdmkirH95xynX9V7xdCWbCkpb2zYULzjGpDpgGB4BVXS
address: n1ZQ9ZkCy8MqEuxEG9FNgJtUQAqvZhWmmT


addr2: 0.84
privateKey WIF: cNCXyr9RrFeDYZDTLRF955WXqorXrykQ1bmr5cJJiddWzvgy7NAX
address: n4DMuG3x7sWjZ89kk3xy1PjaguWYLeM6aw

addr3: 0.93
cRrQHrax4bCsFdQud2z1GAdD4A3GEmSM2Sg8ddRQey9VBfL3Foyn
mgZRNjPuQGcNiA2d9SXTR2WPvHHB1AxEhz

addr4 (public): 0.03 
L1nkbdBz6iAVwMQa1myQPTq8sf3cFUSeLJZXdkVWsMiEyv6V9GUE
1NPMmmb7dgVaVE1rTJEqZBWhpQ5FsiESSd

You've got 0.46 Bitcoin SV Testnet to your account at n1ZQ9ZkCy8MqEuxEG9FNgJtUQAqvZhWmmT
https://testnet.bitcoincloud.net/address/n1ZQ9ZkCy8MqEuxEG9FNgJtUQAqvZhWmmT
https://testnet.bitcoincloud.net/tx/50140029cf0f312ab78717f3896b24be4584fefbb2a9e280fc609733bdae9554
*/