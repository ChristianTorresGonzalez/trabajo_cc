'use strict';

const fs = require('fs');

const {SATReaderValidator} = require('./sat-reader-validator.js');

class SATReader {
  constructor(filename) {
    this.filename = filename;
  }

  read() {
    try {
      const satJson = fs.readFileSync(this.filename, 'utf8');
      const satObject = JSON.parse(satJson);
      this.parse(satObject);
    } catch (err) {
      console.log(err);
    }
  }

  createLiterals(satObject) {
    // setOfLiterals = new Set([iterable]);
  }

  parse(satObject) {
    SATReaderValidator.checkIfValid(satObject);


  }
}

module.exports = {
  SATReader
}
