//Switch es otra forma de controlar el flujo condicional
// Podemos simplicar un if:

let status = 0;
if (status === 0) {
  //hago A
} else if (status === 1) {
  //hago B
} else if (status === 3) {
  //hago C
}

//Podemos escribirlo como:

switch (status) {
  case 0:
    //hago A
    break;
  case 1:
    //hago B
    break;
  case 2:
    //hago C
    break;
  default:

    break;
}



