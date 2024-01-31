import React from "react";
import { motion, useScroll } from "framer-motion";

const CircleIndicator = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{
        scaleX: scrollYProgress,
        position: "fixed",
        top: 0,
        right: 0,
        left: 0,
        heigth: 10,
        transformOrigin: "0%",
        background: "#00cccc",
        height: "5px",
      }}
    ></motion.div>
  );
};

export default CircleIndicator;
