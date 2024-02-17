import React, { useEffect, useRef, useState } from 'react';
import userAuth from '../../hooks/useAuth';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';


export default function FormComponentLoginToken() {
    const { setAuth } = userAuth();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/inicio/penas";

    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');

    const baseURL = "http://localhost:9011/auth/authenticate";

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
            password: pwd
        }
        try {
            const response = await axios.post(baseURL,
                body);
            console.log('respuesta: ' + JSON.stringify(response?.data))
            setAuth({ user, pwd })
            if (response?.data !== 0) {
                setUser('');
                setPwd('');
                navigate(from, { replace: true });
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
            </div>
    )
}

