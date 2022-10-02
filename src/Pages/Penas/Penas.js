import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import Header from '../GeneralComponents/Header/Header'
import Footer from '../GeneralComponents/Footer/Footer'
import './penas.css'
import ComponentGeneralBox from '../GeneralComponents/ComponentesPrincipal/ComponentGeneralBox';
import { Link, useParams } from 'react-router-dom'

export default function Penas() {
    const idGestor = useParams();
    console.log(idGestor)
    const baseURL = "http://localhost:9011/pena/listPena/" + idGestor.idGestor;

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
        <div>
            <Header />
            <div className='body_principal'>
                <div>
                    <Link to={`/nuevaPena/${idGestor.idGestor}`} >Añadir nueva Peña</Link>
                </div>
                <div className='principal_boxComponent'>
                    {penas.map((pena, index) => {
                        return <Link to={`/penaDetalle/${pena.id}`}>
                            <ComponentGeneralBox key={index} title={pena.nombre} />
                        </Link>;
                    })}
                </div>
            </div>
            <Footer />
        </div>
    )
}

/*
<div>
            <Header />
            <div className='body_principal'>
                <div className='principal_boxComponent'>
                    {
                    penas.map((pena, index) => {
                        return <Link to={`/penaDetalle/${pena.id}`}>
                            <ComponentGeneralBox key={index} title={pena.nombre} />
                        </Link>;
                    })}
                </div>

            </div>
            <Footer />
        </div>

 <>


        
            {succes ? (
                <div>
                    <Header />
                    <div className='body_principal'>
                        <div className='principal_boxComponent'>
                            {penas.map((pena, index) => {
                                return <Link to={`/penaDetalle/${pena.id}`}>
                                    <ComponentGeneralBox key={index} title={pena.nombre} />
                                </Link>;
                            })}
                        </div>

                    </div>
                    <Footer />
                </div>
            ) : (
                <div>
                <Link >Añadir nueva Peña</Link>
                <p>jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj</p>
                </div>

            )
            }
        </>
*/