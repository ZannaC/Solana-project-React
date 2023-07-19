import HeaderTitle from "./components/Header/HeaderTitle";
import NavBar from "./components/Header/NavBar";
import DevResContent from "./components/Main/Developer-Resources-section/DevResContent";
import "./index.css";

function App() {
  return (
    <div className="wrapper">
      <header>
        <HeaderTitle />
        <NavBar />
      </header>
      <main>
        <section class="developer">
          <DevResContent />
        </section>
      </main>
    </div>
  );
}

export default App;
