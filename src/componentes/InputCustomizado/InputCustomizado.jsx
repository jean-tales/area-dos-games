import "./InputCustomizado.css";


function InputCustomizado(props){
    return <div className="InputCustomizado_root">
        <span className="label">
            {props.label}
        </span>
        <input {...props} className="InputCustomizado_input"/>

    </div>
}

export default InputCustomizado;