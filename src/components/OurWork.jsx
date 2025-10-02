import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

// Auto-import all images inside /src/slideshow
const modules = import.meta.glob("../slideshow/*.{png,jpg,jpeg,webp}", { eager: true });
const images = Object.values(modules).map((mod) => mod.default);
console.log("Loaded slideshow images:", images); // 👈 sanity check

const OurWork = () => {
  const [current, setCurrent] = useState(0);
  const canvasRef = useRef(null);

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Particle background effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

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
      ctx.fillStyle = "rgba(0,0,0,1)"; // solid black bg
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

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section id="ourwork" className="relative py-20 text-white overflow-hidden bg-black">
      {/* Animated green dot background */}
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-green-500">
            Our Work
          </h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-6" />
          <p className="max-w-2xl mx-auto text-lg text-gray-300">
            See Root Tra in action across Southeast Asia
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-3xl mx-auto">
          <motion.img
            key={images[current]}
            src={images[current]}
            alt={`Slide ${current + 1}`}
            className="rounded-xl shadow-lg w-full max-h-[500px] object-contain mx-auto bg-black"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          />

          {/* Prev/Next buttons */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-0 -translate-y-1/2 bg-black/40 px-3 py-2 rounded-r text-white hover:bg-black/70"
          >
            ‹
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-0 -translate-y-1/2 bg-black/40 px-3 py-2 rounded-l text-white hover:bg-black/70"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurWork;
