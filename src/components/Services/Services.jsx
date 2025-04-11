import { motion } from "framer-motion";
import React from "react";
import { BiSupport } from "react-icons/bi";
import { CiMobile3 } from "react-icons/ci";
import { IoMdHappy } from "react-icons/io";
import { IoPulseOutline } from "react-icons/io5";
import { RiComputerLine } from "react-icons/ri";
import { TbWorldWww } from "react-icons/tb";

const ServicesData = [
  {
    id: 1,
    title: "On-Demand Courses",
    link: "#",
    icon: <TbWorldWww />,
    delay: 0.2,
  },
  {
    id: 2,
    title: "Live Classes & Workshops",
    link: "#",
    icon: <CiMobile3 />,
    delay: 0.3,
  },
  {
    id: 3,
    title: "Personalized Learning Paths",
    link: "#",
    icon: <RiComputerLine />,
    delay: 0.4,
  },
  {
    id: 4,
    title: "Certificates & Career Boosters",
    link: "#",
    icon: <IoMdHappy />,
    delay: 0.5,
  },
  {
    id: 5,
    title: "Expert Mentorship & Community",
    link: "#",
    icon: <IoPulseOutline />,
    delay: 0.6,
  },
  {
    id: 6,
    title: "24/7 support",
    link: "#",
    icon: <BiSupport />,
    delay: 0.7,
  },
];

const SlideLeft = (delay) => {
  return {
    initial: {
      opacity: 0,
      x: 50,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};

function Services() {
  return (
    <section className="bg-white">
      <div className="px-10 pb-14 pt-16">
        <motion.h1
          variants={SlideLeft(0.5)}
          initial="initial"
          animate="animate"
          className="pl-8 text-3xl font-bold text-left pb-10"
        >
          Service We Provide
        </motion.h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {ServicesData.map((service) => (
            <motion.div
              variants={SlideLeft(service.delay)}
              initial="initial"
              whileInView={"animate"}
              viewport={{ once: true }}
              key={service.id}
              className="bg-[#f4f4f4] rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-7 hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl min-h-[140px] text-center"
            >
              <div className="text-4xl text-primary">{service.icon}</div>
              <h2 className="text-lg font-semibold text-center break-words leading-tight w-full">
                {service.title}
              </h2>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
