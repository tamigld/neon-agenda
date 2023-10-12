import Card from '../../components/card'
import './home.css'

import {Link} from 'react-router-dom'

export default function Homepage(){

    const dataCards = [
        {
            "titulo": "Estilo Cyberpunk Futurista",
            "descricao": "Entre em um mundo visualmente arrebatador, onde o estilo neon encontra a funcionalidade moderna. Cada elemento foi cuidadosamente projetado para criar uma experiência de usuário imersiva e única"
        },
        {
            "titulo": "Organização Intuitiva",
            "descricao": "Crie listas de tarefas com facilidade, adicione etiquetas e defina prioridades para manter suas metas sempre à vista"
        },
        {
            "titulo": "Design Responsivo",
            "descricao": "O NeonAgenda foi projetado para oferecer uma experiência perfeita em qualquer dispositivo, garantindo que você esteja sempre no controle, onde quer que esteja."
        }
    ]


    return(
        <main>
            <section className='homePrimeira'>
                <h1>A organização do futuro começa aqui.</h1>
                <img src="https://firebasestorage.googleapis.com/v0/b/neon-agenda.appspot.com/o/logo-neonagenda-brilho.png?alt=media&token=8c748885-4892-4a47-a26d-51de1fc12b79&_gl=1*1fp2am0*_ga*OTkzMDE5MjQ4LjE2OTM2Nzk1Mjk.*_ga_CW55HF8NVT*MTY5NzA3MzI3OS4yNi4xLjE2OTcwNzMyOTUuNDQuMC4w" alt="" />
                <span>Sua Agenda Pessoal no Futuro</span>
            </section>
            <section className='recursos'>
                <h3>
                Bem-vindo ao NeonAgenda, a plataforma de organização que combina a energia vibrante do cyberpunk com a eficiência de uma poderosa ferramenta de gerenciamento de tarefas.
                </h3>
                <hr />
                <div className="features">
                    <h1>Recursos</h1>
                    <div className="cards">
                    {dataCards.map((card: any, index: number) => {
                          return (
                              <Card key={index}
                                titulo={card.titulo}
                                descricao={card.descricao}
                              />
                          );
                    })}
                    </div>
                </div>
            </section>
            <section className="homeTerceira">
                <h3>
                Registre-se ou faça login para começar a moldar o seu futuro com NeonAgenda.
                </h3>
                <Link className='botaoHome' to={"/login"}>Login</Link>
                <Link className='botaoHome' to={"/"}>Cadastre-se</Link>
            </section>
            <footer>
                    <div className='descricao'>
                        <div>
                            <img src="https://firebasestorage.googleapis.com/v0/b/neon-agenda.appspot.com/o/iconcriado-.svg?alt=media&token=1ce62ede-73e6-41af-99d2-37e6f553379a&_gl=1*1iz8t4y*_ga*OTkzMDE5MjQ4LjE2OTM2Nzk1Mjk.*_ga_CW55HF8NVT*MTY5NzA3ODU5Ni4yNy4xLjE2OTcwNzk1NzguNDUuMC4w" alt="Ícone de lápis com fundo roxo" />
                            <h4>Projeto pessoal criado por</h4>
                        </div>
                        <div>
                            <h4>Thamires Galdino Alves</h4>
                            <p>Me chamo Thamires, tenho 21 anos. Moro no ABC Paulista.
                            <br />
                            <br />
                            Sou desenvolvedora front-end com habilidades sólidas em HTML5, CSS3, JavaScript, TypeScript, React e Figma.
                            <br />
                            <br />
                            Sou graduada em Gestão da Tecnologia da Informação, atualmente cursando Análise e Desenvolvimento de Sistemas, além de estar em processo de aprendizado em Desenvolvimento Fullstack e Mobile no SENAI SP.</p>
                        </div>
                    </div>
                    <div className="redes">
                        <a href="mailto:thami.galves@outlook.com">
                            <img src="https://firebasestorage.googleapis.com/v0/b/neon-agenda.appspot.com/o/email.png?alt=media&token=4314f583-e318-45d0-abb0-9263cd5a14a7&_gl=1*1sdc0ty*_ga*OTkzMDE5MjQ4LjE2OTM2Nzk1Mjk.*_ga_CW55HF8NVT*MTY5NzA3ODU5Ni4yNy4xLjE2OTcwODA0MjAuNTEuMC4w" alt="Ícone e-mail" />
                            E-mail
                        </a>
                        <a href="https://github.com/tamigld" target="blank">
                            <img src="https://firebasestorage.googleapis.com/v0/b/neon-agenda.appspot.com/o/github.png?alt=media&token=accd8a70-32cd-42a2-a270-53361d9d608b&_gl=1*867l76*_ga*OTkzMDE5MjQ4LjE2OTM2Nzk1Mjk.*_ga_CW55HF8NVT*MTY5NzA3ODU5Ni4yNy4xLjE2OTcwODA1MDIuNjAuMC4w" alt="Ícone Github" />
                            GitHub
                        </a>
                        <a href="https://linktr.ee/tamigld" target="blank">
                            <img src="https://firebasestorage.googleapis.com/v0/b/neon-agenda.appspot.com/o/linktree.png?alt=media&token=e05afd78-2677-4b65-9bf5-087b93f52576&_gl=1*1rb4xl2*_ga*OTkzMDE5MjQ4LjE2OTM2Nzk1Mjk.*_ga_CW55HF8NVT*MTY5NzA3ODU5Ni4yNy4xLjE2OTcwODA1MTYuNDYuMC4w" alt="Ícone Linktree" />
                            Linktree
                        </a>
                        <a href="https://www.linkedin.com/in/thamires-galdino-alves-764380172/" target="blank">
                            <img src="https://firebasestorage.googleapis.com/v0/b/neon-agenda.appspot.com/o/linktree%20(1).png?alt=media&token=353f5ed2-f1a3-43b5-8c58-c133e61512eb&_gl=1*1smap68*_ga*OTkzMDE5MjQ4LjE2OTM2Nzk1Mjk.*_ga_CW55HF8NVT*MTY5NzA3ODU5Ni4yNy4xLjE2OTcwODA1MjYuMzYuMC4w" alt="Ícone Linkedin" />
                            Linkedin
                        </a>
                    </div>
            </footer>
        </main>
    )
}
