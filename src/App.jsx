import Navbar from "./components/navbar/Navbar";
import HeroPage from "./components/heroPage/HeroPage";
import AboutPage from "./components/aboutPage/AboutPage";
import ProjectPage from "./components/projectPage/ProjectPage";
import Footer from "./components/footer/Footer";
import "./app.scss";

function App() {
  return (
    <main className="main">
      <Navbar />
      <HeroPage />
      <AboutPage />
      <ProjectPage />
      <Footer />
    </main>
  );
}

export default App;
