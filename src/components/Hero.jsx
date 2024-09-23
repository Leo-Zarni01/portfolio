import React from 'react';
import profilePic from '../assets/profilePic.png';

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
              Leo Zarni
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
              Full Stack Developer
            </span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
              As a Computer Science graduate from UNSW, I specialize in
              developing robust and scalable web applications. My expertise
              spans both frontend and backend technologies, including React,
              Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. Leveraging my
              strong foundation in computer science principles, I create
              efficient, user-friendly solutions. Looking ahead, I'm excited to
              expand my skills into embedded systems development using languages
              like Rust and Go.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img className="rounded-2xl w-96 " src={profilePic}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
