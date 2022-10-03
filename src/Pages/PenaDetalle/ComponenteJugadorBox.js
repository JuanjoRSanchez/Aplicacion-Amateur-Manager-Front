import React from "react";

import '../../assets/Styles/componentBox.css'

export default function ComponenteJugadorBox(props) {


    return (
        <div className='body_componentBox'>
            <div className="boxComponent">
                {props.nombre}
            </div>
            <div>
                <fieldset>
                    <legend>Estado en la convocatoria: </legend>

                    <div>
                        <input type="radio" id="huey" name="drone" value="huey"
                            checked />
                        <label for="huey">Convocado</label>
                    </div>

                    <div>
                        <input type="radio" id="dewey" name="drone" value="dewey" />
                        <label for="dewey">No Convocado</label>
                    </div>

                    <div>
                        <input type="radio" id="louie" name="drone" value="louie" />
                        <label for="louie">Pendiente de convocatoria</label>
                    </div>
                </fieldset>
            </div>
            <div>
                <button >Eliminar</button>
            </div>
        </div>

    )
}