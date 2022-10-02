import React, { useEffect, useRef, useState, useContext } from 'react';
import AuthContext from '../../context/AuthProvider';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default function Partidos() {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [succes, setSucces] = useState(false);
    const [idPena, setIdPena] = useState('');

    const baseURL = "http://localhost:9011/gestor/login";

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');

    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const body = {
            name: user,
            pass: pwd
        }
        try {
            const response = await axios.post(baseURL,
                body);
            console.log('respuesta: ' + JSON.stringify(response?.data))
            setIdPena(response.data)
            setAuth({ user, pwd })
            setUser('');
            setPwd('');
           
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
                        <Link to={`/inicio/${idPena}`} >Ir a inicio</Link>
                    </p>
                </section>
            ) : (
                <div className='form_box'>
                    <form className="form" onSubmit={handleSubmit}>
                        <p ref={errRef} className={errMsg ? "errmsg" : "offsscreen"} aria-live="assertive">{errMsg}</p>
                        <div className="titleContainer">
                            <h1 className="title">Datos de usuario</h1>
                        </div>
                        <div className="inputContainer">
                            <label htmlFor="name" className="label">Nombre de usuario:</label>
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
                        <div className="inputContainer">
                            <label htmlFor="password" className="label">Password:</label>
                            <input
                                type="password"
                                id='password'
                                onChange={(e) => setPwd(e.target.value)}
                                required
                                value={pwd}
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

/*
 <p>Identificador de partido: {partido.id} / Fecha: {partido.fechaCreacion} </p>


 const baseURL = "http://localhost:9011/gestor/login";
    const [gestor, setGestor] = useState([]);

    const email = useRef();
    const pass = useRef();


    const loginFunction = () => {
        let emailFrom = email;
        let passFrom = pass;
        let body = {
            email: emailFrom,
            pass: passFrom
        }
        axios.get(baseURL, body).then((response) => {
            setGestor(response.data);
            if(gestor === 0){
                window.location('/principal')
                console.log(gestor)
            }else{
                console.log(gestor)
            }
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
    


    if (!gestor) return null;
*/