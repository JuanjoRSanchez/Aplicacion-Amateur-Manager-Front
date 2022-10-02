import { Link } from "react-router-dom";

export default function ComponenteJugadorBox(props){


    return(
        <>
         <div className='body_componentBox'>
            <Link to={`/partidoDetalle/${props.id}`}  className='tit'>Modificar</Link>
            <div className="boxPartido">
                <p>Fecha</p>
            <br/>
            <p>Nombre:</p>
                {props.title}
                <br/>
               
            </div>
</div>
        </>
    )
}