#!/usr/bin/env node
const fs = require('fs')
const { spawn } = require('child_process')
const raw = fs.readFileSync('tx.txt', 'utf8')
console.log(`tx.txt: ${raw}`)

const exe = 'bitcoin-cli'
const args = ['-testnet', 'sendrawtransaction', raw]
console.log(`cmd: ${exe} ${args}`)
const child = spawn(exe, args)
child.stdout.on('data', data => {
    const msg = data.toString()
    console.log(msg)
})
child.stderr.on('data', error => {
    const msg = error.toString()
    console.log(msg)
})