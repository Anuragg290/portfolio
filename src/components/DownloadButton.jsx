import { useState } from "react";
import { FaDownload } from "react-icons/fa";

const DownloadButton = () => {
  const [hover, setHover] = useState(false);

  return (
    <a
      href="https://drive.google.com/file/d/1ouaEGHz8upTYinaKjViHekVbOuzzkTIV/view?usp=sharing"
      download="Resume.pdf" 
      target="_blank"
      rel="noopener noreferrer"
      className="relative w-[160px] h-12 inline-flex font-medium rounded-lg cursor-pointer items-center justify-center transition-all duration-300
        bg-blue-600 hover:bg-[#6c18ff] text-white"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >

      <span
        className={`absolute transition-all duration-300 ${
          hover ? "-translate-y-3 opacity-0" : "opacity-100 translate-y-0"
        }`}
      >
        Download CV
      </span>

 
      <span
        className={`absolute transition-all duration-300 ${
          hover ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        <FaDownload size={24} />
      </span>
    </a>
  );
};

export default DownloadButton;

