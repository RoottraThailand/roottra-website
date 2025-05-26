import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
const Hero = () => {
    const canvasRef = useRef(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas)
            return;
        const ctx = canvas.getContext('2d');
        if (!ctx)
            return;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        // Particle class for animated background
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
                this.color = `rgba(0, ${Math.floor(Math.random() * 100) + 155}, ${Math.floor(Math.random() * 50)}, ${Math.random() * 0.5 + 0.1})`;
            }
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                if (this.x > canvas.width || this.x < 0) {
                    this.speedX = -this.speedX;
                }
                if (this.y > canvas.height || this.y < 0) {
                    this.speedY = -this.speedY;
                }
            }
            draw() {
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }
        const particleArray = [];
        const numberOfParticles = 100;
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
                        ctx.strokeStyle = `rgba(0, ${Math.floor(Math.random() * 100) + 155}, ${Math.floor(Math.random() * 50)}, ${0.1})`;
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
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (_jsxs("div", { className: "relative h-screen flex items-center justify-center overflow-hidden bg-black", children: [_jsx("canvas", { ref: canvasRef, className: "absolute top-0 left-0 w-full h-full" }), _jsxs("div", { className: "relative z-10 text-center px-4", children: [_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, className: "mb-8", children: _jsx("img", { src: "/logo.png", alt: "Roottra Logo", className: "mx-auto w-64 md:w-80 lg:w-96" }) }), _jsx(motion.h2, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.3 }, className: "text-xl md:text-2xl lg:text-3xl font-light text-white mb-8", children: "Transforming Climate Data for a Sustainable Future" }), _jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.6 }, children: _jsx("a", { href: "#mission", className: "inline-block px-8 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors duration-300", children: "Learn More" }) })] })] }));
};
export default Hero;
