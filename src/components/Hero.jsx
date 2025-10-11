import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const canvasRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

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

    const particles = Array.from({ length: 100 }, () => new Particle());
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
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

  const handleScroll = (id) => {
    setMenuOpen(false);
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    else console.warn("⚠️ Element not found:", id);
  };

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Particle background */}
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />

      {/* ✅ Fixed Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-sm border-b border-green-500/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <img
            src="/logo.png"
            alt="Root Tra Logo"
            className="w-32 md:w-40 cursor-pointer"
            onClick={() => handleScroll("#top")}
          />

          {/* Always-visible Hamburger */}
          <button
            className="flex flex-col justify-between w-8 h-6 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span
              className={`h-1 bg-white rounded transition-transform duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`h-1 bg-white rounded transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`h-1 bg-white rounded transition-transform duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* Dropdown Menu */}
        {menuOpen && (
          <div className="bg-black/90 backdrop-blur-md border-t border-green-500/20 text-center py-6 space-y-6">
            {[
              "Mission",
              "Vision",
              "What We Do",
              "Our Team",
              "Our Story",
            ].map((label) => {
              // ✅ Manual mapping for exact ID names
              const idMap = {
                "Our Story": "#our-story",
                "Our Team": "#team",
                "What We Do": "#what-we-do",
                Mission: "#mission",
                Vision: "#vision",
              };
              const targetId =
                idMap[label] ||
                `#${label.toLowerCase().replace(/ /g, "-")}`;

              return (
                <div
                  key={label}
                  className="text-white text-lg font-medium hover:text-green-400 cursor-pointer"
                  onClick={() => handleScroll(targetId)}
                >
                  {label}
                </div>
              );
            })}
          </div>
        )}
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 mt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <img
            src="/logo.png"
            alt="Root Tra Logo"
            className="mx-auto w-80 md:w-[28rem] lg:w-[32rem]"
          />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4"
        >
          Transforming Climate Data for a Sustainable Future
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto italic"
        >
          Pioneering ground-truth-first dMRV systems that empower farmers and
          build trust in carbon markets
        </motion.p>
      </div>
    </div>
  );
};

export default Hero;
