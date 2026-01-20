import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const WhatWeDo = () => {
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
    const numberOfParticles = 60;
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

  const services = [
    {
      id: 1,
      icon: "database",
      title: "Distributed Ledger Technology",
      description:
        "Our proprietary blockchain solution creates immutable records of carbon reduction, ensuring transparency and trust in environmental credits.",
      image: "/distributed-ledger.webp",
    },
    {
      id: 2,
      icon: "users",
      title: "Smallholder Farmer Solutions",
      description:
        "We connect small-scale farmers to global carbon markets, providing them with new revenue streams, without the technological hurdles.",
      image: "/small-holder.webp",
    },
    {
      id: 3,
      icon: "flame",
      title: "Mitigating Open Field Burning",
      description:
        "Our technologies offer alternatives to open field burning, reducing emissions while maintaining agricultural productivity.",
      image: "/open-field-burning.webp",
    },
    {
      id: 4,
      icon: "bar-chart",
      title: "Data-Driven Sustainability",
      description:
        "Advanced analytics and monitoring systems that quantify environmental impact and optimize carbon reduction strategies.",
      image: "/data-driven.webp",
    },
  ];

  return (
    <section id="what-we-do" className="py-20 text-gray-800 relative overflow-hidden">
      {/* Floating green particles */}
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">What We Do</h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-xl text-gray-200">
            At Root Tra, we utilize distributed ledger technology and Edge Devices for data management to create sustainable solutions for farmers and our environment.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative rounded-lg shadow-lg overflow-hidden group"
            >
              {/* Background image (top half) */}
              <div className="h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Text section */}
              <div className="p-6 bg-black/70 text-white">
                <div className="flex justify-center mb-4">
                  {service.icon === "database" && <DatabaseIcon />}
                  {service.icon === "users" && <UsersIcon />}
                  {service.icon === "flame" && <FlameIcon />}
                  {service.icon === "bar-chart" && <BarChartIcon />}
                </div>
                <h3 className="text-lg font-bold mb-2 text-center">{service.title}</h3>
                <p className="text-sm text-gray-200 text-center">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// SVG icons
const DatabaseIcon = () => (
  <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
    />
  </svg>
);

const UsersIcon = () => (
  <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
    />
  </svg>
);

const FlameIcon = () => (
  <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
    />
  </svg>
);

const BarChartIcon = () => (
  <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    />
  </svg>
);

export default WhatWeDo;
