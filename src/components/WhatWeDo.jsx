import { motion } from 'framer-motion';

const WhatWeDo = () => {
  const services = [
    {
      id: 1,
      icon: 'database',
      title: 'Distributed Ledger Technology',
      description:
        'Our proprietary blockchain solution creates immutable records of carbon reduction, ensuring transparency and trust in environmental credits.',
    },
    {
      id: 2,
      icon: 'users',
      title: 'Smallholder Farmer Solutions',
      description:
        'We connect small-scale farmers to global carbon markets, providing them with technology and knowledge to participate in sustainable practices.',
    },
    {
      id: 3,
      icon: 'flame',
      title: 'Mitigating Open Field Burning',
      description:
        'Our technologies offer alternatives to open field burning, reducing emissions while maintaining agricultural productivity.',
    },
    {
      id: 4,
      icon: 'bar-chart',
      title: 'Data-Driven Sustainability',
      description:
        'Advanced analytics and monitoring systems that quantify environmental impact and optimize carbon reduction strategies.',
    },
  ];

  return (
    <section id="what-we-do" className="py-20 text-gray-800 relative">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/field_burning.jpg"
          alt="Crop burning in field"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">What We Do</h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-xl text-gray-200">
            At Root Tra, we utilize distributed ledger technology and Edge Devices for data management to create sustainable solutions for farmers and our environment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  {service.icon === 'database' && (
                    <DatabaseIcon />
                  )}
                  {service.icon === 'users' && (
                    <UsersIcon />
                  )}
                  {service.icon === 'flame' && (
                    <FlameIcon />
                  )}
                  {service.icon === 'bar-chart' && (
                    <BarChartIcon />
                  )}
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">{service.title}</h3>
                <p className="text-gray-600 text-center">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Inline SVG components
const DatabaseIcon = () => (
  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
  </svg>
);

const UsersIcon = () => (
  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const FlameIcon = () => (
  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
  </svg>
);

const BarChartIcon = () => (
  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

export default WhatWeDo;
