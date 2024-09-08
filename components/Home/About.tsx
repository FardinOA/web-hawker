"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const About = () => {
  // Track scroll position
  const { scrollYProgress } = useScroll();

  const scale = useTransform(scrollYProgress, [0, 0.4, 0.8], [0.5, 1, 0.7]);

  const borderRadius = useTransform(
    scrollYProgress,
    [0, 0.4, 0.8],
    [100, 0, 100]
  );

  return (
    <section className=" ">
      <motion.div
        className="h-[50vh] bg-secondary mx-auto flex justify-center items-center bg-grid-black/[.03] px-2 "
        style={{
          scale,
          borderRadius,
        }}
        transition={{
          type: "spring",
        }}
      >
        <div className="space-y-4">
          <h3 className="text-background text-3xl lg:text-5xl text-center ">
            Client-Centric Web Solutions
          </h3>

          <p className="text-lg lg:text-xl lg:max-w-[800px] 2xl:max-w-[900px] text-black text-center text-pretty  ">
            We&apos;re a passionate team of web developers dedicated to crafting
            stunning, user-friendly websites. With years of experience, we
            specialize in crafting custom websites. Let&apos;s build your
            digital presence together.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
