#!/usr/bin/env node
const bsv = require('bsv')
const Transaction = bsv.Transaction
const Script = bsv.Script

const fs = require('fs')

// utxo의 txid
const txId = '0c35d13465758ca223eabb15fa6a236a678a2a6f68d88ac667824fd4e64e0024'
const outputIndex = 1
const satoshis = 43000000

// from address + private key
const fromAddress = 'n4pKQauaywwsooZpqQsBA7moTUMb4qNBqj'
const privkeySet = 'cVnpKJPYfTAAtbqahjPsrz6sjuVyp25itkwJ5H4fg7CLS4DGDivY'

// to address info
const toAddress = 'mqYoezdaPQVihdRSpquCnBG82m8MwF6i3T'
const amount = 30000000
const fee = 400

// #1 BitDB
const utxos = {
    address: fromAddress,
    txId: txId,
    outputIndex: outputIndex,
    script: Script.buildPublicKeyHashOut(fromAddress).toString(),
    satoshis: satoshis
}

const transaction = new Transaction()
    // 순서를 잘 지켜야 한다.
    // change 이전에 fee를 셋팅해야함 
    .from(utxos) // Feed information about what unspent outputs one can use
    .to(toAddress, amount) // Add an output with the given amount of satoshis

    .fee(fee)

    .change(fromAddress) // Sets up a change address where the rest of the funds will go
    .sign(privkeySet) // Signs all the inputs it can
    //.sign
    //.sign... 

const str = transaction.serialize(true)
console.log(str)

fs.writeFileSync(`tx.${Date.now()}.txt`, str, 'utf8')
fs.writeFileSync(`tx.txt`, str, 'utf8')

/*
bitcoin-cli -testnet sendrawtransaction 01000000015495aebd339760fc80e2a9b2fbfe8445be246b89f31787b72a310fcf29001450000000006b483045022100ea64ed2e657675dd99e169e63cfbad7ed0d1c323df737f4862b06d04d026df4902201d27f0efeed03bd69e3d89fcf9aef0b726cce57cfaf039f8278f541436ff4ab5412103cada4795099d48aaf781650809c076b79bc31e39a80410c893931c4c467bb1d1ffffffff02a0860100000000001976a914f8f71ca23565b70139f30dbb227489ad9e52bcf688acd15fbc02000000001976a914dbd8eddbc1af19d1bd697f0772b5b2cea76964ab88ac00000000
https://testnet.bitcoincloud.net/tx/5e415d789551ddc1b5f65db28c3200e7018584bd464cddf8edcf9d7107e851aa
https://testnet.bitcoincloud.net/address/n1ZQ9ZkCy8MqEuxEG9FNgJtUQAqvZhWmmT
https://testnet.bitcoincloud.net/tx/ec43b9b9220868c1612a4eab6de82d1ba01bb81afa3e32bd1d411678dd01a3dc
*/