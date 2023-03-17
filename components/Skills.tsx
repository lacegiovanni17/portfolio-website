import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import { Skill as SkillType } from "../typings";

type Props = {
  skills: SkillType[];
};

function Skills({skills}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      className="flex relative text-center xl:px-10 min-h-screen md:text-left max-w-[2000px] px-10 justify-center xl:space-y-0 mx-auto items-center"
      >
          <div className="flex flex-col justify-center items-center">
        <h3 className="top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
          S
        </h3>
        <h3 className="top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
          k
        </h3>
        <h3 className="top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
          i
        </h3>
        <h3 className="top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
          l
        </h3>
        <h3 className="top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
          l
        </h3>
        <h3 className="top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
          s
        </h3>
      </div>

      <div className="grid grid-cols-4 gap-5">
        {skills?.slice(0, skills.length / 2).map((skill) => (
          <Skill key={skill?._id} skill={skill} />
        ))}

        {skills?.slice(skills.length / 2, skills.length).map((skill) => (
          <Skill key={skill?._id} skill={skill} directionLeft />
        ))}
      </div>
    </motion.div>
  )
}

export default Skills;
