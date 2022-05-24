//Formas de agrupar logica, un proceso o instrucciones y te permite orgnizarlos mejor

function proceso1() {
  console.log('Hago una cosa');
  console.log('Luego hago otra cosa');
}

//Las podemos llamar
proceso1();
//Repetidamente
proceso1()


// Les podemos enviar datos

function generateFullName(nombre, apellido) {
  console.log(nombre + " " + apellido)
}

generateFullName('Luis', 'Perez')
generateFullName('Joy', 'Valderrama')


//Podemos hacer que nos devuelvan datos

function calculateMidPoint(num1, num2) {
  return (num1 + num2) / 2;
}

let firstNumber = 30;
let secondNumber = 0;
let midPoint = calculateMidPoint(firstNumber, secondNumber)
console.log('La media de', firstNumber, 'y', secondNumber, 'es', midPoint)

//Las funciones son un tipo de dato, por lo que podemos utilizarlo como variables

let logicaSaludar = function (nombre) { console.log('Hola, mi nombre es ' + nombre) }
let logicaSaludarMaleducado = function (nombre) { console.log('no me gustas pero mi nombre es ' + nombre) }
//en logicaSaludar tenemos la referencia a la funcion
//Podemos hacer algo tan loco como pasar funciones a otra:
function saludarEducadamente(funtionSaludar, nombre) {
  console.log('Disculpe que lo moleste, pero');
  //ejecutamos la funcion que hemos recibido
  funtionSaludar(nombre);
  console.log('Espero tener una buena noche con usted')
}

//Si ejecutamos todo:
saludarEducadamente(logicaSaludarMaleducado, 'Luis')


//Esto es lo que da pie a poder hacer pogramacion funcional en JS
// Las funciones son objetos  y por lo tanto se pueden comportar como tal

//Se usa mucho en la gestion de eventos:
/*
function processClickEvent(event) {
  //Hago algo cuando recibo el click
}

//Quiero que cuando haga click en el item, se ejecute mi funcion

let ItemPantalla; //Algun item de la pantalla (boton, enlaces , etc)
//La libreria de frontend me proporciona una forma de ejecutar
// mi funcion cuando se haga click
// Lo que estoy haciendo es pasarle la funcion a ejecutar como parametro

ItemPantalla.onClick(processClickEvent);

*/
//Ejercicio


function arrayMul(vector, numero) {
  for (let i = 0; i < vector.length; i++)
    console.log(vector[i] * numero)
}
arrayMul([1, 2, 3, 4, 5], 2)
