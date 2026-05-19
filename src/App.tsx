import { Route, Routes, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import './Style/style.css'

import Home from './paginas/Home'
import Projetos from './paginas/Projetos'
import ProjetoDetalhe from './paginas/ProjetoDetalhe'
import PageNotFound from './paginas/PageNotFound'
import Cabecalho from './componentes/Cabecalho'
import Rodape from './componentes/Rodape'
import CadastroModal from './componentes/CadastroModal'

// Imports das novas páginas
import SobreNos from './paginas/SobreNos'
import ComoFunciona from './paginas/ComoFunciona'
import Responsabilidade from './paginas/Responsabilidade'
import Privacidade from './paginas/Privacidade'

export interface Projeto {
  id: number;
  titulo: string;
  descricao: string;
  imagem: string;
  categoria: string;
}

const initialProjetos = [
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
    }
  ]; 

function App() {

  const [projetos, setProjetos] = useState(initialProjetos);

  const navigate = useNavigate();

  function adicionarProjeto(novoProjeto: Omit<Projeto, "id">) {
    setProjetos(prev => [
      { ...novoProjeto, id: prev.length + 1 },
      ...prev
    ]);
  }

  return (
    <>
      <Cabecalho />

      <Routes>
        <Route path="/" element={<Home />} /> 

        <Route path="/cadastro"
               element={
                <>
                  <Home />
                  <CadastroModal 
                  onClose={() => navigate(-1)}
                  onAddProjeto={adicionarProjeto} 
                  />
                </>
               }
        />

        {/* Agora a página de Projetos inclui o componente Cards */}
        <Route path="/projetos" element={<Projetos projetos={projetos} />} />
        <Route path="/projetos/:id" element={<ProjetoDetalhe />} />

        {/* Páginas institucionais apenas com o texto */}
        <Route path="/sobre" element={<SobreNos />} />
        <Route path="/como-funciona" element={<ComoFunciona />} />
        <Route path="/responsabilidade" element={<Responsabilidade />} />
        <Route path="/privacidade" element={<Privacidade />} />

        <Route path="*" element={<PageNotFound />} />
        
      </Routes>
      
      <Rodape />
    </>
  )
}

export default App