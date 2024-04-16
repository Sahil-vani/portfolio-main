import React from "react";
import "./aboutPage.scss";
import { IoLogoHtml5 } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { GrReactjs } from "react-icons/gr";
import { FaNodeJs } from "react-icons/fa";
import { SiAppwrite } from "react-icons/si";

function AboutPage() {
  return (
    <section id="about" className="aboutSection">
      <h1 className="contentHeading">ABOUT ME </h1>
      <div className="content">
        <div className="aboutMe">
          <p>
            Hi viewers, my name is Sahil Vani. A 21-year-old{" "}
            {/* <span className="illustration">
              <img
                src="https://blush.design/api/download?shareUri=GMaFB3CwYr6tukQh&c=Skin_0%7Effdbb4&w=800&h=800&fm=png"
                alt=""
              />
            </span> */}
            🧑 young guy , I came to Indore 📍 for graduation 🧑‍🎓 in 2021. As a
            hobby, I started learning web development in December 2022. I had no
            idea 🤷 it would become my passion and lead to a promising career.
          </p>
          <p>
            The more I learned 📖 about web development, the more I realized I
            had a knack for it. I can see myself going far 🛣️ and making a
            career in this field. With each passing day, my interest and skills
            in web development grow stronger💪.
          </p>
          <p>
            Today, I am a MERN stack developer 🧑‍💻. As a web developer, I'm
            always learning 📖 new technologies and honing my skills.
          </p>
          <p>
            I have experience with HTML5 <IoLogoHtml5 />, CSS <IoLogoCss3 />,
            Javascript <IoLogoJavascript />, Nodejs <FaNodeJs />, Reactjs{" "}
            <GrReactjs />, Thunder Client, and appwrite <SiAppwrite />. As I
            broaden my skills and knowledge, I am always excited to work with
            new people and technologies.
          </p>
          <p>
            I am determined to make a mark in this ever-evolving field with my
            passion for web development 🧑‍💻. I am grateful for the opportunities
            and experiences that have led me here. I'm eager to see where this
            journey takes me.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
