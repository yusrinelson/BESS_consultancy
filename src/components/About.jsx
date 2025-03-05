// import React from 'react';
import groupImage from "../assets/about_group2.png";

export default function About() {
  return (
    <div className="flex flex-col md:flex-row h-fit mb-6" id="about">
      <picture className="w-full md:w-1/2 flex items-center justify-center">
        <img
          src={groupImage}
          alt="about image"
          className="rounded-md mt-6 max-w-full h-auto"
        />
      </picture>
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-4">
        <h1 className="bg-[#FF8A00] rounded-md mb-4 w-fit text-white text-2xl p-4">
          Who are we?
        </h1>
        <p className="p-4 text-left">
          BESS Consultancy is passionate about quality education, digital
          transformation, and educational pedagogies. We have over 23 years of
          experience in Education and Training, delivering quality educational
          practices. We specialize in educational technologies, content
          development, assessment, moderation, facilitation, digital mentorship,
          and much more.
          <br />
          Our pedagogy hinges on four principles: integrity, consideration,
          humility, and efficacy. BESS is your BEST choice.
        </p>
      </div>
    </div>
  );
}
