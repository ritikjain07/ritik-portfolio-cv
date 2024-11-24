import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Project from "../Project";
import About from "../About";
// import Resume from "../Resume"; // Ensure Resume is defined
import Menu1 from "../Menu1";
import Loader from "../Loader";
import { LiaGripLinesSolid, LiaTimesSolid } from "react-icons/lia";
import OtherageTrantion from "../Framer Motion Effect/OtherageTrantion";

function Router() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
    playSound(); // Ensure `playSound` is defined or passed as a prop
  };

  return (
    <div>
      {/* Menu Toggle */}
      <AnimatePresence>
        {!menuOpen ? (
          <motion.span
            key="menu-icon"
            onClick={toggleMenu}
            className="absolute top-4 right-8 z-[800] flex items-center gap-3 cursor-pointer"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {/* Text with Hover Effect */}
            <motion.span
              className="text-2xl font-bold text-white tracking-wide"
              whileHover={{ scale: 1.1, color: "#FFD700" }}
              whileTap={{ scale: 0.9 }}
            >
              Click Me
            </motion.span>

            {/* Icon with Gradient and Animation */}
            <motion.div
              className="relative group w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex justify-center items-center shadow-lg hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9, rotate: -10 }}
            >
              <LiaGripLinesSolid
                className="text-white w-6 h-6 transition-transform duration-300 group-hover:scale-125"
              />
            </motion.div>
          </motion.span>
        ) : (
          <motion.div
            key="menu-content"
            className="absolute top-0 right-0 z-[100] bg-[#0a0908] blur-my min-h-screen h-full w-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <LiaTimesSolid
              onClick={toggleMenu}
              className="absolute top-4 right-8 w-10 z-[990] h-10 text-white"
            />
            <Menu1 change={setMenuOpen} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Routes with Page Transitions */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Loader />} />
          <Route
            path="/AboutMe"
            element={
              <>
                <About />
                <OtherageTrantion />
              </>
            }
          />
          <Route
            path="/Project"
            element={
              <>
                <Project />
                <OtherageTrantion />
              </>
            }
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default Router;
