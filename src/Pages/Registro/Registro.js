import Header from '../GeneralComponents/Header/Header'
import Footer from '../GeneralComponents/Footer/Footer'
import FormComponentRegistro from './FormComponentRegistro'
import '../../assets/Styles/principal.css'

export default function Registro(){

    return (
        <>
        <Header />
            <div className='body_principal'>
                <div className='principal_boxComponent'>
                <FormComponentRegistro />
                </div>
            </div>
            <Footer />
        </>
    )
}