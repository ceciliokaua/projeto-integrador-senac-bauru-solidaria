import '../Style/style.css'


// function Rodape() {
//   return (
//     <footer className="rodape">
//       <p>© 2023 Voluntaria Bauru | Projeto educacional</p>
//     </footer>
//   )
// }
 
// export default Rodape;



// function Rodape(){
//   return (
//     <footer className= "rodape">
//       <div className= "rodape-container">
        
//         {/* Marca */}
//         <div className="rodape-column">
//           <h2 className= "rodape-logo">Voluntariar</h2>
//           <p className="rodape-text">
//             Plataforma dedicada à divulgação de projetos sociais.
//             Não realizamos intermediação — o interessado entra em contato
//             diretamente com as iniciativas.
//           </p>
//         </div>

//         {/* Navegação */}
//         <div className="rodape-column">
//           <h3 className="rodape-title">Navegação</h3>
//           <ul>
//             <li><a href="/">Início</a></li>
//             <li><a href="/projetos">Projetos</a></li>
//             <li><a href="/sobre">Sobre nós</a></li>
//           </ul>
//         </div>

//         {/* Transparência */}
//         <div className="rodape-column">
//           <h3 className="rodape-title">Transparência</h3>
//           <ul>
//             <li><a href="/como-funciona">Como funciona</a></li>
//             <li><a href="/responsabilidade">Responsabilidade</a></li>
//             <li><a href="/privacidade">Privacidade</a></li>
//           </ul>
//         </div>

//         {/* Contato */}
//         <div className="rodape-column">
//           <h3 className="rodape-title">Contato</h3>
//           <p className="rodape-text">baurusolidario2026@gmail.com</p>

//           <div className="socials">
//             <a href="#">F</a>
//             <a href="#">I</a>
//             <a href="#">L</a>
//           </div>
//         </div>

//       </div>

//       <div className="rodape-bottom">
//         © 2026 Voluntariar — Todos os direitos reservados.
//       </div>
//     </footer>
//   );
// };


function Rodape (){
  return (
    <footer className="rodape">
      <div className="rodape-container">

        {/* Marca */}
        <div className="rodape-marca">
          <h2 className="rodape-logo">Voluntariar</h2>
          <p className="rodape-descricao">
            Conectamos você a projetos sociais reais. 
            Não intermediamos — o contato é direto com cada iniciativa.
          </p>
        </div>

        {/* Links */}
        <div className="rodape-links">
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
              <li>
                <a href="mailto:contato@voluntariar.com">Email</a>
              </li>
            </ul>

            <div className="redes-sociais">
              <a href="#">F</a>
              <a href="#">I</a>
              <a href="#">L</a>
            </div>
          </div>
        </div>

      </div>

      <div className="rodape-base">
        <span>© 2026 Voluntariar</span>
        <span className="divisor">•</span>
        <span>Feito para conectar pessoas a boas causas</span>
      </div>
    </footer>
  )
};

export default Rodape;