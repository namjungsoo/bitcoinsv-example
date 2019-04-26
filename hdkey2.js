const bsv = require('bsv')


let key = bsv.HDPrivateKey.fromRandom()
let key3 = key.deriveChild("m/0~2^30'/2/8")
let key4 = key3.deriveChild("m/5/2/8")
console.log(key3.toString())
console.log(key4.privateKey.toString())
console.log(key4.publicKey.toString())
