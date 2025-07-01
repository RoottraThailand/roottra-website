import { motion } from 'framer-motion';
import mvpImage from '../assets/MVP.jpg'; // ✅ no typos, no folder nesting issues

const MVPShowcase = () => {
  return (
    <section id="mvp" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-green-500">Root Tra Tech</h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-8" />
          <p className="max-w-2xl mx-auto text-lg text-gray-300">
            Our technology combines Edge devices, immutable hashing, and real-time data processing — providing Ground Truth agricultural intelligence, bringing the highest level of carbon credibility to the carbon market.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src={mvpImage}
            alt="Rootra MVP Prototype"
            className="rounded-xl shadow-lg border border-green-900/40 max-w-3xl w-full"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default MVPShowcase;
