import HeaderTitle from "./components/Header/HeaderTitle";
import NavBar from "./components/Header/NavBar";
import DevResContent from "./components/Main/Developer-Resources-section/DevResContent";
import DevCourseInfo from "./components/Main/Development-Course-section/DevCourseInfo";
import "./index.css";

function App() {
  return (
    <div className="wrapper">
      <header>
        <HeaderTitle />
        <NavBar />
      </header>
      <main>
        <DevResContent />

        <section className="development-course-section">
          <DevCourseInfo />
        </section>
      </main>
    </div>
  );
}

export default App;
