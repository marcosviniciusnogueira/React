
import './rodape.css'

const Rodape = () => {
    return (<footer className="footer">
       <section>
       <ul>
            <li>
                <a href="https://www.facebook.com" target="_blank">
                    <img src="/imagens/facebook.png" alt="" />
                </a>
            </li>
            <li>
                <a href="https://www.twitter.com" target="_blank">
                    <img src="/imagens/twitter.png" alt="" />
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com" target="_blank">
                    <img src="/imagens/instagram.png" alt="" />
                </a>
            </li>
        </ul>
       </section>
       <section>
       <img src="/imagens/logo.png" alt="" />
       </section>
       <section className='txt'>
        <p>
            Projeto acadêmico desenvolvido durante o curso "React com JavaScript" da Alura.
        </p>
       </section>
    </footer>)
}

export default Rodape