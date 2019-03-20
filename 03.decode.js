#!/usr/bin/env node
const fs = require('fs')
const { spawn } = require('child_process')
const raw = fs.readFileSync('tx.txt', 'utf8')

const child = spawn('bitcoin-cli', ['-testnet', 'decoderawtransaction', raw])
child.stdout.on('data', data => {
    const msg = data.toString()
    console.log(msg)
})