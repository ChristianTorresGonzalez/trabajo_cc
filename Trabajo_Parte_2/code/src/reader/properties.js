'use strict';

const checkArrayWith = (arrList, validatorFunc) => {
  if (Array.isArray(arrList)) {
    for (const arg of arrList) {
      if (!validatorFunc(arg)) {
        return false;
      }
    };
    return true;
  }
  return false;
};

const checkArrayOfArrayWith = (arrList, validatorFunc) => {
  if (Array.isArray(arrList)) {
    for (const arg of arrList) {
      if (!checkArrayWith(arg, validatorFunc)) {
        return false;
      }
    };
    return true;
  }
  return false;
};

const checkIfValidNumber = (number) => {
  return (Number.isInteger(number)) && (number > 0);
};

const checkIfValidSign = (binaryNumber) => {
  return (binaryNumber === 1) || (binaryNumber === 0);
};

const checkIfValidLiteral = (strLiteral) => {
  const regex = /^[x][0-9]+$/;
  return regex.test(strLiteral);
};

const PROPERTIES_LIST = [
  {
    name: "numberOfClauses",
    isCorrect: (arg) => checkIfValidNumber(arg),
    error: "'numberOfClauses' debe ser un número natural positivo",
  },
  {
    name: "numberOfLiterals",
    isCorrect: (arg) => checkIfValidNumber(arg),
    error: "'numberOfLiterals' debe ser un número natural positivo",
  },
  {
    name: "literals",
    isCorrect: (argList) => checkArrayWith(argList, checkIfValidLiteral),
    error: "'literals' debe ser un conjunto de cadenas de la forma x<número>, por ejemplo 'x1'",
  },
  {
    name: "clauses",
    isCorrect: (argList) => checkArrayOfArrayWith(argList, checkIfValidLiteral),
    error: "'clauses' debe ser un conjunto de array de literales, que son cadenas de la forma x<número>, por ejemplo 'x1'",
  },
  {
    name: "signs",
    isCorrect: (argList) => checkArrayOfArrayWith(argList, checkIfValidSign),
    error: "'signs' debe ser un conjunto de arrays de números binarios",
  },
];

module.exports = {
  PROPERTIES_LIST
}