import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const NavbarMenus = ({ Menu, scrollToSection }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
        <li
          className='relative mx-4 hover:text-[#FD6F00] cursor-pointer lg:my-0 my-2'
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={scrollToSection}
        >
          {Menu}
          <motion.span
            className="absolute left-0 -top-1 w-full h-[0.9px] bg-[#FD6F00] rounded-lg"
            style={{ transformOrigin: "left" }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isHovered ? 1 : 0 }}
            transition={{ ease: "easeInOut", duration: 0.5 }}
          />
          <motion.span
            className="absolute right-0 -bottom-1 w-full h-[1px] bg-[#FD6F00] rounded-lg"
            style={{ transformOrigin: "right" }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isHovered ? 1 : 0 }}
            transition={{ ease: "easeInOut", duration: 0.5 }}
          />
        </li>
      
  );
};

export default NavbarMenus;
