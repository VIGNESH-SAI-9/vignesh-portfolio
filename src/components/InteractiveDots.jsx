import { useEffect, useRef } from 'react';

export function InteractiveDots({
  dotColor = '#ffffff',
  dotSize = 6,
}) {
  const canvasRef = useRef(null);
  const mousePos = useRef({ x: -9999, y: -9999 });
  const frameCountRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const CIRCLE_W = dotSize;
    const ACTUAL_W = CIRCLE_W * 0.72;
    const MIN_W = 0;
    const CIRCLE_DIST = CIRCLE_W * 2.5;
    const EFFECT_RADIUS = 120; // px — tight area around cursor

    const noise = (x, y, z) => {
      const n = Math.sin(x * 12.9898 + y * 78.233 + z * 45.164) * 43758.5453;
      return n - Math.floor(n);
    };

    class Dot {
      constructor(posX, posY) {
        this.position = { x: posX, y: posY };
      }

      calcWidth() {
        const dx = mousePos.current.x - this.position.x;
        const dy = mousePos.current.y - this.position.y;
        const delta = Math.sqrt(dx * dx + dy * dy);

        if (delta > EFFECT_RADIUS) return 0;

        const noiseVal = noise(this.position.x, this.position.y, frameCountRef.current * 0.005);
        const noiseMap = 0.85 + noiseVal * 0.3;
        const adjusted = Math.min(delta * noiseMap, EFFECT_RADIUS);

        return ACTUAL_W - (adjusted / EFFECT_RADIUS) * (ACTUAL_W - MIN_W);
      }

      render() {
        const w = this.calcWidth();
        if (w < 0.1) return;
        ctx.fillStyle = dotColor;
        ctx.globalAlpha = Math.min(w / ACTUAL_W, 1) * 0.85;
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, w / 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }

    let dots = [];
    const buildDots = () => {
      dots = [];
      const cols = Math.ceil(canvas.width / CIRCLE_DIST) + 1;
      const rows = Math.ceil(canvas.height / CIRCLE_DIST) + 1;
      for (let ci = 0; ci < cols; ci++) {
        for (let ri = 0; ri < rows; ri++) {
          dots.push(new Dot(ci * CIRCLE_DIST, ri * CIRCLE_DIST));
        }
      }
    };
    buildDots();
    window.addEventListener('resize', buildDots);

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };
    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        mousePos.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    let animId;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dots.forEach((dot) => dot.render());
      frameCountRef.current++;
      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('resize', buildDots);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [dotColor, dotSize]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 9998,
        display: 'block',
        background: 'transparent',
      }}
    />
  );
}

export default InteractiveDots;
