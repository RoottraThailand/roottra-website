import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Auto-import all images inside /src/slideshow
const modules = import.meta.glob("../slideshow/*.{png,jpg,jpeg,webp}", { eager: true });
const images = Object.values(modules).map((mod) => mod.default);
console.log("Loaded slideshow images:", images);

const OurWork = () => {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);

  // Preload images into memory
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Autoplay with reset
  useEffect(() => {
    startAutoplay();
    return () => clearInterval(intervalRef.current);
  }, []);

  const startAutoplay = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
    startAutoplay();
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
    startAutoplay();
  };

  return (
    <section id="ourwork" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
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
        <div className="relative max-w-3xl mx-auto aspect-video">
          <AnimatePresence mode="wait">
            <motion.img
              key={images[current]}
              src={images[current]}
              alt={`Slide ${current + 1}`}
              className="absolute inset-0 w-full h-full object-cover rounded-xl shadow-lg border border-green-900/40 bg-black"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6 }}
            />
          </AnimatePresence>

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

        {/* Dots (indicators) */}
        <div className="flex justify-center mt-4 space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrent(index);
                startAutoplay();
              }}
              className={`w-3 h-3 rounded-full ${
                index === current ? "bg-green-500" : "bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWork;
