import Cards from '../componentes/Cards';

interface Projeto {
  id: number;
  titulo: string;
  descricao: string;
  imagem: string;
  categoria: string;
}

function Projetos({projetos}: { projetos: Projeto[] }) {
    return (
        <main className="projetos-container">
            <section className="secao-texto" style={{ textAlign: 'center' }}>
                <h1>Projetos em Destaque</h1>
                <p>Encontre uma causa que ressoe com você e faça a diferença em Bauru.</p>
            </section>
            
            {/* Chamada do componente que contém a lógica dos cartões */}
            <Cards projetos={projetos} />
        </main>
    );
}

export default Projetos;