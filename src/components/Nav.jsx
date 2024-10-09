import React from "react";
import { Link } from "react-scroll";
import logo from "../img/Rolf_Logo.png";
import CV from "../assets/CV.pdf";

export const Nav = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <a href="#page-top">
            <img src={logo} className="img-logoNav" alt="logo" />
          </a>
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            Portfolio
          </a>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link
                to="skills"
                spy={true}
                smooth={true}
                duration={500}
                className="page-scroll"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="aboutMe"
                spy={true}
                smooth={true}
                duration={500}
                className="page-scroll"
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                className="page-scroll"
              >
                Contact
              </Link>
            </li>
            <li>
              <a
                href={CV}
                download="Rene Matorel - Front-end Developer"
                rel="noreferrer"
                target="_blank"
                className="text-sm font-medium text-white rounded-lg p-1.5 px-4 bg-blue-500 ease-in duration-300 hover:bg-[#0cbeff] active:bg-[#0cbeff]"
              >
                DOWNLOAD CV
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
