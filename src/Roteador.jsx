import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PaginaInicial from './paginas/PaginaInicial/PaginaInicial';
import PaginaCadastroJogos from './paginas/PaginaCadastroJogos/PaginaCadastroJogos';
import PaginaListaJogos from './paginas/PaginaListaJogos/PaginaListaJogos';

const roteador = createBrowserRouter([
 {
   path: '',
   element: <PaginaInicial/>,
 },
 {
    path: 'cadastro-jogos/:id?',
    element: <PaginaCadastroJogos/>,
 },
 {
    path: 'lista-jogos',
    element: <PaginaListaJogos/>,
 }
 
]);


function Roteador(){
    return  <RouterProvider router={roteador} />;
}

export default Roteador;