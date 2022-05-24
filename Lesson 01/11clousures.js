// ----------------------------------------------------------------------------------


function nombreApellido() {
  let nombre = 'Flavio'
  return function (apellido) {
    return nombre + apellido
  }
}

let nombreCompleto = nombreApellido()
console.log(nombreCompleto(' Alvarado'))


// -------------------------------------------------------------------------------------------


function createSuma() {
  let x = 5;
  return function (y) {
    return x + y;
  };
}


let sumFun = createSuma()
console.log(sumFun(2))


//--------------------------------------------------------------------------------------------------


function createSum(x) {
  return function (y) {
    return x + y;
  }
}

let sum4 = createSum(3);
let sum10 = createSum(10);

console.log(sum4(2), sum10(10))


// -----------------------------------------------------------------------------------------------
