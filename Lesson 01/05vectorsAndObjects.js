/*"En programación, un vector, array, arreglo o alineación es un conjunto
o agrupación de variables del mismo tipo cuyo acceso se realiza por índices*/
// un vector es como se le llama a un array de 1 dimension

let array = ["aa", "bb", 3, [1, 2], { nombre: 'Nombre', apellido: 'Apellido' }];

let objeto = {
  nombre: 'Flavio',
  apellido: 'Alvarado',
  edad: 18,
  coches: ['Ferrari', 'Lamborghini'],
  direccion: {
    calle: 'Texto de la calle',
    numero: 403
  }
}

let item0 = array[0];
let item1 = array[1];


let indice = 4;
let item4 = array[indice].apellido;

console.log(item4);


let nombreObject = objeto.nombre;
let textoCalle = objeto.direccion.calle;

console.log(textoCalle);

let nombreAuto = objeto.coches[1];

console.log(nombreAuto);

//UNDEFINED

let item50 = array[50];
console.log(item50)

let piso = objeto.piso;
console.log(piso);


let longitud = array.length

let isValidPosition = 50 >= 0 && 50 < array.length

console.log(longitud)
