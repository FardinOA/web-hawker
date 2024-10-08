"use client";
import React, { useRef } from "react";
import { Button } from "../ui/button";
import Element3d from "./Element3d";
import { motion, useScroll } from "framer-motion";
import { Spotlight } from "../ui/Spotlight";
import WebService from "@/animations/webService.json";
import Lottie from "react-lottie";
import SparklesText from "../ui/sparkleText";
const Hero = () => {
  const contactRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: contactRef,
    offset: ["start end", "end start"],
  });

  return (
    <section
      ref={contactRef}
      className=" w-full  bg-dot-black/[.1] h-[calc(100vh-60px)] flex justify-center items-center relative   "
    >
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="#5c38cf"
      />
      {/* <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="#5c38cf"
      /> */}
      <div className="space-y-8 relative    ">
        <motion.div
          animate={{
            x: [0, 10, 10, 10, 0, -10, -10, -10, 0],
            y: [0, 10, 0, -10, -10, -10, 0, 10, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className=" w-fit overflow-hidden md:w-[500px] mx-auto"
        >
          {" "}
          <Lottie
            options={{
              animationData: WebService,
            }}
            width={"100%"}
          />
        </motion.div>
        <Element3d
          scrollYProgress={scrollYProgress}
          duration={2.5}
          className="absolute top-8 lg:top-24 right-6 lg:-right-8"
          image="/images/3d2.png"
        />
        <Element3d
          scrollYProgress={scrollYProgress}
          duration={2.9}
          className="absolute top-6 left-6 lg:-left-8"
          image="/images/3d1.png"
        />

        <div className="space-y-3 px-4   ">
          <SparklesText />
          {/* <h1 className="  text-4xl text-center   2xl:text-5xl ">
            Your <span className="text-primary">Vision</span>, Our Code{" "}
            <br className="md:hidden" />- Let&apos;s Build{" "}
            <span className="text-primary">Together</span>!
          </h1> */}

          <h2 className="text-center lg:text-base tracking-wider text-gray-400 ">
            Empowering Your Business with Innovative Web Solutions that Drive
            Success and Engagement.
          </h2>
        </div>
        <div className="flex items-center justify-center">
          {/* <CoolMode> */}
          <Button
            aria-label="Let’s Create Magic Together!"
            size={"xl"}
            className=" shadow-[6px_6px_0px_0px_#5E3BD0]   tracking-wider   shadow-primary/50 rounded-xl"
          >
            Let’s Create Magic Together!
          </Button>
          {/* </CoolMode> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
