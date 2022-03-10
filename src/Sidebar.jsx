import Usuario from "./Usuario";
import catana from "./assets/img/catanacomics.svg";
import Sugestoes from "./Sugestoes";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <Usuario image={catana} user="catanacomics" nome="Catana" />
      <Sugestoes />

      <div className="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
        Localizações • Contas mais relevantes • Hashtags • Idioma
      </div>

      <div className="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>
    </aside>
  );
}
