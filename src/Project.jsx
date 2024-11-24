import { motion } from "framer-motion";
import React from "react";
import Footer from "./Footer";

function Project() {
  const projects = [
    {
      ProjectName: "Brahma Disaster Management System",
      Description:
        "Developed a comprehensive web application designed to streamline disaster management operations. Built using HTML, CSS, JavaScript, GSAP, and Tailwind CSS, the application includes features like interactive mind mapping and SCAMPER exercises, with engaging animations powered by GSAP. Tailwind CSS ensures a responsive and modern UI, while JavaScript facilitates smooth and seamless user interactions. This project demonstrates expertise in front-end technologies and creating impactful, user-friendly, and visually appealing web applications.",
      
      CodeLink: "https://github.com/ritikjain07/Brahma-Disaster-Management-System",
      CustomClass: "md:w-[40%] lg:w-[40%] w-full text-center md:text-end",
      CustomClassHeader:
        "border-b-2 border-t-2 border-white/50 text-center md:text-end flex items-center",
      Video: "./brahmamp4.mp4",
      ButtonClass:
        "md:justify-center sm:justify-center justify-center items-center",
    },
    {
      ProjectName: "Finova",
      Description:
        "Finova is an upcoming finance management system designed to provide secure, easy-to-use tools for managing multiple bank accounts, tracking transactions, and transferring funds. Currently in development, Finova integrates with industry-leading financial APIs like Plaid for account linking and Dwolla for secure fund transfers.",
      
      CodeLink: "https://github.com/ritikjain07/Finova-Banking",
      CustomClass: "md:w-[40%] w-full text-center",
      CustomClassHeader:
        "border-b-2 border-white/50 flex-row-reverse text-center md:text-start flex items-center",
      Video: "./Finovamp4.mp4",
      ButtonClass:
        "md:justify-center sm:justify-center justify-center items-center",
    },
    {
      ProjectName: "Ninja Food",
      Description:
        "Ninja Food is a responsive web application designed to simplify the food ordering experience. It combines intuitive design with powerful backend features, making it ideal for users and businesses alike. With Ninja Food, users can browse a vibrant gallery of dishes, place orders, and manage their accounts seamlessly.",
      CodeLink: "https://github.com/ritikjain07/ninja-food",
      CustomClass: "md:w-[40%] w-full text-center",
      CustomClassHeader:
        "border-white/50 text-center md:text-end flex items-center ",
      Video: "./ninjaFoodmp4.mp4",
      ButtonClass:
        "md:justify-center sm:justify-center justify-center items-center",
    },
  ];

  return (
    <motion.div
      initial={{ y: 1000, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.8, ease: "circInOut" }} 
      className="px-4 md:px-8 lg:px-12 bg-gradient-to-r from-[#0d0d3b] to-black"
    >
      <div className="text-6xl md:text-8xl lg:text-9xl ClashDisplay-Medium uppercase flex pt-10 pl-5 pb-8 text-center text-pink-500">
        <span>My Projects</span>
      </div>
      {projects.map((item, index) => (
        <div
          onMouseEnter={(e) => {
            const video = e.currentTarget.querySelector("video");
            if (video) {
              video.play();
            }
          }}
          onMouseLeave={(e) => {
            const video = e.currentTarget.querySelector("video");
            if (video) {
              video.pause();
            }
          }}
          key={index}
          className={`w-full flex p-5 justify-center md:justify-between h-auto gap-5 ${item.CustomClassHeader}`}
        >
          <motion.video
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full md:w-[30%] bg-transparent rounded overflow-hidden"
            src={item.Video}
            muted
            loop
            preload="metadata"
          />
          <span
            className={`text-3xl md:text-4xl flex flex-col gap-5 ${item.CustomClass}`}
          >
            <span className="flex flex-col ClashDisplay-Medium text-5xl md:text-7xl text-center text-green-500">
              {item.ProjectName}
            </span>
            <p className="text-sm md:text-base pl-5 pt-5 ClashDisplay-light text-center text-white/75">
              {item.Description}
            </p>
            <div className={`flex gap-5 ${item.ButtonClass}`}>
              <a
                className="text-xl md:text-2xl bg-gradient-to-r from-pink-500 to-green-500 text-white w-auto rounded-3xl flex justify-center items-center px-5 py-2 hover:scale-105 transition-all duration-300 text-center"
                href={item.CodeLink}
                aria-label={`View code for ${item.CodeLink}`}
              >
                Code
              </a>
            </div>
          </span>
        </div>
      ))}
      <Footer />
    </motion.div>
  );
}

export default Project;
