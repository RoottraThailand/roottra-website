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
    bio: "Seth is a serial entrepreneur with three successful exits across multiple industries over the past decade. He combines hands-on expertise in logistics, technology, and operations to drive Root Tra’s rapid expansion and ensure its biochar supply chains, farmer partnerships, and carbon-data infrastructure are efficient, scalable, and verifiable.",
    imageUrl: "https://i.postimg.cc/jqPbZDy7/seth-elton-coo-shot.png",
    linkedinUrl: "https://www.linkedin.com/in/seth-elton-2992b773/",
  },
];

/* Advisory board placeholders: replace name/title/imageUrl/linkedinUrl when ready */
const advisoryBoard = [
  {
    id: "a1",
    name: "Apiniti Jotisankasa",
    title: "Geo Enviromental Engineer and IoT Sensors",
    imageUrl: "https://i.postimg.cc/7Ptq6TjG/Apiniti.jpg", // add a URL or leave blank to show placeholder
    linkedinUrl: "https://www.linkedin.com/in/apiniti-jotisankasa-287b816b/",
  },
  {
    id: "a2",
    name: "Jarudej Asingsamanunt",
    title: "Industrial Pyrolsis Engineer",
    imageUrl: "https://i.postimg.cc/zD2qBR43/Jarudej.jpg", // add a URL or leave blank to show placeholder
    linkedinUrl: "https://www.linkedin.com/in/jarudej-asingsamanunt/",
  },
];

/* ——— COMPONENT ——— */
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
        this.color = `rgba(34,197,94, ${Math.random() * 0.4 + 0.2})`;
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

  const CardShell = ({ children, small = false }) => (
    <div
      className={`bg-black/70 backdrop-blur-sm rounded-lg overflow-hidden border border-green-900/30 hover:border-green-500/50 transition-all duration-300 relative ${
        small ? "max-w-md mx-auto" : ""
      }`}
    >
      {children}
    </div>
  );

  const PhotoFrame = ({ src, alt, isSmall = false }) => (
  <div
    className={`relative ${isSmall ? "h-[300px] md:h-[200px]" : "h-[300px] md:h-[200px]"}
                flex items-center justify-center bg-black/40 rounded-sm border border-green-900/30`}
  >
    <img
      src={src}
      alt={alt}
      className="block max-h-full max-w-full object-contain"
    />
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
  </div>
);

  return (
    <section id="team" className="relative py-20 text-white overflow-hidden bg-black">
      {/* Animated particle background */}
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />

      <div className="container relative z-10 mx-auto px-4">
        {/* TEAM — Header */}
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

        {/* TEAM — Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <CardShell>
                    <PhotoFrame src={member.imageUrl} alt={member.name} />
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
              </CardShell>
            </motion.div>
          ))}
        </div>

        {/* ADVISORY BOARD — Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-24 mb-10"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-green-500">ADVISORY BOARD</h3>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-6" />
          <p className="max-w-3xl mx-auto text-base md:text-lg text-gray-300">
            Root Tra's advisory board is an exceptional group of global experts who are actively shaping the future of their respective industries. Their backgrounds include serving on international climate panels, leadership roles in global environmental organizations, and senior positions in finance and technology firms. This representation covers critical areas such as biochar science, climate finance, fintech, monitoring and evaluation, AI/ML, financial indices, cybersecurity, data integrity, and climate policy.
          </p>
        </motion.div>

        {/* ADVISORY BOARD — Smaller cards, two slots */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {advisoryBoard.map((advisor, index) => (
            <motion.div
              key={advisor.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <CardShell small>
                {/* Slightly shorter photo area to be smaller than main team */}
                <PhotoFrame
                  src={advisor.imageUrl}
                  alt={advisor.name || "Advisor photo"}
                  isSmall
                />

                <div className="p-5 text-center">
                  <h4 className="text-lg font-semibold text-green-400">
                    {advisor.name || "Advisor Name"}
                  </h4>
                  <p className="text-sm text-gray-400 mt-1">
                    {advisor.title || "Domain Expertise"}
                  </p>

                  {advisor.linkedinUrl ? (
                    <a
                      href={advisor.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 mx-auto mt-4 rounded-full bg-white text-blue-600 flex items-center justify-center hover:bg-blue-100 transition"
                      aria-label={`LinkedIn profile of ${advisor.name}`}
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
                  ) : null}

                </div>
              </CardShell>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Team;
