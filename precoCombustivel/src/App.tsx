import { useState, FormEvent } from 'react'
import './App.css'

import logoImg from './assets/logo.png'

interface InfoProps {
  title: string;
  gasolina: string | number;
  alcool: string | number;
}


function App() {

  const [gasolinaInput, setGasolinaInput] = useState(0)
  const [alcoolInput, setAlcoolInput] = useState(0)
  const [info, setInfo] = useState<InfoProps>()


  function calcular(e: FormEvent) {
    e.preventDefault()

    let calculo = (alcoolInput / gasolinaInput)

    if (calculo <= 0.7) {
      setInfo({
        title: "Compensa usar Álcool",
        gasolina: formatarMoeda(gasolinaInput),
        alcool: formatarMoeda(alcoolInput)
      })
    } else {
      setInfo({
        title: "Compensa usar Gasolina",
        gasolina: formatarMoeda(gasolinaInput),
        alcool: formatarMoeda(alcoolInput)
      })
    }

  }

  //FUNÇÃO PARA FORMATAR O VALOR PARA REAL
  function formatarMoeda(valor: number){

    let valorFormatado = valor.toLocaleString("pt-br", 
    {
      style: 'currency',
      currency: 'BRL'
    })

    return valorFormatado
  }

  return (
    <>
      <main className='container'>
        <img
          className='logo'
          src={logoImg}
          alt='Logo da calculadora de gasolina ou alcool'
        />
        <h1 className='title'>Qual melhor opção</h1>

        <form className='form' onSubmit={calcular}>
          <label>Álcool (preço por litro):</label>
          <input
            className='input'
            type="number"
            placeholder='4,90'
            min='1'
            step='0.01'
            required
            value={alcoolInput}
            onChange={(e) => setAlcoolInput(Number(e.target.value))}
          />

          <label>Gasolina (preço por litro):</label>
          <input
            className='input'
            type="number"
            placeholder='4,90'
            min='1'
            step='0.01'
            required
            value={gasolinaInput}
            onChange={(e) => setGasolinaInput(Number(e.target.value))}
          />

          <input
            className='button'
            type="submit"
            value="Calcular"
          />
        </form>

        {/* //SÓ APARECE A INFORMAÇÃO CASO TENHA ALGO DIGITADO NOS CAMPOS */}
        {info && Object.keys(info).length > 0 && (

          <section className='result'>
            <h2 className='result-title'>
              {info.title}!
            </h2>

            <span>Álcool {info.alcool}</span>
            <span>Gasolina {info.gasolina}</span>
          </section>

        )}

      </main>
    </>
  )
}

export default App
