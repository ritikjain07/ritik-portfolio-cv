import React from "react";

function About() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-white px-6">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Hello, I'm{" "}
          <span className="bg-gradient-to-r from-green-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
            Ritik Jain
          </span>
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Passionate Full Stack Developer dedicated to building impactful
          projects with innovative solutions. My expertise spans modern web
          development, creative problem-solving, and delivering robust solutions
          for real-world challenges. Let's connect and collaborate to create
          something extraordinary!
        </p>
      </div>

      {/* Project Highlights Section */}
      <div className="w-full max-w-4xl text-center mb-12">
        <h2 className="text-3xl font-semibold mb-6 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
          Project Highlights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Project Card 1 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all">
            <h3 className="text-xl font-semibold text-purple-400 mb-2">
              Brahma Disaster Management System
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Enhanced rescue operations by integrating drones and real-time
              weather updates.
            </p>
          </div>
          {/* Project Card 2 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all">
            <h3 className="text-xl font-semibold text-purple-400 mb-2">
              Finova Banking System
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Built a secure finance platform for 10,000+ users with real-time
              fund transfers.
            </p>
          </div>
          {/* Project Card 3 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all">
            <h3 className="text-xl font-semibold text-purple-400 mb-2">
              Ninja Food Ordering App
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Streamlined food orders for 500+ daily users with secure payments.
            </p>
          </div>
        </div>
      </div>

      {/* Buttons Section */}
      <div className="flex flex-wrap justify-center gap-6">
        {/* <a
          href="#contact"
          className="bg-gradient-to-r from-pink-500 to-purple-500 text-lg font-medium px-6 py-3 rounded-lg shadow-md hover:scale-105 transition-transform text-white"
        >
          Contact Me
        </a> */}
        <a
          href="https://drive.google.com/file/d/1ZYWySAmJSLiHvTFK9TZEo4_MqwJhuEMF/view?usp=sharing"
          className="bg-gradient-to-r from-green-500 to-blue-500 text-lg font-medium px-6 py-3 rounded-lg shadow-md hover:scale-105 transition-transform text-white"
        >
          Get Resume
        </a>
      </div>
    </div>
  );
}

export default About;
