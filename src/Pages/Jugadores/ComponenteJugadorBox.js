import { Link } from "react-router-dom";

export default function ComponenteJugadorBox(props) {

    return (
        <>
            <div className='body_componentBox'>
                <Link to={`/inicio/penaDetalleGate/pj/jugadorDetalle/${props.idJugador}/${props.idPena}`} className='tit'>Modificar</Link>
                <div className="boxPartido">
                    <p>Fecha</p>
                    <br />
                    <p>{props.id}</p>
                    <p>Nombre:</p>
                    {props.title}
                    <br />

                </div>
            </div>
        </>
    )
}