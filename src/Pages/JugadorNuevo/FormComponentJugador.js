import React from "react";
import { useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom"
import axios from "axios";
import '../../assets/Styles/form.css'
import './formComponentJugador.css'

export default function FormComponentPutJugador(props) {
    const id = useParams();
    const idPena = id.idPena;
    const [nombre, setNombre] = useState('');
    const [edad, setEdad] = useState();
    const [direccion, setDireccion] = useState();
    const [telefono, setTelefono] = useState();
    const [pass, setPass] = useState();

    const baseURL = "http://localhost:9011/jugador/add";


    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/inicio/penaDetalleGate/pj/jugadores/' + idPena ;

    const postFunction = () => {
        const body = {
            nombre,
            edad,
            direccion,
            telefono,
            pass,
            idPena
        };
        axios.post(baseURL , body)
            .then((response) => {
                if(response.data === 1){
                    alert('Se añadió el jugador correctamente')
                    console.log(response.data)
                    navigate(from, { replace: true });
                }
                
            }).catch((error) => {
                console.log(error)
            })
    }
    return (
        <div className='formPartido_box'>
            <form onSubmit={postFunction} className="form">
                <div className="titleContainer">
                    <h1 className="title">Datos del jugador</h1>
                </div>
                <div className="inputContainer">
                    <label htmlFor="" className="label">Nombre:</label>
                    <input
                        type="text"
                        name="nombre"
                        className="input"
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>
                <div className="inputContainer">
                    <label htmlFor="" className="label">Edad:</label>
                    <input
                        type="text"
                        name="edad"
                        className="input"
                        onChange={(e) => setEdad(e.target.value)}
                    />
                </div>
                <div className="inputContainer">
                    <label htmlFor="" className="label">Dirección:</label>
                    <input
                        type="text"
                        name="direccion"
                        className="input"
                        onChange={(e) => setDireccion(e.target.value)}
                    />
                </div>
                <div className="inputContainer">
                    <label htmlFor="" className="label">Teléfono:</label>
                    <input
                        type="text"
                        name="telefono"
                        className="input"
                        onChange={(e) => setTelefono(e.target.value)}
                    />
                </div>
                <div className="inputContainer">
                    <label htmlFor="" className="label">Password:</label>
                    <input
                        type="text"
                        name="pass"
                        className="input"
                        onChange={(e) => setPass(e.target.value)}
                    />
                </div>
                <div className="btnContainer">
                    <button type="submit" className="submitBtn" value="Actualizar">Crear jugador</button> 
                </div>
            </form>
            <div className="boxBtn_borrar">
                <button type='button' className='btnBorrarPartido'>Borrar partido</button>
            </div>
        </div>
    )
}

