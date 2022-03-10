import meowed from "./assets/img/meowed.svg";
import barked from "./assets/img/barked.svg";
import respondeai from "./assets/img/respondeai.svg";
import gatoTelefone from "./assets/img/gato-telefone.svg";
import adorableAnimals from "./assets/img/adorable_animals.svg";
import dog from "./assets/img/dog.svg";

export default function Stories() {
  const posts = [
    {
      usuario: "meowed",
      imgPerfil: meowed,
      imgPost: gatoTelefone,
      curtidoPor: "respondeai",
      curtidoPorImg: respondeai,
      numCurtidas: "101.523",
    },
    {
      usuario: "barked",
      imgPerfil: barked,
      imgPost: dog,
      curtidoPor: "adorable_animals",
      curtidoPorImg: adorableAnimals,
      numCurtidas: "99.159",
    },
  ];

  return (
    <section className="posts">
      {posts.map((post) => (
        <article className="post" key={post.usuario + String(post.imgPost)}>
          <header className="topo">
            <div className="usuario">
              <img src={post.imgPerfil} />
              {post.usuario}
            </div>
            <div className="acoes">
              <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
          </header>

          <figure className="conteudo">
            <img src={post.imgPost} />
          </figure>

          <footer className="fundo">
            <div className="acoes">
              <div>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
              </div>
              <div>
                <ion-icon name="bookmark-outline"></ion-icon>
              </div>
            </div>

            <div className="curtidas">
              <img src={post.curtidoPorImg} />
              <div className="texto">
                Curtido por <strong>{post.curtidoPor}</strong> e{" "}
                <strong>outras {post.numCurtidas} pessoas</strong>
              </div>
            </div>
          </footer>
        </article>
      ))}
    </section>
  );
}
