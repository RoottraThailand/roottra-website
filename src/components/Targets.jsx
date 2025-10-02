import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Targets = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Particle class for green dots
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.color = `rgba(34,197,94, ${Math.random() * 0.4 + 0.2})`; // Tailwind green-500
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x > canvas.width || this.x < 0) this.speedX = -this.speedX;
        if (this.y > canvas.height || this.y < 0) this.speedY = -this.speedY;
      }
      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const particles = [];
    const numberOfParticles = 70;
    for (let i = 0; i < numberOfParticles; i++) {
      particles.push(new Particle());
    }

    function animate() {
      ctx.fillStyle = "rgba(0,0,0,1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="targets" className="relative py-24 text-white overflow-hidden bg-black">
      {/* Animated background */}
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />

      <div className="container relative z-10 mx-auto px-6 text-center flex flex-col md:flex-row justify-center items-center gap-4">
        {/* Graphic 1 */}
        <motion.img
          src="/target-co2.webp"
          alt="CO2e Sequestration Target"
          className="w-full max-w-3xl mx-auto"   // ⬅ bigger
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />

        {/* Graphic 2 */}
        <motion.img
          src="/target-pm25.webp"
          alt="PM2.5 Reduction Target"
          className="w-full max-w-3xl mx-auto"   // ⬅ bigger
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        />
      </div>
    </section>
  );
};

export default Targets;
