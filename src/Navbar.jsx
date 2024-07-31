import { scrollToSection } from "./Scroll";
const Navbar = () => {
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
      <a href="./Resume/Zain-Resume.pdf" download>
        <button className="text-white  text-lg sm:text-xl hover:bg-purple-800 px-5 py-4 rounded-sm shadow-md ">
          Resume
        </button>
      </a>
      <button
        onClick={() => scrollToSection("contact")}
        className="text-white  text-lg sm:text-xl hover:bg-purple-800 px-5 py-4 rounded-sm shadow-md "
      >
        Contact Me
      </button>
    </div>
  );
};
export default Navbar;
