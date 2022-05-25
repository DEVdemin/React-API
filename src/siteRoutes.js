
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/index'
import CorPrimaria from './pages/corPrimaria'
import Frequencia from './pages/Frequencia'
import Ingresso from './pages/Ingresso'
import MaiorNumero from './pages/Maior Número'
import Dobro from './pages/Dobro'

export default function SiteRoutes(){
    return(
        <BrowserRouter>
                    <Routes>
                            <Route path='/' element={<Home/>} />
                            <Route path='/corPrimaria' element={<CorPrimaria/>} />
                            <Route path='/frequencia' element={<Frequencia/>} />
                            <Route path='/ingresso' element={<Ingresso/>} />
                            <Route path='/maiorNumero' element={<MaiorNumero/>} />
                            <Route path='/dobro' element={<Dobro/>} />
                    </Routes>
        </BrowserRouter>
    )
}