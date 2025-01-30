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
            Hi viewers, my name is Sahil Vani. A 23-year-old 🌟 web development
            enthusiast, I came to Indore 📍 for graduation in 2021. What started
            as a casual hobby in December 2022—learning web development—soon
            turned into my passion 💡 and the foundation for a promising career.
          </p>
          <p>
            From my very first code snippet to building dynamic web experiences,
            I found myself captivated 🖥️ by the limitless possibilities of the
            web. What was once a curiosity blossomed into a craft that I now
            pursue with unrelenting passion.
          </p>
          <p>
            Over the past two years, I’ve had the privilege of working in job
            roles as well as freelancing projects 🛠️. These experiences have
            sharpened my skills, strengthened my problem-solving mindset, and
            allowed me to collaborate with inspiring clients and teams 🤝.
          </p>
          <p>
            Today, I proudly call myself a MERN stack developer, with a strong
            focus on frontend development 🎨. My technical toolkit is diverse
            and includes HTML5, CSS, JavaScript, Node.js, React.js, AWS, EJS,
            Remix, Shopify, Thunder Client, and Appwrite 🔧. With this array of
            technologies, I’m able to create efficient, scalable, and
            user-friendly web experiences.
          </p>
          <p>
            Beyond the code, I love crafting seamless and engaging user
            experiences that make a difference ✨. The journey so far has been
            nothing short of thrilling, and I’m eager to continue evolving,
            contributing, and leaving my mark in this ever-evolving digital
            landscape 🌍.
          </p>
          <p>Let’s connect and create something remarkable! 🚀</p>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
