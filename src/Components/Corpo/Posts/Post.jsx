export default function Post(props) {
  return (
    <article className="post" key={props.usuario + String(props.imgPost)}>
      <header className="topo">
        <div className="usuario">
          <img src={props.imgPerfil} />
          {props.usuario}
        </div>
        <div className="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </header>

      <figure className="conteudo">
        <img src={props.imgPost} />
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
          <img src={props.curtidoPorImg} />
          <div className="texto">
            Curtido por <strong>{props.curtidoPor}</strong> e{" "}
            <strong>outras {props.numCurtidas} pessoas</strong>
          </div>
        </div>
      </footer>
    </article>
  );
}
