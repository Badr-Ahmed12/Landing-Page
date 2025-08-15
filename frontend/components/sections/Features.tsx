import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaRocket, FaMobile, FaLaptopCode, FaChartLine } from 'react-icons/fa';

const features = [
  { icon: <FaRocket />, name: 'Fast Performance', description: 'Lightning-fast load times and smooth interactions.' },
  { icon: <FaMobile />, name: 'Responsive Design', description: 'Looks great on all devices, from mobile to desktop.' },
  { icon: <FaLaptopCode />, name: 'Clean Code', description: 'Well-structured and maintainable codebase.' },
  { icon: <FaChartLine />, name: 'SEO Optimized', description: 'Built with search engines in mind for better visibility.' },
];

const Features: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="features"
      className="py-20 relative bg-gradient-to-br from-purple-50 via-white to-pink-50 overflow-hidden"
    >
      {/* Glow background */}
      <div className="absolute w-[350px] h-[350px] bg-purple-300 rounded-full blur-3xl opacity-20 top-10 left-20"></div>
      <div className="absolute w-[400px] h-[400px] bg-pink-200 rounded-full blur-3xl opacity-20 bottom-0 right-0"></div>

      <div className="container mx-auto text-center px-4 relative z-10">
        <h2 className="text-4xl font-bold mb-12 text-gray-800">Our Features</h2>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          ref={ref}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-purple-300 hover:-translate-y-2 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-purple-100 text-purple-600 text-3xl"
                whileHover={{ rotate: 10, scale: 1.1 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {feature.name}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
