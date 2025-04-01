
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
    const nodes: { x: number; y: number; radius: number; vx: number; vy: number; connections: number[] }[] = [];
    const nodeCount = Math.min(50, Math.floor(canvas.width * canvas.height / 15000));
    
    // Create initial nodes
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        connections: []
      });
    }

    // Animation state
    let animationMode = 'neural'; // 'neural' or 'blockchain'
    let transitionProgress = 0;
    let lastTime = 0;

    // Animation loop
    const animate = (timestamp: number) => {
      if (!ctx || !canvas) return;
      
      const deltaTime = timestamp - lastTime;
      lastTime = timestamp;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update transition
      if (transitionProgress < 1000) {
        transitionProgress += deltaTime / 100;
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
      
      // Draw nodes and connections
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        
        // Update node position
        node.x += node.vx;
        node.y += node.vy;
        
        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
        
        // Draw node
        ctx.beginPath();
        
        if (animationMode === 'neural') {
          ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(72, 187, 120, 0.6)'; // Green for neural nodes
        } else {
          // Draw squares for blockchain
          const size = node.radius * 2;
          ctx.rect(node.x - size/2, node.y - size/2, size, size);
          ctx.fillStyle = 'rgba(66, 153, 225, 0.6)'; // Blue for blockchain nodes
        }
        
        ctx.fill();
        
        // Find and draw connections
        const connectionDistance = animationMode === 'neural' 
          ? Math.min(150, canvas.width / 5) 
          : Math.min(200, canvas.width / 4);
          
        for (let j = i + 1; j < nodes.length; j++) {
          const otherNode = nodes[j];
          const dx = otherNode.x - node.x;
          const dy = otherNode.y - node.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < connectionDistance) {
            // Opacity based on distance
            const opacity = 1 - (distance / connectionDistance);
            
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            
            if (animationMode === 'neural') {
              // Curved lines for neural networks
              ctx.lineTo(otherNode.x, otherNode.y);
              ctx.strokeStyle = `rgba(72, 187, 120, ${opacity * 0.2})`;
              ctx.lineWidth = opacity * 1.5;
            } else {
              // Straight lines for blockchain
              ctx.lineTo(otherNode.x, otherNode.y);
              ctx.strokeStyle = `rgba(66, 153, 225, ${opacity * 0.3})`;
              ctx.lineWidth = opacity * 1;
            }
            
            ctx.stroke();
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
      style={{ opacity: 0.7 }}
    />
  );
};

export default AnimatedHeroBackground;
