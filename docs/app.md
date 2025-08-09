# Nome do aplicativo

Podcast manager

### Descrição

Um app estilo Netflix, onde possa centralizar diferentes episódios podcasts separados por categorias

### Domínio

Podcasts feitos em video

### Features

- listar os podcasts em sessões de categorias

  - [saúde, fitness, mentalidade, humor]

- filtrar episódios por nome de podcast

## Como

### Features

- listar os episódios podcasts em sessões de categorias

### Como vou implementar

Vou retornar uma API rest o nome do podcast, nome do episódio, imagem de capa, link

```js
{
  podcastName: "flow",
  episode: "RENATO CARIANI TIRA SUAS DÚVIDAS SOBRE TREINOS, NUTRIÇÃO E VIDA SAUDÁVEL [Especialista Responde]",
  videoId:"8UYGt274qvc",
  cover: "https://i.ytimg.com/vi/8UYGt274qvc/maxresdefault.jpg,
  link: "https://www.youtube.com/watch?v=8UYGt274qvc",
  categories: ["saúde", "bodybuild"]
};

{
  podcastName: "flow",
  episode: "NIKOLAS FERREIRA - Flow #475",
  videoId: "kf6XzyqpaE8",
  cover: "https://i.ytimg.com/vi/kf6XzyqpaE8/maxresdefault.jpg",
  link: "https://www.youtube.com/watch?v=kf6XzyqpaE8",
  categories: ["política"]
};

```
