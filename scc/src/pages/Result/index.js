import './styles.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import Graph from 'react-graph-vis';
import { generateGraph, shortestPath } from '../../utils/graph';

export default function Result() {
  const location = useLocation();
  const navigate = useNavigate();

  const [path, setPath] = useState({ start: null, end: null, path:[] });  
  const numNodes = useMemo(() => {
    if(!location?.state?.numNodes) navigate('/')
    return location.state.numNodes 
  }, [location?.state]);
  const adjList = useMemo(() => generateGraph(numNodes), [numNodes]);

  const buildNodes = () => {
    const nodes = [];
    for (var i = 0; i < adjList.length; i++) {
      nodes.push({ id: i, color: "gray" });
    }
    return nodes;
  };

  const buildEdges = () => {
    const edges = [];
    for (var i = 0; i < adjList.length; i++) {
      for (var j = 0; j < adjList[i].edges.length; j++) {
        edges.push({ from: i, to: adjList[i].edges[j] });
      }
    }
    return edges;
  };

  const events = {
    selectNode: ({ nodes }) => {
      if(!path.start) {
        setPath({ ...path, start: nodes[0] });
        return 
      }
      if(!path.end && path.start !== nodes[0]) {
        setPath({ ...path, end: nodes[0] });
        return 
      }
    }
  };

  const options = {
    layout: {
      hierarchical: false,
      randomSeed: 16,
    },
    edges: {
      color: "#000000",
    },
    nodes: {
      fixed: false,
    },
    height: "100%",
    interaction: {
      selectConnectedEdges: false,
      multiselect: true,
    },
    physics: {
      enabled: false,
    },
  };

  const [graph, setGraph] = useState({ edges: buildEdges(), nodes: buildNodes() })

  useEffect(() => {
    if(path.start && path.end) {
      setPath({ ...path, path: shortestPath(graph, path.start, path.end) })
    }

    setGraph({
      ...graph, nodes: graph.nodes.reduce((acc, curr) => {
        if(curr.id === path.start) {
          return [...acc, { ...curr, color: '#111111' }]
        }
        
        if(curr.id === path.end) {
          return [...acc, { ...curr, color: '#111111' }]
        }
        
        return [...acc, curr]
      }, [])
    })
  }, [path.start, path.end])

  useEffect(() => {
    setGraph({
      ...graph, nodes: graph.nodes.reduce((acc, curr) => {
        if(path.path?.some((item) => item === curr.id))
        {
          return [...acc, { ...curr, color: '#E07A5F' }]
        }

        return [...acc, curr]
      }, [])
    })
  }, [path.path])

  return (
    <div className='result' >
      <p>Clique no nó inicial e em seguida no nó final e veja o menor caminho se destacar no grafo</p>
      <Graph 
        key={ Math.random() }
        graph={ graph }
        style={ { 
          width: '100vw',
          height: '100vh'
         } }
         options={ options }
         events={ events }
      />
    </div>
  )
}
