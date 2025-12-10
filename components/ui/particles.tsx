'use client';

import { useEffect, useRef } from 'react';

export default function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: any[] = [];
    const particleCount = 300; // Significantly more fireflies for magical atmosphere

    const resizeCanvas = () => {
      // Set to full scrollable height (or min window height)
      canvas.width = window.innerWidth;
      canvas.height = Math.max(document.documentElement.scrollHeight, window.innerHeight);
    };

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      baseOpacity: number;
      pulsePhase: number;
      pulseSpeed: number;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.size = Math.random() * 3 + 0.8; // Larger, more varied sizes for visibility
        this.speedX = Math.random() * 0.6 - 0.3; // Slightly faster drift
        this.speedY = Math.random() * 0.6 - 0.3;
        this.baseOpacity = Math.random() * 0.6 + 0.2; // Brighter base opacity
        this.opacity = this.baseOpacity;
        this.pulsePhase = Math.random() * Math.PI * 2; // Random starting phase for pulsing
        this.pulseSpeed = Math.random() * 0.02 + 0.01; // Varying pulse speeds
      }

      update(mouseX: number, mouseY: number, scrollY: number) {
        // Natural pulsing animation
        this.pulsePhase += this.pulseSpeed;
        const pulseVariation = Math.sin(this.pulsePhase) * 0.3 + 0.7; // Oscillate between 0.4 and 1.0
        
        // Calculate distance from mouse (accounting for scroll position)
        const dx = mouseX - this.x;
        const dy = (mouseY + scrollY) - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 150;

        // Move away from mouse if close
        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance;
          this.speedX -= (dx / distance) * force * 0.15;
          this.speedY -= (dy / distance) * force * 0.15;
          this.opacity = Math.min(1.0, (this.baseOpacity + force * 0.3) * pulseVariation);
        } else {
          // Apply pulsing to base opacity
          this.opacity = this.baseOpacity * pulseVariation;
        }

        // Update position with drift
        this.x += this.speedX;
        this.y += this.speedY;

        // Damping to slow down over time
        this.speedX *= 0.98;
        this.speedY *= 0.98;

        // Wrap around logic (for the whole page)
        if (this.x > canvas!.width) this.x = 0;
        if (this.x < 0) this.x = canvas!.width;
        if (this.y > canvas!.height) this.y = 0;
        if (this.y < 0) this.y = canvas!.height;
      }

      draw() {
        if (!ctx) return;
        
        // Create glow effect with gradient
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.size * 3
        );
        
        // Firefly colors - warm yellow-green glow
        const glowColor = `rgba(220, 255, 200, ${this.opacity * 0.3})`;
        const coreColor = `rgba(255, 255, 180, ${this.opacity})`;
        const brightColor = `rgba(255, 255, 220, ${Math.min(1, this.opacity * 1.2)})`;
        
        gradient.addColorStop(0, brightColor);
        gradient.addColorStop(0.4, coreColor);
        gradient.addColorStop(1, glowColor);
        
        // Draw outer glow
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw bright core
        ctx.fillStyle = coreColor;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw tiny bright center
        ctx.fillStyle = brightColor;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 0.4, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      resizeCanvas();
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    // Track mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const scrollY = window.scrollY || window.pageYOffset;
      
      particles.forEach((p) => {
        p.update(mouseRef.current.x, mouseRef.current.y, scrollY);
        p.draw();
      });
      requestAnimationFrame(animate);
    };

    init();
    animate();

    window.addEventListener('resize', init);
    // Re-calc height on scroll to handle dynamic content expansion
    const handleScroll = () => { 
      if(Math.abs(canvas.height - document.documentElement.scrollHeight) > 50) resizeCanvas();
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', init);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full pointer-events-none z-0"
      style={{ height: '100%' }} // Ensure it takes full container height
    />
  );
}

