import React from 'react'
import '../styles/Home.css';

function Habilities() {
  return (
    <article className="box_main" id="hability">
        <header className="cabecalho_main">
          <h1 className="titulo_main">Habilidades</h1>
        </header>
        <section>
          <ul>
            <li><strong>Tenho boa comunicação;</strong></li>
            <li>Sei trabalhar em equipe;</li>
            <li>Sei liderar;</li>
            <li>Sou inovador e criativo;</li>
            <li>Estou sempre em busca de novos aprendizados. </li>
          </ul>
        </section>
      </article>
  )
}

export default Habilities