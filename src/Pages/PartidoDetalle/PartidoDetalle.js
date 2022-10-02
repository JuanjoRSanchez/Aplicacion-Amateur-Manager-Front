import React from 'react'
import Header from '../GeneralComponents/Header/Header'
import Footer from '../GeneralComponents/Footer/Footer'
import { useParams } from 'react-router-dom';
/*
import { useEffect, useState } from "react";
import axios from "axios";
*/
import '../../../src/assets/Styles/componentePartidoBox.css'
import './partidoDetalle.css'
import FormComponentPartido from './FormComponentPartido';


export default function PenaDetalle(props) {
    
    const { idPartido } = useParams();
    console.log('idPartido: ' + idPartido)
    /*
    const baseURL = "http://localhost:9011/partido/id/" + idPartido.idPartido;
    const [partido, setPartido] = useState([]);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const getFunction = () => {
            axios.get(baseURL).then((response) => {
                setPartido(response.data);
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

    }, [baseURL, mounted, partido]);

    if (!partido) return null;
*/
    return (
        <div>
            <Header />
            <div className='body_principal'>
                <div className='principal_boxComponent'>
                    <FormComponentPartido id={idPartido}/>
                    <button type='button' className='btnBorrarPartido'>Borrar partido</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

/*


<FormComponent fechaPartido={partido.fechaPartido} marcadorBlanco={partido.marcadorBlanco} marcadorNegro={partido.marcadorNegro}/>

*/

