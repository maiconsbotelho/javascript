const nums = [1, 2, 3, 4, 5];

nums.map(function (elemento, indice, array) {
  console.log(elemento, indice, array);
}); // 1 0 [ 1, 2, 3, 4, 5 ]

nums.map(function (elemento, indice) {
  console.log(elemento, indice);
}); // 1 0

nums.map(function (elemento) {
  console.log(elemento);
}); // 1
