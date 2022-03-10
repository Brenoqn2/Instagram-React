import Stories from "./Stories/Stories";
import Posts from "./Posts/Posts";
import Sidebar from "./Sidebar/Sidebar";

export default function Corpo() {
  return (
    <main className="corpo">
      <div className="esquerda">
        <Stories />
        <Posts />
      </div>
      <Sidebar />
    </main>
  );
}
