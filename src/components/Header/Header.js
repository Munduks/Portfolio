import { Link } from "react-router-dom";
import { navbarItems } from "../../routes/const";
import "./Header.scss";
import { VscSettings } from "react-icons/vsc";

const Header = () => {
  return (
    <header className="headerStyle">
      <div className="logo">
        <Link to="/">
          <p>
            <VscSettings />
            <span className="initialStyle">Raimonda Stonkutė</span>
          </p>
        </Link>
      </div>
      <nav>
        <div className="navbarSection">
          {navbarItems.map((navItem) => (
            <Link to={navItem.route} key={navItem.title}>
              {navItem.title}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
