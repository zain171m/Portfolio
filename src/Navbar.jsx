import { scrollToSection } from "./Scroll";
import { useState } from "react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="py-9 flex flex-row justify-between align-middle mb-11 flex-wrap">
      <button>
        <span className=" text-3xl font-orbitron font-bold text-sky-400">
          &lt;
        </span>
        <span className=" text-3xl  font-orbitron font-bold text-white">
          ./Zain.sol
        </span>
        <span className="  text-3xl font-orbitron font-bold text-sky-400">
          &gt;
        </span>
      </button>
      <button
        className="text-white text-2xl xl:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "✖️" : "☰"}
      </button>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } xl:flex flex flex-col xl:flex-row xl:justify-items-center w-full xl:w-auto gap-4 pt-4`}
      >
        <button
          onClick={() => scrollToSection("skills")}
          className="text-white text-lg sm:text-xl hover:bg-purple-800 px-5 py-4 rounded-sm shadow-md "
        >
          Skills
        </button>
        <button
          onClick={() => scrollToSection("experience")}
          className="text-white  text-lg sm:text-xl hover:bg-purple-800 px-5 py-4 rounded-sm shadow-md "
        >
          Experience
        </button>
        <button
          onClick={() => scrollToSection("courses")}
          className="text-white  text-lg sm:text-xl hover:bg-purple-800 px-5 py-4 rounded-sm shadow-md "
        >
          Certificates
        </button>
        <a
          className="text-white text-center text-lg sm:text-xl hover:bg-purple-800 px-5 py-4 rounded-sm shadow-md"
          href="./Resume/Zain-Resume.pdf"
          download
        >
          Resume
        </a>
        <button
          onClick={() => scrollToSection("contact")}
          className="text-white  text-lg sm:text-xl hover:bg-purple-800 px-5 py-4 rounded-sm shadow-md "
        >
          Contact Me
        </button>
      </div>
    </div>
  );
};
export default Navbar;
