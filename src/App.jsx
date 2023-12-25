import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import HeroPage from "./components/heroPage/HeroPage";
import AboutPage from "./components/aboutPage/AboutPage";
import ProjectPage from "./components/projectPage/ProjectPage";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="main">
      <Navbar />
      <HeroPage />
      <AboutPage />
      <ProjectPage />
      <Footer />
    </div>
  );
}

export default App;
