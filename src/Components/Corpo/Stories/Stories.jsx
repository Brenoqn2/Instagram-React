import gag from "../../../assets/img/9gag.svg";
import meowed from "../../../assets/img/meowed.svg";
import barked from "../../../assets/img/barked.svg";
import nathanwpylestrangeplanet from "../../../assets/img/nathanwpylestrangeplanet.svg";
import wawawicomics from "../../../assets/img/wawawicomics.svg";
import respondeai from "../../../assets/img/respondeai.svg";
import filomoderna from "../../../assets/img/filomoderna.svg";
import memeriagourmet from "../../../assets/img/memeriagourmet.svg";
import Story from "./Story";

export default function Stories() {
  const stories = [
    { usuario: "9gag", img: gag },
    { usuario: "meowed", img: meowed },
    { usuario: "barked", img: barked },
    { usuario: "nathanwpylestrangeplanet", img: nathanwpylestrangeplanet },
    { usuario: "wawawicomics", img: wawawicomics },
    { usuario: "respondeai", img: respondeai },
    { usuario: "filomoderna", img: filomoderna },
    { usuario: "memeriagourmet", img: memeriagourmet },
  ];

  return (
    <section className="stories">
      {stories.map((story) => (
        <Story usuario={story.usuario} img={story.img} />
      ))}

      <div className="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </section>
  );
}
