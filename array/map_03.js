const gritar = (texto) => texto.toUpperCase();
const enfatizar = (texto) => `${texto}!!!`;

// Array of strings
const frases = ["Cuidado", "Olha o carro"];

const resultado = frases.map(gritar).map(enfatizar);

console.log(frases); // [ 'Cuidado', 'Olha o carro' ]
console.log(resultado); // [ 'CUIDADO', 'OLHA O CARRO' ]
