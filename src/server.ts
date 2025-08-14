import * as http from 'http';
import { getListEpisodes } from './controllers/podcast-controller';

//criando um servidor HTTP
const server = http.createServer(
    async (req: http.IncomingMessage, res:http.ServerResponse) => {

        if(req.method === 'GET'){
            await getListEpisodes(req, res);
        }

    }
);

const port = process.env.PORT;

//criando uma porta para o servidor
server.listen(port, () => {

    console.log(`Servidor rodando na porta ${port}`);

});