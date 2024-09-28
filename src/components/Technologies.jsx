import { RiReactjsLine } from 'react-icons/ri';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiMongodb } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import { FaRust } from 'react-icons/fa';
import { BiLogoPostgresql } from 'react-icons/bi';
import { motion } from 'framer-motion';

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24" id="technologies">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="rounded-2xl border-4 border-cyan-400 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="rounded-2xl border-4 border-white p-4"
        >
          <TbBrandNextjs className="text-7xl" />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="rounded-2xl border-4 border-green-500 p-4"
        >
          <SiMongodb className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="rounded-2xl border-4 border-green-500 p-4"
        >
          <FaNodeJs className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="rounded-2xl border-4 border-sky-700 p-4"
        >
          <BiLogoPostgresql className="text-7xl text-sky-700" />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="rounded-2xl border-4 border-orange-500 p-4"
        >
          <FaRust className="text-7xl text-orange-500" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
