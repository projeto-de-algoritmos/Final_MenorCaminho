export function generateGraph(numNodes) {
    var nodes = [];
    var links = [];

    for (var i = 1; i <= numNodes; i++) {
        nodes.push({
            id: i,
            val: Math.floor(Math.random() * 100),
            color: '#111111'
        });
    }

    var numLinks = Math.floor(Math.random() * (numNodes - 1)) + numNodes;
    var nodeLinks = [];
    for (var i = 0; i < numNodes; i++) {
        nodeLinks[i] = 0;
    }
    for (var i = 0; i < numLinks; i++) {
        var source = Math.floor(Math.random() * numNodes) + 1;
        var target = Math.floor(Math.random() * numNodes) + 1;
        if (nodeLinks[source - 1] < 3 && nodeLinks[target - 1] < 3) {
            links.push({
                source: source,
                target: target
            });
            nodeLinks[source - 1]++;
            nodeLinks[target - 1]++;
        }
    }

    return {
        nodes: nodes,
        links: links
    };
}
