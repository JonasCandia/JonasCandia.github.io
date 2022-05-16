import React from 'react'
import '../styles/Home.css';

function Footer() {
  return (
    <footer id="contact">
      <h2>Contatos:</h2>
      <nav>
        <a href="https://github.com/JonasCandia" target="_blank" rel="noreferrer">
          <div id="github">
            <img className="icon" src="imagens/github.png" alt="Icone GitHub." />
            <p>GitHub</p>
          </div>
        </a>
        <a href="https://www.linkedin.com/in/jonas-candia/" target="_blank" rel="noreferrer">
          <div id="linkedin">
            <img className="icon" src="imagens/linkedin.png" alt="Icone Linkedin." />
            <p>Linkedin</p>
          </div>
        </a>
        <a href="https://www.instagram.com/jonasjmc/" target="_blank" rel="noreferrer">
          <div id="instagram">
            <img className="icon" src="imagens/intagran.png" alt="Icone Instagram." />
            <p>Instagram</p>
          </div>
        </a>
        <a href="https://www.facebook.com/jonas.candia/" target="_blank" rel="noreferrer">
          <div id="facebook">
            <img className="icon" src="imagens/face.png" alt="Icone Facebook." />
            <p>Facebook</p>
          </div>
        </a>
      </nav>
    </footer>
  )
}

export default Footer