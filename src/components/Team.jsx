import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const teamMembers = [
  {
    id: 1,
    name: "Sky Wiet",
    title: "Co - Founder & CEO",
    bio: "With over 25 years of global experience in sustainability, climate policy, and technology, Sky leads Root Tra with a mission to transform how climate data is verified and valued. His leadership bridges international climate goals with local action, delivering scalable solutions in biochar and carbon credit systems.",
    imageUrl: "https://i.postimg.cc/3xhKYx01/Sky-Wiet-CEO-Root-Tra.jpg",
    linkedinUrl: "https://www.linkedin.com/in/skywiet/",
  },
  {
    id: 2,
    name: "Tim Luckit",
    title: "Co - Founder & CTO",
    bio: "With a background in physics and over a decade building digital systems, Tim architects Root Tra’s IoT, blockchain, and AI infrastructure. He ensures our tech is scalable, secure, and built for measurable impact — empowering climate transparency and biochar verification at the farm level.",
    imageUrl: "https://i.postimg.cc/cJFjL8Pw/tim-luckit-cto.png",
    linkedinUrl: "https://www.linkedin.com/in/tim-luckit-0a0465108/",
  },
  {
    id: 3,
    name: "Seth Elton",
    title: "Co - Founder & COO",
    bio: "Seth brings deep operational and entrepreneurial expertise from logistics and circular economy ventures. At Root Tra, he oversees ground operations across Thailand, ensuring that our biochar supply chains, farmer partnerships, and carbon data pathways are inclusive, efficient, and audit-ready.",
    imageUrl: "https://i.postimg.cc/SsnPXvfT/seth-coo-new.png",
    linkedinUrl: "https://www.linkedin.com/in/seth-elton-2992b773/",
  },
];

const Team = () => {
  const canvasRef = useRef(null);

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
      ctx.fillStyle = "rgba(0,0,0,1)"; // solid black background each frame
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
    <section id="team" className="relative py-20 text-white overflow-hidden bg-black">
      {/* Animated particle background */}
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-green-500">OUR TEAM</h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-8" />
          <p className="max-w-2xl mx-auto text-lg text-gray-300">
            We are a team of innovators committed to transforming the way climate data is gathered, verified, and turned into real-world environmental and financial impact.
          </p>
        </motion.div>

        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-black/70 backdrop-blur-sm rounded-lg overflow-hidden border border-green-900/30 hover:border-green-500/50 transition-all duration-300 relative"
            >
              <div className="relative h-72 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10" />
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="p-6 relative text-center">
                <h3 className="text-xl font-bold mb-1 text-green-400">{member.name}</h3>
                <p className="text-sm text-gray-400 mb-4">{member.title}</p>
                <p className="text-gray-300 mb-6">{member.bio}</p>

                <a
                  href={member.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 mx-auto rounded-full bg-white text-blue-600 flex items-center justify-center hover:bg-blue-100 transition"
                  aria-label={`LinkedIn profile of ${member.name}`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 
                      2.761 2.239 5 5 5h14c2.761 0 5-2.239 
                      5-5v-14c0-2.761-2.239-5-5-5zm-11 
                      19h-3v-10h3v10zm-1.5-11.268c-.966 
                      0-1.75-.784-1.75-1.75s.784-1.75 
                      1.75-1.75 1.75.784 
                      1.75 1.75-.784 1.75-1.75 
                      1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.867-3.063-1.869 
                      0-2.156 1.46-2.156 
                      2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 
                      1.381-1.561 2.841-1.561 3.037 0 
                      3.6 2.002 3.6 4.604v5.59z" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
