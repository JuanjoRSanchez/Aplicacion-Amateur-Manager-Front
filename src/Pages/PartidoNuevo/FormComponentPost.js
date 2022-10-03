import React from "react";
import { useRef } from "react";
import {  useParams } from 'react-router-dom';
import { useNavigate, useLocation } from "react-router-dom"
import axios from "axios";

import '../../assets/Styles/form.css'

export default function FormComponentPost(props) {
    const fecha_partido = useRef();
    
    const { idPena } = useParams();
    const idPenaInt = parseInt(idPena);
    const URL = "http://localhost:9011/partido/add/";

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/partidos/' + idPena;

    const postFunction = async (event) => {
        event.preventDefault ();
        let fechat = fecha_partido.current.value.split('T')[0];
        let horat = fecha_partido.current.value.split('T')[1];
        let body = {
            idPena: idPenaInt,
            fechaPartido: fechat + ' ' + horat 
        }
        axios.post(URL, body)
        .then((response) => {
            navigate(from, { replace: true });
        }).catch((err) => {
            console.log(err);
        });
    }
    return (
        <div className='form_box'>
            <form  onSubmit={postFunction} className="form">
                <div className="titleContainer">
                    <h1 className="title">Datos del partido</h1>
                </div>
                <div className="inputContainer">
                    <label htmlFor="" className="label">Fecha:</label>
                    <input type="datetime-local" name="fecha" className="input" ref={fecha_partido} />
                </div>
                <div className="btnContainer">
                    <input type="submit" className="submitBtn" value="Añadir Partido" />
                </div>
            </form>
            <div className="caja">

            </div>
        </div>
    )
}

/*
<div className='nuevoBox'>
    <Link to={`/partidos/${idPena}`} >Añadir nueva Peña</Link>
</div>
*/