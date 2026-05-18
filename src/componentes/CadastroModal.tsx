import { useEffect, useState } from "react";
import "../Style/style.css";

interface CadastroModalProps {
    onClose: () => void;
}

interface CadastroForm {
    titulo: string;
    categoria: string;
    descricao: string;
    email: string;
    telefone: string;
    local: string;
}

function CadastroModal({ onClose }: CadastroModalProps) {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const initialFormState: CadastroForm = {
        titulo: "",
        categoria: "",
        descricao: "",
        email: "",
        telefone: "",
        local: "",
    };

    const [form, setForm] = useState<CadastroForm>(initialFormState);

    const [sucesso, setSucesso] = useState(false);

    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);
    
    function handleChange(
    e: React.ChangeEvent<
    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >

) {
    const { name, value } = e.target;
    setForm({ 
        ...form,
        [name]: value, });
}

async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
        await enviarCadastro(form);

        setSucesso(true);
        setForm(initialFormState);
    }   catch (error) {
        console.error(error);
        alert("Erro ao enviar cadastro");
    }
}

function handleClose() {
    setIsVisible(false);

    setTimeout(() => {
        onClose();
    }, 300); // tempo da animação
}

async function enviarCadastro(dados:CadastroForm) {
    // Simulação de API (replace futuramente)
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Enviando para o back-end", dados);
            resolve(true);
        }, 1000);
    });
}

    return (
        <div className={`cadastro-overlay ${isVisible ? "show" : ""}`} 
             onClick={handleClose} >
            <div className={`cadastro-card ${isVisible ? "show" : ""}`} 
                 onClick={(e) => e.stopPropagation()}>

                <button className="fechar-modal" onClick={handleClose}>
                    x
                </button>

                <header className="cadastro-header">
                    <h2>Cadastro de Projeto</h2>
                </header>
                
                {sucesso && (
                    <p className="cadastro-sucesso">
                        Cadastro enviado com sucesso!
                    </p>
                )}

                <form className="cadastro-form" onSubmit={handleSubmit}>
                    <label>Nome do Projeto *</label>
                    <input 
                      type="text"
                      name="titulo"
                      value={form.titulo}
                      onChange={handleChange}
                      required
                    />

                    <label>Categoria *</label>
                    <select 
                      name="categoria"
                      value={form.categoria}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Selecione uma categoria</option>
                      <option value="Alimentação">Alimentação</option>
                      <option value="Educação">Educação</option>
                      <option value="Animal">Animal</option>
                    </select>

                    <label>Descrição *</label>
                    <textarea
                      name="descricao"
                      value={form.descricao}
                      onChange={handleChange}
                      required
                    />

                    <label>Email de contato *</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />

                    <label>Telefone *</label>
                    <input
                      type="text"
                      name="telefone"
                      value={form.telefone}
                      onChange={handleChange}
                      required
                    />

                    <label>Local (Opcional)</label>
                    <input
                      type="text"
                      name="local"
                      value={form.local}
                      onChange={handleChange}
                    />

                    <button type="submit" className="cadastro-btn">
                    Cadastrar Projeto
                </button>

                </form>

            </div>
        </div>
    )
}
export default CadastroModal