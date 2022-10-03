import React from 'react'
import Header from '../GeneralComponents/Header/Header'
import Footer from '../GeneralComponents/Footer/Footer'
import FormComponentLogin from './FormComponentLogin'

export default function Login() {

    return (
        <div className='body_principal'>
            <Header />
            <div className='body_principal'>
                <FormComponentLogin />
            </div>
            <Footer />
        </div>
    )
}

