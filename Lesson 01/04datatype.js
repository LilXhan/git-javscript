//QUE SON LOS TIPOS DE DATOS: LAS CLASES DE ELEMENTOS CON LAS CUALES ESTAMOS TRABAJANDO
let suma = '2' + 2;
console.log(suma);
//LOS TIPOS DE DATO DE JAVASCRIPT SON:

let numero = 2.5;
let string = 'Soy un texto';
let booleano = false;

let array = ["aa", "bb", 3, [1, 2]];

let objeto = {
  nombre: 'Flavio',
  apellido: 'Alvarado',
  edad: 18
}

let funcion = function () {
  console.log('Hola')
}

console.log(objeto.nombre)
console.log(array[0])


//los tipos son dinamicos

let a = 5;

a = 'Hello';

//typeof

console.log(typeof booleano == 'boolean')

//null y undefined

let valorNulo = null;//no tengo definido un valor
let valorUndefined // ahora no tengo un valor pero a futuro si
