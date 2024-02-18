"use client";

import { motion } from "framer-motion";
import React, { ReactNode } from "react";

const animation = {
  initial: { scaleY: 0 },
  animate: { scaleY: 1 },
  exit: { scaleY: 0 },
};

const DropDown = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      variants={animation}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.18 }}
    >
      {children}
    </motion.div>
  );
};

export default DropDown;
