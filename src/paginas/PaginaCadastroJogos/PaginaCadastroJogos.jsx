import "./PaginaCadastroJogos.css";
import Inicial from "../../componentes/Inicial/Inicial";
import InputCustomizado from "../../componentes/InputCustomizado/InputCustomizado";


function PaginaCadastroJogos(){
    return <Inicial>
        
     <div className="PaginaCadastroJogos_root">

        <div className="PaginaCadastroJogos_input">

        <InputCustomizado label="jogo"/>

        <InputCustomizado label="ano de lançamento"/>

        <InputCustomizado/>

        <InputCustomizado/>

        <InputCustomizado/>

        <InputCustomizado/>
        </div>

     </div>

    </Inicial>

}

export default PaginaCadastroJogos;