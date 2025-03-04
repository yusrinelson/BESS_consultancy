import {
  FaClock,
  FaGlobe,
  FaGraduationCap,
  FaCertificate,
  FaBriefcase,
} from "react-icons/fa";

import { motion } from "framer-motion";

export default function WhyBESS() {
  const WHY_BESS = [
    {
      id: 1,
      title: "Service Delivery",
      description:
        "We pride ourselves in service delivery, with a quick response time and a meticulous standard.",
      icon: <FaClock />,
    },
    {
      id: 2,
      title: "Accessibility",
      description:
        "We work remotely, so easily accessible. Contact us from anywhere in the world, we're just an email away.",
      icon: <FaGlobe />,
    },
    {
      id: 3,
      title: "Highly Skilled",
      description:
        "Besides our professional qualifications and years of experience, we understand people.",
      icon: <FaGraduationCap />,
    },
    {
      id: 4,
      title: "B-BBEE Level 1 Contributor",
      description: "135% procurement recognition",
      icon: <FaCertificate />,
    },
    {
      id: 5,
      title: "Professionalism",
      description:
        "Our competence, confidence and conscientiousness sets us apart.",
      icon: <FaBriefcase />,
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="flex flex-wrap items-center justify-center bg-[#428bca] bg-fixed gap-4 pb-[3rem]">
      <div className="w-full md:w-[30vw] h-[30vh] rounded-md flex items-center justify-center mt-[3rem]">
        <p className="font-bold text-4xl md:text-5xl leading-snug text-white text-center">
          WHY CHOOSE <br />
          <span className="font-bold text-[#FF8A00]">B</span>
          <span className="font-bold text-[#0E00AD]">E</span>
          <span className="font-bold text-[#C80201]">S</span>
          <span className="font-bold text-[#0E7421]">S</span> ?
        </p>
      </div>

      {WHY_BESS.map((attribute) => (
        <motion.div
          key={attribute.id}
          className="bg-[#fcfaf7] border-l-8 border-[#0E7421] w-full md:w-[30vw] h-[30vh] md:mt-[3rem] flex items-center justify-center flex-col relative rounded-sm overflow-hidden group mx-4 md:mx-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardVariants}
        >
          <p className="text-3xl mb-2">{attribute.icon}</p>
          <p className="font-bold text-center z-10 transition-opacity duration-300 group-hover:opacity-0">
            {attribute.title}
          </p>
          <div className="absolute inset-0 bg-[#0E7421] flex items-center justify-center flex-col text-center transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out">
            <p className="text-3xl text-white mb-2">{attribute.icon}</p>
            <p className="text-white px-5">{attribute.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
