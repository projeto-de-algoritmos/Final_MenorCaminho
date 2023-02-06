import './styles.css';
import { ForceGraph3D } from 'react-force-graph';
import { generateGraph } from '../../utils/graph';
import { useEffect, useState } from 'react';

export default function Result() {
  const [numNodes, setNumNodes] = useState(50);
  const [graph, setGraph] = useState(generateGraph(numNodes));

  useEffect(() => {
    setGraph(generateGraph(numNodes));
  }, [numNodes]);

  return(
    <div className='result' >
      <h1>renaissance album of the year</h1>
      <form>
        <label>Digite o numero de nós do grafo</label>
        <input max={500} value={ numNodes } placeholder='Número de nós do grafo' type='number' onChange={ (e) => { 
          if(e.target.value > -1 && e.target.value < 501) setNumNodes(e.target.value)   
        }
        }/>          
          </form>
      <div className='graph-container' >
        <ForceGraph3D 
          backgroundColor='#B7D078'
          nodeOpacity={1}
          nodeLabel={ (node) => `${node.id}` }
          linkColor='#111111'
          linkOpacity={1}
          linkWidth={1.5}
          graphData={ graph }
        />
      </div>
    </div>
  )
}