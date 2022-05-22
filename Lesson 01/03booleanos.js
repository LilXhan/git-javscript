let booleanoCierto = true;
let booleanoFalso = false;

let m = '10';
let n = 10;

let aMayorQueb = m < n;

// > <  >= <= == ===  != !==


console.log(m === n);

/*CONDICION AND (TODAS LAS CONDICIONES DEBEN SER CIERTAS PARA QUE ARROJE TRUE SI TAN SOLO 1 ES FALSO
TODO SERA FALSO)
and = && | 1 && 1 : 1 (cierto) | 1 && 0 : 0 (falso) || 0 && 1 : 0 (falso) || 0 && 0 : 0 (falso)
1 = true , 0 = false*/

let inicioRango = 50;
let finRango = 100;
let numeroAComparar = 167;

//condiciones AND

let mayorQue = inicioRango < numeroAComparar;
let menorQue = numeroAComparar < finRango;

let dentroDeRango = menorQue && mayorQue;

console.log(dentroDeRango);


/*CONDICION OR (ES CIERTA SI ALMENOS 1 ES CIERTO)
OR = || , TABLA DE VERDAD
1 || 1 : 1
1 || 0 : 1
0 || 1 : 1
0 || 0 : 0 */

/* NOT (!) Tabla de verdad
1 : 0
0 : 1
*/

let haHechoTrabajo = true;
let notaExamenFinal = 4;
let tieneFaltaTecnica = true;

let aprobadoElCurso = (haHechoTrabajo || notaExamenFinal >= 5) && !tieneFaltaTecnica;

console.log(aprobadoElCurso)


// EJERCIO
// REALIZAR UN POGRAMA QUE, DADA DOS LINEAS EN UNA DIMENSION (DOS RANGOS)
// (a, b), (c, d) comprobar si las lineas se solapan o no

// a = 3 , b = 5 , c = 4 , d = 10

let a = 3;
let b = 5;

let c = 1;
let d = 4;

//COMPROBAMOS SI A Y B ESTAN DENTOR DEL RANGO DE C Y D

let seSolapan = (a > c && a < d) || (b > c && b < d);

console.log(seSolapan);
