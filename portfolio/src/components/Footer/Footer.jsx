import "./Footer.scss";

const Footer = () => {
  const currentDate = new Date().getFullYear(); //datos apskaiciavimas

  return (
    <footer className="footerStyle">
      <p>© Raimonda Stonkutė {currentDate}</p>
    </footer>
  );
};

export default Footer;
