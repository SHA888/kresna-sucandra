
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
    const nodes: { x: number; y: number; radius: number; vx: number; vy: number; connections: number[]; pulsePhase: number; pulseSpeed: number }[] = [];
    const nodeCount = Math.min(60, Math.floor(canvas.width * canvas.height / 12000)); // Increased node count
    
    // Create initial nodes with faster velocity
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2.5 + 1.5, // Slightly larger nodes
        vx: (Math.random() - 0.5) * 0.6, // Increased velocity
        vy: (Math.random() - 0.5) * 0.6, // Increased velocity
        connections: [],
        pulsePhase: Math.random() * Math.PI * 2, // Random starting phase for pulsing
        pulseSpeed: 0.05 + Math.random() * 0.05 // Random pulse speed
      });
    }

    // Animation state
    let animationMode = 'neural'; // 'neural' or 'blockchain'
    let transitionProgress = 0;
    let lastTime = 0;
    let electricityOffset = 0;

    // Animation loop
    const animate = (timestamp: number) => {
      if (!ctx || !canvas) return;
      
      const deltaTime = timestamp - lastTime;
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
      electricityOffset += 0.1;
      
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
        
        // Draw node
        ctx.beginPath();
        
        if (animationMode === 'neural') {
          // Draw with glow effect
          const nodeRadius = node.radius * pulse * 1.2;
          
          // Outer glow
          const glowGradient = ctx.createRadialGradient(
            node.x, node.y, 0,
            node.x, node.y, nodeRadius * 2
          );
          glowGradient.addColorStop(0, 'rgba(72, 187, 120, 0.8)');
          glowGradient.addColorStop(0.5, 'rgba(72, 187, 120, 0.3)');
          glowGradient.addColorStop(1, 'rgba(72, 187, 120, 0)');
          
          ctx.arc(node.x, node.y, nodeRadius * 2, 0, Math.PI * 2);
          ctx.fillStyle = glowGradient;
          ctx.fill();
          
          // Inner node
          ctx.beginPath();
          ctx.arc(node.x, node.y, nodeRadius, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(72, 187, 120, 0.9)';
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
            const opacity = 1 - (distance / connectionDistance);
            
            if (animationMode === 'neural') {
              // Electricity effect for neural network
              const linePoints = 12; // Number of points in the electricity line
              const amplitude = 2 + Math.sin(timestamp / 1000) * 2; // Varying amplitude
              
              ctx.beginPath();
              ctx.moveTo(node.x, node.y);
              
              // Create electricity path with multiple segments
              for (let p = 1; p <= linePoints; p++) {
                const ratio = p / linePoints;
                const midX = node.x + dx * ratio;
                const midY = node.y + dy * ratio;
                
                // Add some randomness based on the current time
                const offsetX = (p !== linePoints) ? Math.sin((ratio * 10) + electricityOffset) * amplitude : 0;
                const offsetY = (p !== linePoints) ? Math.cos((ratio * 10) + electricityOffset + 1) * amplitude : 0;
                
                ctx.lineTo(midX + offsetX, midY + offsetY);
              }
              
              // Gradient for electricity
              const electricityGradient = ctx.createLinearGradient(node.x, node.y, otherNode.x, otherNode.y);
              electricityGradient.addColorStop(0, `rgba(72, 187, 120, ${opacity * 0.8})`);
              electricityGradient.addColorStop(0.5, `rgba(134, 239, 172, ${opacity * 0.9})`);
              electricityGradient.addColorStop(1, `rgba(72, 187, 120, ${opacity * 0.8})`);
              
              ctx.strokeStyle = electricityGradient;
              ctx.lineWidth = opacity * 1.5;
              ctx.stroke();
              
              // Add glow effect to the electricity
              ctx.shadowColor = 'rgba(72, 187, 120, 0.6)';
              ctx.shadowBlur = 6;
              ctx.stroke();
              ctx.shadowBlur = 0;
            } else {
              // Straight lines for blockchain
              ctx.beginPath();
              ctx.moveTo(node.x, node.y);
              ctx.lineTo(otherNode.x, otherNode.y);
              ctx.strokeStyle = `rgba(66, 153, 225, ${opacity * 0.3})`;
              ctx.lineWidth = opacity * 1;
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
      style={{ opacity: 0.8 }} // Increased opacity from 0.7 to 0.8
    />
  );
};

export default AnimatedHeroBackground;
