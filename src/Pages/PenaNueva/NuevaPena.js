import FormComponentPena from './FormComponentPena'
import Header from '../GeneralComponents/Header/Header'
import Footer from '../GeneralComponents/Footer/Footer'
import useAuth from '../../hooks/useAuth';

export default function NuevaPena() {
    const idGestor = useAuth().auth.user;

    //const idGestor = useParams();
    console.log('idGestor: nueva ' +  idGestor)

    return (
        <>
            <Header />
            <div className='body_principal'>
                <FormComponentPena idGestor={idGestor} />
            </div>
            <Footer />
        </>
    )
}