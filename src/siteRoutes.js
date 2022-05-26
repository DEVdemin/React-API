
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/index'
import CorPrimaria from './pages/corPrimaria'
import Frequencia from './pages/Frequencia'
import Ingresso from './pages/Ingresso'
import MaiorNumero from './pages/MaiorNumero'
import Dobro from './pages/Dobro'
import Media from './pages/media'
import Soma from './pages/somapost'
import Tabuada from './pages/Tabuada'
import Febre from './pages/Febre'

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
                            <Route path='/media' element={<Media/>} />
                            <Route path='/somapost' element={<Soma/>} />
                            <Route path='/tabuada' element={<Tabuada/>} />
                            <Route path='/febre' element={<Febre/>} />
                    </Routes>
        </BrowserRouter>
    )
}