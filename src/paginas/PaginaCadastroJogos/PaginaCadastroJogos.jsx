import "./PaginaCadastroJogos.css";
import Inicial from "../../componentes/Inicial/Inicial";
import InputCustomizado from "../../componentes/InputCustomizado/InputCustomizado";
import BotaoCusomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";


function PaginaCadastroJogos(){
    const navigate = useNavigate();

  const [formJogo, setFormJogo] = useState({
    id: "",
    nomeJogo: "",
    anoLancamento: "",
    desenvolvedora: "",
    genero: "",
    tempoJogo: "",
    linkDownload: "",
  });

  const salvar = () => {}





    return <Inicial voltarPara="/">
      <div className="PaginaCadastroJogos_hoot">
          <div className="PaginaCadastroJogos_input">
             <InputCustomizado label="jogo" value={formJogo.nomeJogo} onChange={(e) => setFormJogo({...formJogo,nomeJogo: e.target.value})}  maxLength={40}/>

             <InputCustomizado label="ano de lançamento" value={formJogo.anoLancamento} onChange={(e) => setFormJogo({...formJogo, anoLancamento: e.target.value})}/>

             <InputCustomizado label="desenvolvedora" value={formJogo.desenvolvedora} onChange={(e) => setFormJogo({...formJogo, desenvolvedora: e.target.value})}/>

             <InputCustomizado label="gênero" value={formJogo.genero} onChange={(e) => setFormJogo({...formJogo,genero: e.target.value})}/>

             <InputCustomizado label="tempo de jogo" value={formJogo.tempoJogo} onChange={(e) => setFormJogo({...formJogo, tempoJogo: e.target.value})}/>

             <InputCustomizado label="link para download" value={formJogo.linkDownload} onChange={(e) => setFormJogo({...formJogo, linkDownload: e.target.value})}/>

               <div className="salvar">
                  <BotaoCusomizado aoClicar={salvar}>salvar</BotaoCusomizado>
               </div> 
          </div>
      </div>
    </Inicial>

}

export default PaginaCadastroJogos;