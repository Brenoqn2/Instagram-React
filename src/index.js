import reactDom from "react-dom";
import Header from "./Header";
import "../src/css/reset.css";
import "./css/style.css";
import Corpo from "./Corpo";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Header />
      <Corpo />
      <Footer />
    </div>
  );
}

const instagramPage = App();
const rootDiv = document.querySelector(".root");
reactDom.render(instagramPage, rootDiv);
