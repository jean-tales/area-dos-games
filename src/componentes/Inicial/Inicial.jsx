import { Link } from "react-router-dom";
import "./Inicial.css";
import { BsArrowLeftCircleFill } from "react-icons/bs";

function Inicial(props){
    return <main className="Inicial_root">
        <div className="Inicial_tituloBotao">
      {props.voltarPara && <Link to={props.voltarPara}> <BsArrowLeftCircleFill size={30} color="#266bec" /> </Link>} 

      <h2>{props.titulo}</h2>
    </div>

        {props.children}

    </main>

}

export default Inicial;