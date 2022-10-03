import React from 'react'
import Header from '../GeneralComponents/Header/Header'
import Footer from '../GeneralComponents/Footer/Footer'
import { useParams } from 'react-router-dom';

import '../../../src/assets/Styles/componentePartidoBox.css'
import './partidoDetalle.css'
import FormComponentPartido from './FormComponentPartido';


export default function PenaDetalle(props) {
    const { idPartido } = useParams();
    console.log('idPartido: ' + idPartido)

    return (
        <div className='body_principal'>
            <Header />
            <div className='body_principal'>
                <div className='principal_boxComponent'>
                    <FormComponentPartido id={idPartido}/>
                </div>
               
            </div>
            
            <Footer />
        </div>
    )
}

/*


<FormComponent fechaPartido={partido.fechaPartido} marcadorBlanco={partido.marcadorBlanco} marcadorNegro={partido.marcadorNegro}/>

*/

