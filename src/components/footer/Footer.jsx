import React from "react";
import "./footer.scss";
import { AiOutlineLinkedin } from "react-icons/ai";
import { VscGithubInverted } from "react-icons/vsc";

function Footer() {
  return (
    <section id="contact" className="footer">
      <div className="gmail">
        <h4>sahilvani07@gmail.com</h4>
      </div>
      <div className="socialMedia">
        {/* <BsLinkedin /> */}
        <a
          href="https://linkedin.com/in/sahil-vani"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineLinkedin className="app" />
        </a>
        <a
          href="https://github.com/Sahil-vani"
          target="_blank"
          rel="noopener noreferrer"
        >
          <VscGithubInverted className="app" />
        </a>
      </div>
    </section>
  );
}

export default Footer;
