import * as http from 'http';
import { getFilterEpisodes, getListEpisodes } from './controllers/podcast-controller';

//criando um servidor HTTP
const server = http.createServer(
    async (req: http.IncomingMessage, res:http.ServerResponse) => {

        //query string
        const [baseUrl, queryString] = req.url?.split('?') ?? ['', ''];

        if(req.method === 'GET' && req.url === '/api/list'){
            await getListEpisodes(req, res);
        }

        if(req.method === 'GET' && req.url === '/api/episode'){
            await getFilterEpisodes(req, res);
        }

    }
);

const port = process.env.PORT;

//criando uma porta para o servidor
server.listen(port, () => {

    console.log(`Servidor rodando na porta ${port}`);

});