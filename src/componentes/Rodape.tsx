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
            {/* Facebook */}
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg viewBox="0 0 24 24" className="icone-svg">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 24 24" className="icone-svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" className="icone-svg">
                <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.12 20.45H3.56V9H7.12v11.45zM5.34 7.43c-1.14 0-2.06-.92-2.06-2.06 0-1.14.92-2.06 2.06-2.06 1.14 0 2.06.92 2.06 2.06 0 1.14-.92 2.06-2.06 2.06zm15.11 13.02h-3.56v-5.6c0-1.34-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.7h-3.56V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29z"/>
              </svg>
            </a>
          </div>
        </div>

      </div>

      <div className="rodape-buttom">
        © 2026 Voluntariar — Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Rodape;