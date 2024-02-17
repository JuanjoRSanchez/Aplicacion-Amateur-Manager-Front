import React from 'react'
import { Outlet } from 'react-router-dom'

import '../../assets/Styles/principal.css'

export default function Principal() {
    
    return (
        <div className='body_principal'>
             <Outlet />
        </div>
       
    )
}

/*
<div className='body_principal'>
            <Header />
            <div className='body_principal'>
                <div className='principal_boxComponent'>
                <Link to={`penas`} ><ComponentGeneralBox title='Peñas' key={'1'} /></Link>
                <Link to='/perfil' ><ComponentGeneralBox title='Mi perfil' key={'3'}/></Link>
                </div>
            </div>
            <Footer />
            <Outlet />
</div>
*/