import {Route, Routes} from 'react-router-dom'
import './Style/style.css'
import Home from './paginas/Home'
import Projetos from './paginas/Projetos'
import PageNotFound from './paginas/PageNotFound'
import Cabecalho from './componentes/Cabecalho'
import Rodape from './componentes/Rodape'
import Cards from './componentes/Cards'
import CadastroModal from './componentes/CadastroModal'


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

        <Route path="/projetos" element={<Projetos />} />     

        <Route path="*" element={<PageNotFound />} />
        
      </Routes>
      <Cards />
      <Rodape />
    </>
  )
}

export default App
