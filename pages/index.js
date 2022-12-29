import { useState } from "react"

function Home() {
    return (
        <div>
            <h1>Homee</h1>
            <Contador />
        </div>
    )
}

function Contador() {
    const [contador, setContador] = useState(1)

    function adicionarContador() {
        setContador(contador + 1)
    }

    function removerContador() {
        setContador(contador - 1)
    }

    function zerarContador() {
        setContador(0)
    }

    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>
            <button onClick={removerContador}>Remover</button>
            <button onClick={zerarContador}>Zerar</button>
        </div>
    )
}

export default Home