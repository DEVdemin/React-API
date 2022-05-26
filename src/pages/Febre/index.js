import { useState } from "react"
import axios from "axios";


export default function Index(){
    const [temp, setTemp] = useState();
    const [resposta, setResposta] = useState('');



    async function calcularTemperatura() {
        const resp = await axios.get(`http://localhost:5000/febre?a=${temp}`);
        if( resp.data.Febre === true){
            setResposta('Sim, vá ao médico')
        }

        else {
            setResposta('Não')
        }
    }

    return (


        <main className="termômetro">
            <section className="j"> 
            <h1> Tabuada</h1>

            
                <div>
                    Número: <input type='text' value={temp} onChange= {e => setTemp(Number(e.target.value))} />
                </div>                

                <div>
                    <button onClick={calcularTemperatura} > Checar temperatura </button>
                </div>

                <div>
                    Está com febre?: {resposta}
                </div>
                
                <a href="/">Voltar</a>

            </section>
        </main>
    )
}