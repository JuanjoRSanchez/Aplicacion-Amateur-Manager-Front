import FormComponentPena from './FormComponentPena'
import Header from '../GeneralComponents/Header/Header'
import Footer from '../GeneralComponents/Footer/Footer'
import { useParams } from 'react-router-dom'

export default function NuevaPena() {
    const idGestor = useParams();
    console.log('idGestor: nueva ' +  idGestor.id)

    return (
        <>
            <Header />
            <div className='body_principal'>
                <FormComponentPena idGestor={idGestor.id} />
            </div>
            <Footer />
        </>
    )
}