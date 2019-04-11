#!/usr/bin/env node
const bsv = require('bsv')
const Transaction = bsv.Transaction
const Script = bsv.Script

/*
hdPrivateKey:
xprv9s21ZrQH143K38yDEkxtUCAHxqFqMTHL6PZttwYbjqq4tHFHHokp2wH6ZRxhXdZCW7PwQnNnCdJ8PevrkH2zg9SWhAVS8gtmevNR1GeXEoX
private key=L2W61zaHcr1JYSgWSESLrPYZKNg6ZLGXNZqhEQW3rTsGWoC5bbgV
address=mxXdRHAp8Zy61NuMUcrp8KFDi5TjFFVA7r
https://testnet.bitcoincloud.net/address/mxXdRHAp8Zy61NuMUcrp8KFDi5TjFFVA7r
https://testnet.bitcoincloud.net/tx/e6dd19d92b53a24bd66875991bea0653fe633fc6fed79756eb07154c3cff8d37
Index: 0
0.37 BSV

hdPrivateKey:
xprv9s21ZrQH143K2BmCpyMdBTDF6jtxEjKiUmcH6sF5JBb1k1mqAywjJbTXnCyshd8qX9vVJVQpAgwULXwXDopHj7wG13V4QLYSQxA7KZAyrFu
private key=KwXoptHgPq8Zhxi1uGS5C5fajkoTyVRoadLXPTRGzJzvd8v1m6cK
address=n1pGzmE3fQ11WUVKVsEdFmaVoNUofxsYXZ
https://testnet.bitcoincloud.net/address/n1pGzmE3fQ11WUVKVsEdFmaVoNUofxsYXZ
https://testnet.bitcoincloud.net/tx/118ecf191f32afef952fedf03d3be6b1b0fb110ae96e64ea3ab5a3acab56dc26
Index: 1
0.1 BSV

hdPrivateKey:
xprv9s21ZrQH143K2BdKsjc4ryXnt478PouyUH4kx71iczcc3QW7KtPtbr1rNb9ebJuUTrHgM2CB2QuqEEciVnNwJAn9RsXAj1qk8FRjhGCPKwv
private key=KwpwoxEEs1a6ESF8An6615nkWjyhDtE6Un9wjBQ3JxyToADgTxjt
address=mzEq7c3PqB7CfN44GWnwfLMKf4b2v3fV1S
*/
// uxto 정보를 정확하게 입력 
const utxos = [{
    address: 'mxXdRHAp8Zy61NuMUcrp8KFDi5TjFFVA7r',
    txId: 'e6dd19d92b53a24bd66875991bea0653fe633fc6fed79756eb07154c3cff8d37',
    outputIndex: 0,
    script: Script.buildPublicKeyHashOut('mxXdRHAp8Zy61NuMUcrp8KFDi5TjFFVA7r').toString(),
    satoshis: 37000000
}, {
    address: 'n1pGzmE3fQ11WUVKVsEdFmaVoNUofxsYXZ',
    txId: '118ecf191f32afef952fedf03d3be6b1b0fb110ae96e64ea3ab5a3acab56dc26',
    outputIndex: 1,
    script: Script.buildPublicKeyHashOut('n1pGzmE3fQ11WUVKVsEdFmaVoNUofxsYXZ').toString(),
    satoshis: 10000000
}]

const privateKeySet = ['L2W61zaHcr1JYSgWSESLrPYZKNg6ZLGXNZqhEQW3rTsGWoC5bbgV', 'KwXoptHgPq8Zhxi1uGS5C5fajkoTyVRoadLXPTRGzJzvd8v1m6cK']

const transaction = new Transaction()
.from(utxos)
.to('mzEq7c3PqB7CfN44GWnwfLMKf4b2v3fV1S', 40000000)
.fee(400)
.change('n1pGzmE3fQ11WUVKVsEdFmaVoNUofxsYXZ')
.sign(privateKeySet)

const str = transaction.serialize(true)
console.log(str)

/*
bitcoin-cli -testnet decoderawtransaction 0100000002378dff3c4c1507eb5697d7fec63f63fe5306ea1b997568d64ba2532bd919dde6000000006a47304402203ab6f17f2e80c719e7c7242ce8552acb05698d9f555bc121ab884e17d069f27a0220768fed66445ff9990822d478e3f88070556099313721fa6a84a1e87c8eae0bb841210323c00f7a0593a8f99adfb6b60568967ea920d1af497f470f33f49584fe60b37affffffff26dc56abaca3b53aea646ee90a11fbb0b1e63b3df0ed2f95efaf321f19cf8e11010000006b483045022100f2ac7d0ef5fea1bfa3164acc9209b9147ad3bae07b7dc30585122daceb75f82d022039fd045b6993e5fadddf23b4405b28ee8ba254f889e74450bd82fec555dfc3fe4121037dbd5f2cfed101ccc1d33369f082df43ed9fefdc382c33593c65868f0e60db4bffffffff02005a6202000000001976a914cd5dbda5c6eee8bea9d0de85726e0f4af1c5195b88ac30ce6a00000000001976a914dea932d5abd3a67331eea5297f95d0ca3ce7175188ac00000000

{
  "txid": "97d00f16957e342addfe6796287fe8b2754d1e0c929cfaf2e46daec1101ffa3d",
  "hash": "97d00f16957e342addfe6796287fe8b2754d1e0c929cfaf2e46daec1101ffa3d",
  "size": 373,
  "version": 1,
  "locktime": 0,
  "vin": [
    {
      "txid": "e6dd19d92b53a24bd66875991bea0653fe633fc6fed79756eb07154c3cff8d37",
      "vout": 0,
      "scriptSig": {
        "asm": "304402203ab6f17f2e80c719e7c7242ce8552acb05698d9f555bc121ab884e17d069f27a0220768fed66445ff9990822d478e3f88070556099313721fa6a84a1e87c8eae0bb8[ALL|FORKID] 0323c00f7a0593a8f99adfb6b60568967ea920d1af497f470f33f49584fe60b37a",
        "hex": "47304402203ab6f17f2e80c719e7c7242ce8552acb05698d9f555bc121ab884e17d069f27a0220768fed66445ff9990822d478e3f88070556099313721fa6a84a1e87c8eae0bb841210323c00f7a0593a8f99adfb6b60568967ea920d1af497f470f33f49584fe60b37a"
      },
      "sequence": 4294967295
    },
    {
      "txid": "118ecf191f32afef952fedf03d3be6b1b0fb110ae96e64ea3ab5a3acab56dc26",
      "vout": 1,
      "scriptSig": {
        "asm": "3045022100f2ac7d0ef5fea1bfa3164acc9209b9147ad3bae07b7dc30585122daceb75f82d022039fd045b6993e5fadddf23b4405b28ee8ba254f889e74450bd82fec555dfc3fe[ALL|FORKID] 037dbd5f2cfed101ccc1d33369f082df43ed9fefdc382c33593c65868f0e60db4b",
        "hex": "483045022100f2ac7d0ef5fea1bfa3164acc9209b9147ad3bae07b7dc30585122daceb75f82d022039fd045b6993e5fadddf23b4405b28ee8ba254f889e74450bd82fec555dfc3fe4121037dbd5f2cfed101ccc1d33369f082df43ed9fefdc382c33593c65868f0e60db4b"
      },
      "sequence": 4294967295
    }
  ],
  "vout": [
    {
      "value": 0.40000000,
      "n": 0,
      "scriptPubKey": {
        "asm": "OP_DUP OP_HASH160 cd5dbda5c6eee8bea9d0de85726e0f4af1c5195b OP_EQUALVERIFY OP_CHECKSIG",
        "hex": "76a914cd5dbda5c6eee8bea9d0de85726e0f4af1c5195b88ac",
        "reqSigs": 1,
        "type": "pubkeyhash",
        "addresses": [
          "bchtest:qrx4m0d9cmhw304f6r0g2unwpa90r3getvqtz0y9k2"
        ]
      }
    },
    {
      "value": 0.06999600,
      "n": 1,
      "scriptPubKey": {
        "asm": "OP_DUP OP_HASH160 dea932d5abd3a67331eea5297f95d0ca3ce71751 OP_EQUALVERIFY OP_CHECKSIG",
        "hex": "76a914dea932d5abd3a67331eea5297f95d0ca3ce7175188ac",
        "reqSigs": 1,
        "type": "pubkeyhash",
        "addresses": [
          "bchtest:qr02jvk440f6vue3a6jjjlu46r9reech2yg0meg5rh"
        ]
      }
    }
  ]
}

bitcoin-cli -testnet sendrawtransaction 0100000002378dff3c4c1507eb5697d7fec63f63fe5306ea1b997568d64ba2532bd919dde6000000006a47304402203ab6f17f2e80c719e7c7242ce8552acb05698d9f555bc121ab884e17d069f27a0220768fed66445ff9990822d478e3f88070556099313721fa6a84a1e87c8eae0bb841210323c00f7a0593a8f99adfb6b60568967ea920d1af497f470f33f49584fe60b37affffffff26dc56abaca3b53aea646ee90a11fbb0b1e63b3df0ed2f95efaf321f19cf8e11010000006b483045022100f2ac7d0ef5fea1bfa3164acc9209b9147ad3bae07b7dc30585122daceb75f82d022039fd045b6993e5fadddf23b4405b28ee8ba254f889e74450bd82fec555dfc3fe4121037dbd5f2cfed101ccc1d33369f082df43ed9fefdc382c33593c65868f0e60db4bffffffff02005a6202000000001976a914cd5dbda5c6eee8bea9d0de85726e0f4af1c5195b88ac30ce6a00000000001976a914dea932d5abd3a67331eea5297f95d0ca3ce7175188ac00000000


a1000149@namjungsoo-MacBook-Pro:~/git/bsv/bitcoinsv-example$ bitcoin-cli -testnet sendrawtransaction 0100000002378dff3c4c1507eb5697d7fec63f63fe5306ea1b997568d64ba2532bd919dde6000000006a47304402203ab6f17f2e80c719e7c7242ce8552acb05698d9f555bc121ab884e17d069f27a0220768fed66445ff9990822d478e3f88070556099313721fa6a84a1e87c8eae0bb841210323c00f7a0593a8f99adfb6b60568967ea920d1af497f470f33f49584fe60b37affffffff26dc56abaca3b53aea646ee90a11fbb0b1e63b3df0ed2f95efaf321f19cf8e11010000006b483045022100f2ac7d0ef5fea1bfa3164acc9209b9147ad3bae07b7dc30585122daceb75f82d022039fd045b6993e5fadddf23b4405b28ee8ba254f889e74450bd82fec555dfc3fe4121037dbd5f2cfed101ccc1d33369f082df43ed9fefdc382c33593c65868f0e60db4bffffffff02005a6202000000001976a914cd5dbda5c6eee8bea9d0de85726e0f4af1c5195b88ac30ce6a00000000001976a914dea932d5abd3a67331eea5297f95d0ca3ce7175188ac00000000
97d00f16957e342addfe6796287fe8b2754d1e0c929cfaf2e46daec1101ffa3d

*/