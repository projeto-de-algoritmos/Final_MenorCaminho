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

export function shortestPath(graph, startNode, endNode) {
    return [1, 2, 3, 4, 5];
}