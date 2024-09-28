import React from 'react';
import profilePic from '../assets/profilePic.png';
import Resume from '../assets/Resume.pdf';
import { IoMdDownload } from 'react-icons/io';
import { motion } from 'framer-motion';

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pt-32 pb-4 lg:mb-35" id="about">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Leo Zarni
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              As a Computer Science graduate from UNSW, I specialize in
              developing robust and scalable web applications. My expertise
              spans both frontend and backend technologies, including React,
              Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. Leveraging my
              strong foundation in computer science principles, I create
              efficient, user-friendly solutions. Looking ahead, I'm excited to
              expand my skills into embedded systems development using languages
              like Rust and Go.
            </motion.p>
            <a
              href={Resume}
              download
              className="rounded-full mb-16 bg-white px-4 py-2 text-black hover:bg-gray-300"
            >
              <div className="flex items-center">
                <span>Download Resume</span>
                <IoMdDownload />
              </div>
            </a>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="rounded-2xl w-96 "
              src={profilePic}
            ></motion.img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
