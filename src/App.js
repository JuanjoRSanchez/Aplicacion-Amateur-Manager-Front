import './App.css';
import { BrowserRouter, Routes, Route } from 'react-dom'
import Home from '../src/Pages/Home/Home'
function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/inicio' component={Home}></Route>
   </Routes>
   
   </BrowserRouter>
  );
}

export default App;

/*
 <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
*/