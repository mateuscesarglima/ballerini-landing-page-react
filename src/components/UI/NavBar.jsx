import logo from "../../img/logo.svg";
import './NavBar.css'

const NavBar = () => {
  return (
    <header className="header">
      <img src={logo} alt="logo site" />
      <nav className="navBar">
        <a href="https://discord.gg/wagxzStdcR">Comunidade Ballerini</a>
        <a href="https://www.youtube.com/watch?v=llF6vD-RljE&t=3337s">Tutorial</a>
        <a href="#">Open Source</a>
        <a href="#">Comandos</a>
      </nav>
    </header>
  );
};

export default NavBar;
