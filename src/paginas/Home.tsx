import { useState } from "react";
import CadastroModal from "../componentes/CadastroModal";
import imagemFundo from "../assets/fundo-home.jpg";

function Home() {

     const [mostrarCadastro, setMostrarCadastro] = useState (false);

    return (
        <>
            <section className="home">
                <img 
                    src= {imagemFundo}
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

            {mostrarCadastro && (
                <CadastroModal onClose={() => setMostrarCadastro(false)} />
            )};
        </>
    );
};

export default Home;