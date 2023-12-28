import { useEffect, useState } from "react"
import axios from "axios"
import { Entradas } from "./Entradas"
import { Saidas } from "./Saidas"
export function CardLoader()
{
    const urlEntradasGet = "http://localhost:8080/entradas/get"
    const urlSaidasGet = "http://localhost:8080/saidas/get"

    const [entradas, setEntradas] = useState([])
    const [saidas, setSaidas] = useState([])

    useEffect(() => {
        axios.get(urlEntradasGet)
        .then(res => setEntradas(res.data))
        .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        axios.get(urlSaidasGet)
        .then(res => setSaidas(res.data))
        .catch(err => console.log(err))
    }, [])

    return(
        <>
            {
                entradas.map((data) => (
                    <Entradas key={data.nome} titulo={data.titulo} valor={data.valor} data={data.data}/>
                ))
            }
            {
                saidas.map((data) => (
                    <Saidas key={data.nome} titulo={data.titulo} valor={data.valor} data={data.data}/>
                ))
            }
        
        </>
    )
}