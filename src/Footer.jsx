import React, { useEffect, useState } from "react";
import FlipLink from "./Framer Motion Effect/FlipLink";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";

function Footer() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [isMobile]);

  return (
    <div className="bg-[#0a0908] mt-14  border-2 sm:border-y-2 mb-10 border-white/50 text-[5vw] md:text-[2.5vw] lg:text-[1.5vw] Satoshi flex flex-col md:flex-row flex-wrap leading-tight">
      <div className="flex text-[8vw] md:text-[4vw] lg:text-[2.5vw] w-full md:w-screen flex-wrap mx-auto ">
        {/* Gmail Section */}
        <div className="hover:text-red-500 sm:border-r-2 w-full mx-auto md:w-1/4 flex flex-row gap-5 h-full transition-all duration-300">
          <span className="mx-auto my-auto">
            <a href="mailto:ritikjain4560@gmail.com">Gmail </a>
            <GoArrowUpRight className="inline-block mx-auto transition-transform transform hover:-translate-y-4 hover:translate-x-4" />
          </span>
        </div>

        {/* GitHub Section */}
        <div className="hover:text-purple-500 sm:border-r-2 w-full md:w-1/4 flex flex-row gap-5 mx-auto h-full transition-all duration-300">
          <span className="mx-auto my-auto">
            <a href="https://github.com/ritikjain07" target="_blank" rel="noopener noreferrer">
              GitHub{" "}
              <GoArrowUpRight className="inline-block w-1/5 transition-transform transform hover:-translate-y-4 hover:translate-x-4" />
            </a>
          </span>
        </div>

        {/* LinkedIn Section */}
        <div className="hover:text-blue-500 w-full mx-auto md:w-1/4 flex flex-row gap-5 h-full transition-all duration-300">
          <span className="mx-auto my-auto">
            <a href="https://linkedin.com/in/ritik-jain-77a863225/" target="_blank" rel="noopener noreferrer">
              LinkedIn{" "}
              <GoArrowUpRight className="inline-block transition-transform transform hover:-translate-y-4 hover:translate-x-4" />
            </a>
          </span>
        </div>

        {/* My Resume Section */}
        {isMobile ? (
          <div className="w-full flex gap-2 py-2 justify-center flex-wrap">
            <span className="mx-auto">
              <Link to="/AboutMe">
                <FlipLink>About Me</FlipLink>
              </Link>
            </span>
            <span>
              <a href="https://drive.google.com/file/d/1ZYWySAmJSLiHvTFK9TZEo4_MqwJhuEMF/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <FlipLink>My Resume</FlipLink>
              </a>
            </span>
          </div>
        ) : (
          <div className="flex w-full md:w-1/4 flex-col border-l-2 gap-4 mx-auto h-full">
            <span className="mx-auto my-auto">
              <Link to="/AboutMe">
                {/* <FlipLink>About Me</FlipLink> */}
              </Link>
              <a href="https://drive.google.com/file/d/1ZYWySAmJSLiHvTFK9TZEo4_MqwJhuEMF/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <FlipLink>My Resume</FlipLink>
              </a>
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Footer;
