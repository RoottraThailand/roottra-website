import { motion } from 'framer-motion';

const teamMembers = [
  {
    id: 1,
    name: 'Sky Wiet',
    title: 'Co - Founder & CEO',
    bio: 'With over 25 years of experience in sustainability and technology, Sky leads our mission to transform climate data systems.',
    imageUrl: 'https://i.postimg.cc/W1ws54Sp/Sky-Wiet.jpg',
    linkedinUrl: 'https://www.linkedin.com/in/skywiet/',
  },
  {
    id: 2,
    name: 'Tim Luckit',
    title: 'Co - Founder & CTO',
    bio: 'Originally from a Physics background, Tim has been investing and building with digital technology solutions for over 10 years.',
    imageUrl: 'https://i.postimg.cc/MKjkFGZ2/Tim-Luckit.jpg',
    linkedinUrl: 'https://www.linkedin.com/in/tim-luckit-0a0465108/',
  },
  {
    id: 3,
    name: 'Seth Elton',
    title: 'Co- Founder & COO',
    bio: 'With a background in logistics, operations and entrepreneurship, Seth ensures our solutions deliver real-world impact.',
    imageUrl: 'https://i.postimg.cc/B6ZmBgpp/Whats-App-Image-2024-08-14-at-15-19-52.jpg',
    linkedinUrl: 'https://www.linkedin.com/in/seth-elton-2992b773/',
  },
];

const Team = () => {
  return (
    <section id="team" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
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
            Our team of experts is dedicated to revolutionizing how climate data is collected, verified, and utilized.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-black/50 backdrop-blur-sm rounded-lg overflow-hidden border border-green-900/30 hover:border-green-500/50 transition-all duration-300 relative"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10" />
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                  <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-green-500 to-transparent" />
                </div>
              </div>

              <div className="p-6 relative text-center">
                <div className="absolute top-0 right-0 w-14 h-14 opacity-20 bg-[linear-gradient(to_right,#00ff00_1px,transparent_1px),linear-gradient(to_bottom,#00ff00_1px,transparent_1px)] bg-[length:10px_10px]" />
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
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
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
                      3.6 2.002 3.6 4.604v5.59z"
                    />
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
