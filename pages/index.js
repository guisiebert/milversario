import Link from "next/link"
import Gerador from "../components/Gerador"


function Home() {
    return (
        <div>
            <Link href="/sobre">
                Sobre
            </Link>
            <h1>Home</h1>
            <Gerador />
        </div>
    )
}


export default Home