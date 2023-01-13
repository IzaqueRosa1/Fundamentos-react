import React from "react"

export default function ComParametro(props){
    console.log(props)
    return (
        <div>
            <h2>{props.produto}</h2>
            <h3>{props.modelo}</h3>
            <p>{props.preco}</p>
        </div>
    )
}