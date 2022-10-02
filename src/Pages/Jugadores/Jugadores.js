import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from '../GeneralComponents/Header/Header'
import Footer from '../GeneralComponents/Footer/Footer'
import FormComponentJugador from "../GeneralComponents/FromComponentJugador";
import ComponenteJugadorBox from "./ComponenteJugadorBox";

export default function Jugadores() {
    const idPena = useParams();
    console.log('idPena jugadores: ' + idPena.idPena)
    const baseURL = "http://localhost:9011/jugador/pena/" + idPena.idPena;
    const [jugadores, setJugadores] = useState([]);
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        const getFunction = () => {
            axios.get(baseURL).then((response) => {
                setJugadores(response.data);
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

    }, [baseURL, mounted, jugadores]);

    if (!jugadores) return null;

    return (
        <>
            <Header />
            <div className='body_principal'>
                <div>
                    <Link to='#' >Añadir nuevo jugador</Link>
                    <div className='principal_boxComponent'>
                    {jugadores.map((jugador, index) => {
                        return <Link to={`/jugadorDetalle/${jugador.id}`}>
                            <ComponenteJugadorBox key={index} title={jugador.nombre} id={jugador.id} />
                        </Link>;
                    })}
                </div>
                    <FormComponentJugador />
                </div>
                <Footer />
            </div>
        </>
    )
}
/*

*/