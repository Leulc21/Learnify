import { motion } from "framer-motion";
import React from "react";
import { IoMdMenu } from "react-icons/io";

const navbarMenue = [
  {
    id: 1,
    title: "Home",
    link: "#",
  },
  {
    id: 2,
    title: "Service",
    link: "#",
  },
  {
    id: 3,
    title: "About Us",
    link: "#",
  },
  {
    id: 4,
    title: "Our Team",
    link: "#",
  },
  {
    id: 5,
    title: "Contact Us",
    link: "#",
  },
];

function Navbar() {
  return (
    <nav>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5, ease: "easeInOut" }}
        className=" bg-light pr-8  py-5 flex justify-between items-center "
      >
        {/* logo section  */}
        <div>
          <h1 className="font-bold text-2xl pl-4">Learnify</h1>
        </div>
        {/* Menue Section */}
        <div className="hidden lg:block">
          <ul className="flex items-center  gap-8">
            {navbarMenue.map((menu) => (
              <li key={menu.id}>
                <a
                  href={menu.link}
                  className="inline-block py-2 px-4 font-bold hover:text-secondary relative group"
                >
                  <div className="w-2 h-2 bg-secondary absolute font-bold mt-2 rounded-full left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden"></div>
                  {menu.title}{" "}
                </a>
              </li>
            ))}
            <button className="button">Sign In</button>
          </ul>
        </div>
        {/* Mobile hamburger Menue Section */}
        <div className="lg:hidden">
          <IoMdMenu className="text-4xl" />
        </div>
      </motion.div>
    </nav>
  );
}

export default Navbar;
