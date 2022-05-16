import React from 'react'
import '../styles/Home.css';

function Header() {
  return (
    <header>
      <div id="cabecalho_left">
        <div className="cabecalho_text">
          <h1 id="welcome">Olá visitante!</h1>
          <p id="what">Aqui você vai ver um pouco do perfil pessoal e profissional de Jonas Candia.
            Afim de demostrar os trabalhos e um pouco da vida pessoal de Jonas, é para o que este portfólio, que foi desenvolvido durante o curso de Desenvolvimento web da Trybe,  foi criado.
          </p>
        </div>        
        <nav id="header">
            <ul>
              <li><a href="#history">História</a></li>
              <li><a href="#hability" >Habilidades</a></li>
              <li><a href="#galery" >Galeria</a></li>
              <li><a href="#blog" >Blog</a></li>
              <li><a href="#contact">Contato</a></li>
            </ul>
        </nav>
      </div>
      <img id="imagem-perfil" src="perfil.jpeg" alt="Jonas Candia sorrindo, vestindo camisa social, gravata e suspesório." />        
    </header>
  )
}

export default Header