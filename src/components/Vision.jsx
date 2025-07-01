import { motion } from 'framer-motion';

const Vision = () => {
  return (
    <section id="vision" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full max-w-4xl order-2 lg:order-1"
          >
            <div className="relative h-64 md:h-80 overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-green-900/30 to-blue-900/30"></div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="globe-visualization">
                  <div className="globe-container">
                    <div className="globe"></div>
                    <div className="globe-overlay"></div>
                    <div className="data-points">
                      {Array.from({ length: 10 }).map((_, i) => (
                        <div 
                          key={i} 
                          className="data-point"
                          style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`
                          }}
                        />
                      ))}
                    </div>
                    <div className="data-connections">
                      {Array.from({ length: 15 }).map((_, i) => (
                        <div 
                          key={i} 
                          className="data-connection"
                          style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            width: `${Math.random() * 100 + 50}px`,
                            transform: `rotate(${Math.random() * 360}deg)`,
                            animationDelay: `${Math.random() * 5}s`
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative order-1 lg:order-2"
          >
            <div className="absolute -top-10 -left-10 w-40 h-40 border-t-2 border-l-2 border-green-500 opacity-30"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 border-b-2 border-r-2 border-green-500 opacity-30"></div>
            <div className="bg-black/50 backdrop-blur-sm p-8 rounded-lg relative z-10">
              <p className="text-2xl font-light leading-relaxed">
                To define the global infrastructure for verifiable climate data — unlocking new value for carbon markets, environmental assets, and project developers worldwide.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .globe-container {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .globe {
          position: absolute;
          width: 200px;
          height: 200px;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          background: radial-gradient(circle at 30% 30%, #1a5c1a, #0a380a);
          box-shadow: 0 0 60px rgba(0, 255, 0, 0.2);
          animation: rotate 20s linear infinite;
        }

        .globe-overlay {
          position: absolute;
          width: 200px;
          height: 200px;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          background: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,0 L100,0 L100,100 L0,100 Z' fill='none' stroke='rgba(0,255,0,0.2)' stroke-width='0.5'%3E%3C/path%3E%3Cpath d='M0,20 L100,20 M0,40 L100,40 M0,60 L100,60 M0,80 L100,80 M20,0 L20,100 M40,0 L40,100 M60,0 L60,100 M80,0 L80,100' stroke='rgba(0,255,0,0.1)' stroke-width='0.2'%3E%3C/path%3E%3C/svg%3E");
          opacity: 0.5;
          animation: rotate 15s linear infinite reverse;
        }

        .data-point {
          position: absolute;
          width: 6px;
          height: 6px;
          background-color: #00ff00;
          border-radius: 50%;
          box-shadow: 0 0 10px #00ff00;
          animation: pulse 3s infinite;
        }

        .data-connection {
          position: absolute;
          height: 1px;
          background: linear-gradient(90deg, transparent, #00ff00, transparent);
          opacity: 0;
          animation: fadeInOut 4s infinite;
        }

        @keyframes rotate {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }

        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.5); opacity: 1; }
          100% { transform: scale(1); opacity: 0.7; }
        }

        @keyframes fadeInOut {
          0% { opacity: 0; }
          50% { opacity: 0.8; }
          100% { opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default Vision;
