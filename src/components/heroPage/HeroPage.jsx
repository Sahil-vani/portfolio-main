import React from "react";
import Wave from "../../assets/waving.png";
<<<<<<< HEAD
import Sahil from "../../assets/sahil.jpg";
=======
import Sahil from "../../assets/sahil.png";
>>>>>>> 654ef392ec8b0df5b9970a80d3f7e7b96d2e8bc3
import "./heroPage.scss";
import { IoLogoHtml5 } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";
import { SiSass } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";
import { GrReactjs } from "react-icons/gr";
import { BsGithub } from "react-icons/bs";

function HeroPage() {
  return (
    <section id="home" className="heroSection">
      <div className="left">
        <div className="heading">
          <h1 className="heroHeading">
            Hi <img src={Wave} className="wavingHand" />
          </h1>
          <h1 className="heroHeading">I am Sahil Vani.</h1>
        </div>

        <div className="subHeading">
          <h2 className="heroSubHeading">
<<<<<<< HEAD
            A front-end developer passionate about learning and making a
            difference. My experience includes React and Redux web applications.
=======
            A MERN developer passionate about learning and making a difference.
            My experience includes React and Express web applications.
>>>>>>> 654ef392ec8b0df5b9970a80d3f7e7b96d2e8bc3
          </h2>
        </div>
        <div className="overlap">
          <span className="sepration">
            <IoLogoHtml5 className="starIconOne html" />
            <IoLogoCss3 className="starIconTwo css" />
          </span>
          <span className="sepration">
            <SiTailwindcss className="starIconOne tailwind" />
            <SiSass className="starIconTwo sass" />
          </span>
          <span className="sepration">
            <IoLogoJavascript className="starIconOne js" />
            <FaNodeJs className="starIconTwo node" />
          </span>
          <span className="sepration">
            <GrReactjs className="starIconOne react" />
            <BsGithub className="starIconTwo github" />
          </span>
        </div>
      </div>
      <div className="heroImage">
        <img src={Sahil} alt="hero" />
      </div>
    </section>
  );
}

export default HeroPage;
