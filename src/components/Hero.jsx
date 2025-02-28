// import React from 'react'
import logo from '../assets/logo.jpg'

export default function Hero() {
  return (
    <div
      className="relative h-[98vh] bg-[url('assets/bess_cover.jpg')] bg-cover bg-center bg-no-repeat bg-fixed mb-6"
      id="hero"
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>

      <div className="absolute p-4 top-[40px]">
        <img src={logo} alt="logo" width={100} height={100} className="hidden md:block"/>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full">
        <div className="bg-black/50 w-full  flex flex-col items-center justify-center py-5">
          <h1 className="text-white text-2xl md:text-4xl">
            <span className="font-bold text-[#FF8A00]">B</span>
            <span className="font-bold text-[#0E00AD]">E</span>
            <span className="font-bold text-[#C80201]">S</span>
            <span className="font-bold text-[#0E7421]">S</span>. Your BEST
            Choice.
          </h1>
          <h4 className="text-white tracking-[1.5px] text-[0.8rem] md:text-2xl px-2">
            Educational Specialist | Content Developer | EdTech Evaluation
          </h4>
        </div>
      </div>
    </div>
  );
}
