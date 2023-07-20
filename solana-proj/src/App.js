import HeaderTitle from "./components/Header/HeaderTitle";
import NavBar from "./components/Header/NavBar";
import DevResContent from "./components/Main/Developer-Resources-section/DevResContent";
import DevelopmentCourseSection from "./components/Main/Development-Course-section/DevCourseSection";
import "./index.css";

const App = () => {
  return (
    <div className="wrapper">
      <header>
        <HeaderTitle />
        <NavBar />
      </header>
      <main>
        <DevResContent />
        <DevelopmentCourseSection />
      </main>
    </div>
  );
};

export default App;
