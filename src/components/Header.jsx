import React from "react";
import photo from "../img/photo.jpg"

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text" style={{marginTop: "-15em", marginBottom: "1em", paddingBottom: "8em"}}>
                <h1>
                  {props.data ? props.data.title : "Loading"}
                </h1>
                <img className="photo" src={photo} alt="Beautiful landscape"/>
                <a href="#skills" className="btn btn-learnMore btn-lg page-scroll">
                  know me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
