import FormComponentjugador from './FormComponentJugador'
import Header from '../GeneralComponents/Header/Header'
import Footer from '../GeneralComponents/Footer/Footer'
import useAuth from '../../hooks/useAuth';

export default function NuevoJugador() {
    const idGestor = useAuth().auth.user;
    console.log('idGestor: nueva ' +  idGestor)

    return (
        <>
            <Header />
            <div className='body_principal'>
                <FormComponentjugador idGestor={idGestor} />
            </div>
            <Footer />
        </>
    )
}