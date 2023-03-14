import React from 'react';
import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlFor } from "../sanity";

type Props = {
    projects: Project[];
};

function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      className="flex relative h-screen text-left overflow-hidden md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
      >
          
    </motion.div>
  )
}

export default Projects