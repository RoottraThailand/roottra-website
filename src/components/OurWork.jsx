import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

// 🔹 Hard-coded list of .webp files in /src/slideshow/
const images = [
  "/slideshow/168256.webp",
  "/slideshow/168257.webp",
  "/slideshow/168262.webp",
  "/slideshow/168265.webp",
  "/slideshow/168267.webp",
  "/slideshow/168268.webp",
  "/slideshow/168269.webp",
  "/slideshow/168271.webp",
  "/slideshow/168274.webp",
  "/slideshow/168280.webp",
  "/slideshow/168283.webp",
  "/slideshow/168285.webp",
  "/slideshow/168291.webp",
  "/slideshow/36310039F3DEA4D56D3749C1194124457C0B7C6C.webp",
  "/slideshow/4CB843A67595FCA9F4BA27508925044BBE76DC82.webp",
  "/slideshow/547815968152748033.webp",
  "/slideshow/548544728774476069.webp",
  "/slideshow/548788696204182008(1).webp",
  "/slideshow/548813543664254977.webp",
  "/slideshow/9D199704C0553F332E5CB3D61E34FD7C79B09F8F.webp",
  "/slideshow/E506412B4414F886F5AC0F0DA457622938E59F25.webp",
  "/slideshow/IMG_3082.webp",
  "/slideshow/IMG_3083.webp",
  "/slideshow/IMG_3084.webp",
  "/slideshow/IMG_3314.webp",
  "/slideshow/IMG_3344.webp",
  "/slideshow/IMG_4161.webp",
  "/slideshow/IMG_4549.webp",
  "/slideshow/IMG_4749.webp",
  "/slideshow/IMG_4751.webp",
  "/slideshow/IMG_4927.webp",
  "/slideshow/IMG_4939.webp",
  "/slideshow/IMG_4940.webp",
  "/slideshow/IMG_4941.webp",
  "/slideshow/IMG_4942.webp",
  "/slideshow/IMG_4944.webp",
  "/slideshow/IMG_4980.webp",
  "/slideshow/IMG_5011.webp",
  "/slideshow/IMG_5485 (1).webp",
  "/slideshow/IMG_5516.webp",
  "/slideshow/PHOTO-2024-08-13-22-03-50.webp",
  "/slideshow/PHOTO-2024-08-14-12-33-57.webp",
  "/slideshow/WhatsApp Image 2025-03-04 at 15.44.55_fe219598.webp",
  "/slideshow/aac3854e-0c66-46bb-8eee-0935b2aa3695 (1).webp",
  "/slideshow/chiang mai community meeting.webp",
  "/slideshow/chrome root tra sensor.webp",
  "/slideshow/root tra soil node.webp",
  "/slideshow/seth sky biochar pile.webp",
  "/slideshow/seth sky tim factory meeting.webp",
  "/slideshow/sky community small pyrolysis machine.webp",
  "/slideshow/sky pricess cup.webp",
  "/slideshow/sky seth large biochar stack.webp",
  "/slideshow/sky seth tim and biochar.webp",
  "/slideshow/sky seth tim corn.webp",
  "/slideshow/test sensor.webp"
];

const OurWork = () => {
  const [current, setCurrent] = useState(0);
  const canvasRef = useRef(null);

  // Preload images
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Particle background
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

    const particles = Array.from({ length: 70 }, () => new Particle());

    function animate() {
      ctx.fillStyle = "rgba(0,0,0,1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

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

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section id="ourwork" className="relative py-20 text-white overflow-hidden bg-black">
      {/* Green dot background */}
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
            src={images[current]}
            alt={`Slide ${current + 1}`}
            className="rounded-xl shadow-lg w-full max-h-[500px] object-contain mx-auto bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
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
