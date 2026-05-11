import { useNavigate } from "react-router-dom";
import "../Style/style.css";

interface Projeto {
    id: number;
    titulo: string;
    descricao: string;
    imagem: string;
    categoria: string;
}

const PROJETOS_DATA: Projeto[] = [
    {
        id: 1,
        titulo: "Arrecadação de Alimentos",
        descricao: "Ajude famílias carentes da região noroeste de Bauru com cestas básicas.",
        imagem: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=500",
        categoria: "Alimentação"
    },
    {
        id: 2,
        titulo: "Aulas de Reforço Escolar",
        descricao: "Seja voluntário ensinando matemática e português para crianças do ensino fundamental.",
        imagem: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=500",
        categoria: "Educação"
    },
    {
        id: 3,
        titulo: "Cuidado com os Pets",
        descricao: "Apoio no banho, passeio e limpeza de abrigos de animais resgatados.",
        imagem: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=500",
        categoria: "Animal"
    }
];

function Cards() {
    const navigate = useNavigate();

    return (
        <div className="projetos-grid">
            {PROJETOS_DATA.map((projeto) => (
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
                            onClick={() => navigate("/cadastro")}
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