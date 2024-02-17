import React, { useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom"
import { useState } from "react";
import axios from "axios";
import '../../assets/Styles/form.css'
import '../JugadorNuevo/formComponentJugador.css'
import Header from '../GeneralComponents/Header/Header'
import Footer from '../GeneralComponents/Footer/Footer'
import { useParams } from "react-router-dom";

export default function JugadorDetalle(props) {
    const id = useParams(); 
    const idJugador = id.idJugador;
    const idPena = id.idPena;
    console.log('useParams idJugador: ' + id.idJugador + ' + idPena: ' + idPena)
    const idJugadorInt = parseInt(id.idJugador);

    const [nombre, setNombre] = useState('');
    const [edad, setEdad] = useState();
    const [direccion, setDireccion] = useState();
    const [telefono, setTelefono] = useState();
    const [pass, setPass] = useState();

    const [datosJugador, setDatosJugador] = useState({});

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/inicio/penaDetalleGate/pj/jugadores/' + idPena ;

    let nombreRef = useRef();
    let edadRef = useRef();
    let direccionRef = useRef();
    let telefonoRef = useRef();
    let passRef = useRef();

    const baseURL = "http://localhost:9011/jugador/" + idJugadorInt;

    useEffect(() => {
        const getFunction = () => {
            axios.get(baseURL).then((response) => {
                let jsonResponse = JSON.stringify(response.data);
                setDatosJugador(JSON.parse(jsonResponse) );
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

    const baseURLPUT = "http://localhost:9011/jugador/update";
    const putFunction = (e) => {
        e.preventDefault();
        const body = {
            idJugador: idJugador,
            nombre,
            edad,
            direccion,
            telefono,
            pass,
        };
        axios.post(baseURLPUT, body)
            .then((response) => {
                console.log(response.data)
                if(response.data === 1){
                    alert('El usuario se ha modificado con exito');
                    navigate(from, { replace: true });
                }
            }).catch((error) => {
                console.log(error)
            })
    }
    return (
        <>
            <Header />
            <div className='formPartido_box'>
                <form onSubmit={putFunction} className="form">
                    <div className="titleContainer">
                        <h1 className="title">Datos del jugador</h1>
                    </div>
                    <div className="inputContainer">
                        <label htmlFor="" className="label">Nombre:</label>
                        <input
                            type="text"
                            name="nombre"
                            className="input"
                            ref={nombreRef}
                            placeholder={datosJugador.nombre}
                            onChange={(e) => setNombre(e.target.value)}
                        />
                    </div>
                    <div className="inputContainer">
                        <label htmlFor="" className="label">Edad:</label>
                        <input
                            type="text"
                            name="edad"
                            className="input"
                            ref={edadRef}
                            placeholder={datosJugador.edad}
                            onChange={(e) => setEdad(e.target.value)}
                        />
                    </div>
                    <div className="inputContainer">
                        <label htmlFor="" className="label">Dirección:</label>
                        <input
                            type="text"
                            name="direccion"
                            className="input"
                            ref={direccionRef}
                            placeholder={datosJugador.direccion}
                            onChange={(e) => setDireccion(e.target.value)}
                        />
                    </div>
                    <div className="inputContainer">
                        <label htmlFor="" className="label">Teléfono:</label>
                        <input
                            type="text"
                            name="telefono"
                            className="input"
                            ref={telefonoRef}
                            placeholder={datosJugador.telefono}
                            onChange={(e) => setTelefono(e.target.value)}
                        />
                    </div>
                    <div className="inputContainer">
                        <label htmlFor="" className="label">Password:</label>
                        <input
                            type="text"
                            name="pass"
                            className="input"
                            ref={passRef}
                            placeholder={datosJugador.pass}
                            onChange={(e) => setPass(e.target.value)}
                        />
                    </div>
                    <div className="btnContainer">
                        <button type="submit" className="submitBtn" value="Actualizar">Actualizar</button>
                    </div>
                </form>
                <div className="boxBtn_borrar">
                    <button type='button' className='btnBorrarPartido'>Borrar partido</button>
                </div>
            </div>
            <Footer />
        </>
    )
}

/*
let nombreRef = useRef();
    let edadRef = useRef();
    let direccionRef = useRef();
    let telefonoRef = useRef();
    let passRef = useRef();
*/