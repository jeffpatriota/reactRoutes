import { Link } from 'react-router-dom';

function Home() {
    return (
      <div>
        <h1>Bem vindo a pagina HOME</h1>
        <h2>Estudando rotas</h2> 
        <h3>Projeto simples em React utilizando links e rotas, sem estilização css</h3> <br/> <br/>

        <Link to="/sobre">Sobre</Link><br/>
        <Link to="/contato">Contato</Link>
      </div>
    );
  }
  
  export default Home;
  