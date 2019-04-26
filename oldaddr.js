const {
    Address,
    PrivateKey
} = require('bsv')
const privateKey = PrivateKey.fromRandom()
const address = Address.fromPrivateKey(privateKey)

console.log(address.toString())
//console.log(address.hashBuffer.toString())
console.log(address)
console.log(address.hashBuffer.length)
console.log(address.hash)

let hex = address.hashBuffer.toString('hex')
console.log(`hex=${hex} length=${hex.length}`)
//hex = '1'.charCodeAt(0).toString(16) + hex

/*
Bitcoin address | 0x00
Pay to Script Hash | 0x05
Bitcoin testnet | 0x6F
WIF | 0x80
BIP38 | 0x0142
BIP32 Extended public key | 0x0488B21E
*/
hex = '00' + hex
console.log(`hex=${hex} length=${hex.length}`)

const address2 = Address.fromHex(hex)
console.log(address2.toString())