export function generateGraph(numNodes) {
    const adj = [];
    for (let i = 0; i < numNodes; i++) {
        adj[i] = { edges: [] };
    }

    for (let i = 0; i < numNodes; i++) {
        let edgeCount = 0;
        for (let j = 0; j < numNodes; j++) {
            if (Math.random() >= 0.5 && i !== j && adj[j].edges.length < 4) {
                adj[j].edges.push(i);
                edgeCount++;
                if (edgeCount >= 3) {
                    break;
                }
            }
        }
    }
    return adj;
}

export function shortestPath(graph, start, end) {
    const distances = new Array(graph.nodes.length).fill(Infinity);
    distances[start] = 0;
    const predecessors = new Array(graph.nodes.length).fill(null);

    for (let i = 0; i < graph.nodes.length - 1; i++) {
        for (const edge of graph.edges) {
            const from = edge.from;
            const to = edge.to;
            if (distances[from] + 1 < distances[to]) {
                distances[to] = distances[from] + 1;
                predecessors[to] = from;
            }
        }
    }

    const path = [];
    let node = end;
    while (node !== null) {
        path.unshift(node);
        node = predecessors[node];
    }

    return path;
}