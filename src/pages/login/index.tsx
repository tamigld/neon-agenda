import { Link } from 'react-router-dom'
import './login.css'

export default function Login(){
    return(
        <section id="login">
            <form className='formlogin' action="post">
                <h1>Login</h1>
                <label htmlFor="email">
                    <input required placeholder='E-mail' name='email' type="email" />
                </label>
                <label htmlFor="password">
                    <input required placeholder='Senha' name='password' type="password" />
                </label>
                <button>
                    Entrar
                    <img src="https://firebasestorage.googleapis.com/v0/b/neon-agenda.appspot.com/o/entrar.png?alt=media&token=9831f103-4c88-4677-9410-741d393eba53&_gl=1*1scv3yl*_ga*OTkzMDE5MjQ4LjE2OTM2Nzk1Mjk.*_ga_CW55HF8NVT*MTY5NzEyOTU2MS4yOC4xLjE2OTcxMjk1NzMuNDguMC4w" alt="Ícone entrar" />    
                </button>
                <span>Ainda não tem uma conta? <Link
                    style={{
                        color: "var(--lavender)"
                    }}
                    to={"/cadastro"}
                     >Cadastre-se!</Link>
                </span>
            </form>
        </section>
    )
}