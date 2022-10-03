import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../src/Pages/Home/Home'
import Penas from '../src/Pages/Penas/Penas'
import PenaDetalle from '../src/Pages/PenaDetalle/PenaDetalle'
import Partidos from '../src/Pages/Partidos/Partidos'
import Jugadores from '../src/Pages/Jugadores/Jugadores'
import PartidoDetalle from '../src/Pages/PartidoDetalle/PartidoDetalle'
import NuevoPartido from '../src/Pages/PartidoNuevo/NuevoPartido'
import Registro from '../src/Pages/Registro/Registro'
import Login from '../src/Pages/Login/Login'
import Inicio from '../src/Pages/Principal/Inicio'
import NuevaPena from '../src/Pages/PenaNueva/NuevaPena'
import RequiredAuth from './Pages/GeneralComponents/RequiredAuth';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/registro' element={<Registro />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route element={<RequiredAuth />}>
          <Route path='/inicio' element={<Inicio />}></Route>
          <Route path='/penas' element={<Penas />}></Route>
          <Route path='/penaDetalle/:id' element={<PenaDetalle />}></Route>
          <Route path='/nuevaPena/:id' element={<NuevaPena />}></Route>
          <Route path='/partidos/:id' element={<Partidos />}></Route>
          <Route path='/partidoDetalle/:idPartido' element={<PartidoDetalle />}></Route>
          <Route path='/nuevoPartido/:idPena' element={<NuevoPartido />}></Route>
          <Route path='/jugadores/:idPena' element={<Jugadores />}></Route>
          <Route path='/jugadorDetalle/:idJugador' element={<Jugadores />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

/*
<Route path='/inicio/:idGestor' element={<Inicio />}></Route>
<Route path='/penas/:idGestor' element={<Penas />}></Route>

*/