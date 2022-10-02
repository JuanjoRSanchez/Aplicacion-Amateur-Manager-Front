import Header from '../GeneralComponents/Header/Header'
import Footer from '../GeneralComponents/Footer/Footer'
import { useParams } from 'react-router-dom';

import '../../../src/assets/Styles/componentePartidoBox.css'
import FormComponentPost from './FormComponentPost';


export default function NuevoPartido() {
    const {  idPena } = useParams();
    return (
        <div>
            <Header />
            <div className='body_principal'>
                <div className='principal_boxComponent'>
                    <FormComponentPost  idPena={idPena}/>
                </div>
            </div>
            <Footer />
        </div>
    )
}
