import { BrowserRouter,Routes, Route } from "react-router-dom";

import Login from './pages/1.Login'
import Home from './pages/home'
import Visualizar from './pages/2.Consultas'
import Solicitar from './pages/3.SolicitarConsultas'
 


export default function Index(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/admin' element={<Home />}  />
                <Route path='/visualizar' element={<Visualizar />}  />
                <Route path='/solicitarConsultas' element={<Solicitar />} />
            </Routes>
        </BrowserRouter>
    )
}