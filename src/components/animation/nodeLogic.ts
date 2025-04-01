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
  pathwayColor?: string; // Add color property
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

// Updated interface to include colors
export type Pathway = {
  nodes: number[];
  color: string;
};

export const createNeuralPathways = (nodeCount: number, nodes: Node[]): Pathway[] => {
  // Group nodes into pathways
  const pathways: Pathway[] = [];
  const usedNodes: Set<number> = new Set();
  
  // Pathway colors - distinct colors for each pathway
  const pathwayColors = [
    'rgba(72, 187, 120, 1)', // green (original)
    'rgba(79, 70, 229, 1)',  // indigo
    'rgba(236, 72, 153, 1)', // pink
    'rgba(249, 115, 22, 1)', // orange
    'rgba(16, 185, 129, 1)'  // emerald
  ];
  
  // Create 3-5 main pathways
  const pathwayCount = Math.floor(Math.random() * 3) + 3;
  
  for (let i = 0; i < pathwayCount; i++) {
    const nodeIndices: number[] = [];
    // Each pathway has 4-8 nodes
    const pathLength = Math.floor(Math.random() * 5) + 4;
    
    for (let j = 0; j < pathLength; j++) {
      // Find an unused node
      let nodeIndex;
      do {
        nodeIndex = Math.floor(Math.random() * nodeCount);
      } while (usedNodes.has(nodeIndex));
      
      nodeIndices.push(nodeIndex);
      usedNodes.add(nodeIndex);
      
      // Assign the pathway color to this node
      const colorIndex = i % pathwayColors.length;
      nodes[nodeIndex].pathwayColor = pathwayColors[colorIndex];
      
      // Don't use all nodes to allow some random activations
      if (usedNodes.size >= nodeCount * 0.8) break;
    }
    
    pathways.push({
      nodes: nodeIndices,
      color: pathwayColors[i % pathwayColors.length]
    });
  }
  
  return pathways;
};

export const updateNodes = (
  nodes: Node[], 
  pathways: Pathway[], 
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
    for (let i = 0; i < pathway.nodes.length - 1; i++) {
      const currentNode = nodes[pathway.nodes[i]];
      const nextNode = nodes[pathway.nodes[i + 1]];
      
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
    const lastNodeIndex = pathway.nodes[pathway.nodes.length - 1];
    const lastNode = nodes[lastNodeIndex];
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
