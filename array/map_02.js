const primeiraLetra = (texto) => texto[0];
const nomes = ["Ana", "Bia", "Gui", "Lia", "Rui"];

const resultado = nomes.map(primeiraLetra);

console.log(nomes); // [ 'Ana', 'Bia', 'Gui', 'Lia', 'Rui' ]
console.log(resultado); // [ 'A', 'B', 'G', 'L', 'R' ]
