import './index.scss';


export default function Index(){
    //const [Numero, setNumero] = useState(0);
    
    return(
        <main> 
            <h1>Calcular Média</h1>

            <div> 
                Primeira nota: <input type = "text" />
            </div>
            <div> 
                Segunda nota: <input type = "text" />
            </div>
            <div> 
                Terceira nota: <input type = "text" />
            </div>
        </main>
    )

}