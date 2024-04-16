import React, { useState, useRef, useEffect } from "react";
import "./navbar.scss";
import { RxDotFilled } from "react-icons/rx";
import { FaArrowRight } from "react-icons/fa6";
import { MdOutlineArrowOutward } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";

function Navbar() {
  let menuButton, menuClass;
  const menuRef = useRef();

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

  const [active, setActive] = useState(false);

  if (!active) {
    menuClass = "display";
    menuButton = "menuButton";
  } else {
    menuClass = "option";
    menuButton = "menuButton rotate";
  }

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
      <div className={menuClass} ref={menuRef}>
        <ul className="menuList">
          {menuOption.map((item) => (
            <a href={item.href} className={item.className} key={item.name}>
              <li className="listOption">{item.name}</li>
            </a>
          ))}
        </ul>
        <a
          href="https://drive.google.com/file/d/1jIaItL8MLk4wC2umNs0xh6CiUUPbIUHL/view?usp=sharing"
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
