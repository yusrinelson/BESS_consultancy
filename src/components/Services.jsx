// import React from 'react'
import { SERVICES } from "./index.js";
import { motion } from "framer-motion";

export default function Services() {
  const cardVarients = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="bg-[#428bca] bg-fixed h-fit w-full pb-10" id="services">
      <div className="w-full flex justify-center">
        <div className="p-4 bg-[#0E00AD] w-fit rounded-lg my-5 text-white text-2xl">
          Our Services
        </div>
      </div>
      <div className="flex flex-row justify-center gap-3 md:gap-5 mt-7 flex-wrap">
        {Object.values(SERVICES).map((service, index) => (
          <motion.div
            key={index}
            className="bg-slate-100 w-[90vw] md:w-[15rem] h-[10rem] flex items-center justify-center border-l-8 border-[#0E00AD] rounded-sm"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVarients}
          >
            <p className="p-4 text-center">{service}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
