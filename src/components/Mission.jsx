import { motion } from 'framer-motion';

const Mission = () => {
  return (
    <section id="mission" className="py-20 bg-gray-900 text-white relative">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="farmer_in_field.jpeg" 
          alt="Farmer In Smoking Field" 
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-green-500">MISSION</h2>
          <div className="w-24 h-1 bg-green-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-10 -left-10 w-40 h-40 border-t-2 border-l-2 border-green-500 opacity-30"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 border-b-2 border-r-2 border-green-500 opacity-30"></div>
            <div className="bg-black/50 backdrop-blur-sm p-8 rounded-lg relative z-10">
              <p className="text-lg leading-relaxed">
                Root Tra exists to empower environmental integrity by transforming how climate data is collected, verified, and utilized. Through transparent, secure, and interoperable technologies, we enable organizations to build trust, optimize sustainability efforts, and drive impactful climate action.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="tech-graphic h-full w-full flex items-center justify-center">
              <svg width="400" height="400" viewBox="0 0 400 400" className="max-w-full">
                <g className="circuit-animation">
                  <path d="M50,200 L150,200" stroke="#0f0" strokeWidth="2" fill="none" />
                  <path d="M150,200 L150,100" stroke="#0f0" strokeWidth="2" fill="none" />
                  <path d="M150,100 L250,100" stroke="#0f0" strokeWidth="2" fill="none" />
                  <path d="M250,100 L250,300" stroke="#0f0" strokeWidth="2" fill="none" />
                  <path d="M250,300 L150,300" stroke="#0f0" strokeWidth="2" fill="none" />
                  <path d="M150,300 L150,250" stroke="#0f0" strokeWidth="2" fill="none" />
                  <path d="M150,250 L100,250" stroke="#0f0" strokeWidth="2" fill="none" />
                  <path d="M250,200 L350,200" stroke="#0f0" strokeWidth="2" fill="none" />
                  
                  {/* Data points */}
                  <circle cx="50" cy="200" r="5" fill="#0f0" className="pulse-animation" />
                  <circle cx="150" cy="200" r="5" fill="#0f0" className="pulse-animation" />
                  <circle cx="150" cy="100" r="5" fill="#0f0" className="pulse-animation" />
                  <circle cx="250" cy="100" r="5" fill="#0f0" className="pulse-animation" />
                  <circle cx="250" cy="300" r="5" fill="#0f0" className="pulse-animation" />
                  <circle cx="150" cy="300" r="5" fill="#0f0" className="pulse-animation" />
                  <circle cx="150" cy="250" r="5" fill="#0f0" className="pulse-animation" />
                  <circle cx="100" cy="250" r="5" fill="#0f0" className="pulse-animation" />
                  <circle cx="250" cy="200" r="5" fill="#0f0" className="pulse-animation" />
                  <circle cx="350" cy="200" r="5" fill="#0f0" className="pulse-animation" />

                  {/* Animated data */}
                  <circle cx="50" cy="200" r="3" fill="#fff" className="data-point-1" />
                  <circle cx="150" cy="100" r="3" fill="#fff" className="data-point-2" />
                  <circle cx="250" cy="300" r="3" fill="#fff" className="data-point-3" />
                </g>
              </svg>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .pulse-animation {
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { opacity: 0.3; r: 5; }
          50% { opacity: 1; r: 7; }
          100% { opacity: 0.3; r: 5; }
        }

        .data-point-1 {
          animation: moveData1 8s infinite;
        }

        .data-point-2 {
          animation: moveData2 10s infinite;
        }

        .data-point-3 {
          animation: moveData3 7s infinite;
        }

        @keyframes moveData1 {
          0% { transform: translateX(0); }
          50% { transform: translateX(300px); }
          100% { transform: translateX(0); }
        }

        @keyframes moveData2 {
          0% { transform: translateY(0); }
          50% { transform: translateY(200px); }
          100% { transform: translateY(0); }
        }

        @keyframes moveData3 {
          0% { transform: translate(0, 0); }
          50% { transform: translate(-100px, -100px); }
          100% { transform: translate(0, 0); }
        }
      `}</style>
    </section>
  );
};

export default Mission;
