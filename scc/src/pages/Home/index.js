import './styles.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Home() {
  const [numNodes, setNumNodes] = useState();  

  return(
    <div className='home' >
      <h1>Menor Caminho</h1>
      <p>Este projeto calcula o menor caminho entre dois nós num grafo usando abordagem Bellman-Ford</p>
      <label>Digite o número de nós do grafo a ser gerado:</label>
      <input value={ numNodes } onChange={ (e) => setNumNodes(e.target.value) } placeholder='Número de nós do grafo' />
      <Link
        to='/result'
        state={ { numNodes } }
      >Gerar grafo</Link>
    </div>
  )
}
