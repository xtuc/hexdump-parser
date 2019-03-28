#!/usr/bin/env node

const lib = require("./index.js");
const readline = require('readline');

process.stdin.setEncoding('utf8');

let input = "";

process.stdin.on('readable', () => {
  while ((buff = process.stdin.read())) {
    input += buff;
  }
});

process.stdin.on('end', () => {
  const array = lib.parse(input);
  console.log(JSON.stringify(array));
});

