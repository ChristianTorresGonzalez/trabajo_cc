'use strict';

const {PROPERTIES_LIST} = require('./properties.js');

class SATReaderValidator {
  static checkIfValid(satObject) {
    SATReaderValidator.checkIfValidObject(satObject);
    
    SATReaderValidator.checkNumberOfClauses(satObject);
    SATReaderValidator.checkNumberOfLiterals(satObject);

    SATReaderValidator.checkSignSize(satObject);
  }

  static checkIfValidObject(satObject) {
    for (const property of PROPERTIES_LIST) {

      if(!satObject.hasOwnProperty(property.name)) {
        throw new TypeError(`El objeto SAT no tiene la propiedad '${property.name}'`);
      }

      const propertyValue = satObject[property.name];
      if (!property.isCorrect(propertyValue)) {
        throw new TypeError(property.error);
      }
    }
    return true;
  }

  static checkNumberOfClauses(satObject) {
    if (satObject['numberOfClauses'] !== satObject['clauses'].length) {
      throw new TypeError(`El número de clausulas debe corresponder con las definidas`);
    }
  }

  static checkNumberOfLiterals(satObject) {
    if (satObject['numberOfLiterals'] !== satObject['literals'].length) {
      throw new TypeError(`El número de literales debe corresponder con los definidos`);
    }
  }

  static checkSignSize(satObject) {
    const clauseList = satObject['clauses'];
    const signList = satObject['signs'];

    if (clauseList.length !== signList.length) {
      throw new TypeError('Debe haber tantas clausulas como conjuntos de signos');
    }

    for (let index = 0; index < clauseList.length; index ++) {
      const clause = clauseList[index];
      const sign = signList[index];

      if (clause.length !== sign.length) {
        throw new TypeError(`Debe haber tantos literales como signos en el conjunto: ${index + 1}`);
      }
    }
  }

}


module.exports = {
  SATReaderValidator
}