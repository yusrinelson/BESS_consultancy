// import React from 'react';
import { TESTIMONIALS } from "./index.js";
import { FaQuoteLeft } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function Testimonials() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="p-4 mb-[10rem]" id="clients">
      <div className="w-full flex justify-center">
        <div className="p-4 bg-[#FF8A00] w-fit rounded-lg my-5 text-white text-2xl">
          Testimonials
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {TESTIMONIALS.map((testimonial) => (
          <motion.div
            key={testimonial.id}
            className="hover:bg-gray-100 rounded-sm shadow-md w-[90%] md:w-[30vw] h-auto p-4 mt-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
          >
            <p className="text-3xl text-[#FF8A00]">
              <FaQuoteLeft />
            </p>
            <p className="font-bold">{testimonial.name}</p>
            <p className="italic font-light">{testimonial.title}</p>
            <p className="mb-2 text-[0.7] md:text-[1rem]">{testimonial.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
