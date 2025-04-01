import React, { useEffect, useRef } from 'react';

const AnimatedHeroBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions to match parent size
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.offsetWidth;
        canvas.height = parent.offsetHeight;
      }
    };

    // Initialize canvas size
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Nodes and connections
    const nodes: { 
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
    }[] = [];
    
    const nodeCount = Math.min(60, Math.floor(canvas.width * canvas.height / 12000)); // Maintain node count
    
    // Create neural pathways - create clusters of nodes that activate in sequence
    const createNeuralPathways = () => {
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
    
    // Create initial nodes with moderate velocity
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
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
    
    // Create neural pathways
    const neuralPathways = createNeuralPathways();
    
    // Animation state
    let animationMode = 'neural'; // 'neural' or 'blockchain'
    let transitionProgress = 0;
    let lastTime = 0;
    let electricityOffset = 0;
    let lastPathwayActivation = 0;

    // Animation loop
    const animate = (timestamp: number) => {
      if (!ctx || !canvas) return;
      
      const deltaTime = timestamp - lastTime || 0;
      lastTime = timestamp;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update transition - faster transition
      if (transitionProgress < 1000) {
        transitionProgress += deltaTime / 70; 
        if (transitionProgress >= 1000) {
          transitionProgress = 0;
          animationMode = animationMode === 'neural' ? 'blockchain' : 'neural';
        }
      }
      
      // Background gradient
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, 'rgba(240, 249, 255, 0.5)');
      gradient.addColorStop(1, 'rgba(229, 244, 249, 0.5)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Update electricity offset for flowing effect
      electricityOffset += 0.15; // Slightly faster flow
      
      // Activate neural pathways periodically
      if (animationMode === 'neural' && timestamp - lastPathwayActivation > 800) { // More frequent activations
        lastPathwayActivation = timestamp;
        
        // Choose a random pathway to activate
        const pathwayIndex = Math.floor(Math.random() * neuralPathways.length);
        const pathway = neuralPathways[pathwayIndex];
        
        // Activate the first node in the pathway
        if (pathway.length > 0) {
          const firstNodeIndex = pathway[0];
          if (firstNodeIndex < nodes.length) {
            nodes[firstNodeIndex].isActive = true;
            nodes[firstNodeIndex].activationTime = timestamp;
            nodes[firstNodeIndex].lastActivated = timestamp;
          }
        }
      }
      
      // Update node activation status based on pathways
      neuralPathways.forEach(pathway => {
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
      
      // Draw nodes and connections
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        
        // Update node position
        node.x += node.vx;
        node.y += node.vy;
        
        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
        
        // Update pulse phase
        node.pulsePhase += node.pulseSpeed;
        
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
        
        // Find and draw connections
        const connectionDistance = animationMode === 'neural' 
          ? Math.min(180, canvas.width / 4) 
          : Math.min(200, canvas.width / 4);
          
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
            const connectionFade = Math.max(
              fadeFactor,
              Math.max(0, 1 - (timestamp - otherNode.lastActivated) / 2000)
            );
            
            if (animationMode === 'neural') {
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
                const opacity = distanceOpacity * (node.isActive && otherNode.isActive ? 1.5 : connectionFade * 0.8);
                electricityGradient.addColorStop(0, `rgba(72, 187, 120, ${opacity})`);
                electricityGradient.addColorStop(0.5, `rgba(134, 239, 172, ${opacity * 1.1})`);
                electricityGradient.addColorStop(1, `rgba(72, 187, 120, ${opacity})`);
              }
              
              ctx.strokeStyle = electricityGradient;
              ctx.lineWidth = distanceOpacity * (node.isActive || otherNode.isActive ? 2 : 1.5) * connectionFade;
              ctx.stroke();
              
              // Add glow effect to the electricity - brighter for active connections
              const glowIntensity = node.isActive || otherNode.isActive ? 10 : 6;
              ctx.shadowColor = 'rgba(72, 187, 120, 0.6)';
              ctx.shadowBlur = glowIntensity * connectionFade;
              ctx.stroke();
              ctx.shadowBlur = 0;
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
      
      requestAnimationFrame(animate);
    };
    
    const animationId = requestAnimationFrame(animate);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef}
      className="absolute inset-0 w-full h-full -z-10"
      style={{ opacity: 0.8 }}
    />
  );
};

export default AnimatedHeroBackground;
