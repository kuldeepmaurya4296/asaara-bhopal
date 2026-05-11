import { motion } from 'framer-motion';

export default function TextReveal({ 
  text, 
  className = "", 
  delay = 0, 
  staggerDuration = 0.03,
  type = "words" // "words" or "letters"
}) {
  const words = text.split(" ");
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: staggerDuration, delayChildren: delay * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  if (type === "words") {
    return (
      <motion.div
        className={`flex flex-wrap ${className}`}
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {words.map((word, index) => (
          <motion.span
            variants={child}
            style={{ marginRight: "0.25em" }}
            key={index}
            className="inline-block"
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    );
  }

  // Letters approach
  return (
    <motion.div
      className={`flex flex-wrap ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <span key={index} className="inline-block" style={{ marginRight: "0.25em" }}>
          {word.split("").map((letter, letterIndex) => (
            <motion.span
              variants={child}
              key={letterIndex}
              className="inline-block"
            >
              {letter}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.div>
  );
}
