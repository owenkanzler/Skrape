import React, { useState, useRef, useEffect } from "react";
import logo from "../assets/logo.svg";
import { motion, AnimatePresence } from "framer-motion";
import { GalleryHorizontalEnd, Github, Linkedin } from "lucide-react";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const popupRef = useRef(null);

  const links = [
    {
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/owenkanzler",
      icon: <Linkedin size={16} />,
    },
    {
      title: "GitHub",
      url: "https://github.com/owenkanzler",
      icon: <Github size={16} />,
    },
    {
      title: "Portfolio",
      url: "https://owenkanzler.com",
      icon: <GalleryHorizontalEnd size={16} />,
    },
  ];

  useEffect(() => {
    const popupHandler = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", popupHandler);

    return () => {
      document.removeEventListener("mousedown", popupHandler);
    };
  }, []);

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.2,
      },
    },
  };

  const toggleMenu = (e) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative">
      <div
        ref={popupRef}
        onClick={toggleMenu}
        className="p-3 bg-interactive rounded-lg cursor-pointer z-50 hover:bg-[#28211D95] transition-all duration-100"
      >
        <img src={logo} alt="Skrape logo" loading="lazy" className="w-6 h-6" />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="absolute top-16 right-0 p-4 w-48 bg-interactive shadow-lg rounded-lg flex flex-col gap-1 after:w-6 after:h-6 after:bg-interactive after:absolute after:top-[-6px] after:right-3 after:transform after:rotate-45 after:z-[-1] z-50"
          >
            <h2 className="font-medium">Creator Links:</h2>
            {links.map((link, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[14px] text-text2 hover:text-text hover:underline transition-all duration-100"
                >
                  {link.icon}
                  {link.title}
                </a>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
