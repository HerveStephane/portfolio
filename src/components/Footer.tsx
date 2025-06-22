
import { FiLinkedin } from 'react-icons/fi';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm md:text-base mb-4 md:mb-0">
          © {new Date().getFullYear()} Hervé Stéphane Njanga Njafang. All rights reserved.
        </p>
        <a
          href="https://www.linkedin.com/in/herve-stephane-njanga-njafang-73055b142/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 bg-white text-blue-800 px-4 py-2 rounded-full shadow-lg hover:bg-gray-100 transition"
          aria-label="LinkedIn Profile"
        >
          <FiLinkedin size={24} />
          <span className="font-semibold">LinkedIn</span>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
