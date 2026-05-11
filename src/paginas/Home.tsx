import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CadastroModal from "../componentes/CadastroModal";
import imagemFundo from "../assets/fundo-home.jpg";

function Home() {
    const navigate = useNavigate();
    const [mostrarCadastro, setMostrarCadastro] = useState(false);

    return (
        <>
            <section className="home">
                <img 
                    src={imagemFundo}
                    alt="Mãos de diferentes pessoas segurando brotos de plantas na terra" 
                    className="home-img"
                />
                <div className="overlay">
                    <div className="content">
                        <h1>Transforme Vidas em Bauru!</h1>
                        <p>Conectando pessoas que querem ajudar com projetos que transformam nossa comunidade</p>

                        <button className="btn-primary" onClick={() => setMostrarCadastro(true)}>
                            Seja um voluntário
                        </button>
                    </div>
                </div>
            </section>

            {/* Nova Seção de Apresentação */}
            <section className="home-apresentacao">
                <div className="pagina-container">
                    <div className="secao-texto" style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <br /><br /><br />
                        <h2>Faça a diferença na sua cidade</h2>
                        <br />
                        <p>
                            O <strong>Bauru Solidária</strong> é uma ponte entre a solidariedade e a necessidade. <br />
                            Muitas vezes, a vontade de ajudar esbarra na falta de informação sobre onde 
                            e como atuar. <br /> 
                            Nossa plataforma centraliza as oportunidades de voluntariado 
                            em Bauru, facilitando esse encontro.
                        </p>
                        <br />
                        <p>
                            Explore abaixo as causas que precisam do seu apoio hoje. <br />
                            Seja com tempo, habilidade ou carinho, sua participação é fundamental para fortalecer 
                            nossa rede de apoio local.
                        </p>
                        <br /><br />

                        <button className="btn-primary" onClick={() => navigate('/projetos')}>
                            Projetos
                        </button>

                    </div>
                </div>
            </section>

            {mostrarCadastro && (
                <CadastroModal onClose={() => setMostrarCadastro(false)} />
            )}
        </>
    );
}

export default Home;