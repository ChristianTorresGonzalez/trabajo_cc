/**
  * @copyright Universidad del Laguna
  * @copyright Escuela Superior de Ingeniería y Tecnología
  * @copyright Grado en Ingeniería Informática
  * @copyright Asignatura: Complejidad Computacional (CC)
  * @copyright Curso: 4º Itinerario 1
  * @copyright Trabajo grupal: Módulo 2 - Pronlemas NP - 3SAT
  * @copyright Christian Torres Gonzalez alu0101137902@ull.edu.es
  * @author: Christian Torres Gonzalez alu0101137902@ull.edu.es
  * @description: En este fichero se implementa la clase Color, utilizada para 
  * representar generar de manera aleatorio el color de nuestra bola, utilizada
  * para pintar de manera aleatoria cuando tenemos mas de una bola sobre la 
  * cuadricula
  * @since 15/05/2020
  * @file En este fichero se implementa la clase Color, utilizada para 
  * representar generar de manera aleatorio el color de nuestra bola, utilizada
  * para pintar de manera aleatoria cuando tenemos mas de una bola sobre la 
  * cuadricula
  * @version 2.1.0
  * @see https://github.com/ULL-ESIT-INF-PAI-2019-2020/pai-p13-bouncing-ball-ChristianTorresGonzalez.git
*/

'use strict';

class Clausula {
    constructor(problema3SAT) {
        this.numeroClausulas = problema3SAT["numberOfClauses"];
        this.numeroLiterales = problema3SAT["numberOfLiterals"];
        this.literales = problema3SAT["literals"]
        this.clausulas = problema3SAT["clauses"];
        this.signos = problema3SAT["signs"];
    }
}

module.exports = {Clausula}