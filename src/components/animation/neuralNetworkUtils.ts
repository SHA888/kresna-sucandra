
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

export const drawNodes = (
  ctx: CanvasRenderingContext2D, 
  nodes: Node[], 
  animationMode: string,
  timestamp: number
) => {
  nodes.forEach(node => {
    // Calculate pulse effect (0 to 1)
    const pulse = 0.7 + 0.3 * Math.sin(node.pulsePhase);
    
    // Enhance activity status
    const activityFactor = node.isActive ? 1.5 : 1;
    const fadeFactor = node.isActive 
      ? 1 
      : Math.max(0, 1 - (timestamp - node.lastActivated) / 2000);
    
    // Draw node
    ctx.beginPath();
    
    if (animationMode === 'neural') {
      // Draw with enhanced glow effect for active nodes
      const nodeRadius = node.radius * pulse * activityFactor * 1.2;
      
      // Outer glow - brighter for active nodes
      const glowGradient = ctx.createRadialGradient(
        node.x, node.y, 0,
        node.x, node.y, nodeRadius * 2
      );
      
      // Active nodes glow brighter and slightly different color
      if (node.isActive) {
        glowGradient.addColorStop(0, 'rgba(72, 225, 120, 0.9)');
        glowGradient.addColorStop(0.5, 'rgba(72, 225, 120, 0.4)');
        glowGradient.addColorStop(1, 'rgba(72, 225, 120, 0)');
      } else {
        const opacity = 0.8 * fadeFactor;
        glowGradient.addColorStop(0, `rgba(72, 187, 120, ${opacity})`);
        glowGradient.addColorStop(0.5, `rgba(72, 187, 120, ${opacity * 0.3})`);
        glowGradient.addColorStop(1, `rgba(72, 187, 120, 0)`);
      }
      
      ctx.arc(node.x, node.y, nodeRadius * 2, 0, Math.PI * 2);
      ctx.fillStyle = glowGradient;
      ctx.fill();
      
      // Inner node
      ctx.beginPath();
      ctx.arc(node.x, node.y, nodeRadius, 0, Math.PI * 2);
      
      // Active nodes are brighter
      if (node.isActive) {
        ctx.fillStyle = 'rgba(72, 225, 120, 0.95)';
      } else {
        ctx.fillStyle = `rgba(72, 187, 120, ${0.9 * fadeFactor})`;
      }
      
      ctx.fill();
    } else {
      // Draw squares for blockchain
      const size = node.radius * 2 * pulse;
      ctx.rect(node.x - size/2, node.y - size/2, size, size);
      ctx.fillStyle = 'rgba(66, 153, 225, 0.6)';
      ctx.fill();
    }
  });
};

export const drawConnections = (
  ctx: CanvasRenderingContext2D, 
  nodes: Node[], 
  animationMode: string,
  electricityOffset: number,
  timestamp: number,
  canvasWidth: number
) => {
  const connectionDistance = animationMode === 'neural' 
    ? Math.min(180, canvasWidth / 4) 
    : Math.min(200, canvasWidth / 4);
    
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    
    for (let j = i + 1; j < nodes.length; j++) {
      const otherNode = nodes[j];
      const dx = otherNode.x - node.x;
      const dy = otherNode.y - node.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < connectionDistance) {
        // Opacity based on distance
        const distanceOpacity = 1 - (distance / connectionDistance);
        
        // Enhanced opacity when either node is active
        const activeOpacity = node.isActive || otherNode.isActive ? 1.5 : 1;
        
        // Fade factor for recently active connections
        const fadeFactor = Math.max(
          node.isActive ? 1 : Math.max(0, 1 - (timestamp - node.lastActivated) / 2000),
          otherNode.isActive ? 1 : Math.max(0, 1 - (timestamp - otherNode.lastActivated) / 2000)
        );
        
        if (animationMode === 'neural') {
          drawElectricityLine(ctx, node, otherNode, distanceOpacity, activeOpacity, fadeFactor, electricityOffset, timestamp);
        } else {
          // Straight lines for blockchain
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(otherNode.x, otherNode.y);
          ctx.strokeStyle = `rgba(66, 153, 225, ${distanceOpacity * 0.3})`;
          ctx.lineWidth = distanceOpacity * 1;
          ctx.stroke();
        }
      }
    }
  }
};

const drawElectricityLine = (
  ctx: CanvasRenderingContext2D,
  node: Node,
  otherNode: Node,
  distanceOpacity: number,
  activeOpacity: number,
  fadeFactor: number,
  electricityOffset: number,
  timestamp: number
) => {
  const dx = otherNode.x - node.x;
  const dy = otherNode.y - node.y;
  
  // Enhanced electricity effect for neural network
  const linePoints = 12; // Number of points in the electricity line
  
  // Larger amplitude for active connections
  const baseAmplitude = 2;
  const activeAmplitude = node.isActive || otherNode.isActive ? 6 : baseAmplitude;
  const amplitude = (baseAmplitude + Math.sin(timestamp / 800) * 2) * 
    (activeAmplitude / baseAmplitude);
  
  ctx.beginPath();
  ctx.moveTo(node.x, node.y);
  
  // Direction of flow - if node is active, flow goes from it to other nodes
  const flowDirection = node.isActive ? 1 : (otherNode.isActive ? -1 : 0);
  
  // Create electricity path with coordinated flow
  for (let p = 1; p <= linePoints; p++) {
    const ratio = p / linePoints;
    const midX = node.x + dx * ratio;
    const midY = node.y + dy * ratio;
    
    // Add directional flow effect
    const flowOffset = flowDirection !== 0 ? 
      (flowDirection > 0 ? ratio : 1 - ratio) * timestamp / 500 : 
      electricityOffset;
    
    // Add some randomness based on the current time, but more coordinated
    const offsetX = (p !== linePoints) ? 
      Math.sin((ratio * 8) + flowOffset) * amplitude : 0;
    const offsetY = (p !== linePoints) ? 
      Math.cos((ratio * 8) + flowOffset + 1) * amplitude : 0;
    
    ctx.lineTo(midX + offsetX, midY + offsetY);
  }
  
  // Enhanced gradient for electricity with direction
  const electricityGradient = ctx.createLinearGradient(node.x, node.y, otherNode.x, otherNode.y);
  
  // Direction-based colors for active connections
  if (node.isActive && !otherNode.isActive) {
    // Flow from node to otherNode - green to bright green
    electricityGradient.addColorStop(0, `rgba(72, 225, 120, ${distanceOpacity * activeOpacity})`);
    electricityGradient.addColorStop(0.5, `rgba(134, 239, 172, ${distanceOpacity * activeOpacity})`);
    electricityGradient.addColorStop(1, `rgba(72, 187, 120, ${distanceOpacity * 0.8})`);
  } else if (!node.isActive && otherNode.isActive) {
    // Flow from otherNode to node - bright green to green
    electricityGradient.addColorStop(0, `rgba(72, 187, 120, ${distanceOpacity * 0.8})`);
    electricityGradient.addColorStop(0.5, `rgba(134, 239, 172, ${distanceOpacity * activeOpacity})`);
    electricityGradient.addColorStop(1, `rgba(72, 225, 120, ${distanceOpacity * activeOpacity})`);
  } else {
    // Normal flow or both active
    const opacity = distanceOpacity * (node.isActive && otherNode.isActive ? 1.5 : fadeFactor * 0.8);
    electricityGradient.addColorStop(0, `rgba(72, 187, 120, ${opacity})`);
    electricityGradient.addColorStop(0.5, `rgba(134, 239, 172, ${opacity * 1.1})`);
    electricityGradient.addColorStop(1, `rgba(72, 187, 120, ${opacity})`);
  }
  
  ctx.strokeStyle = electricityGradient;
  ctx.lineWidth = distanceOpacity * (node.isActive || otherNode.isActive ? 2 : 1.5) * fadeFactor;
  ctx.stroke();
  
  // Add glow effect to the electricity - brighter for active connections
  const glowIntensity = node.isActive || otherNode.isActive ? 10 : 6;
  ctx.shadowColor = 'rgba(72, 187, 120, 0.6)';
  ctx.shadowBlur = glowIntensity * fadeFactor;
  ctx.stroke();
  ctx.shadowBlur = 0;
};
