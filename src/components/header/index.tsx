import './header.css'
import {Link} from 'react-router-dom'

export default function Header(){

    return(
        <header>
            <img
            style={{
                width: "40px",
                height: "40px"
            }} 
            src="https://firebasestorage.googleapis.com/v0/b/neon-agenda.appspot.com/o/letralogo-neonAgenda.png?alt=media&token=810b409f-6f11-4ab4-8744-fab0134bda56&_gl=1*16uiegw*_ga*OTkzMDE5MjQ4LjE2OTM2Nzk1Mjk.*_ga_CW55HF8NVT*MTY5NzA2NjA5OS4yNS4xLjE2OTcwNjk1NDMuNDguMC4w" alt="" />
            <nav>
                <Link to={"/"}>Homepage</Link>
                <Link to={"/"}>Cadastre-se</Link>
                <Link id='linkLogin' to={"/"}>Login</Link>
            </nav>
        </header>
    )

}