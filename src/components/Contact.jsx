import emailjs from "emailjs-com";
import React from "react";
import Swal from 'sweetalert2';
import { useEffect, useState} from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

const initialState = {
  name: "",
  email: "",
  message: "",
};

export const Contact = (props) => {
  const [formData, setFormData] = useState(initialState);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const firebaseConfig = {
        apiKey: process.env.REACT_APP_API_KEY,
        authDomain: process.env.REACT_APP_AUTHDOMAIN,
        projectId: process.env.REACT_APP_PROJECTID,
        storageBucket: process.env.REACT_APP_STORAGEBUCKET,
        messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
        appId: process.env.REACT_APP_APPID,
        measurementId: process.env.REACT_APP_MEASUREMENTID
      };

      initializeApp(firebaseConfig);

      const db = getFirestore();
      const miColeccion = collection(db, 'info');
      const consulta = await getDocs(miColeccion);
      const datosArray = [];

      consulta.forEach((doc) => {
        datosArray.push({
          id: doc.id,
          ...doc.data(),
        });
      });

      setData(Object.values(datosArray));
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const clearForm = () => {
    setFormData({ initialState });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData.name, formData.email, formData.message);
    emailjs
      .sendForm("service_renedwhval", "template_g74csvk", e.target, "y-HqnzXattLojA8_M")
      .then(
        (result) => {
          clearForm();
          Swal.fire({
            icon: 'success',
            title: 'Email sent correctly',
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
    {console.log(process.env.REACT_APP_API_KEY, "y", process.env.REACT_APP_API_KEY_PROD)}
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Contact me</h2>
                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
              </div>
              <form name="sentMessage" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-primary btn-lg">
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span>
                {data[0] ? data.map((dataItem) => ( dataItem.address)): "Loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{" "}
                {data[0] ? data.map((dataItem) => ( dataItem.phone)): "Loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {data[0] ? data.map((dataItem) => ( dataItem.email)): "Loading"}
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.linkedin : "/"} target="blank">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.github : "/"} target="blank">
                      <i className="fa fa-github"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2023 Rene Alejandro Matorel Vega
          </p>
        </div>
      </div>
    </div>
  );
};
