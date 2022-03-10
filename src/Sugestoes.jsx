import badVibesMemes from "./assets/img/bad.vibes.memes.svg";
import chibirdart from "./assets/img/chibirdart.svg";
import razoesparaacreditar from "./assets/img/razoesparaacreditar.svg";
import adorableAnimals from "./assets/img/adorable_animals.svg";
import smallcutecats from "./assets/img/smallcutecats.svg";

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
        <div className="sugestao" key={sugestao.nome + "sugestao"}>
          <div className="usuario">
            <img src={sugestao.img} />
            <div className="texto">
              <div className="nome">{sugestao.nome}</div>
              <div className="razao">Segue você</div>
            </div>
          </div>

          <div className="seguir">Seguir</div>
        </div>
      ))}
    </section>
  );
}
