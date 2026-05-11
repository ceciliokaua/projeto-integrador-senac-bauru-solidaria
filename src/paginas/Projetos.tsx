import Cards from '../componentes/Cards';

function Projetos() {
    return (
        <main className="projetos-container">
            <section className="secao-texto" style={{ textAlign: 'center' }}>
                <h1>Projetos em Destaque</h1>
                <p>Encontre uma causa que ressoe com você e faça a diferença em Bauru.</p>
            </section>
            
            {/* Chamada do componente que contém a lógica dos cartões */}
            <Cards />
        </main>
    );
}

export default Projetos;