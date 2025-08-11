import * as http from 'http';

//criando um servidor HTTP
const server = http.createServer(
    (request: http.IncomingMessage, response:http.ServerResponse) => {}
);


const port = process.env.PORT;

//criando uma porta para o servidor
server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});