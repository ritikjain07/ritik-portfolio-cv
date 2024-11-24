import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      initial={{ y: 1000, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.8, ease: "circInOut" }}
      className=" w-screen h-screen flex flex-col justify-center items-center gap-5 bg-gradient-to-r bg-[#080825] "
    >
      <div className="text-center ">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold  mb-4">
          Hello, I'm{" "}
          <span className="text-purple-500 bg-clip-text text-transparent">
            Ritik Jain .
          </span>
        </h1>
        <p className="text-base md:text-lg lg:text-xl ClashDisplay-Medium text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Passionate Full Stack Developer dedicated to building impactful
          projects with innovative solutions. My expertise spans modern web
          development, creative problem-solving, and delivering robust solutions
          for real-world challenges. Let's connect and collaborate to create
          something extraordinary!
        </p>
      </div>

      {/* Project Highlights Section */}
      <div className="w-full max-w-4xl text-center ">
        <h2 className="text-3xl  ClashDisplay-bold pb-4 text-purple-500 ">
          Project Highlights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t-2 pt-5 border-white/20 ">
          {/* Project Card 1 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all">
            <h3 className="text-xl font-semibold  mb-2 text-[#F6CBA3]">
              Brahma Disaster Management System
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed  ">
              Enhanced rescue operations by integrating drones and real-time
              weather updates.
            </p>
          </div>
          {/* Project Card 2 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all">
            <h3 className="text-xl font-semibold  mb-2 text-[#F6CBA3]">
              Finova Banking System
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed ">
              Built a secure finance platform for 10,000+ users with real-time
              fund transfers.
            </p>
          </div>
          {/* Project Card 3 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all">
            <h3 className="text-xl font-semibold  mb-2 text-[#F6CBA3]">
              Ninja Food Ordering App
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed ">
              Streamlined food orders for 500+ daily users with secure payments.
            </p>
          </div>
        </div>
      </div>

      {/* Buttons Section */}
      <div className="flex flex-wrap justify-center gap-6">
        <a
          href="https://drive.google.com/file/d/1ZYWySAmJSLiHvTFK9TZEo4_MqwJhuEMF/view?usp=sharing"
          className="bg-blue-900  shadow-white/30 text-lg font-medium px-6 py-3 rounded-lg shadow-md hover:shadow-sm transition-all  duration-150 ease-in-out hover:scale-110 text-white"
        >
          Get Resume
        </a>
      </div>
      {/* <Footer /> */}
    </motion.div>
  );
}

export default About;
