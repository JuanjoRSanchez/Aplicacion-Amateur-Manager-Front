import React from "react";
import {Link} from 'react-router-dom'

import Logo from '../../../assets/images/Logo_Pena.png'
import './header.css'

export default function Header(){

    return (
        <div className='body_header'>
            <div className="img_boxHeader">
                <Link to='/inicio/penas'><img src={Logo} alt="Logotipo Amateur Manager"></img></Link> 
            </div>
        </div>
    )
}