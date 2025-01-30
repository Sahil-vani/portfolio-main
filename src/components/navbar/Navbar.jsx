<<<<<<< HEAD
import React, { useState } from "react";
=======
import React, { useState, useRef, useEffect } from "react";
>>>>>>> 654ef392ec8b0df5b9970a80d3f7e7b96d2e8bc3
import "./navbar.scss";
import { RxDotFilled } from "react-icons/rx";
import { FaArrowRight } from "react-icons/fa6";
import { MdOutlineArrowOutward } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";

function Navbar() {
  let menuButton, menuClass;
<<<<<<< HEAD
=======
  const menuRef = useRef();

>>>>>>> 654ef392ec8b0df5b9970a80d3f7e7b96d2e8bc3
  const menuOption = [
    {
      name: "HOME",
      className: "list",
      href: "#home",
    },
    {
      name: "ABOUT",
      className: "list",
      href: "#about",
    },
    {
      name: "PROJECTS",
      className: "list",
      href: "#project",
    },
    {
      name: "CONTACT",
      className: "list",
      href: "#contact",
    },
  ];
<<<<<<< HEAD
  const [active, setActive] = useState(false);
=======

  const [active, setActive] = useState(false);

>>>>>>> 654ef392ec8b0df5b9970a80d3f7e7b96d2e8bc3
  if (!active) {
    menuClass = "display";
    menuButton = "menuButton";
  } else {
    menuClass = "option";
    menuButton = "menuButton rotate";
  }

<<<<<<< HEAD
=======
  useEffect(() => {
    let menuHandler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setActive(false);
      }
    };

    document.addEventListener("mousedown", menuHandler);

    return () => {
      document.removeEventListener("mousedown", menuHandler);
    };
  }, []);

>>>>>>> 654ef392ec8b0df5b9970a80d3f7e7b96d2e8bc3
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>Sahil</h1>
      </div>
      <div className="navButtons">
        <a
          href="https://linkedin.com/in/sahil-vani"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="talkButton">
            <FaArrowRight className="leftArrow" />
            let's talk
            <RxDotFilled className="dot" />
          </button>
        </a>
        <button onClick={() => setActive(!active)} className={menuButton}>
          <TiThMenu className="menu" />
        </button>
      </div>
<<<<<<< HEAD
      <div className={menuClass}>
=======
      <div className={menuClass} ref={menuRef}>
>>>>>>> 654ef392ec8b0df5b9970a80d3f7e7b96d2e8bc3
        <ul className="menuList">
          {menuOption.map((item) => (
            <a href={item.href} className={item.className} key={item.name}>
              <li className="listOption">{item.name}</li>
            </a>
          ))}
        </ul>
        <a
<<<<<<< HEAD
          href="https://drive.google.com/file/d/1h6QZpL2q0-hP2pfjuiSHWkPKMLscszl2/view?usp=sharing"
=======
          href="https://drive.google.com/file/d/1jIaItL8MLk4wC2umNs0xh6CiUUPbIUHL/view?usp=sharing"
>>>>>>> 654ef392ec8b0df5b9970a80d3f7e7b96d2e8bc3
          className="resume"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="resumeOption">
            RESUME <MdOutlineArrowOutward />
          </span>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
