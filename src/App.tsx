import { Route, Routes } from 'react-router-dom'
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

function App() {

  return (
    <>
      <Cabecalho />
      <Routes>
        <Route path="/" element={<Home />} /> 

        <Route path="/cadastro"
               element={
                <>
                  <Home />
                  <CadastroModal onClose={() => window.history.back()} />
                </>
               }
        />

        {/* Agora a página de Projetos inclui o componente Cards */}
        <Route path="/projetos" element={
          <>
            <Projetos />
          </>
        } />

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