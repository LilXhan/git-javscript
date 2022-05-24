//const moment = require('moment')
//console.log(moment.months)

//input = por que canal ingresan las respuestas
//output = por que canal salen las respuestas
//stdin (standarinput) || stdout (standaroutput) == por TERMINAL

const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

//cuando pasas una funcion en parametros son colbacs

const rl = readline.createInterface({ input, output });

rl.question('Hola que edad tienes? ', function (answerAGE) {
  // TODO: Log the answer in a database
  rl.question('Cual es tu nombre? ', function (answerNAME) {
    if (answerAGE <= 18) {
      console.log(`${answerNAME} tu eres menor de edad, no puedes ingresar.`)
    } else {
      console.log(`${answerNAME} tu eres mayor de edad, Bienvenido.`)
    }
    rl.close()
  })
});

rl.question('Numero de Iteraciones:', function (answerNUM) {
  for (let i = 0; i < answerNUM; i++) {
    console.log(i);
  }
  rl.close()
});
