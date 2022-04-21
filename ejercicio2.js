// ej 1

let numeroIf = -10;

if (numeroIf === 0) {
    console.log("El numero es cero")
}
else if(numeroIf > 0) {
    console.log("El numero es positivo")
}
else {
    console.log("El numero es negativo")
}

// ej 2
let numeroWhile = -2;

// while (numeroWhile < 3) {
//     numeroWhile++
//     console.log(numeroWhile)
// }

// ej 3

do {
    numeroWhile++
} while (numeroWhile<3)

console.log(numeroWhile)

// ej 4 

for (let numeroFor = 0; numeroFor <= 3; numeroFor++) {
   console.log(numeroFor)   
}

let estacion = "otonio";

switch(estacion) {
    case "primavera":
        console.log(`La estacion es:${estacion}`);
        break
    case "verano":
        console.log(`La estacion es:${estacion}`);
      break;
      case "invierno":
        console.log(`La estacion es:${estacion}`);
      break;
      case "otonio":
        console.log(`La estacion es:${estacion}`);
      break;
      default: 
      console.log("Esa estacion no existe")
      break
      // code block
  }
