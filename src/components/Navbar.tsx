import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white bg-opacity-90 backdrop-blur-md shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center h-16">
        {/* Logo or Name */}
        <a href="#hero" className="text-xl font-bold text-primary-700">
          MBA, Hervé Stephane Njanga
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-semibold">
          <li>
            <a href="#hero" className="hover:text-primary-600 transition">
              {t('navbar.home')}
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-primary-600 transition">
              {t('navbar.projects')}
            </a>
          </li>
          <li>
            <a href="#testimonial" className="hover:text-primary-600 transition">
              {t('navbar.testimonials')}
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-primary-600 transition">
              {t('navbar.contact')}
            </a>
          </li>
        </ul>

        {/* LanguageSwitcher for desktop */}
        <div className="hidden md:block">
          <LanguageSwitcher />
        </div>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl text-primary-700 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col space-y-4 py-6 px-6 font-semibold text-gray-700">
            <li>
              <a
                href="#hero"
                onClick={() => setIsOpen(false)}
                className="block hover:text-primary-600 transition"
              >
                {t('navbar.home')}
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={() => setIsOpen(false)}
                className="block hover:text-primary-600 transition"
              >
                {t('navbar.projects')}
              </a>
            </li>
            <li>
              <a
                href="#testimonial"
                onClick={() => setIsOpen(false)}
                className="block hover:text-primary-600 transition"
              >
                {t('navbar.testimonials')}
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block hover:text-primary-600 transition"
              >
                {t('navbar.contact')}
              </a>
            </li>
            {/* LanguageSwitcher under Contact */}
            <li className="pt-4 border-t border-gray-200">
              <LanguageSwitcher inline={false} />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
