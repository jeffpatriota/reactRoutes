import { Link } from 'react-router-dom';

function Sobre() {
    return (
      <div>
        <h1>Nome: Jefferson Patriota</h1>
        <h2>Graduação: Análise e Desenvolvimento de Sistemas</h2><br/>
        <h3>Skills: Front-End Developer | ReactJS |  JavaScript | HTML | CSS |</h3> <br/> 
        <h4>Projeto simples em React utilizando rotas</h4><br/><br/>


        <Link to="/">Home</Link> <br/>
        <Link to="/contato">Contato</Link> 
      </div>
    );
  }
  
  export default Sobre;
  