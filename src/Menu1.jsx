import React, { Suspense } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Howl } from "howler";
import FlipLink from "./Framer Motion Effect/FlipLink";

const MyCanvasComponent = React.lazy(() =>
  import("./Threejs/MyCanvasComponent")
);

function Menu1({ change }) {
  const menuOptions = [
    { Navlink: "/", Header: "Home" },
    { Navlink: "/Project", Header: "Project" },
    { Navlink: "/AboutMe", Header: "About Me" },
  ];

  const handleMenuClick = (navlink) => {
    change(false);
  };

  return (
    <motion.div className="relative z-[900] top-0 left-0 blur-my h-[400vh]">
      <motion.div className="sticky top-0 left-0 justify-center blur-my flex flex-wrap w-screen h-screen sm:justify-center sm:flex-row sm:flex-nowrap gap-5 items-center">
        <div className="flex justify-center items-center w-screen h-[65vh] lg:w-1/2 lg:h-screen sm:h-1/3">
          <Suspense
            fallback={
              <div className="flex justify-center items-center text-center text-lg">
                Loading...
              </div>
            }
          >
            <MyCanvasComponent />
          </Suspense>
        </div>

        {/* Menu Options */}
        <div className="flex flex-col justify-center items-center text-center lg:items-end h-[35vh] lg:pr-20 gap-2 lg:gap-10 w-auto lg:w-1/2">
          {menuOptions.map((item) => (
            <motion.span
              onClick={() => handleMenuClick(item.Navlink)}
              key={item.Navlink}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-4xl sm:text-6xl md:text-6xl lg:text-8xl cursor-pointer"
              aria-label={item.Header}
            >
              <Link to={item.Navlink}>
                <FlipLink>{item.Header}</FlipLink>
              </Link>
            </motion.span>
          ))}
          {/* Download PDF Button */}
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="mt-5"
          >
            <a
              href="/Resume.pdf"
              target="_blank"
              download={true}
              className="relative inline-block px-6 py-3 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg transition-all duration-300 hover:from-purple-500 hover:to-blue-500 hover:scale-105"
            >
              Download CV
            </a>
          </motion.span>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Menu1;
