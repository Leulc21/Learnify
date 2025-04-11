import { motion } from "framer-motion";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import Blob from "../../assets/blob.svg";
import hero from "../../assets/hero.png";

export const FadeUp = (delay) => ({
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      duration: 0.5,
      delay: delay,
      ease: "easeInOut",
    },
  },
});

function Hero() {
  return (
    <section className="bg-light overflow-hidden relative">
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] px-10 py-2 ">
        {/* brand info */}
        <div className=" flex flex-col justify-center py-14  md:py-0 relative z-20">
          <div className="text-center md:text-left space-y-10 lg:max-w[400px]">
            <motion.h1
              variants={FadeUp(0.5)}
              initial="initial"
              animate="animate"
              className="text-3xl lg:text-5xl font-bold !leading-snug"
            >
              Unlock Your {""} <span className="text-secondary">Potential</span>
              {""} with Expert-Led Online Learning
            </motion.h1>

            <motion.div
              variants={FadeUp(0.8)}
              initial="initial"
              animate="animate"
              className="flex justify-center md:justify-start"
            >
              <button className="button  flex items-center gap-2 group">
                Get Started for Free
                <IoIosArrowRoundForward className="text-xl group-hover:translate-x-2 group-hover:-rotate-45 duration-300" />
              </button>
            </motion.div>
          </div>
        </div>
        <div className="flex  justify-center items-center">
          <motion.img
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9, ease: "easeInOut" }}
            src={hero}
            alt=""
            className="w-[400px] xl:[600px] relative z-10 drop-shadow-2xl"
          />
          <motion.img
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1, ease: "easeInOut" }}
            src={Blob}
            alt=""
            className="absolute -bottom-50 w-[800px] md:w-[1000px]  hidden md:block"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
