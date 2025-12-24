import React, { useState } from 'react';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-transparent backdrop-blur-md text-very-dark p-6 flex flex-wrap md:flex-nowrap justify-between items-center fixed w-full top-0 z-50">
      {/* Logo / Title */}
      <h1 className="text-2xl font-medium">My Portfolio</h1>

      {/* Hamburger menu button (mobile) */}
      <button
        className="md:hidden text-very-dark text-3xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? '✕' : '☰'}
      </button>

      {/* Navigation */}
      <nav
        className={`${
          isOpen ? 'block' : 'hidden'
        } w-full md:w-auto md:flex md:items-center md:space-x-6 mt-4 md:mt-0`}
      >
        <a
          href="#about"
          className="block md:inline-block py-2 md:py-0 hover:text-soft-green transition-colors"
        >
          About
        </a>
        <a
          href="#projects"
          className="block md:inline-block py-2 md:py-0 hover:text-soft-green transition-colors"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="block md:inline-block py-2 md:py-0 hover:text-soft-green transition-colors"
        >
          Contact
        </a>
      </nav>
    </header>
  );
};
