
import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Bot } from 'lucide-react';

const FloatingIcons = () => {
  return (
    <>
      {/* AI Chatbot Icon */}
      <motion.div
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 right-8 z-50"
      >
        <a
          href="#"
          className="w-16 h-16 bg-gradient-primary text-primary-foreground rounded-full flex items-center justify-center shadow-lg glow-pulse"
        >
          <Bot className="w-8 h-8" />
        </a>
      </motion.div>

      {/* WhatsApp Icon */}
      <motion.div
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 left-8 z-50"
      >
        <a
          href="https://wa.me/919999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="w-16 h-16 bg-gradient-to-r from-green-400 to-teal-500 text-white rounded-full flex items-center justify-center shadow-lg glow-pulse"
        >
          <MessageCircle className="w-8 h-8" />
        </a>
      </motion.div>
    </>
  );
};

export default FloatingIcons;
