import React from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
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
          <div className="flex items-center space-x-2">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.3333 8.5C16.3333 12.6421 12.9754 16 8.83325 16H1.33325V8.5C1.33325 4.35786 4.69111 1 8.83325 1C12.9754 1 16.3333 4.35786 16.3333 8.5Z"
                fill="#007BBD"
              />
              <path
                d="M16.3333 23.5C16.3333 19.3579 19.6911 16 23.8333 16H31.3333V23.5C31.3333 27.6421 27.9754 31 23.8333 31C19.6911 31 16.3333 27.6421 16.3333 23.5Z"
                fill="#007BBD"
              />
              <path
                d="M1.33325 23.5C1.33325 27.6421 4.69111 31 8.83325 31H16.3333V23.5C16.3333 19.3579 12.9754 16 8.83325 16C4.69111 16 1.33325 19.3579 1.33325 23.5Z"
                fill="#007BBD"
              />
              <path
                d="M31.3333 8.5C31.3333 4.35786 27.9754 1 23.8333 1H16.3333V8.5C16.3333 12.6421 19.6911 16 23.8333 16C27.9754 16 31.3333 12.6421 31.3333 8.5Z"
                fill="#007BBD"
              />
            </svg>
            <span className="text-xl font-bold text-gray-800">Рехаб</span>
          </div>

          <div className="hidden md:flex space-x-3">
            <a href="#" className="text-black hover:text-blue-500">
              {data.navbar.nav1}
            </a>
            <a href="#" className="text-black hover:text-blue-500">
              {data.navbar.nav2}
            </a>
            <a href="#" className="text-black hover:text-blue-500">
              {data.navbar.nav3}
            </a>
            <a href="#" className="text-black hover:text-blue-500">
              {data.navbar.nav4}
            </a>
          </div>

          <button className="hidden md:flex items-center bg-[#007bbd] text-white px-[24px] py-[12px] rounded-full space-x-2 hover:bg-blue-600 group transition-all duration-300">
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
          </button>

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
          <a href="#" className="text-black hover:text-blue-500">
            {data.navbar.nav2}
          </a>
          <a href="#" className="text-black hover:text-blue-500">
            {data.navbar.nav3}
          </a>
          <a href="#" className="text-black hover:text-blue-500">
            {data.navbar.nav4}
          </a>
          <button className="flex items-center bg-[#007bbd] text-white px-[24px] py-[12px] rounded-full space-x-2 hover:bg-blue-600 group transition-all duration-300 w-fit">
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
          </button>
        </motion.nav>
      </div>
    </header>
  );
};

export default Navbar;
