#!/usr/bin/env node
const bsv = require('bsv')
const Transaction = bsv.Transaction
const Script = bsv.Script

const fs = require('fs')

// utxo의 txid
const txId = '8dc8361e223a58b4ab025d5a1f52134873ed0f9c27eb52ace8d53cd9a6590b56'
const outputIndex = 1
const satoshis = 84979729

// from address + private key
const fromAddress = 'n4DMuG3x7sWjZ89kk3xy1PjaguWYLeM6aw'
const privkeySet = 'cNCXyr9RrFeDYZDTLRF955WXqorXrykQ1bmr5cJJiddWzvgy7NAX'

// to address info
const toAddress = 'mgZRNjPuQGcNiA2d9SXTR2WPvHHB1AxEhz'
const amount = 20000
const fee = 15000

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