#!/usr/bin/env node

const program = require('commander');
 
program
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .option('-f, --format [type]  Output format')
  .arguments('<firstConfig> <secondConfig>')
  .action(function (firstConfig, secondConfig) {
    firstConfigValue = firstConfig;
    secondConfigValue = secondConfig;
  })

program.parse(process.argv);