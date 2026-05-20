import { useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import "../Style/style.css";

interface ParticipanteForm {
  nome: string;
  email: string;
  telefone: string;
  motivacao: string;
}

function FormularioCard() {
  const navigate = useNavigate();

  // Estado inicial do formulário
  const initialFormState: ParticipanteForm = {
    nome: "",
    email: "",
    telefone: "",
    motivacao: "",
  };

  const [form, setForm] = useState<ParticipanteForm>(initialFormState);
  const [enviado, setEnviado] = useState(false);

  // Monitora as mudanças nos campos de texto
  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  }

  // Simula o envio do formulário salvando localmente no console
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Simulação de salvamento local (pode ser visto no Inspecionar -> Console)
    console.log("Inscrição realizada com sucesso de forma local:", form);
    
    setEnviado(true);
    setForm(initialFormState); // Limpa o formulário
  }

  return (
    <div className="pagina-container form-participar-container">
      {/* Botão para voltar para a listagem de projetos */}
      <button className="btn-voltar" onClick={() => navigate("/projetos")}>
        ← Voltar para Projetos
      </button>

      <div className="formulario-card">
        <header className="formulario-header">
          <h2>Quero Participar</h2>
          <p>Preencha seus dados para se conectar com esta iniciativa social de Bauru.</p>
        </header>

        {enviado ? (
          <div className="mensagem-sucesso-container">
            <h3 className="cadastro-sucesso">Inscrição Realizada com Sucesso!</h3>
            <p>Obrigado pelo seu interesse.</p>
            <p>O responsável irá avaliar sua candidatura e entrará em contato!</p>
            <button className="btn-primary" onClick={() => setEnviado(false)}>
              Fazer outra inscrição
            </button>
          </div>
        ) : (
          <form className="cadastro-form" onSubmit={handleSubmit}>
            
            <label htmlFor="nome">Nome Completo *</label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={form.nome}
              onChange={handleChange}
              placeholder="Digite seu nome"
              required
            />

            <label htmlFor="email">E-mail de Contato *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="seuemail@gmail.com"
              required
            />

            <label htmlFor="telefone">Telefone / WhatsApp *</label>
            <input
              type="text"
              id="telefone"
              name="telefone"
              value={form.telefone}
              onChange={handleChange}
              placeholder="(14) 99999-9999"
              required
            />

            <label htmlFor="motivacao">Por que você quer participar desse projeto? *</label>
            <textarea
              id="motivacao"
              name="motivacao"
              value={form.motivacao}
              onChange={handleChange}
              placeholder="Conte um pouco sobre sua motivação..."
              required
            />

            <div className="form-acoes">
              <button type="submit" className="cadastro-btn">
                Confirmar Minha Participação
              </button>
            </div>

          </form>
        )}
      </div>
    </div>
  );
}

export default FormularioCard;