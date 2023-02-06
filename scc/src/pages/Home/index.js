import './styles.css';

export default function Home() {
  return(
    <div className='home' >
      <h1>Strongly Connected</h1>
      <p>Este projeto calcula o número de componentes fortemente conectados num grafo usando 
        a abordagem de Dividir para Conquistar</p>
      <a href='/result' >Gerar grafo</a>
    </div>
  )
}