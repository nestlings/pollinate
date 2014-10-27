#!/usr/bin/env node

var program = require('commander')
var chalk = require('chalk')

program
  .version(require('../package.json').version)
  .usage('<Flower...> <Pollen...>')

program.on('--help', function() {
  console.log('  Examples:')
  console.log()
  console.log(chalk.magenta('    From the web:'))
  console.log('    $ pollinate stackstrap/meanstack https://example.com/1bdDlXc')
  console.log()
  console.log(chalk.magenta('    From local:'))
  console.log('    $ pollinate ./meanstack ./example.json')
  console.log()
  process.exit()
})

program.parse(process.argv)

var log = require('normalize-log')

if(program.args.length != 2) {
  log.error('Invalid args. type `pollinate --help` for options.')
  process.exit(1)
}

require('../lib/build.js')