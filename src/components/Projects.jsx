import React from 'react';
import { PROJECTS } from '../constants';
import { MdArrowOutward } from 'react-icons/md';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <section
      className="pt-20 border-b border-neutral-900 pb-4 lg:mb-35"
      id="projects"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-8 text-center text-4xl lg:text-4xl bg-gradient-to-r from-pink-300 via-slate-300 to-purple-500 bg-clip-text tracking-tight text-transparent"
      >
        Projects
      </motion.h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project, index) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            key={project.id}
            className={`group relative overflow-hidden rounded-3xl ${
              index === 3 ? 'md:col-span-2 lg:col-span-1 lg:col-start-2' : ''
            }`}
          >
            <div className="aspect-w-16 aspect-h-12 w-full">
              <motion.img
                whileHover={{ scale: 1.1 }}
                src={project.image}
                alt={project.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-300 font-bold opacity-0 backdrop-blur-lg transition-opacity duration-500 group-hover:opacity-100">
              <h3 className="mb-2 text-xl">{project.name}</h3>
              <p className="mb-12 p-4">{project.description}</p>
              {project.id !== 4 ? (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white px-4 py-2 text-black hover:bg-gray-300"
                >
                  <div className="flex items-center">
                    <span>View on Github</span>
                    <MdArrowOutward />
                  </div>
                </a>
              ) : (
                <button className="rounded-full bg-white px-4 py-2 text-black hover:bg-gray-300">
                  Available on Request
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
