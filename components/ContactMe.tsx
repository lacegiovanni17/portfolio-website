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
    <div>ContactMe</div> 
  )
}

export default ContactMe;
