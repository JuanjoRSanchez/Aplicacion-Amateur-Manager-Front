import React from "react";
import { useRef } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";

import '../../assets/Styles/form.css'

export default function FormComponentPost(props) {
    const fecha_partido = useRef();
    
    const { idPena } = useParams();
    const idPenaInt = parseInt(idPena);
    const URL = "http://localhost:9011/partido/posteo/";

    const postFunction = async () => {
        let fechat = fecha_partido.current.value.split('T')[0];
        let horat = fecha_partido.current.value.split('T')[1];
        let body = {
            idPena: idPenaInt,
            fechaPartido: fechat + ' ' + horat
        }
        axios.post(URL, body).then((response) => {
            console.log(response.data)
        }).catch((err) => {
            console.log(err);
        });
    }

    return (
        <div className='form_box'>
            <form action="" className="form">
                <div className="titleContainer">
                    <h1 className="title">Datos del partido</h1>
                </div>
                <div className="inputContainer">
                    <label htmlFor="" className="label">Fecha:</label>
                    <input type="datetime-local" name="fecha" className="input" ref={fecha_partido} />
                </div>
                <div className="btnContainer">
                    <input type="submit" className="submitBtn" value="Añadir Partido" onClick={postFunction} />
                </div>
            </form>
            <div className="caja">

            </div>
        </div>
    )
}


/*
value={formValue.fecha}
value={formValue.marcadorBlanco}
value={formValue.marcadorNegro}

    const outFunction = (e) => {
        e.preventDefault()
        
        let dat = fecha_partido.current.value.split('T')[0];
        let hora = fecha_partido.current.value.split('T')[1];
        const fecha = dat  + ' ' + hora;
        //const fecha = fecha_partido.current.value;
        const marcadorB = marcador_blanco.current.value;
        const marcadorN = marcador_negro.current.value;

        alert(fecha + ' - ' + marcadorB + ' ' + marcadorN);
    }

     <div className="inputContainer">
                    <label htmlFor="" className="label">Marcador equipo blanco:</label>
                    <input type="text" name="marcadorBlanco" className="input" ref={marcador_blanco} />
                </div>
                <div className="inputContainer">
                    <label htmlFor="" className="label">Marcador equipo negro:</label>
                    <input type="text" name="marcadorNegro" className="input" ref={marcador_negro} />
                </div>

*/