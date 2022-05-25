import './index.scss';


export default function Index(){
    const [Numero, setNumero] = useState(0);
    const [resposta, setResposta]= useState('');

    async function calcular (){
        const resp = await axios.get('http://localhost:5000/dobro/' + Numero);
        setResposta(resp.data.dobro)
    }
    return(
        <main> 
            
        </main>
    )

}