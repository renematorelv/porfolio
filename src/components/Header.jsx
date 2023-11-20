import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text" style={{marginTop: "-10em", marginBottom: "2em"}}>
                <h1>
                  {props.data ? props.data.title : "Loading"}
                </h1>
                <p style={{marginTop: "3em"}}>{props.data ? props.data.paragraph : "Loading"}</p>
                <a href="#features" className="btn btn-learnMore btn-lg page-scroll">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
