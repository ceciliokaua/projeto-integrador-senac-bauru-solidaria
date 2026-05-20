import { Route, Routes, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import './Style/style.css'

import Home from './paginas/Home'
import Projetos from './paginas/Projetos'
import PageNotFound from './paginas/PageNotFound'
import Cabecalho from './componentes/Cabecalho'
import Rodape from './componentes/Rodape'
import CadastroModal from './componentes/CadastroModal'

// Imports das novas páginas
import SobreNos from './paginas/SobreNos'
import ComoFunciona from './paginas/ComoFunciona'
import Responsabilidade from './paginas/Responsabilidade'
import Privacidade from './paginas/Privacidade'
import FormularioCard from './componentes/FormularioCard'

export interface Projeto {
  id: number;
  titulo: string;
  descricao: string;
  imagem: string;
  categoria: string;
}

function App() {
  // Estado iniciado como array vazio para eliminar os dois cards de teste antigos
  const [projetos, setProjetos] = useState<Projeto[]>([]);

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
        <Route path="/projetos/:id" element={<FormularioCard />} />

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

export default App;