import { motion, AnimatePresence } from "framer-motion";
import React, { ReactNode } from "react";

const animation = {
  intial: { opacity: 0 },
  animate: { opacity: [0, 1] },
  exit: { opacity: 0 },
};

const FadeOnLoad = ({ children }: { children: ReactNode }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        variants={animation}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.6 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default FadeOnLoad;
