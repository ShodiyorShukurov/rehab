import React from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import logo from '../assets/vectorlife_logo.svg';
import data from '../mock/data.json';

const menuVariants = {
  open: {
    height: 'auto',
    maxHeight: 400,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
  closed: {
    height: 0,
    maxHeight: 0,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
      when: 'afterChildren',
    },
  },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="fixed md:top-3 z-30 w-full bg-white md:bg-transparent">
      <div className="container">
        <nav className="flex items-center justify-between py-[20px] bg-white md:p-[12px] md:rounded-[50px] md:border border-[#cfcfcf]">
          <a href="/" className="flex items-center space-x-2">
            <img src={logo} alt="Rehab" className='h-14' />
          </a>

          <div className="hidden md:flex space-x-3">
            <a href="#" className="text-black hover:text-blue-500">
              {data.navbar.nav1}
            </a>
            <a href="#about" className="text-black hover:text-blue-500">
              {data.navbar.nav2}
            </a>
            <a href="#service" className="text-black hover:text-blue-500">
              {data.navbar.nav3}
            </a>
            <a href="#team" className="text-black hover:text-blue-500">
              {data.navbar.nav4}
            </a>
          </div>

          <a href='tel:+998942021984' className="hidden md:flex items-center bg-[#007bbd] text-white px-[24px] py-[12px] rounded-full space-x-2 hover:bg-blue-600 group transition-all duration-300">
            <span> {data.navbar.button_text}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="rgb(255, 255, 255)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300 group-hover:rotate-45"
            >
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </a>

          <button
            className="block md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </nav>

        {/* MOBILE MENU */}
        <motion.nav
          variants={menuVariants}
          initial="closed"
          animate={isOpen ? 'open' : 'closed'}
          className="absolute top-[70px] left-0 w-full bg-white shadow-lg p-5 flex flex-col space-y-4 md:hidden overflow-hidden"
        >
          <a href="#" className="text-black hover:text-blue-500">
            {data.navbar.nav1}
          </a>
          <a href="#about" className="text-black hover:text-blue-500">
            {data.navbar.nav2}
          </a>
          <a href="#service" className="text-black hover:text-blue-500">
            {data.navbar.nav3}
          </a>
          <a href="#team" className="text-black hover:text-blue-500">
            {data.navbar.nav4}
          </a>
          <a href='tel:+998942021984' className="flex items-center bg-[#007bbd] text-white px-[24px] py-[12px] rounded-full space-x-2 hover:bg-blue-600 group transition-all duration-300 w-fit">
            <span> {data.navbar.button_text}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="rgb(255, 255, 255)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300 group-hover:rotate-45"
            >
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </a>
        </motion.nav>
      </div>
    </header>
  );
};

export default Navbar;
