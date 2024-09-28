import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
// import { FaDiscord } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
const Footer = () => {
  return (
    <div className="mb-8 mt-20">
      <div className="flex items-center justify-center gap-8">
        <a href="https://www.linkedin.com/in/khant-zarni" target="_blank">
          <FaLinkedin size={32} />
        </a>
        <a href="https://www.github.com/Leo-Zarni01" target="_blank">
          <FaGithub size={32} />
        </a>
        <a href="https://www.instagram.com/leozarni/" target="_blank">
          <FaInstagram size={32} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
