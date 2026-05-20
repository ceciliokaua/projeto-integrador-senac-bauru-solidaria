import { useNavigate } from "react-router-dom";
import "../Style/style.css";

interface Projeto {
    id: number;
    titulo: string;
    descricao: string;
    imagem: string;
    categoria: string;
}

const projetosBauruFixos: Projeto[] = [
    {
        id: 101, 
        titulo: "Projeto Amigos da Natureza",
        descricao: "Ajude nas ações de conservação da biodiversidade, catalogação da flora e sensibilização ambiental no Jardim Botânico Municipal.",
        imagem: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=500",
        categoria: "Meio Ambiente"
    },
    {
        id: 102,
        titulo: "Voluntariado Hospitalar HC",
        descricao: "Ofereça apoio humanizado a pacientes e acompanhantes internados nas unidades do Hospital das Clínicas de Bauru.",
        imagem: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=500",
        categoria: "Saúde"
    },
    {
        id: 103,
        titulo: "Voluntário Global AIESEC",
        descricao: "Desenvolva sua liderança participando ou apoiando intercâmbios focados nas Metas de Desenvolvimento Sustentável da ONU em Bauru.",
        imagem: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?w=500",
        categoria: "Cultura"
    },
    {
        id: 104,
        titulo: "Projeto Abrace",
        descricao: "Apoie famílias em situação de extrema vulnerabilidade social com arrecadação de roupas, móveis e mantimentos básicos na cidade.",
        imagem: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=500",
        categoria: "Assistência Social"
    },
    {
        id: 105,
        titulo: "Ações Sociais Cáritas",
        descricao: "Participe de oficinas de capacitação, acolhimento de migrantes e distribuição de recursos promovidos pela Cáritas Diocesana de Bauru.",
        imagem: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=500",
        categoria: "Direitos Humanos"
    },
    {
        id: 106,
        titulo: "Padrinho Nota 10",
        descricao: "Seja um tutor de crianças carentes de Bauru, auxiliando financeiramente ou com mentorias educacionais permanentes.",
        imagem: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500",
        categoria: "Educação"
    },
    {
        id: 107,
        titulo: "Projetos de Filantropia CEAC",
        descricao: "Atue no Albergue Noturno, na Casa de Passagem ou nas frentes de assistência e acolhimento do Centro Espírita Amor e Caridade.",
        imagem: "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?w=500",
        categoria: "Acolhimento"
    },
    {
        id: 108,
        titulo: "Ambulatório de Especialidades Veritas",
        descricao: "Estudantes e profissionais de saúde atuando no tratamento integrado e gratuito de úlceras de membros inferiores para a comunidade.",
        imagem: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500",
        categoria: "Saúde"
    },
    {
        id: 109,
        titulo: "Seja um Voluntário LBV",
        descricao: "Colabore ativamente nas campanhas de apoio a crianças, jovens e idosos assistidos na unidade da Legião da Boa Vontade em Bauru.",
        imagem: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=500",
        categoria: "Assistência Social"
    }
];

function Cards({ projetos = [] }: { projetos?: Projeto[] }) {
    const navigate = useNavigate();
    
    // 2. Unimos os projetos fixos do arquivo com qualquer projeto dinâmico vindo do estado global (App.tsx / Modal)
    const listaExibicao = [...projetos, ...projetosBauruFixos];

    return (
        <div className="projetos-grid">
            {listaExibicao.map((projeto) => (
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