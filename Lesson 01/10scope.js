//El escope es el contexto donde una variable es visible
// existen 2 scopes principales: global y local

//Scope global: Toda variable que esta fuera de una funcion

let variableGlobal = 1;

function global() {
  console.log(variableGlobal);
}

global()
console.log(variableGlobal);


//Scope local: solo visible dentro de una funcion

function local() {
  let variableLocal = 1;
  console.log(variableLocal);
}
local()
console.log(variableGlobal) //No funciona


//En Javascript modero (>2015) existe let
//let define scope de bloque
// un bloque es todo lo que se encuentra entre { y }

if (condicion) {
  //esto es un bloque
}

while (condicion) {
  //este es un bloque
}

for (let i = 0; i < 10; i++) {
  //esto es otro bloque
}

//const variables que no queremos que se puedan modificar

const PI = 3.14;

PI = 1 // si cambias PI da error
