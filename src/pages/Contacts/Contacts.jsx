import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "../../components/Button/Button";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import "./Contacts.scss";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Išsaugome duomenis į localStorage
    const user = { name, email, message };
    localStorage.setItem("userData", JSON.stringify(user));

    // Išvalome formos laukus po duomenų pateikimo
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact-page">
      <form className="contact-form" onSubmit={handleSubmit}>
        <div>
          <h2>Get In Touch</h2>
          <p>
            Fill in your info in the form below and I look forward to hearing
            from you!
          </p>
        </div>
        <div className="form-group">
          <label>Vardas</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label>Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <Button>Submit</Button>
        </div>
      </form>
      <div className="social-media-icons">
        <div>
          <p>Feeling social? Find me on these online spaces too!</p>
        </div>
        <div className="social-media-group">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://github.com/Munduks"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};
export default Contact;
