#!/usr/bin/env node
const bsv = require('bsv')
function test1() {
    let hdPrivateKey = bsv.HDPrivateKey.fromRandom()
    console.log('hdPrivateKey:')
    console.log(hdPrivateKey.toString())    


    console.log('hdPrivateKey3:')
    let hdPrivateKey3 = hdPrivateKey.deriveChild("m/100/2/8").toString()
    console.log(hdPrivateKey3.toString())

    hdPrivateKey3 = hdPrivateKey.deriveChild("m/100/2/8").toString()
    console.log(hdPrivateKey3.toString())
}

function test2() {
    let hdPrivateKey2 = bsv.HDPrivateKey.fromString('xprv9s21ZrQH143K2LcEfSnFRH1JvdKAcuZj2C8kAzCDnvqC4kgo417hYmAYQKdYDSzQSnQMLWXjDG42TgWwdYqwhAWTWpEBG1ighLLNnVHNKxx')
    console.log('hdPrivateKey2:')
    console.log(hdPrivateKey2.toString())
}


// test1()
// test2()

function test3() {
    let hdPrivateKey = bsv.HDPrivateKey.fromRandom()
    console.log('hdPrivateKey:')
    console.log(hdPrivateKey.toString())    
    
    // 사실상 필요 없음 
    // let hdPublicKey = bsv.HDPublicKey.fromHDPrivateKey(hdPrivateKey)
    // console.log('hdPublicKey:')
    // console.log(hdPublicKey.toString())    

    // private key만 private key, public key를 얻을수 있다.
    //console.log(hdPrivateKey.publicKey.toString())

    let address = bsv.Address.fromPrivateKey(hdPrivateKey.privateKey, 'testnet')
    console.log(`private key=${hdPrivateKey.privateKey.toWIF()}`)
    console.log(`address=${address}`)



    // let address = bsv.Address.fromPublicKey(bsv.HDPublicKey.PublicKeyEnd)
    // console.log('address:')
    // console.log(address.toString())    

}

test3()
