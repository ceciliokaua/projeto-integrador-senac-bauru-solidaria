import { Link } from "react-router";
import "../Style/style.css"

function Cabecalho() {
    return (
        <header className="header-container">
            <div className="logo">
                Bauru Solidária
            </div>
            <nav>
                <ul className="nav-list">
                    <li>
                        <Link to="/" className="nav-link">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/cadastro" className="nav-link">
                            Cadastro
                        </Link>
                    </li>
                    <li>
                        <Link to="/projetos" className="nav-link">
                            Projetos
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Cabecalho;