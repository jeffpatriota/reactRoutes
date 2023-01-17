import {BrowserRouter, Routes, Route} from 'react-router-dom';

// BrowserRouter vair ser onde vair ficar as rotas
// Routes sao as rotas e Route vai informar uma rota especifica



import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';

function RoutesApp (){
    return(
        <BrowserRouter>
        <Routes>
        {/* //path vai te informar o caminho "no caso / é o caminho Home"
        //e o element é o que redenriza "no caso eu chamei o <Home/> " */}
            <Route path='/' element={ <Home/> }/>  
            <Route path='/sobre' element={ <Sobre/> }/>  
            <Route path='/contato' element={ <Contato/> }/>  
        </Routes>                                  
        </BrowserRouter>
    )
}
export default RoutesApp;