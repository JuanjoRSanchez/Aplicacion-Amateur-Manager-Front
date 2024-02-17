import React from "react";
import { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom"
import axios from "axios";
import ComponenteJugadorBox from "../PenaDetalle/ComponenteJugadorBox";
import '../../assets/Styles/form.css'

export default function FormComponentPutJugador(props) {
    const [status, setStatus] = useState('');
    const marcador_blanco = useRef();
    const marcador_negro = useRef();
    const idPartido = props.idPartido;
    const idPena = props.idPena;

    const [marcadorB, setMarcadorB] = useState('');
    const [marcadorN, setMarcadorN] = useState('');
    const [jugadores, setJugadores] = useState([]);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/inicio/penaDetalleGate/pj/partidos/' + idPena;

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

    }, [baseURL]);

    const putFunction = (e) => {
        e.preventDefault();
        const body = {
            resultadoBlanco: marcadorB,
            resultadoNegro: marcadorN
        };
        axios.put("http://localhost:9011/partido/update/" + idPartido, body)
            .then((response) => {
                setStatus(response.status);
                if (response.status === 200) {
                    alert('El usuario se ha modificado con exito');
                    navigate(from, { replace: true });
                }
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
                    <label htmlFor="marcadorBlanco" className="label">Marcador equipo blanco:</label>
                    <input
                        type="text"
                        name="marcadorBlanco"
                        className="input"
                        ref={marcador_blanco}
                        onChange={(e) => setMarcadorB(e.target.value)}
                    />
                </div>
                <div className="inputContainer">
                    <label htmlFor="marcadorNegro" className="label">Marcador equipo negro:</label>
                    <input
                        type="text"
                        name="marcadorNegro"
                        className="input"
                        ref={marcador_negro}
                        onChange={(e) => setMarcadorN(e.target.value)}
                    />
                </div>
                <div className="btnContainer">
                    <button type="submit" className="submitBtn" value="Actualizar">Actualizar</button>
                </div>
                {status && status}
            </form>
            <div className='principal_boxComponent'>
                {jugadores.map((jugador, index) => {
                    return <ComponenteJugadorBox nombre={jugador.nombre} key={index} />
                })}
            </div>
            <div>
                <button type='button' className='btnBorrarPartido'>Borrar partido</button>
            </div>
        </div>
    )
}

/*
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
*/