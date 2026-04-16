import React from "react";
 
const Footer: React.FC = () => {
  return (
  <footer className="footer">
    <div className="footer-container">
 
{/* Marca */}
  <div className="footer-brand">
    <h2 className="footer-logo">Voluntariar</h2>
      <p className="footer-description">
        Conectamos você a projetos sociais reais.
        Não intermediamos — o contato é direto com cada iniciativa.
      </p>
  </div>
 
{/* Links */}
<div className="footer-links">
  <div>
    <h3>Navegação</h3>
    <ul>
      <li><a href="/">Início</a></li>
      <li><a href="/projetos">Projetos</a></li>
      <li><a href="/sobre">Sobre</a></li>
  </ul>
</div>
 
<div>
  <h3>Transparência</h3>
    <ul>
      <li><a href="/como-funciona">Como funciona</a></li>
      <li><a href="/responsabilidade">Responsabilidade</a></li>
      <li><a href="/privacidade">Privacidade</a></li>
    </ul>
</div>
 
<div>
  <h3>Contato</h3>
    <ul>
      <li><a href="mailto:contato@voluntariar.com">Email</a></li>
</ul>

 
<div className="socials">
  <a href="#">F</a>
  <a href="#">I</a>
  <a href="#">L</a>

</div>
</div>
</div>
 
</div>
 
<div className="footer-bottom">
  <span>© 2026 Voluntariar</span>
  <span className="divider">•</span>
  <span>Feito para conectar pessoas a boas causas</span>
</div>
</footer>

);
};
 
export default Footer;