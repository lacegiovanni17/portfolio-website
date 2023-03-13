import React from 'react';
import { motion } from "framer-motion";
import ExperienceCard from "../components/ExperienceCard";
import { Experience } from "../typings";


type Props = {
    experiences: Experience[];
};

function WorkExperience({ experiences }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      className="flex relative h-screen text-left overflow-hidden md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
      >
          <div className="flex flex-col justify-center items-center">
        <h3 className="top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
          E
        </h3>
        <h3 className="top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
          x
        </h3>
        <h3 className="top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
          p
        </h3>
        <h3 className="top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
          e
        </h3>
        <h3 className="top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
          r
        </h3>
        <h3 className="top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
          i
        </h3>
        <h3 className="top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
          e
        </h3>
        <h3 className="top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
          n
        </h3>
        <h3 className="top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
          c
        </h3>
        <h3 className="top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
          e
        </h3>
      </div>

      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {experiences.map((experience) => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </div>
    </motion.div>
  )
}

export default WorkExperience