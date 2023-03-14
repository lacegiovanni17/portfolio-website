import React from 'react';
import { motion } from "framer-motion";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";


type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {}

function ContactMe({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      className="flex flex-col relative h-screen text-center overflow-hidden md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >

          
    </motion.div>
        <div className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        ContactMe
        </div> 
  )
}

export default ContactMe;
