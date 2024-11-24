import React, { useEffect, useState } from "react";
import Hero from "./Hero";
import { AnimatePresence, motion } from "framer-motion";
import Splittext from "./Framer Motion Effect/Splittext";
import { Howl } from "howler";

// Import video files
const videoSources = [
  "./ninjaFoodmp4.mp4",
  "./brahmamp4.mp4",
  "./Finovamp4.mp4",
  // Add more videos here
];

function Loader() {
  const [RenderPage, setRenderPage] = useState(false);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // Function to preload audio files

    // Function to preload video files
    const preloadVideo = (src) => {
      return new Promise((resolve) => {
        const video = document.createElement("video");
        video.src = src;
        video.preload = "auto";
        video.oncanplaythrough = () => resolve();
        video.onerror = () => resolve(); // Handle error case
      });
    };

    // Load all assets
    const loadAssets = async () => {
      await Promise.all([
        ...videoSources.map(preloadVideo), // Preload videos
      ]);
      setTimeout(() => {
        setRenderPage(true); // Set renderPage to true once all assets are preloaded
        setShowLoader(false);
      }, 1500);
      // Hide loader
    };

    loadAssets();
  }, []);

  return (
    <div>
      <AnimatePresence mode="wait">
        {showLoader && !RenderPage ? (
          <motion.div
            key="loader"
            exit={{ y: -1000, scale: 0.5 }}
            transition={{ duration: 1, ease: "circInOut" }}
            className="w-screen h-screen flex justify-center absolute z-[999] bg-[#080825]   items-center"
          >
            <motion.div className="BoxLoader h-screen  w-screen rounded-3xl   flex text-center justify-center items-center mx-auto my-auto luckiest-guy text-4xl sm:text-5xl md:text-6xl lg:text-8xl">
              <Splittext duration={1.5} delay={0.15} repeat={Infinity}>
                Hello
              </Splittext>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="hero"
            initial={{ y: 1000, scale: 0.5, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "circInOut" }}
          >
            <Hero />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Loader;
