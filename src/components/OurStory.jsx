import { motion } from "framer-motion";

const OurStory = () => {
  return (
    <section id="our-story" className="relative py-20 text-white overflow-hidden">
      {/* Background image */}
      <img
        src="/small-holder-farmers.png"
        alt="Small Holder Farmers Harvesting Sugar Cane in Thailand"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto bg-black/70 backdrop-blur-sm p-8 md:p-12 rounded-lg space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-green-500 text-center mb-4">
            Our Story
          </h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-8" />

          <p>
            Root Tra was born at the intersection of global policy, advanced technology, and
            on-the-ground reality. Our founders saw a system failing to deliver on its climate promises.
          </p>

          <p>
            Sky Wiet has been at the forefront of sustainable development for decades, from the early
            days of the Clean Development Mechanism (CDM) to shaping climate resolutions at the UN
            General Assembly. His work with the UNDP on Payments for Ecosystem Services, Green Growth,
            and region-wide programs like SWITCH-Asia was impactful, but the pace of change was
            frustratingly slow. Innovation was constrained by bureaucracy.
          </p>

          <p>
            Meanwhile, Tim Luckit and Seth Elton were tackling the challenges of Carbon Dioxide Removal
            (CDR) from different angles. Despite Tim&apos;s background in investment and supporting
            technology development and Seth&apos;s expertise in scaling complex operations, they
            repeatedly hit the same wall: existing market structures were inaccessible to the rural
            communities that needed them most.
          </p>

          <p>
            Across Southeast Asia, a critical problem persisted with no viable solution. Agricultural
            burning continued to poison the air, yet carbon markets weren&apos;t designed to address it.
            Seeing this gap, Sky, Tim, and Seth decided to build the solution themselves. Their
            convergent backgrounds in agritech, AI, distributed ledger technology, and tech-driven
            workflow integration gave them a unique lens to see an opportunity where others saw
            obstacles.
          </p>

          <p>
            They founded Root Tra out of a clear necessity: the urgent need for verifiable truth in
            climate data. Drawing lessons from the 2007 financial crisis, they knew that any market
            built on questionable data was destined to fail. This philosophy is embedded in our name.
            Root Tra (รูท ตรา) combines a foundation of "Root"-level ground truth with a "Tra" (ตรา),
            the Thai word for a seal or stamp of integrity. Our mission is to re-engineer a broken
            process by embedding efficiency and verifiable truth at its core.
          </p>

          <p>
            The next evolution was Pattra (พัตรา), our AI verification engine. The name, meaning
            "good," "auspicious," and "leaf" or "document," reflects its dual nature. It is good by
            design and for its purpose, acting as the intelligent layer that processes the "leaves" of
            data from Root Tra&apos;s ground-truth system. Pattra embraces our Thai origins,
            environmental focus and the cutting edge of technology, making it possible to transform
            immense volumes of verified data into intelligent, actionable abstractions.
          </p>

          <p>
            Through our vertically-integrated model, Root Tra provides the solution. Farmers no longer
            need to choose between the damaging practice of agricultural burning and their family&apos;s
            livelihood. We provide a better path, one that restores the environment, cleans the air,
            and builds a more prosperous and sustainable future.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default OurStory;
