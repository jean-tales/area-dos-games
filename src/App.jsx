import './App.css'
import Cabecalho from './componentes/Cabecalho/Cabecalho';
import Rodape from './componentes/Rodape/Rodape';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Roteador from './Roteador';

function App() {
  return (
    <>
    <Cabecalho/>
    <Roteador/>
    <Rodape/>
    <ToastContainer />
    </>
    
  )
}

export default App;
