//assignacion

let a = 1;
let b = 2;

//suma
let suma = a + b;
//resta
let resta = a - b;
//multiplicacion
let mult = a * b;
//division
let divi = a / b;
//modulo o resto
let resto = a % b;
//exponenciacion
let expo = a ** b;
//sumando y decrementando en 1 a la variable
a = a + 1;
a = a + 1;
a++;
a--;
//al ultimo valor asignandole una operacion
a %= 10;

console.log(a);

//texto

let nombre = 'Martin';
let apellido = 'Cristobal';

var nombreCompleto = nombre + ' ' + apellido;

console.log(nombreCompleto);


nombre += ' ';
nombre += apellido;

console.log(nombre);

//practica texto

let marca = 'Logitech';
let periferico = 'Teclado';

periferico += ' ';
periferico += marca;

console.log(periferico);

//practica numero

let k = 5;
let l = 10;

k += 10;
k *= l;

console.log(k);


//combinar operaciones con diferentes tipos

let texto = 'hola';
let numero = 5;

texto += ' ';
texto += numero;
console.log(texto)


//ejercicio: Programa que nos diga los buenos dias
//resultado: 'Buenos dias {nombre}

let name = 'Flavio';
let saludo = 'Buenos Dias';

saludo += ' ';
saludo += name;

console.log(saludo);
