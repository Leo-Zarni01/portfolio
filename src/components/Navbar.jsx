import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
// import { FaDiscord } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} className="mx-2 w-16 " alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/khant-zarni" target="_blank">
          <FaLinkedin />
        </a>
        <a href="https://www.github.com/Leo-Zarni01" target="_blank">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/leozarni/" target="_blank">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
