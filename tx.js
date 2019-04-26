const bsv = require('bsv')
const Transaction = bsv.Transaction
const Script = bsv.Script

// utxo의 txid
const txId = '0c35d13465758ca223eabb15fa6a236a678a2a6f68d88ac667824fd4e64e0024'

// output은 2개가 있는데 내가 받은 0.43 BSV가 첫번째 이므로 0번이다. 0부터 시작하는 인덱스이다.
const outputIndex = 0
const satoshis = 43000000 // 0.43 BSV

// from address + private key
const fromAddress = 'n4pKQauaywwsooZpqQsBA7moTUMb4qNBqj'
const fromPrivateKey = 'cVnpKJPYfTAAtbqahjPsrz6sjuVyp25itkwJ5H4fg7CLS4DGDivY'

// to address info
// 송금액은 0.3 BSV
// fee는 400 sats
const toAddress = 'mqYoezdaPQVihdRSpquCnBG82m8MwF6i3T'
const amount = 30000000
const fee = 400

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
    .from(utxos) // 사용할 UXTO를 입력한다.
    .to(toAddress, amount) // 받는사람 주소와 사토시 단위의 금액을 입력한다.

    .fee(fee)

    .change(fromAddress) // 잔돈을 받을 주소. 보내는 사람의 주소로 설정한다. 
    .sign(fromPrivateKey) // 보내는 사람의 private key로 sign한다. 
    // 아래와 같이 여러개의 sign을 할수가 있다.
    //.sign
    //.sign... 

const str = transaction.serialize(true)

// 여기서 출력되는 str이 transaction이다. 
console.log(str)