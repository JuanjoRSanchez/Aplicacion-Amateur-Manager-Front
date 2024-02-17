import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import Header from '../GeneralComponents/Header/Header'
import Footer from '../GeneralComponents/Footer/Footer'
import './penas.css'
import ComponentGeneralBox from '../GeneralComponents/ComponentesPrincipal/ComponentGeneralBox';
import { Link } from 'react-router-dom'
//import { Outlet } from 'react-router-dom'
//import { Navigate } from "react-router-dom";

import useAuth from '../../hooks/useAuth';

export default function Penas() {
    /*const { user } = useAuth();

    if (!user) {
      return <Navigate to="/" />;
    }
*/
    const idGestor = useAuth().auth.user;
    console.log('idGestor: ' + idGestor)
    const baseURL = "http://localhost:9011/pena/listPena/" + idGestor;

    const [penas, setPenas] = useState([]);
    const [succes, setSucces] = useState('false');

    useEffect(() => {
        const getFunction = () => {
            axios.get(baseURL).then((response) => {
                setPenas(response.data);
                console.log('respuesta: ' + response.data.nombre)
                if (response.data.nombre !== undefined) {
                    setSucces('true')
                    console.log('succes: ' + succes)
                } else {
                    console.log('succes: ' + succes)
                }
            })
        }
        getFunction();
    }, [baseURL, succes]);

    return (
        <div className='body_principal'>
            <Header />
            <div className='body_principal'>
                <div className='nuevoBox'>
                    <Link to={`inicio/penaDetalleGate/nuevaPena/${idGestor}`} >Añadir nueva Peña</Link>
                </div>
                <div className='principal_boxComponent'>
                    {penas.map((pena, index) => {
                        return <Link to={`/inicio/penaDetalleGate/penaDetalle/${pena.id}`}>
                            <ComponentGeneralBox key={index} title={pena.nombre} />
                        </Link>;
                    })}

                </div>

            </div>
            <Footer />
        </div>
    )
}

