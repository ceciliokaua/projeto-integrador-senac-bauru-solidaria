import { Link } from 'react-router-dom';
import '../Style/style.css';

function Rodape() {
  return (
    <footer className="rodape">
      <div className="rodape-container">
        
        {/* Marca */}
        <div className="rodape-column">
          <h2 className="rodape-logo">Voluntariar</h2>
          <p className="rodape-text">
            Plataforma dedicada à divulgação de projetos sociais.
            Não realizamos intermediação — o interessado entra em contato
            diretamente com as iniciativas.
          </p>
        </div>

        {/* Navegação */}
        <div className="rodape-column">
          <h3 className="rodape-title">Navegação</h3>
          <ul>
            <li><Link to="/">Início</Link></li>
            <li><Link to="/projetos">Projetos</Link></li>
            <li><Link to="/sobre">Sobre nós</Link></li>
          </ul>
        </div>

        {/* Transparência */}
        <div className="rodape-column">
          <h3 className="rodape-title">Transparência</h3>
          <ul>
            <li><Link to="/como-funciona">Como funciona</Link></li>
            <li><Link to="/responsabilidade">Responsabilidade</Link></li>
            <li><Link to="/privacidade">Privacidade</Link></li>
          </ul>
        </div>

        {/* Contato */}
        <div className="rodape-column">
          <h3 className="rodape-title">Contato</h3>
          <p className="rodape-text">baurusolidario2026@gmail.com</p>

          <div className="socials">
            <a href="#">F</a>
            <a href="#">I</a>
            <a href="#">L</a>
          </div>
        </div>

      </div>

      <div className="rodape-bottom">
        © 2026 Voluntariar — Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Rodape;