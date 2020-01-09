#!/usr/bin/env node

const program = require('commander');
 
program
  .version('1.0.0')
  .description('Utility for finding differences in configuration files')

program.parse(process.argv);