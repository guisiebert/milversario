import { useState } from "react"

function Gerador() {
    
    const [nascimento, setNascimento] = useState("17/07/1992")

    function handleChange(e) {
        setNascimento(e.key)
    }

    return(
        <div>
            <h2>Qual sua data de nascimento?</h2>
            <form onSubmit={handleChange}>
                <input type="date"></input>
                <input type={"submit"}></input>
            </form>
            <p>Você completa 10.000 dias em {nascimento} </p>
            <p>Você completa 10.000 dias em {nascimento} </p>
        </div>
    )
}

export default Gerador