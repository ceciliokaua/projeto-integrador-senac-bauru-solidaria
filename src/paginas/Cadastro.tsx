import { useState } from "react";
import "../Style/Cadastro.css";

interface CadastroForm {
    nome: string;
    email: string;
    telefone: string;
    projeto: string;
    disponibilidade: string;
    mensagem: string;
}

function Cadastro() {

    const initialFormState: CadastroForm = {
        nome: "",
        email: "",
        telefone: "",
        projeto: "",
        disponibilidade: "",
        mensagem: "",
    };

    const [form, setForm] = useState<CadastroForm>(initialFormState);

    const [sucesso, setSucesso] = useState(false);
    
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

function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log(form);
    setSucesso(true);
    setForm(initialFormState);
}

    return (
        <div className="cadastro-overlay">
            <div className="cadastro-card">
                <header className="cadastro-header">
                    <h2>Cadastro de Voluntário</h2>
                </header>
                
                {sucesso && (
                    <p className="cadastro-sucesso">
                        Cadastro enviado com sucesso!
                    </p>
                )}

                <form className="cadastro-form" onSubmit={handleSubmit}>
                    <label>Nome Completo *</label>
                    <input 
                      type="text"
                      name="nome"
                      value={form.nome}
                      onChange={handleChange}
                      required
                    />

                    <label>E-mail *</label>
                    <input 
                      type="text"
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

                    <label>Projeto de Interesse *</label>
                    <select
                      name="projeto"
                      value={form.projeto}
                      onChange={handleChange}
                      required
                    >
                        <option value="">Selecione um projeto</option>
                        <option value="banco-de-alimentos">Banco de Alimentos</option>
                        <option value="educacao-infantil">Educação Infantil</option>
                        <option value="cuidado-idosos">Cuidado aos idosos</option>
                    </select>

                    <label>Disponibilidade *</label>
                    <select
                      name="disponibilidade"
                      value={form.disponibilidade}
                      onChange={handleChange}
                      required
                    >
                        <option value="">Selecione sua disponibilidade</option>
                        <option value="semana-manha">Dias de semana - Manhã</option>
                        <option value="semana-tarde">Dias de semana - Tarde</option>
                        <option value="semana-noite">Dias de semana - Noite</option>
                        <option value="final-semana">Finais de semana</option>
                        <option value="flexivel">Flexível</option>
                    </select>

                    <label>Mensagem (Opcional) *</label>
                    <input 
                      type="text"
                      name="mensagem"
                      value={form.mensagem}
                      onChange={handleChange}
                      required
                    />

                    <button type="submit" className="cadastro-btn">
                    Enviar Cadastro
                </button>

                </form>

            </div>
        </div>
    )
}
export default Cadastro