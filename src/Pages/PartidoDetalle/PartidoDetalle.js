import React from 'react'
import Header from '../GeneralComponents/Header/Header'
import Footer from '../GeneralComponents/Footer/Footer'
import { useParams } from 'react-router-dom';

import '../../../src/assets/Styles/componentePartidoBox.css'
import './partidoDetalle.css'
import FormComponentPartido from './FormComponentPartido';


export default function PenaDetalle(props) {
    const { idPartido, idPena } = useParams({});
    /*
    const idPartido = id.idPartido;
    const idPena = id.idPena;
    */
    console.log('idPartido: ' + idPartido + ' idPena: ' + idPena)

    return (
        <div className='body_principal'>
            <Header />
            <div className='body_principal'>
                <div className='principal_boxComponent'>
                    <FormComponentPartido idPartido={idPartido} idPena={idPena}/>
                </div>
               
            </div>
            
            <Footer />
        </div>
    )
}



