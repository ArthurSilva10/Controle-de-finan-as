import './Style.css'
export function Saidas(props)
{
    return(
        <div className="card-entradas">
            <h2>{props.titulo}</h2>
            <strong><p>R$ -{props.valor}</p></strong>
            <h2 id="out-type">Saída</h2>
            <strong><p>{props.data}</p></strong>
        </div>
    )
}