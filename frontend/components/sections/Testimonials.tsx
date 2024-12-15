import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    text: "The service was outstanding! My website is faster and more user-friendly than ever before.",
    author: "John Doe",
    position: "CEO, Example Corp"
  },
  {
    text: "Highly recommend their mobile app development services. The app is intuitive and efficient!",
    author: "Jane Smith",
    position: "Founder, TechSolutions"
  },
  {
    text: "Their team's expertise in UI/UX design transformed our product. User engagement has skyrocketed!",
    author: "Mike Johnson",
    position: "Product Manager, InnovateCo"
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-purple-100">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-12">What Our Clients Say</h2>
        <div className="relative max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <p className="text-xl text-gray-600 mb-6">"{testimonials[currentIndex].text}"</p>
              <p className="font-semibold text-gray-800">{testimonials[currentIndex].author}</p>
              <p className="text-sm text-gray-600">{testimonials[currentIndex].position}</p>
            </motion.div>
          </AnimatePresence>
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
          >
            &#8592;
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
          >
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

