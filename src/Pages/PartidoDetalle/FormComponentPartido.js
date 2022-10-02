import React from "react";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import ComponenteJugadorBox from "../PenaDetalle/ComponenteJugadorBox";
import '../../assets/Styles/form.css'

export default function FormComponentPutJugador(props) {
    const [status, setStatus] = useState('');
    const marcador_blanco = useRef();
    const marcador_negro = useRef();
    const idPartido = parseInt(props.id);

    const [marcadorB, setMarcadorB] = useState('');
    const [marcadorN, setMarcadorN] = useState('');
    const [jugadores, setJugadores] = useState([]);

    const baseURL = "http://localhost:9011/jugador/all/1";

    useEffect(() => {
        const getFunction = () => {
            axios.get(baseURL).then((response) => {
                setJugadores(response.data);
            }).catch(function (error) {
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log('Error', error.message);
                }
                console.log(error.config);
            });
        }
       getFunction();

    }, [baseURL, jugadores]);

    const putFunction = () => {
        const body = {
            resultadoBlanco: marcadorB,
            resultadoNegro: marcadorN
        };
        axios.put("http://localhost:9011/partido/update/" + idPartido, body)
            .then((response) => {
                setStatus(response.status);
                console.log(response.data)
            }).catch((error) => {
                console.log(error)
            })
    }

    return (
        <div className='formPartido_box'>
            <form onSubmit={putFunction} className="form">
                <div className="titleContainer">
                    <h1 className="title">Datos del partido</h1>
                </div>
                <div className="inputContainer">
                    <label htmlFor="" className="label">Marcador equipo blanco:</label>
                    <input
                        type="text"
                        name="marcadorBlanco"
                        className="input"
                        ref={marcador_blanco}
                       onChange={(e) => setMarcadorB(e.target.value)}
                    />
                </div>
                <div className="inputContainer">
                    <label htmlFor="" className="label">Marcador equipo negro:</label>
                    <input
                        type="text"
                        name="marcadorNegro"
                        className="input"
                        ref={marcador_negro}
                        onChange={(e) => setMarcadorN(e.target.value)}
                    />
                </div>
                <div className="inputContainer">
                    <label htmlFor="" className="label">Añadir jugadores:</label>
                    <select name="select">
                        {              
                                jugadores.map((jugador, index) => {
                                    return (
                                       
                                          <option value="value1" key={index}>{jugador.nombre}</option>                                   
                                    )                                                               
                                })              
                        }
                    </select>
                </div>
                <div className="btnContainer">
                    <input type="submit" className="submitBtn" value="Actualizar" />
                </div>
                {status && status}
            </form>
            <div className='principal_boxComponent'>
                    {jugadores.map((jugador, index) => {
                        return <ComponenteJugadorBox nombre={jugador.nombre}/>                                           
                    })}
                </div>
            
        </div>
    )
}

