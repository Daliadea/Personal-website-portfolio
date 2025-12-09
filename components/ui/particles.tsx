'use client';

import { useEffect, useRef } from 'react';

export default function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: any[] = [];
    const particleCount = 150; // More fireflies

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

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.size = Math.random() * 2 + 0.5; // Varied sizes
        this.speedX = Math.random() * 0.5 - 0.25; // Slow drift
        this.speedY = Math.random() * 0.5 - 0.25;
        this.opacity = Math.random() * 0.5 + 0.1;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Wrap around logic (for the whole page)
        if (this.x > canvas!.width) this.x = 0;
        if (this.x < 0) this.x = canvas!.width;
        if (this.y > canvas!.height) this.y = 0;
        if (this.y < 0) this.y = canvas!.height;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = `rgba(180, 255, 180, ${this.opacity})`; // Slight firefly tint
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
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

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.update();
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

