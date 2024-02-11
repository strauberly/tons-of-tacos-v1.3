"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { ReactNode } from "react";

const animation = {
  initial: { scaleY: 0 },
  animate: { scaleY: 1 },
  exit: { scaleY: 0 },
};

const DropDown = ({ children }: { children: ReactNode }) => {
  return (
    // <AnimatePresence mode="wait">
    <motion.div
      variants={animation}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.25 }}
    >
      {children}
    </motion.div>
    // </AnimatePresence>
  );
};

export default DropDown;
