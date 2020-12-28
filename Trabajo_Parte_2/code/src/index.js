'use strict';

const {SATReader} = require('./reader/sat-reader.js');

const ejemplo = new SATReader('../examples/example-1.json');
ejemplo.read();