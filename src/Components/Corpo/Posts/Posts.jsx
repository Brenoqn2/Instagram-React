import meowed from "../../../assets/img/meowed.svg";
import barked from "../../../assets/img/barked.svg";
import respondeai from "../../../assets/img/respondeai.svg";
import gatoTelefone from "../../../assets/img/gato-telefone.svg";
import adorableAnimals from "../../../assets/img/adorable_animals.svg";
import dog from "../../../assets/img/dog.svg";
import Post from "./Post";

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
        <Post
          usuario={post.usuario}
          imgPerfil={post.imgPerfil}
          imgPost={post.imgPost}
          curtidoPor={post.curtidoPor}
          curtidoPorImg={post.curtidoPorImg}
          numCurtidas={post.numCurtidas}
        />
      ))}
    </section>
  );
}
