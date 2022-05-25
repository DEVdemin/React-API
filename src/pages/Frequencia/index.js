import { useState } from "react";
import axios from "axios";
import './index.scss';

export default function Index(){
    const [texto, setTexto] = useState('');
    const [caractere, setCaractere] = useState('');
    const [resposta, setResposta] = useState('');



    async function verificarFrequencia() {
        const resp = await axios.get(`http://localhost:5000/dia2/freqcaracter/${texto}/${caractere}`)
        setResposta(resp.data.Freq)
    }

    return (


        <main className="freq">
            <section className="j"> 
            <h1> Frequêcia de um caractere</h1>

            
                <div>
                    Texto: <input type='text' value={texto} onChange= {e => setTexto(e.target.value)} />
                </div>

                <div>
                    Caractere: <input type='text' value={caractere} onChange= {e => setCaractere(e.target.value)} />
                </div>

                <div>
                    <button onClick={verificarFrequencia} > Verificar Frequêcia de Caractere </button>
                </div>

                <div>
                    Frequêcia: {resposta}
                </div>
                
                <a href="/">Voltar</a>

            </section>
        </main>
    )
}