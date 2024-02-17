import React from "react";

import '../../assets/Styles/componentBox.css'

export default function ComponenteJugadorBox(props) {
    return (
        <div className='body_componentBox'>
            <div className="titleBox">
                {props.nombre}
            </div>
            <div>
                <fieldset>
                    <legend>Estado en la convocatoria: </legend>
                    <div>
                        <input type="radio" id="huey" name="drone" value="Convocado"
                            defaultChecked={true} />
                        <label htmlFor="huey">Convocado</label>
                    </div>

                    <div>
                        <input type="radio" id="dewey" name="drone" value="No Convocado" />
                        <label htmlFor="dewey">No Convocado</label>
                    </div>

                    <div>
                        <input type="radio" id="louie" name="drone" value="Pendiente de convocatoria" />
                        <label htmlFor="louie">Pendiente de convocatoria</label>
                    </div>
                </fieldset>
            </div>
            <div>
                <button >Eliminar</button>
            </div>
        </div>

    )
}