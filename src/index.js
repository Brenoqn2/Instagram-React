import reactDom from "react-dom";
import Header from "./Components/Header";
import Corpo from "./Components/Corpo/Corpo";
import Footer from "./Components/Footer";

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
