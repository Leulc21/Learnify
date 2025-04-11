import { motion } from "framer-motion";
import React from "react";
import { FaBell } from "react-icons/fa";
import BgImage from "../../assets/bg.png";

const bgStyle = {
  backgroundImage: `url(${BgImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain", // Ensures full image visibility
  backgroundPosition: "center",
  backgroundAttachment: "fixed", // Optional: Keeps image in place on scroll
};

const Subscribe = () => {
  return (
    <section className="bg-[#f7f7f7]">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        style={bgStyle}
        className="container min-h-[500px] md:min-h-[600px] flex items-center justify-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="flex flex-col justify-center"
        >
          <div className=" container text-center space-y-4 lg:max-w-[430px] mx-auto">
            <h1 className="text-4xl font-bold !leading-snug">
              450K+ Students Learning with Us
            </h1>
            <p>
              Join a growing community of passionate learners leveling up their
              skills every day. Start your journey today with expert-led
              courses, hands-on projects, and flexible learning.
            </p>
            <a
              href="#"
              className="button !mt-8 inline-flex items-center gap-4 group"
            >
              Subscribe Now
              <FaBell className="group-hover:animate-bounce group-hover:text-lg duration-200" />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Subscribe;
