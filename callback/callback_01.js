/*
A função `setTimeout()` é uma função nativa do JavaScript usada para executar outra função ou um trecho de código após um intervalo de tempo especificado.
Ela recebe dois argumentos principais: uma função de callback e o tempo de espera em milissegundos antes da execução.
O tempo de espera é opcional, e seu valor padrão é 0, o que significa que a execução será agendada imediatamente após as operações pendentes na fila de eventos.
A função `setTimeout()` retorna um identificador único (ID do timer), que pode ser usado com a função `clearTimeout()` para cancelar a execução agendada, se necessário.
Essa funcionalidade é especialmente útil para criar atrasos controlados ou agendar tarefas assíncronas no código.
*/

// Função
function bomDia() {
  console.log("Bom dia!");
}

// Agendando a execução da função `bomDia()` após 3 segundos
setTimeout(bomDia, 3000); // Bom dia!
