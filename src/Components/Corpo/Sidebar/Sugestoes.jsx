import badVibesMemes from "../../../assets/img/bad.vibes.memes.svg";
import chibirdart from "./../../../assets/img/chibirdart.svg";
import razoesparaacreditar from "../../../assets/img/razoesparaacreditar.svg";
import adorableAnimals from "../../../assets/img/adorable_animals.svg";
import smallcutecats from "../../../assets/img/smallcutecats.svg";
import Sugestao from "./Sugestao";

export default function Sugestoes() {
  const sugestoes = [
    { nome: "bad.vibes.memes", img: badVibesMemes },
    { nome: "chibirdart", img: chibirdart },
    { nome: "razoesparaacreditar", img: razoesparaacreditar },
    { nome: "adorable_animals", img: adorableAnimals },
    { nome: "smallcutecats", img: smallcutecats },
  ];
  return (
    <section className="sugestoes">
      <div className="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>
      {sugestoes.map((sugestao) => (
        <Sugestao nome={sugestao.nome} img={sugestao.img} />
      ))}
    </section>
  );
}
