import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Vision = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Particle class
    class Particle {
      x;
      y;
      size;
      speedX;
      speedY;
      color;
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.color = `rgba(0, ${Math.floor(Math.random() * 100) + 155}, ${
          Math.floor(Math.random() * 50)
        }, ${Math.random() * 0.5 + 0.1})`;
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

    const particleArray = [];
    const numberOfParticles = 80;
    for (let i = 0; i < numberOfParticles; i++) {
      particleArray.push(new Particle());
    }

    function connectParticles() {
      for (let a = 0; a < particleArray.length; a++) {
        for (let b = a; b < particleArray.length; b++) {
          const dx = particleArray[a].x - particleArray[b].x;
          const dy = particleArray[a].y - particleArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 100) {
            ctx.strokeStyle = `rgba(0, ${Math.floor(Math.random() * 100) + 155}, ${
              Math.floor(Math.random() * 50)
            }, 0.1)`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particleArray[a].x, particleArray[a].y);
            ctx.lineTo(particleArray[b].x, particleArray[b].y);
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particleArray.length; i++) {
        particleArray[i].update();
        particleArray[i].draw();
      }
      connectParticles();
      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section id="vision" className="py-20 bg-black text-white relative overflow-hidden">
      {/* Floating particle background */}
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-green-500">VISION</h2>
          <div className="w-24 h-1 bg-green-500 mx-auto"></div>
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Replace globe with image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full max-w-4xl order-2 lg:order-1 flex justify-center"
          >
            <img 
              src="/roottra-node-rice.webp" 
              alt="Roottra Node in Rice Field" 
              className="rounded-lg shadow-lg max-h-96 object-contain"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative order-1 lg:order-2"
          >
            <div className="bg-black/50 backdrop-blur-sm p-8 rounded-lg relative z-10">
              <p className="text-2xl font-light leading-relaxed">
                Root Tra is pioneering a vertically integrated, ground-truth-first dMRV 
                (Digital Measurement, Reporting, and Verification) system that empowers farmers, 
                de-risks carbon investments, and directly addresses the regional PM 2.5 air pollution crisis. 
                Our model builds the trust layer for the global carbon market, allowing us to define the 
                global infrastructure for verifiable climate data and unlock new value for environmental 
                assets worldwide.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
