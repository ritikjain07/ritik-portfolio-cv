import React from "react";

function About() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Header Section */}
      <h1 className="text-4xl font-bold mb-4">
        Hello, I'm <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">Ritik Jain</span>
      </h1>
      <p className="text-lg mb-8 text-gray-300 text-center max-w-2xl">
        I am a passionate Full Stack Developer dedicated to building impactful
        projects with innovative solutions. Let's connect and collaborate!
      </p>

      {/* Buttons Section */}
      <div className="flex flex-wrap justify-center gap-6">
        <a
          href="#contact"
          className="bg-gradient-to-r from-pink-500 to-purple-500 text-lg font-medium px-6 py-3 rounded-lg shadow-md hover:scale-105 transition-transform text-white"
          style={{ maxWidth: "200px", textAlign: "center" }}
        >
          Contact Me
        </a>
        <a
          href="#resume"
          className="bg-gradient-to-r from-green-500 to-blue-500 text-lg font-medium px-6 py-3 rounded-lg shadow-md hover:scale-105 transition-transform text-white"
          style={{ maxWidth: "200px", textAlign: "center" }}
        >
          Get Resume
        </a>
      </div>
    </div>
  );
}

export default About;
