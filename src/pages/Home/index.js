import { Link } from "react-router-dom";
import './index.scss';

export default function Index(){
    return(
        <main className="home">
            <h1> Home </h1>

            <ul>
                <li> <Link to = '/corPrimaria' className="b"> Cor Primária </Link> </li>
                <li> <Link to = '/frequencia' className="b"> Frequencia </Link> </li>
                <li> <Link to = '/ingresso' className="b"> Ingresso </Link> </li>
                <li> <Link to = '/maiorNumero' className="b"> Maior Número </Link> </li>

            </ul>
        </main>
    )
}