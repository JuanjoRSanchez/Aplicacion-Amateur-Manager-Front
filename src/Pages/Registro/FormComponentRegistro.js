import React, { useEffect, useState, useContext, useRef } from "react";
import axios from "axios";
import AuthContext from '../../context/AuthProvider';
import { Link } from 'react-router-dom';

import '../../assets/Styles/form.css'
import '../../assets/Styles/FormComponentRegistro.css'
import '../../assets/Styles/botones.css'

export default function FormComponentPost(props) {
    const { setAuth } = useContext(AuthContext);

    const errRef = useRef();

    const [nombre, setNombre] = useState('');
    const [edad, setEdad] = useState('');
    const [direccion, setDireccion] = useState('');
    const [telefono, setTelefono] = useState('');
    const [pass, setPass] = useState('');
    const [email, setEmail] = useState('');

    const [errMsg, setErrMsg] = useState('');
    const [succes, setSucces] = useState(false);

    useEffect(() => {
        setErrMsg('');

    }, [nombre, pass])

    const URL = "http://localhost:9011/gestor/add";
    const handleSubmit = async (e) => {
            e.preventDefault();
            let body = {
                nombre: nombre,
                edad: edad,
                direccion: direccion,
                telefono: telefono,
                pass: pass,
                email: email
            }
            try {
                const response = await axios.post(URL,
                    body);
                console.log('respuesta: ' + JSON.stringify(response?.data))
                setAuth({ nombre, pass });
                setNombre('')
                setPass('')

                if (response?.data !== 0) {
                    setSucces('true')
                }
            } catch (error) {
                if (!error?.response) {
                    setErrMsg('Sin respuesta del servidor');
                } else if (error.response.status === 400) {
                    setErrMsg('Usuario o Password erroneo');
                } else if (error.response.status === 401) {
                    setErrMsg('No autorizado');
                } else {
                    setErrMsg('Login fallido')
                }

                errRef.current.focus();
            }
    }
    return (
        <>
            {succes ? (
                <section>
                    <h1>Estas Registrado</h1>
                    <br />
                    <p>
                        <Link to='/login' >Ir a inicio</Link>
                    </p>
                </section>
            ) : (
                < div className='form_box'>
                    <form className="form" onSubmit={handleSubmit}>
                        <p ref={errRef} className={errMsg ? "errmsg" : "offsscreen"} aria-live="assertive">{errMsg}</p>
                        <div className="titleContainer">
                            <h1 className="title">Datos de usuario</h1>
                        </div>
                        <div className="inputContainer">
                            <label htmlFor="" className="label">Nombre:</label>
                            <input type="text" name="nombre" className="input" required onChange={(e) => setNombre(e.target.value)} />
                        </div>
                        <div className="inputContainer">
                            <label htmlFor="" className="label">Edad:</label>
                            <input type="text" name="edad" className="input" required onChange={(e) => setEdad(e.target.value)} />
                        </div>
                        <div className="inputContainer">
                            <label htmlFor="" className="label">Dirección:</label>
                            <input type="text" name="direccion" className="input" required onChange={(e) => setDireccion(e.target.value)} />
                        </div>
                        <div className="inputContainer">
                            <label htmlFor="" className="label">Teléfono:</label>
                            <input type="text" name="telefono" className="input" required onChange={(e) => setTelefono(e.target.value)} />
                        </div>
                        <div className="inputContainer">
                            <label htmlFor="" className="label">Password:</label>
                            <input type="text" name="pass" className="input" required onChange={(e) => setPass(e.target.value)} />
                        </div>
                        <div className="inputContainer">
                            <label htmlFor="" className="label">Email:</label>
                            <input type="email" name="email" className="input" required onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="btnContainer">
                            <input type="submit" className="submitBtn" value="Registrar" />
                        </div>
                    </form>
                    <div className="cuadro_aviso hide" id="caja_guardadoTrue">
                        Guardamos tus datos con exito
                    </div>
                    <div className="cuadro_aviso hide" id="caja_guardadoFalse">
                        Lo sentimos en este momento no hemos podido guardar sus datos
                    </div>
                </div>
            )}
        </>
    )
}

/*
    const nombre = useRef();
    const edad = useRef();
    const direccion = useRef();
    const telefono = useRef();
    const pass = useRef();
    const email = useRef();
*/