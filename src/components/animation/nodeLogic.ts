type Node = {
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
  connections: number[];
  pulsePhase: number;
  pulseSpeed: number;
  isActive: boolean;
  activationTime: number;
  lastActivated: number;
};

export const createNodes = (nodeCount: number, canvasWidth: number, canvasHeight: number): Node[] => {
  const nodes: Node[] = [];
  
  for (let i = 0; i < nodeCount; i++) {
    nodes.push({
      x: Math.random() * canvasWidth,
      y: Math.random() * canvasHeight,
      radius: Math.random() * 2.5 + 1.5,
      vx: (Math.random() - 0.5) * 0.7,
      vy: (Math.random() - 0.5) * 0.7,
      connections: [],
      pulsePhase: Math.random() * Math.PI * 2,
      pulseSpeed: 0.05 + Math.random() * 0.05,
      isActive: false,
      activationTime: 0,
      lastActivated: 0
    });
  }
  
  return nodes;
};

export const createNeuralPathways = (nodeCount: number, nodes: Node[]): number[][] => {
  // Group nodes into pathways
  const pathways: number[][] = [];
  const usedNodes: Set<number> = new Set();
  
  // Create 3-5 main pathways
  const pathwayCount = Math.floor(Math.random() * 3) + 3;
  
  for (let i = 0; i < pathwayCount; i++) {
    const pathway: number[] = [];
    // Each pathway has 4-8 nodes
    const pathLength = Math.floor(Math.random() * 5) + 4;
    
    for (let j = 0; j < pathLength; j++) {
      // Find an unused node
      let nodeIndex;
      do {
        nodeIndex = Math.floor(Math.random() * nodeCount);
      } while (usedNodes.has(nodeIndex));
      
      pathway.push(nodeIndex);
      usedNodes.add(nodeIndex);
      
      // Don't use all nodes to allow some random activations
      if (usedNodes.size >= nodeCount * 0.8) break;
    }
    
    pathways.push(pathway);
  }
  
  return pathways;
};

export const updateNodes = (
  nodes: Node[], 
  pathways: number[][], 
  timestamp: number, 
  lastPathwayActivation: number,
  canvas: HTMLCanvasElement
) => {
  // Update node positions
  nodes.forEach(node => {
    // Update node position
    node.x += node.vx;
    node.y += node.vy;
    
    // Bounce off edges
    if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
    if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
    
    // Update pulse phase
    node.pulsePhase += node.pulseSpeed;
  });
  
  // Update node activation status based on pathways
  pathways.forEach(pathway => {
    for (let i = 0; i < pathway.length - 1; i++) {
      const currentNode = nodes[pathway[i]];
      const nextNode = nodes[pathway[i + 1]];
      
      // If current node is active and it's been active for a short time, activate the next node
      if (currentNode.isActive && timestamp - currentNode.activationTime > 100 + Math.random() * 100) {
        nextNode.isActive = true;
        nextNode.activationTime = timestamp;
        nextNode.lastActivated = timestamp;
        
        // Deactivate current node after some time
        if (timestamp - currentNode.activationTime > 300) {
          currentNode.isActive = false;
        }
      }
    }
    
    // Deactivate the last node in the pathway after some time
    const lastNode = nodes[pathway[pathway.length - 1]];
    if (lastNode && lastNode.isActive && timestamp - lastNode.activationTime > 300) {
      lastNode.isActive = false;
    }
  });
  
  // Random activations to keep things interesting
  if (Math.random() < 0.01) {
    const randomIndex = Math.floor(Math.random() * nodes.length);
    nodes[randomIndex].isActive = true;
    nodes[randomIndex].activationTime = timestamp;
    nodes[randomIndex].lastActivated = timestamp;
  }
  
  // Deactivate nodes after a period of time
  nodes.forEach(node => {
    if (node.isActive && timestamp - node.activationTime > 400) {
      node.isActive = false;
    }
  });
};
