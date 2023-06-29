import "./Home.scss";

import { WORKS_ROUTE } from "../../routes/const";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="home">
      <div className="hero">
        <h1 className="hero__title">Hey, I'am Raimonda</h1>
        <p className="hero__description">Take a look at my works</p>
        <div className="button-container">
          <Link className={"styled-button button-possition"} to={WORKS_ROUTE}>
            MY PROJECTS
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
