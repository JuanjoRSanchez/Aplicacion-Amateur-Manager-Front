import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'
import '../../assets/Styles/principal.css'
import '../../assets/Styles/botones.css'
//import Logo from '../../assets/images/Logo_gestor.png'
import Logo from '../../assets/images/Logo_Pena.png'

export default function Home() {

    return (
        <>
            <div className='body_home'>
                <div className='logoBox'>
                <img src={Logo} alt='Logo Amateur Manager' className='logo'></img>
                </div>
                <div className='botonera_home'>
                    <button className='btn_home'><Link to='/login' >Login</Link></button>
                    <button className='btn_home'><Link to='/registro' >Registrarse</Link></button>
                </div>
            </div>
        </>
    )

}
