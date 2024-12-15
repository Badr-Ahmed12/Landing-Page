import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const services = [
  { name: 'Web Development', description: 'Custom websites tailored to your needs.' },
  { name: 'Mobile App Development', description: 'Native and cross-platform mobile applications.' },
  { name: 'UI/UX Design', description: 'User-centered design for optimal user experience.' },
  { name: 'Digital Marketing', description: 'Comprehensive digital marketing strategies.' },
  { name: 'E-commerce Solutions', description: 'Scalable and secure online stores.' },
  { name: 'Cloud Services', description: 'Cloud infrastructure and deployment solutions.' },
];

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" ref={ref}>
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-4">{service.name}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

