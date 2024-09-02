import React, { Suspense } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Howl } from "howler";
import FlipLink from "./Framer Motion Effect/FlipLink";

// Lazy load MyCanvasComponent
const MyCanvasComponent = React.lazy(() =>
  import("./Threejs/MyCanvasComponent")
);

function Menu1({ change }) {
  const menuOptions = [
    { Navlink: "/", Header: "Home" },
    { Navlink: "/Project", Header: "Project" },
    { Navlink: "/About Me", Header: "About Me" },
    { Navlink: "/Download CV", Header: "Download CV" },
  ];

  let sound, click;

  React.useEffect(() => {
    sound = new Howl({
      src: ["whoosh-cinematic.mp3"],
      loop: false,
      volume: 1,
    });
    click = new Howl({
      src: ["interface.mp3"],
      loop: false,
      volume: 1,
    });

    return () => {
      sound.unload();
      click.unload();
    };
  }, []);

  const handleMenuClick = (navlink) => {
    change(false);
    sound.play();
  };

  return (
    <motion.div
      className="sticky-menu flex justify-between w-screen min-h-screen h-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      {/* 3D Canvas Component */}
      <div className="w-[75vw] p-2 rounded-xl flex justify-center">
        <Suspense fallback={<div>Loading...</div>}>
          <MyCanvasComponent />
        </Suspense>
      </div>

      {/* Menu Options */}
      <div className="text-4xl flex flex-col justify-center items-end pr-10 w-full gap-10">
        {menuOptions.map((item) => (
          <motion.span
            onClick={() => handleMenuClick(item.Navlink)}
            key={item.Navlink}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <Link to={item.Navlink}>
              <FlipLink>{item.Header}</FlipLink>
            </Link>
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export default Menu1;
