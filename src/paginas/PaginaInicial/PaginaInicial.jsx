import BotaoCustomizado from '../../componentes/BotaoCustomizado/BotaoCustomizado';
import Inicial from '../../componentes/Inicial/Inicial';
import './PaginaInicial.css';

import { useNavigate } from 'react-router-dom';

function PaginaInicial(){
      const navigate = useNavigate();

    return <Inicial>
       <div className='Principal_root'>
        <h2>área dos games</h2>
        <BotaoCustomizado tipo="primario" aoClicar={() => navigate('cadastro-jogos')}>inserir um jogo</BotaoCustomizado>
        <BotaoCustomizado tipo="primario"  aoClicar={() => navigate('lista-jogos')}>lista de jogos</BotaoCustomizado>
       </div>
    </Inicial>
}

export default PaginaInicial;