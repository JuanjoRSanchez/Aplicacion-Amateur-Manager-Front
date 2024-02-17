import React from 'react'
import Header from '../GeneralComponents/Header/Header'
import Footer from '../GeneralComponents/Footer/Footer'
import { useEffect, useState } from "react";
import axios from "axios";
import ComponentePartidoBox from './ComponentePartidoBox';
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';

export default function Partidos() {

    const idPena = useParams();
    console.log('idPena: ' + idPena.idPena)
    const baseURL = "http://localhost:9011/partido/idPena/" + idPena.idPena;
    const [partidos, setPartidos] = useState([]);
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        const getFunction = () => {
            axios.get(baseURL).then((response) => {
                setPartidos(response.data);
                console.log(partidos)
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
        if (!mounted) {
            setMounted(true)
            getFunction();
        }
    }, [baseURL, mounted, partidos]);

    let date = new Date();

    let dateString = date.toISOString().split('T')[0];
    console.log('fecha de hoy: ' + dateString)

    if (!partidos) return null;
    let partidosPasados = [];
    let partidosFuturos = [];
    function extraerPartidosPasados() {

        partidos.map((partido, index) => {
            if (dateString >= partido.fechaPartido.split(' ')[0]) {
                partidosPasados.push(partido);
            }
            else {
                partidosFuturos.push(partido);
            }
            return null;
        })
    }
    extraerPartidosPasados();
    return (
        <div className='body_principal'>
            <Header />
            <div className='nuevoBox'>
                <Link to={`/inicio/penaDetalleGate/pg/nuevoPartido/${idPena.idPena}`} >Nuevo partido</Link>
            </div>
            <div className='body_principal'>
                <p>Partidos pasados</p>
                <div className='principal_boxComponent'>
                    {partidosPasados.map((partido, index) => {
                        return <>
                            <ComponentePartidoBox key={index}
                                title={partido.fechaPartido.split(' ')[0]}
                                golesBlanco={partido.marcadorBlanco}
                                golesNegro={partido.marcadorNegro}
                                id={partido.id}
                                idPena={idPena.idPena}
                            />
                        </>
                    })}
                </div>
                <p>Partidos futuros</p>
                <div className='principal_boxComponent'>
                    {partidosFuturos.map((partido, index) => {
                        return <>
                            <ComponentePartidoBox key={index}
                                title={partido.fechaPartido.split(' ')[0]}
                                golesBlanco={partido.marcadorBlanco}
                                golesNegro={partido.marcadorNegro}
                                id={partido.id}
                                idPena={idPena.idPena}
                            />
                        </>
                    })}
                </div>
            </div>
            <Footer />
        </div>
    )
}

/*
 <p>Identificador de partido: {partido.id} / Fecha: {partido.fechaCreacion} </p>
*/