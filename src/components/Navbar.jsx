// import React from 'react';
import { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NAV } from "./index.js";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const inactivityTimeout = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero");
      if (heroSection) {
        const heroSectionHeight = heroSection.offsetHeight;
        if (window.scrollY > heroSectionHeight) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
          setIsVisible(true); // this allows to always show navbar when above hero section
        }
      }
    };

    const handleMouseMove = () => {
      if (isScrolled) {
        setIsVisible(true);
        if (inactivityTimeout.current) {
          clearTimeout(inactivityTimeout.current);
        }
        inactivityTimeout.current = setTimeout(() => {
          setIsVisible(false);
        }, 1500);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      if (inactivityTimeout.current) {
        clearTimeout(inactivityTimeout.current);
      }
    };
  }, [isScrolled]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div
      className={`w-full text-white fixed right-0 z-40 p-2 py-4 transition-all duration-300 ${
        isScrolled ? "bg-[#428bca]" : "md:bg-transparent bg-[#141515]"
      } rounded-b ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      <div className="flex justify-end items-center">
        <div className="md:hidden" onClick={toggleMenu}>
          {menuOpen ? (
            <FaTimes className="text-2xl" />
          ) : (
            <FaBars className="text-2xl" />
          )}
        </div>
      </div>

      <ul
        className={`flex flex-col md:flex-row gap-x-5 mt-4 md:mt-0 w-full justify-end ${
          menuOpen ? "block" : "hidden"
        } md:flex`}
      >
        {NAV.map((nav) => (
          <a
            href={nav.link}
            key={nav.id}
            className="cursor-pointer text-[1.2rem] transition-colors duration-300 rounded-md  "
          >
            <li>
              <p className="md:hover:scale-110 hover:text-[#a4a4a4]">
                {nav.title}
              </p>
            </li>
          </a>
        ))}
      </ul>
    </div>
  );
}
