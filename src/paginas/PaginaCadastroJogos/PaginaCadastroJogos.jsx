import "./PaginaCadastroJogos.css";
import Inicial from "../../componentes/Inicial/Inicial";
import InputCustomizado from "../../componentes/InputCustomizado/InputCustomizado";
import BotaoCusomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { buscarJogos, salvarJogo } from "../../servicos/jogos.servico";


function PaginaCadastroJogos(){
    const navigate = useNavigate();

  const [formJogo, setFormJogo] = useState({
    id: "",
    nomeJogo: "",
    dataLancamento: "",
    desenvolvedora: "",
    genero: "",
    tempoJogo: "",
    linkDownload: "",
  });

  const salvar = () => {
    salvarJogo(formJogo);
    alert("salvo com sucesso");
    console.log(formJogo);
    navigate('/lista-jogos');
  }





    return <Inicial voltarPara="/">
      <div className="PaginaCadastroJogos_hoot">
          <div className="PaginaCadastroJogos_input">
             <InputCustomizado label="jogo" value={formJogo.nomeJogo} onChange={(e) => setFormJogo({...formJogo,nomeJogo: e.target.value})}  maxLength={40}/>

             <InputCustomizado label="data de lançamento" type="date" value={formJogo.dataLancamento} onChange={(e) => setFormJogo({...formJogo, dataLancamento: e.target.value})}/>

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