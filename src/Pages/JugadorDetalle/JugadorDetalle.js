import React from 'react'
import Header from '../GeneralComponents/Header/Header'
import Footer from '../GeneralComponents/Footer/Footer'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";
import ComponentGeneralBox from '../GeneralComponents/ComponentesPrincipal/ComponentGeneralBox';
import { Link } from 'react-router-dom'

export default function JugadorDetalle(props) {
    const { id } = useParams();
    const baseURL = "http://localhost:9011/jugador/" + id.dJugador;
    const [pena, setPena] = useState([]);
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        const getFunction = () => {
            axios.get(baseURL).then((response) => {
                setPena(response.data);
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
        if(!mounted){
            setMounted(true)
            getFunction();
        }
        
    }, [baseURL, mounted, pena]);

    if (!pena) return null;

    return (
        <div>
            <Header />
            <div className='body_principal'>
                <div className='principal_boxComponent'>
                    <Link to={`/partidos/${pena.id}`}><ComponentGeneralBox title='Partidos' /></Link>
                    <Link to={`/jugadores/${pena.id}`}><ComponentGeneralBox title='Jugadores' /></Link>
                </div>
            </div>
            <Footer />
        </div>
    )
}

/*
<p>Nombre de la Peña: {pena.nombre}</p>
<p>Fecha de ceación: {pena.fechaCreacion}</p>
<p>Nombre del Gestor: {pena.gestor.nombre}</p>
*/
