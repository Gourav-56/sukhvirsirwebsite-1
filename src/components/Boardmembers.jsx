import React from 'react';
import { motion } from 'framer-motion';

const boardMembers = [
  {
    name: 'Karam Chand',
    position: 'President',
    image: 'https://res.cloudinary.com/du4zisjfu/image/upload/v1744732882/karam_o1qjnp.jpg',
  },
  // {
  //   name: 'Jane Smith',
  //   position: 'Vice President',
  //   image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  // },
  {
    name: 'Anish',
    position: 'Secretary',
    image: 'https://res.cloudinary.com/du4zisjfu/image/upload/v1744732793/anish_h8nmje.jpg',
  },
  // {
  //   name: 'Sarah Williams',
  //   position: 'Treasurer',
  //   image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  // },
];

// Framer Motion variants
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
};

const BoardMembers = () => {
  return (
    <motion.section
      id="board"
      className="py-20 bg-gray-50"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Board Members</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {boardMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <div className="relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                <p className="text-gray-600 mt-2">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default BoardMembers;
