import React from "react";
import "./projectPage.scss";

import StyleUp from "../../assets/projects/styleUp.png";
import ContextAPI from "../../assets/projects/contextAPI.png";
import CurrencyConverter from "../../assets/projects/currencyConverter.png";
import ToDo from "../../assets/projects/ToDoList.png";
import PasswordGenerator from "../../assets/projects/passwordGenerator.png";
import Router from "../../assets/projects/routerv6.2.png";
import Movix from "../../assets/projects/movix.png";
import Sushiman from "../../assets/projects/sushiman.png";
import MegaProject from "../../assets/projects/mega-project.png";
import EasyBlog from "../../assets/projects/easy-blog(1).png";
import Contacts from "../../assets/projects/contactsLibrary.png";

import { MdOutlineArrowOutward } from "react-icons/md";

function ProjectPage() {
  const ShortImage = [
    {
      name: "Web App for Router V6.4",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore corporis fugiat distinctio tempora sint doloremque repudiandae cumque nostrum possimus inventore architecto!",
      image: Router,
    },
    {
      name: "To-Do List",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore corporis fugiat distinctio tempora sint doloremque repudiandae cumque nostrum possimus inventore architecto!",
      image: ToDo,
    },
    {
      name: "Contact Library",
      description:
        "For the development of this website, I used Vite for the frontend as well as Appwrite for the backend. Through YouTube, I was able to create this blog application titled as Chai aur code. This website taught me how to make production-grade applications, authentication, an industry standard for web applications, and many other things.",
      image: Contacts,
      link: "https://contacts-library.vercel.app/",
    },
    {
      name: "Password Generator",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore corporis fugiat distinctio tempora sint doloremque repudiandae cumque nostrum possimus inventore architecto!",
      image: PasswordGenerator,
    },
    {
      name: "Currency Converter",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore corporis fugiat distinctio tempora sint doloremque repudiandae cumque nostrum possimus inventore architecto!",
      image: CurrencyConverter,
    },
    {
      name: "To-Do List with Context API",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore corporis fugiat distinctio tempora sint doloremque repudiandae cumque nostrum possimus inventore architecto!",
      image: ContextAPI,
    },
  ];
  const LargeImage = [
    {
      name: "Movie finding website",
      description:
        "My frontend is Vite and my information database for movies and TV shows is TMDB. In the entire project I had learned API calling and Javascript concepts. This project made my concept clear about production grade. I used to learn to make this type of application with the help of YouTube. ",
      image: Movix,
      link: "https://movix-81o6.vercel.app/",
    },

    {
      name: "A Blogging Site",
      description:
        "I have remade this website for the purpose of practicing. Below is the original website that I created through YouTube. As a result of my efforts, I have been able to develop this blog application. ",
      image: EasyBlog,
      link: "https://easy-blog-five.vercel.app/",
    },
    {
      name: "A Blog Site with Appwrite",
      description:
        "For the development of this website, I used Vite for the frontend as well as Appwrite for the backend. Through YouTube, I was able to create this blog application titled as Chai aur code. This website taught me how to make production-grade applications, authentication, an industry standard for web applications, and many other things.",
      image: MegaProject,
      link: "https://mega-project-gamma.vercel.app/",
    },
    {
      name: "Sushi ordering page",
      description:
        "Sushiman is a small, static website. In order to learn how react works, I made this website when I first began learning react. At that time, I discovered a tutorial on YouTube and began working on it. I improved my React skills and learned how to use the Node Package Manager for animations through this website.",
      image: Sushiman,
      link: "https://sushiman-iota.vercel.app/",
    },
    {
      name: "Clone of Landing Page of Clothing Site ",
      description:
        "This website's landing page is a copycat of a website for an Indian clothing brand called Style Up, which is the website for the company. By creating my own website, I intended to practice my front end skills as well as improve my frontend skills.",
      image: StyleUp,
    },
  ];
  return (
    <section id="project" className="projectPage">
      <h1 className="contentHeading">PROJECT SHOWCASES</h1>
      <div className="projects">
        {LargeImage.map((image) => (
          <a
            href={image.link}
            key={image.name}
            className="webLink"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="card1">
              <div className="webImage">
                <img src={image.image} />
              </div>
              <div className="details">
                <h3> {image.name}</h3>
                <p>{image.description}</p>
                <p className="visitLink">
                  Click to visit <MdOutlineArrowOutward />
                </p>
              </div>
            </div>
          </a>
        ))}
        {/* {ShortImage.map((image) => (
          <div className="card2" key={image.name}>
            <img src={image.image} />
            <div className="details">
              <h3> {image.name}</h3>
              <p>{image.description}</p>
            </div>
          </div>
        ))} */}
      </div>
    </section>
  );
}

export default ProjectPage;
