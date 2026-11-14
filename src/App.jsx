import './App.css'
import Cabecalho from './componentes/Cabecalho/Cabecalho';
import Rodape from './componentes/Rodape/Rodape';
import PaginaCadastroJogos from './paginas/PaginaCadastroJogos/PaginaCadastroJogos';
import PaginaInicial from './paginas/PaginaInicial/PaginaInicial';
import Roteador from './Roteador';

function App() {
  return (
    <>
    <Cabecalho/>
    <Roteador/>
    <Rodape/>
    </>
    
  )
}

export default App;
