import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default function Partidos(props) {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [succes, setSucces] = useState(false);
    //const [idPena, setIdPena] = useState(props.idGestor.id);
    const idGestor = props.idGestor;
    const baseURL = "http://localhost:9011/pena/add";

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');

    }, [user])

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Tipo: ' + typeof(idGestor) + idGestor)
        const body = {
            nombre: user,
            idGestor            }
        try {
            const response = await axios.post(baseURL,
                body);
            console.log('respuesta: ' + JSON.stringify(response?.data))
            setUser('');
           console.log(response.data)
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
        <div>
            {succes ? (
                <section>
                    <h1>Estas Logeado</h1>
                    <br />
                    <p>
                        <Link to={`/inicio`} >Ir a inicio</Link>
                    </p>
                </section>
            ) : (
                <div className='form_box'>
                    <form className="form" onSubmit={handleSubmit}>
                        <p ref={errRef} className={errMsg ? "errmsg" : "offsscreen"} aria-live="assertive">{errMsg}</p>
                        <div className="titleContainer">
                            <h1 className="title">Datos de la Pena</h1>
                        </div>
                        <div className="inputContainer">
                            <label htmlFor="name" className="label">Nombre de la Pena:</label>
                            <input
                                type="text"
                                id='name'
                                ref={userRef}
                                autoComplete='off'
                                onChange={(e) => setUser(e.target.value)}
                                required
                                value={user}
                                className="input"
                            />
                        </div>
                        <div className="btnContainer">
                            <button type="submit" className="submitBtn" value="Actualizar" >Entrar</button>
                        </div>
                        <p>
                            ¿Necesitas registrarte?<br />
                            <span className='line'>
                                {/* */}
                                <Link to='/inicio'>Registrarse</Link>
                            </span>
                        </p>
                    </form>
                </div>
            )}
        </div>
    )
}

