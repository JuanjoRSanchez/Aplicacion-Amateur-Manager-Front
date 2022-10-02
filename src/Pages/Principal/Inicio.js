import React from 'react'
import {Link, useParams} from 'react-router-dom'

import Header from '../GeneralComponents/Header/Header'
import Footer from '../GeneralComponents/Footer/Footer'
import ComponentGeneralBox from '../GeneralComponents/ComponentesPrincipal/ComponentGeneralBox'
import '../../assets/Styles/principal.css'

export default function Principal() {
    const idGestor = useParams();
    return (
        <div>
            <Header />
            <div className='body_principal'>
                <div className='principal_boxComponent'>
                <Link to={`/penas/${idGestor.idGestor}`} ><ComponentGeneralBox title='Peñas' key={'1'} /></Link>
                <Link to='/perfil' ><ComponentGeneralBox title='Mi perfil' key={'3'}/></Link>
                </div>
            </div>
            <Footer />
        </div>
    )
}

/*
<Link to='/partido' ><ComponentGeneralBox title='Partidos' key={'2'}/></Link>
*/