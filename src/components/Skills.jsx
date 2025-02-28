// import React from "react";
import Slider from "react-slick";
import { SKILLS } from "./index.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from 'framer-motion';

export default function Skills() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="h-fit pb-10 bg-gradient-to-b from-gray-100 to-gray-300 drop-shadow-2xl" id="skills">
      <div className="w-full flex justify-center">
        <div className="p-4 bg-[#C80201] w-fit rounded-lg my-5 text-white text-2xl shadow-lg">
          Our Skills
        </div>
      </div>

      <div className="skills-slider w-full max-w-screen-lg mx-auto overflow-hidden my-10 shadow-md">
        <Slider {...settings}>
          {Object.values(SKILLS).map((skill, index) => (
            <motion.div
              key={index}
              className="px-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
            >
              <div className="bg-white border-2 border-[#C80201] w-full h-[10rem] rounded-md flex items-center justify-center text-black font-semibold shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <p>{skill}</p>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </div>
  );
}