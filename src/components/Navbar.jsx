import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { useState, useCallback } from "react";
import NavbarMenus from "./NavbarMenus"

function Navbar({ isLightTheme, scrollToAbout, scrollToServices, scrollToProjects, scrollToTestimonals, scrollToContact }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  return (
    <section className='flex justify-center items-center w-full px-6 py-6 lg:py-4'>
      <div className='flex items-center space-x-6'>
        <Image 
          src={isLightTheme ? "/Light-logo.png" : "/Dark-Logo.png"} 
          width={200} 
          height={200} 
          alt='logo' 
          className='xlllll:scale-150'
        />

        <div className="lg:hidden cursor-pointer mr-10" onClick={toggleMenu}>
          <div className="bg-[#FD6F00] w-6 h-1 rounded-lg my-1"></div>
          <div className="bg-[#FD6F00] w-6 h-1 rounded-lg my-1"></div>
          <div className="bg-[#FD6F00] w-6 h-1 rounded-lg my-1"></div>
        </div>
      
        <nav
          className={`fixed top-0 right-0 h-full flex w-full mx-auto p-6 xlllll:p-10 xlllll:mb-8 justify-around  shadow-lg transition-transform transform ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          } lg:translate-x-0 lg:static lg:shadow-none lg:flex lg:items-center z-30`}
        >
          <div
            className="lg:hidden cursor-pointer ml-10 mt-10"
            onClick={toggleMenu}
          >
            <div
              className={`transform -translate-x-1/2 -translate-y-1 bg-[#FD6F00] rounded-lg w-7 h-1 mb-1 transition-all ${
                menuOpen ? "hidden" : ""
              }`}
            ></div>
            <div
              className={`transform -translate-x-1/2 -translate-y-1 bg-[#FD6F00] rounded-lg w-7 h-1 mb-1 transition-all ${
                menuOpen ? "rotate-45 w-10 translate-y-1" : ""
              }`}
            ></div>
            <div
              className={`transform -translate-x-1/2 -translate-y-1 bg-[#FD6F00] rounded-lg w-7 h-1 mb-1 transition-all ${
                menuOpen ? "-rotate-45 w-10" : "rotate-0"
              }`}
            ></div>
          </div>

          <ul className={`list-none flex flex-col lg:flex-row ${isLightTheme ? 'text-black' : 'text-white'} text-md justify-items-center items-center xlllll:text-[1.5rem] space-y-4 my-8 lg:my-0 lg:space-y-0`}>
            <NavbarMenus Menu="Home" />
            <NavbarMenus Menu="About Me" scrollToSection={scrollToAbout}/>
            <NavbarMenus Menu="Services" scrollToSection={scrollToServices}/>
            <NavbarMenus Menu="Projects" scrollToSection={scrollToProjects}/>
            <NavbarMenus Menu="Testimonals" scrollToSection={scrollToTestimonals}/>
            <NavbarMenus Menu="Contact" scrollToSection={scrollToContact}/>

            <a 
              href="/Krisha-Botadara.pdf" 
              download="Krisha-Botadara.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <motion.button 
                className={`bg-[#FD6F00] text-white text-md justify-items-center items-center p-2 px-6 mx-4 rounded-md`}
                whileHover={{x:20, color: "#FD6F00", backgroundColor: "white", fontWeight: 700}}
                transition={{ease: "easeInOut", duration: 0.3}}
              >
                Download CV
              </motion.button>
            </a>
          </ul>
        </nav>

        {menuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-20"
            onClick={toggleMenu}
          />
        )}
      </div>
    </section>
  );
}

export default React.memo(Navbar);
