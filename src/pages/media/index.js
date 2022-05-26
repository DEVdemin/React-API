import './index.scss';
import { useState } from "react";
import axios from "axios"

export default function Index(){
    const [nota1, setNota1] = useState();
    const [nota2, setNota2] = useState();
    const [nota3, setNota3] = useState();
    const [resposta, setResposta]= useState('');

    async function calcularMedia() {
        const resp = await axios.post('http://localhost:5000/media', {
            n1:nota1,
            n2:nota2,
            n3:nota3
        }) 
        setResposta(resp.data.media)
        
    }   

    return(
        <main> 
            <h1>Calcular Média</h1>

            <div> 
                Primeira nota: <input type = "text" value={nota1} onChange = {e => setNota1(Number(e.target.value)) } />
            </div>
            <div> 
                Segunda nota: <input type = "text" value={nota2} onChange = {e => setNota2(Number(e.target.value)) } />
            </div>
            <div> 
                Terceira nota: <input type = "text" value={nota3} onChange = {e => setNota3(Number(e.target.value)) } />
            </div>

            <div> 
                <button onClick={calcularMedia} >Calcular</button>
            </div>

            <div> 
                A média é: {resposta}
            </div>

            <a href="/">Voltar</a>


        </main>
    )

}