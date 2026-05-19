import { useNavigate } from "react-router-dom";
import "../Style/style.css";

interface Projeto {
    id: number;
    titulo: string;
    descricao: string;
    imagem: string;
    categoria: string;
}

function Cards({ projetos }: { projetos: Projeto[] }) {
    const navigate = useNavigate();

    return (
        <div className="projetos-grid">
            {projetos.map((projeto) => (
                <article key={projeto.id} className="projeto-card">
                    <img 
                        src={projeto.imagem} 
                        alt={projeto.titulo} 
                        className="projeto-imagem" 
                    />
                    <div className="projeto-info">
                        <span className="categoria-tag">{projeto.categoria}</span>
                        <h3>{projeto.titulo}</h3>
                        <p>{projeto.descricao}</p>
                        <button 
                            className="btn-participar"
                            onClick={() => navigate(`/projetos/${projeto.id}`)}
                        >
                            Quero Participar
                        </button>
                    </div>
                </article>
            ))}
        </div>
    );
}

export default Cards;