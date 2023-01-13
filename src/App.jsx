import './app.css'
import React from "react";

import Card from './componentes/layout/card'
import Primeiro from './componentes/basicos/Primeiro'
import ComParametro from './componentes/basicos/ComParametro'
import Fragmento from './componentes/basicos/fragmentos';
import Aleatorio from "./componentes/basicos/Aleatorio";

export default (props) => {
    return (
        <div className="App">

                <h1>Fundamentos React (Arrow)</h1>

            <div className="cards">

                <Card titulo="#04-Desafio Props Aleatorio" color="#264653">
                    <Aleatorio min={1} max={60} />
                </Card>

                <Card titulo="#03-Fragmento" color="#2a9d8f">
                    <Fragmento />
                </Card>

                <Card titulo="#02-Com Parametro" color="#e9c46a">
                    <ComParametro
                        produto="Celular"
                        modelo="Iphone"
                        preco={3.689} />
                </Card>

                <Card titulo="#01-Primeiro Componente" color="#f4a261">
                    <Primeiro></Primeiro>

                </Card>

            </div>
        </div>
    )
}

