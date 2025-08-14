import { IncomingMessage, ServerResponse } from 'http';
import { serviceListEpisodes } from '../services/list-episodes-service';

//obter lista de episódios do podcast
export const getListEpisodes = async (
  req: IncomingMessage, 
  res: ServerResponse
) => {

const content = await serviceListEpisodes();

    //escrever no cabeçalho
    res.writeHead(200, {"content-type": 'application/json'});
    //escrever no conteúdo
    res.end(JSON.stringify(content));
    
  };