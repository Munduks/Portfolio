import { Link } from "react-router-dom";
import { CONTACTS_ROUTE } from "../../routes/const";
import "./About.scss";

const About = () => {
  return (
    <div className="about-page">
      <h2 className="title-container">
        <span className="heading">About me</span>
        <span className="heading-subject ">
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
        </span>
      </h2>
      <div className="about-content">
        <div className="main-content">
          <h3 className="content-title">Get to know me!</h3>
          <div>
            <p>
              Hi! I'm Raimonda, junior frontend web Developer building the
              Front-end of Websites and Web Applications that leads to the
              success of the overall product.
            </p>
            <p>
              I'm open to Job opportunities where I can contribute, learn and
              grow. If you have a good opportunity that matches my skills and
              experience then don't hesitate to contact me.
            </p>
            <Link
              className={"styled-button button-possition"}
              to={CONTACTS_ROUTE}
            >
              CONTACT
            </Link>
          </div>
        </div>
        <div className="main-content">
          <h3 className="content-title">My skills</h3>
          <div className="skills-content">
            <div className="skills">CCS</div>
            <div className="skills">HTML</div>
            <div className="skills">REACT</div>
            <div className="skills">JavaSpript</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
