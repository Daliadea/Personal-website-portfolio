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
      baseOpacity: number;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.size = Math.random() * 2 + 0.5; // Varied sizes
        this.speedX = Math.random() * 0.5 - 0.25; // Slow drift
        this.speedY = Math.random() * 0.5 - 0.25;
        this.baseOpacity = Math.random() * 0.5 + 0.1;
        this.opacity = this.baseOpacity;
      }

      update(mouseX: number, mouseY: number, scrollY: number) {
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
          this.opacity = Math.min(0.8, this.opacity + force * 0.2);
        } else {
          // Fade back to base opacity
          this.opacity = Math.max(this.baseOpacity, this.opacity - 0.01);
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

