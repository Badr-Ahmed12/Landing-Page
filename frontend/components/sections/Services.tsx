import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaMobileAlt, FaPalette, FaBullhorn, FaShoppingCart, FaCloud } from 'react-icons/fa';

const services = [
  { name: 'Web Development', description: 'Custom websites tailored to your needs.', icon: <FaCode className="w-8 h-8 text-purple-500" /> },
  { name: 'Mobile App Development', description: 'Native and cross-platform mobile applications.', icon: <FaMobileAlt className="w-8 h-8 text-purple-500" /> },
  { name: 'UI/UX Design', description: 'User-centered design for optimal user experience.', icon: <FaPalette className="w-8 h-8 text-purple-500" /> },
  { name: 'Digital Marketing', description: 'Comprehensive digital marketing strategies.', icon: <FaBullhorn className="w-8 h-8 text-purple-500" /> },
  { name: 'E-commerce Solutions', description: 'Scalable and secure online stores.', icon: <FaShoppingCart className="w-8 h-8 text-purple-500" /> },
  { name: 'Cloud Services', description: 'Cloud infrastructure and deployment solutions.', icon: <FaCloud className="w-8 h-8 text-purple-500" /> },
];

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="services"
      className="py-20 relative bg-gradient-to-br from-gray-100 via-purple-50 to-pink-50 overflow-hidden"
    >
      {/* Glow shapes */}
      <div className="absolute w-[300px] h-[300px] bg-purple-300 rounded-full blur-3xl opacity-20 top-10 left-10"></div>
      <div className="absolute w-[400px] h-[400px] bg-pink-200 rounded-full blur-3xl opacity-20 bottom-0 right-0"></div>

      <div className="container mx-auto text-center px-4 relative z-10">
        <h2 className="text-4xl font-bold mb-12 text-gray-800">Our Services</h2>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          ref={ref}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-purple-300 hover:-translate-y-2 transition-all duration-300 border border-gray-100"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{service.name}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
