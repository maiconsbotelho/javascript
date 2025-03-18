/*
A função `setInterval()` é uma função nativa do JavaScript usada para executar outra função ou um trecho de código repetidamente em intervalos de tempo especificados.
Ela recebe dois argumentos principais: uma função de callback e o intervalo de tempo em milissegundos entre cada execução.
O intervalo de tempo é opcional, e seu valor padrão é 0, o que significa que a execução será agendada imediatamente após as operações pendentes na fila de eventos.
A função `setInterval()` retorna um identificador único (ID do timer), que pode ser usado com a função `clearInterval()` para cancelar a execução repetitiva, se necessário.
Essa funcionalidade é especialmente útil para criar loops temporizados ou agendar tarefas assíncronas que precisam ser executadas em intervalos regulares.
*/
setInterval(() => {
  console.log("a cada 3s...");
}, 3000); // 3 segundos
