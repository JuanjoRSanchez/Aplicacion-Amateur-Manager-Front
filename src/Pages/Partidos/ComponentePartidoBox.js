import React from "react";

import '../../../src/assets/Styles/componentBox.css'
import '../../../src/assets/Styles/componentePartidoBox.css'
import { Link } from 'react-router-dom'


export default function ComponentPartidoBox(props) {
    let marcador = 'Resultado: ' + props.golesBlanco + ' : ' + props.golesNegro; 
    console.log('props.id: ' + props.id + ' props.idPena: '  + props.idPena)
   
    return (
        <div className='body_componentBox'>
            <Link to={`/inicio/penaDetalleGate/pg/partidoDetalle/${props.id}/${props.idPena}`}  className='tit'>Modificar</Link>
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