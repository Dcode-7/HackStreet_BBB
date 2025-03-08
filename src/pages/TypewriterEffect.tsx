import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const phrases = [
  "for women who work late",
  "for independent entrepreneurs",
  "for solo travelers",
  "for everyone's peace of mind",
];

export const TypewriterEffect = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        // Current phrase to work with
        const phrase = phrases[currentPhrase];

        if (!isDeleting) {
          // Add one character to the text
          setCurrentText(phrase.substring(0, currentText.length + 1));

          // If completed typing
          if (currentText.length === phrase.length) {
            // Wait a bit before deleting
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          // Remove one character from the text
          setCurrentText(phrase.substring(0, currentText.length - 1));

          // If deleted all characters
          if (currentText.length === 0) {
            setIsDeleting(false);
            setCurrentPhrase((prev) => (prev + 1) % phrases.length);
          }
        }
      },
      isDeleting ? 50 : 120
    );

    return () => clearTimeout(timeout);
  }, [currentText, currentPhrase, isDeleting]);

  return (
    <motion.h2
      className="text-2xl md:text-4xl font-bold mb-6 h-12 text-safety-text"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      {currentText}
      <span className="ml-1 animate-blink">|</span>
    </motion.h2>
  );
};

export default TypewriterEffect;
