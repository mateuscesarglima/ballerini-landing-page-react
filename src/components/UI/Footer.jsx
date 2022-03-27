import balleriniLogo from "../../img/ballerini.svg";
import "./Footer.css"

const Footer = ({ children }) => {
  return (
    <footer className="footer">
      <img src={balleriniLogo} alt="Logo ballerini" />
    </footer>
  );
};

export default Footer;
