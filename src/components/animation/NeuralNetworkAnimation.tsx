
import React, { useEffect, useRef } from 'react';
import { drawNodes, drawConnections } from './neuralNetworkUtils';
import { createNodes, createNeuralPathways, updateNodes } from './nodeLogic';

const NeuralNetworkAnimation = () => {
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

    // Create nodes and neural pathways
    const nodeCount = Math.min(60, Math.floor(canvas.width * canvas.height / 12000));
    const nodes = createNodes(nodeCount, canvas.width, canvas.height);
    const neuralPathways = createNeuralPathways(nodeCount, nodes);
    
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
      electricityOffset += 0.15;
      
      // Update nodes and handle pathways
      updateNodes(nodes, neuralPathways, timestamp, lastPathwayActivation, canvas);
      lastPathwayActivation = updatePathwayActivation(timestamp, lastPathwayActivation, neuralPathways, nodes);
      
      // Draw elements based on current mode
      drawNodes(ctx, nodes, animationMode, timestamp);
      drawConnections(ctx, nodes, animationMode, electricityOffset, timestamp, canvas.width);
      
      requestAnimationFrame(animate);
    };
    
    const updatePathwayActivation = (timestamp: number, lastActivation: number, pathways: number[][], nodeArray: any[]) => {
      if (timestamp - lastActivation > 800) {
        // Choose a random pathway to activate
        const pathwayIndex = Math.floor(Math.random() * pathways.length);
        const pathway = pathways[pathwayIndex];
        
        // Activate the first node in the pathway
        if (pathway.length > 0) {
          const firstNodeIndex = pathway[0];
          if (firstNodeIndex < nodeArray.length) {
            nodeArray[firstNodeIndex].isActive = true;
            nodeArray[firstNodeIndex].activationTime = timestamp;
            nodeArray[firstNodeIndex].lastActivated = timestamp;
          }
        }
        return timestamp;
      }
      return lastActivation;
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

export default NeuralNetworkAnimation;
