import botImg from "../../img/balleBot.svg";
import Button from "./Button";
import "./Main.css";

const Main = () => {
  return (
    <main className="content">
      <section className="main-content">
        <div>
          <h1>Balle Bot</h1>
          <h2>Deixe a sua comunidade segura de um jeito fácil</h2>
          <Button>Me adicione!</Button>
        </div>
        <img src={botImg} alt="Balle Bot imagem" />
      </section>
      <section className="secondary-content">
        <h3>O que ela faz por você?</h3>
        <p>
          1. Cria um <span>sistema de verificação capcha</span> para novos
          membros garantirem que não são robôs
        </p>
        <p>
          2. Possui um <span>sistema de banimento automático</span> para links
          suspeitos que forem enviados na comunidade
        </p>
        <p>
          3. <span>Sistema de avisos e banimento manual</span>, para pessoas
          administradoras utilizarem
        </p>
      </section>
    </main>
  );
};

export default Main;
