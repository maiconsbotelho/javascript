/*
O método `map()` é usado para criar um novo array com os resultados da aplicação de uma função a cada elemento do array original.
Ele recebe como argumento uma função de callback, que é chamada para cada elemento do array original.
A função de callback deve retornar o valor que será incluído no novo array.
A função de callback é chamada com três argumentos: o valor do elemento atual, o índice do elemento e o array original.
O método `map()` não modifica o array original; ele sempre retorna um novo array com os valores transformados.
Essa funcionalidade é útil para aplicar transformações ou mapeamentos em arrays de forma imutável.
*/
const nums = [1, 2, 3, 4, 5];
const dobro = nums.map((n) => n * 2);

console.log("array 1:", nums); // [1, 2, 3, 4, 5]
console.log("array 2:", dobro); // [2, 4, 6, 8, 10]
