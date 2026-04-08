import { Link } from "react-router";

function Cabecalho() {
    return(
        <div>
            <h1>Componente Cabeçalho</h1>  
            <header>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/cadastro">Cadastro</Link></li>
                        <li><Link to="/projetos">Projetos</Link></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Cabecalho;