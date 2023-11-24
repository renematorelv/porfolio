import React from "react";
import logo from "../img/Rolf_Logo.png"

export const AboutMe = (props) => {
  return (
    <div id="aboutMe">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <img src="img/aboutMe.jpg" className="img-responsive" alt="AboutMe" />
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="aboutMe-text">
              <h2>About Me</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <h3>Why choose me?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div>
              <img src={logo} className="img-logo" alt="logo"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
