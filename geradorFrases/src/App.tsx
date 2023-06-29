import { useState } from 'react'
import './App.css'

import logoImg from './assets/logo.png'

function App() {

  const [textoFrase, setTextoFrase] = useState('')
  const [categoriaSelecionada, setcategoriaSelecionada] = useState(0)

  const allFrases = [
    {
      id: 1,
      nome: "Naruto",
      frases: [
        "Não é o rosto que faz de alguém um monstro, são as escolhas que elas fazem para as suas vidas.",
        "Trabalho duro é inútil para aqueles que não acreditam em si mesmos.",
        "Lar é onde tem alguém sempre pensando em você.",
        "Desista de me fazer desistir!",
        "O que dói não é crescer. O que dói é ver uma pessoa que tanto amou mudar.",
        "O fracasso não é razão para você desistir, desde que continue acreditando."
      ]
    },
    {
      id: 1,
      nome: "Sasuke",
      frases: [
        "Lágrimas e chuva, caem no meu rosto, meu corpo é incapaz de ficar, mas meu coração ainda não está disposto a sair.",
        "Desde que você não desista, vai sempre existir salvação.",
        "Quando alguém entende o que é o amor também entende o que é o ódio."
      ]
    },
    {
      id: 2,
      nome: "Obito",
      frases: [
        "No mundo ninja, aqueles que quebram as regras e as lei são vistos como escória, mas aqueles que abandonam até um de seus amigos são piores que escória.",
        "Fingir seu nome, e permitir que os outros façam tudo é diferente de confiar algo para um companheiro.",
        "Você provavelmente vai sofrer de novo daqui em diante... Mas não mude, continue seguindo o seu caminho."
      ]
    }
  ]

  function handleSwitchCategory(index: number){
    setcategoriaSelecionada(index)
  }


  function gerarFrases(){
    let numeroAleatorio = Math.floor(Math.random() * allFrases[categoriaSelecionada].frases.length)
    setTextoFrase(`"${allFrases[categoriaSelecionada].frases[numeroAleatorio]}"`)
  }

  return (
    <>
      <div className='container'>
        <h1 className='title'>FRASES</h1>
        <img 
          src={logoImg} 
          alt="Logo do naruto"
          className='logo'
        />

        <h2 className='title'>Categorias</h2>
        <section className='category-area'>
        
        {allFrases.map((item, index) => (
          <button 
            key={item.id}
            className='category-button'
            style={{
              borderWidth: item.nome === allFrases[categoriaSelecionada].nome ? 2 : 0,
              borderColor: "#1fa4db"
            }}
            onClick={() => handleSwitchCategory(index)}
          >
            {item.nome}
          </button>
        ))}

        </section>

        <button 
          className='button-frase'
          onClick={gerarFrases}
        >
          Gerar Frase
        </button>

        {textoFrase !== "" && <p className='texto-frase'>{textoFrase}</p>}

      </div>
    </>
  )
}

export default App
