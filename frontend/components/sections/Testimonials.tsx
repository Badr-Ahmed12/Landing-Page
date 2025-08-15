import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    text: "The service was outstanding! My website is faster and more user-friendly than ever before.",
    author: "John Doe",
    position: "CEO, Example Corp",
    avatar: "https://i.pravatar.cc/100?img=1"
  },
  {
    text: "Highly recommend their mobile app development services. The app is intuitive and efficient!",
    author: "Jane Smith",
    position: "Founder, TechSolutions",
    avatar: "https://i.pravatar.cc/100?img=2"
  },
  {
    text: "Their team's expertise in UI/UX design transformed our product. User engagement has skyrocketed!",
    author: "Mike Johnson",
    position: "Product Manager, InnovateCo",
    avatar: "https://i.pravatar.cc/100?img=3"
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
    <section
      id="testimonials"
      className="py-20 relative bg-gradient-to-br from-purple-50 via-white to-pink-50 overflow-hidden"
    >
      {/* Background Blurs */}
      <div className="absolute w-[300px] h-[300px] bg-purple-300 rounded-full blur-3xl opacity-20 top-10 left-20"></div>
      <div className="absolute w-[300px] h-[300px] bg-pink-300 rounded-full blur-3xl opacity-20 bottom-0 right-10"></div>

      <div className="container mx-auto text-center px-4 relative z-10">
        <h2 className="text-4xl font-bold mb-12 text-gray-800">What Our Clients Say</h2>

        <div className="relative max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="backdrop-blur-lg bg-white/70 p-8 rounded-2xl shadow-lg border border-white/20"
            >
              <motion.img
                src={testimonials[currentIndex].avatar}
                alt={testimonials[currentIndex].author}
                className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-purple-200 shadow-md"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4 }}
              />
              <p className="text-xl text-gray-700 mb-6 italic">
                "{testimonials[currentIndex].text}"
              </p>
              <p className="font-semibold text-gray-900">{testimonials[currentIndex].author}</p>
              <p className="text-sm text-gray-600">{testimonials[currentIndex].position}</p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <motion.button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-md rounded-full p-3 shadow-md hover:bg-purple-100 transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            &#8592;
          </motion.button>
          <motion.button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-md rounded-full p-3 shadow-md hover:bg-purple-100 transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            &#8594;
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
