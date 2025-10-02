import { motion } from 'framer-motion';

const Mission = () => {
  return (
    <section id="mission" className="py-20 bg-gray-900 text-white relative">
      {/* Background video with overlay */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        >
          <source src="/roottra-ai-fields.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gray-900 bg-opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Heading */}
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

        {/* Full-width Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="absolute -top-10 -left-10 w-40 h-40 border-t-2 border-l-2 border-green-500 opacity-30"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 border-b-2 border-r-2 border-green-500 opacity-30"></div>
          <div className="bg-black/50 backdrop-blur-sm p-8 rounded-lg relative z-10">
            <p className="text-lg leading-relaxed">
              Root Tra exists to empower environmental integrity by transforming how climate data is collected, verified, and utilized. Through transparent, secure, and interoperable technologies, we enable organizations to build trust, optimize sustainability efforts, and drive impactful climate action.
              <br /><br />
              Today's carbon markets lack trust, and smallholder farmers are often left behind. Inefficient verification and a lack of transparent data have created a credibility crisis, while the devastating environmental and health impacts of seasonal agricultural burning continue unchecked.
              <br /><br />
              Our targets are ambitious and achievable. The world needs it. 
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Mission;
