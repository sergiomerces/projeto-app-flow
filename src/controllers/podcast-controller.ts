import { IncomingMessage, ServerResponse } from 'http';

//obter lista de episódios do podcast
export const getListEpisodes = (req: IncomingMessage, res: ServerResponse)=> {

    //escrever no cabeçalho
    res.writeHead(200, {"content-type": 'application/json'});
    //escrever no conteúdo
    res.end({
      name: 'Sérgio',
    });
    
  };