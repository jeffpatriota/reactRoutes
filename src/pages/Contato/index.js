import { Link } from 'react-router-dom';

function Contato() {
    return (
      <div>
        <h1>Contatos</h1>
        <h2>Email: jefferson.patriota@outlook.com</h2>
        <h2>WhatsApp: (11) 93947-0583 </h2> 
        <h2>LinkdIn: https://www.linkedin.com/in/jefferson-patriota/</h2>
        <h2>GitHub: https://github.com/jeffpatriota</h2> <br/> <br/>

        <Link to="/">Home</Link> <br/>
        <Link to="/sobre">Sobre</Link> 
      </div>
    );
  }
  
  export default Contato;
  