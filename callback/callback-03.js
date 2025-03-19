const path = require("path");
const fs = require("fs");

// Caminho do arquivo `aprovados.txt`
const caminho = path.join(__dirname, "dados", "aprovados.txt");

// Função de callback
function lerArquivo(erro, conteudo) {
  if (erro) {
    return;
  } else {
    console.log(conteudo.toString());
  }
}

// Lendo o arquivo `aprovados.txt` de forma assíncrona
fs.readFile(caminho, lerArquivo);
