const carrinho = [
  { nome: "Borracha", qtde: 1, preco: 3.45 },
  { nome: "Caderno", qtde: 2, preco: 13.9 },
  { nome: "Kit de lápis", qtde: 3, preco: 41.22 },
  { nome: "Caneta", qtde: 4, preco: 7.5 },
];

const getNome = (item) => item.nome;
const getTotal = (item) => item.qtde * item.preco;

console.log(carrinho.map(getNome));
console.log(carrinho.map(getTotal));
