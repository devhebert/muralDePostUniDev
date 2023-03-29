  module.exports = {
      posts: [
          {id: 1, title: "Aula ao vivo né?", content: `Aula ao vivo com chat bugado ás 21hrs, acesse o <a href=\"https://www.unopar.com.br/\">link</a>.`},
          {id: 2, title: "Telecurso2000", content: "Às 5hrs da manhã começa o telecurso, não falte!"},
      ],

      getall() {
          return this.posts;
      },

      newPost(title, content) {
          this.posts.push({id: generateId(), title, content});
      }
  }

  function generateId() {
      return Math.random().toString().substr(2, 9);
  }
