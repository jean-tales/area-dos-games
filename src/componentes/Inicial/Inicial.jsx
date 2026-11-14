import { Link } from "react-router-dom";
import "./Inicial.css";

function Inicial(props){
    return <main className="Inicial_root">
        <div className="Inicial_tituloBotao">
      {props.voltarPara && <Link to={props.voltarPara}> <button>voltar</button> </Link>} 

      <h2>{props.titulo}</h2>
    </div>

        {props.children}

    </main>

}

export default Inicial;