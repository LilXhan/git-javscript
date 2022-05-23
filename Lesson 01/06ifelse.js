//control de flujo


//condicion

let condicion = false;
let condicion2 = true;

if (condicion && condicion2) {
  // hago esto si se cumple la condicion
  console.log('Estoy en el if')
} else {
  // hago esto si no se cumple la condicion
  console.log('Estoy en el else')
}

// continuo ejecutando


//Se puede encadenar



if (condicion1) {
  //entro aqui si cumplo la primera condicion
} if else (condicion2) {
  //entro aqui si se cumple la segunda y no la primera
} if else (condicion3) {
  //entro aqui si se cumple la tarcera y no la primera e segunda
} else {
  //entro aqui si no se cumple ninguno
}


//se pueden anidar



if (condicion1) {
  if (condicion2) {
    //hago algo
  }
  //luego hago otra cosa
} else {
  //hago otra cosa distanta
}


//EJERCICIO Se debe realizar un programa que, dados
// dos números, imprima por pantalla si el primer número es múltiplo del segundo.

let primerNumero = 23;
let segundoNumero = 2;

let condicion5 = primerNumero % segundoNumero == 0

if (condicion5) {
  primerNumero += ' es multiplo de'
  primerNumero += ' ';
  primerNumero += segundoNumero
  console.log(primerNumero)
} else {
  primerNumero += ' no es multiplo de'
  primerNumero += ' ';
  primerNumero += segundoNumero
  console.log(primerNumero)
}
