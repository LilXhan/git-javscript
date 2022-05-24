//bucle while
let contador = 0;
let n = 50;
while (contador < n) {
  console.log(contador)
  contador++;
}

//bucle do while
/*do {
  //primera iteracion
} while (condition);
*/

//bucle for (usarlo cuando tenemos claro las iteraciones definidas que vamos hacer)

for (let i = 0; i < 10; i++) {
  console.log(i)
}

for (let j = 0; j < 10; j += 2) {
  console.log(j)
}

// for con vectores

//imrpimir las notas del array en pantalla

let notas = [10, 15, 20]

for (let k = 0; k < notas.length; k++) {
  console.log(notas[k])
}

//imprimir los elemntos del array en pantalla

let mouses = [
  {
    modelo: 'G203',
    marca: 'Logitech'
  },
  {
    modelo: 'Viper',
    marca: 'Razer'
  },
  {
    modelo: 'Core FPS',
    marca: 'Hyper X'
  }
]

for (let u = 0; u < mouses.length; u++) {
  let mouse = mouses[u]
  console.log('Mouse:', mouse.marca, mouse.modelo)
}

// Iterar sobre vectores y objetos

//array (for of)
for (let mouse of mouses) {
  console.log('Mouse:', mouse.marca, mouse.modelo)
}


// objeto (for in)
let infoEstudiante = {
  nombre: 'Juan',
  apellido: 'Perez',
  edad: 16,
  peso: '78kg',
  nota: 14
}

for (let key in infoEstudiante) {
  console.log(key, ':', infoEstudiante[key])
}


//Ejercicio



let pisos = 4;

for (let i = 0; i < pisos; i++) {
  let espacios = '';
  let asteriscos = '';
  for (let j = 0; j < pisos - i; j++) {
    espacios += ' ';
  }
  for (let k = 0; k < i * 2 + 1; k++) {
    asteriscos += '*';
  }
  console.log(espacios + asteriscos)
}

* /
