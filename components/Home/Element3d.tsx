"use client";
import { cn } from "@/lib/utils";
import { motion, MotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import React from "react";

const Element3d = ({
  className,
  image,
  duration = 2,
  scrollYProgress,
}: {
  className: string;
  image: string;
  duration: number;
  scrollYProgress: MotionValue;
}) => {
  const y = useTransform(scrollYProgress, [0, 1], [-510, 310], {
    clamp: false,
  });

  return (
    <motion.div
      style={{
        y,
      }}
      initial={{
        x: -10,
      }}
      animate={{
        x: 10,
      }}
      transition={{
        duration,
        repeat: Infinity,
        repeatType: "mirror",
      }}
      className={cn("overflow-hidden", className)}
    >
      <Image
        src={image}
        width={80}
        height={80}
        sizes="100"
        alt="3d shape"
        className="   object-contain"
      />
    </motion.div>
  );
};

export default Element3d;
