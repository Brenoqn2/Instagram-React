export default function Story(props) {
  return (
    <div className="story">
      <figure className="imagem">
        <img src={props.img} />
      </figure>
      <figcaption className="usuario">{props.usuario}</figcaption>
    </div>
  );
}
