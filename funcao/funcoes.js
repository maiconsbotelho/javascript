// FUNCTION DECLARATION OU FUNÇÃO NOMEADA
function bomDia() {
  return "Bom dia!";
}

// FUNCTION EXPRESSION OU FUNÇÃO ANÔNIMA
const boaTarde = function () {
  return "Boa tarde!";
};

// ARROW FUNCTION
const boaNoite = () => {
  return "Boa noite!";
};

// ARROW FUNCTION (SEM CHAVES)
const bomDiaa = () => "Bom dia com função reduzida!";
const boaTardee = () => "Boa tarde com função reduzida!";
const boaNoitee = () => "Boa noite com função reduzida!";
const soma = (a, b) => a + b;

// IMPRESSÃO NO CONSOLE
console.log(bomDia());
console.log(boaTarde());
console.log(boaNoite());
console.log(bomDiaa());
console.log(boaTardee());
console.log(boaNoitee());
console.log(soma(2, 3));
