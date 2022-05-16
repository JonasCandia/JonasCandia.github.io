import React from 'react'
import '../styles/Home.css';

function Galery() {
  return (
    <article className="box_main" id="galery">
        <header className="cabecalho_main">
          <h1 className="titulo_main">Galeria</h1>
        </header>
        <section>
          <a href="https://www.facebook.com/photo/?fbid=1996881980415781&set=pb.100002819948027.-2207520000.." target="_blank" rel="noreferrer"><img className="imagens" src="imagens/galery3.jpg" alt="Jonas apresentando o artigo'Experiencia com modelos e jogos anatômicos com crianças de quatro e cinco anos.',para a jurada do congresso internacional de anatomia." /></a>
          <a href="https://www.facebook.com/photo.php?fbid=1996882017082444&set=pb.100002819948027.-2207520000..&type=3" target="_blank" rel="noreferrer"><img className="imagens" src="imagens/galery1.jpg" alt="Jonas abraçado em seu professor e mentor João Antônio Bonatto Costa, ao lado o banner do trabalho cientifico 'Experiencia com modelos e jogos anatômicos com crianças de quatro e cinco anos'" /></a>
          <a href="https://www.facebook.com/photo/?fbid=1256001667837153&set=pb.100002819948027.-2207520000.." target="_blank" rel="noreferrer"><img className="imagens" src="imagens/galery2.jpg" alt="Jonas com seus colegas Jéssica Scherer, Matheus Ramos, Matheus Melo, Bernardo Costa e seu professor e mentor João Antônio Bonatto Costa, ao fundo o banner do trabalho cientifico ‘O uso de jogos para o ensino da anatomia’." /></a>
        </section>
      </article>
  )
}

export default Galery