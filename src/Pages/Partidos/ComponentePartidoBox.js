import React from "react";

import '../../../src/assets/Styles/componentBox.css'
import '../../../src/assets/Styles/componentePartidoBox.css'
import { Link } from 'react-router-dom'


export default function ComponentPartidoBox(props) {
    let marcador = 'Resultado: ' + props.golesBlanco + ' : ' + props.golesNegro; 
   
    return (
        <div className='body_componentBox'>
            <Link to={`/partidoDetalle/${props.id}`}  className='tit'>Modificar</Link>
            <div className="boxPartido">
                <p>Fecha</p>
            <br/>
                {props.title}
                <br/>
                <p>Marcador</p>
            <br/>
                {marcador}
            </div>
        </div>
    )
}