import "./card.css";
import React from "react";

export default props => {

    const estilo = {
        backgroundColor: props.color || '#F00',
        borderColor: props.color || '#F00',
    }

    return <div className="card" style={estilo}>
        <div className="titulo">{props.titulo}</div>
        <div className="conteudo">{props.children}</div>
    </div>

}