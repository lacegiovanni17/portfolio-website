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
          <div className="flex flex-col justify-center items-center">
            <h3 className="top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
            P
            </h3>
            <h3 className="top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
            r
            </h3>
            <h3 className="top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
            o
            </h3>
            <h3 className="top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
            j
            </h3>
            <h3 className="top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
            e
            </h3>
            <h3 className="top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
            c
            </h3>
            <h3 className="top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
            t
            </h3>
            <h3 className="top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
            s
            </h3>
        </div>


    </motion.div>
  )
}

export default Projects