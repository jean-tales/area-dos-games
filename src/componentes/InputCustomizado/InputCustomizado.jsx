import "./InputCustomizado";


function InputCustomizado(props){
    return <div className="InputCustomizado_root">
        <span>
            {props.label}
        </span>
        <input {...props} className="InputCustomizado_input"/>

    </div>
}

export default InputCustomizado;