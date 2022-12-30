import Link from "next/link"
import Contador from "../components/Contador"

function Sobre() {
    return (
        <div>
            <h1>Sobre</h1>
            <Contador />
            <Link href="/">
                Home
            </Link>

        </div>
    )
}

export default Sobre