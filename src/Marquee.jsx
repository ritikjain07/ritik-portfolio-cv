import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { SiMongodb, SiNodedotjs, SiExpress } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";

function Marquee() {
  const Tech = useRef(null);
  const [Techwidth, setTechStack] = useState(0);

  const techStackItems = [
    {
      component: <FaHtml5 className="w-[13vw] sm:w-[10vw] text-orange-800" />,
      key: "html5",
    },
    {
      component: <FaCss3 className="w-[13vw] sm:w-[10vw] text-blue-600" />,
      key: "css3",
    },
    {
      component: <FaJs className="w-[13vw] sm:w-[10vw] text-yellow-500" />,
      key: "js",
    },
    {
      component: <FaReact className="w-[13vw] sm:w-[10vw] text-[#61DBFB] " />,
      key: "react",
    },
    {
      component: (
        <RiTailwindCssFill className="w-[13vw] sm:w-[10vw]  text-blue-200" />
      ),
      key: "tailwind",
    },
    {
      component: <SiMongodb className="w-[10vw] sm:w-[8vw] text-green-600" />,
      key: "mongodb2",
    },
    {
      component: <SiMysql className="w-[10vw] sm:w-[8vw] text-blue-600" />,
      key: "mysql2",
    },
    {
      component: <SiNodedotjs className="w-[10vw] sm:w-[8vw] text-green-800" />,
      key: "SiNodedotjs2nodot",
    },
    {
      component: <SiExpress className="w-[10vw] sm:w-[8vw] text-slate-800" />,
      key: "mysql2",
    },

    {
      component: <FaHtml5 className="w-[10vw] sm:w-[8vw] text-orange-800" />,
      key: "html51",
    },
    {
      component: <FaCss3 className="w-[10vw] sm:w-[8vw] text-blue-600" />,
      key: "css32",
    },
    {
      component: <FaJs className="w-[10vw] sm:w-[8vw] text-yellow-500 " />,
      key: "js2",
    },
    {
      component: <FaReact className="w-[10vw] sm:w-[8vw] text-[#61DBFB]" />,
      key: "reac2t",
    },
    {
      component: (
        <RiTailwindCssFill className="w-[10vw] sm:w-[8vw] text-blue-200" />
      ),
      key: "tailwind2",
    },
    {
      component: <SiMongodb className="w-[10vw] sm:w-[8vw] text-green-600" />,
      key: "mongodb2",
    },
    {
      component: <SiMysql className="w-[10vw] sm:w-[8vw] text-blue-600" />,
      key: "mysql2",
    },
    {
      component: <SiNodedotjs className="w-[10vw] sm:w-[8vw] text-green-800" />,
      key: "SiNodedotjs2nodot",
    },
    {
      component: <SiExpress className="w-[10vw] sm:w-[8vw] text-slate-800" />,
      key: "mysql2",
    },
  ];

  useEffect(() => {
    if (Tech.current) {
      setTechStack(Tech.current.scrollWidth);
    }
  }, []);

  const marqueeVariants = {
    animate: (width) => ({
      x: [0, -width],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: width / 50, // Dynamic duration for consistent speed
          ease: "linear",
        },
      },
    }),
  };

  return (
    <div className="absolute bottom-0 flex flex-col justify-start text-[#ffc79336] w-full overflow-hidden">
      <motion.div
        ref={Tech}
        className="h-auto flex gap-10 sm:gap-10 "
        variants={marqueeVariants}
        animate="animate"
        custom={Techwidth}
      >
        {techStackItems.map((item) => (
          <motion.span
            className="h-auto inline-block hover:scale-110 transition-transform duration-300 ease-in-out hover:text-[#f6cba3]"
            key={item.key}
          >
            {item.component}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}

export default Marquee;
