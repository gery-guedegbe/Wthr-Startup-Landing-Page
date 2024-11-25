import { useState } from "react";
import { motion } from "framer-motion";
import NavLink from "./NavLink";
import logo from "../assets/logos/logo.svg";
import Cursor from "./Cursor";
import HamburgerButton from "./HamburgerButton";
import MobileMenu from "./MobileMenu";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [isToggled, setIsToggled] = useState(false);

  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 1,
  });

  const handleIsToggled = () => {
    setIsToggled((prev) => !prev);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 2 }}
      className="pointer-events-auto fixed left-0 right-0 top-8 z-20 h-auto w-full px-4 lg:top-10 lg:px-0"
    >
      {/* Desktop Menu */}
      <ul className="relative mx-auto hidden w-full max-w-2xl items-center justify-around rounded-full bg-customBlack/40 p-4 backdrop-blur-lg lg:flex">
        <NavLink
          setPosition={setPosition}
          setActiveLink={setActiveLink}
          isL
          cursorPosition={position}
        >
          <a href="/">
            <img src={logo} alt="Logo" className="h-auto w-16 object-cover" />
          </a>
        </NavLink>

        {["Features", "Testimonials", "FAQ", "Blog", "Download"].map(
          (link, index) => (
            <NavLink
              key={index}
              href={`#${link}`}
              setPosition={setPosition}
              setActiveLink={setActiveLink}
              isActive={activeLink === link}
              cursorPosition={position}
            >
              {link}
            </NavLink>
          ),
        )}
        <Cursor position={position} />
      </ul>

      {/* Mobile Menu */}
      <motion.div
        className="mx-auto flex w-full max-w-2xl flex-col items-start gap-10 rounded-[30px] bg-customBlack/40 p-4 py-4 shadow-[0px_0px_5px_3px_rgba(192,_255,_115,_0.35)] backdrop-blur-lg transition-all duration-300 ease-out lg:hidden"
        initial={false}
        animate={{ height: isToggled ? 400 : 60 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div className="flex w-full items-center justify-between">
          <a href="/">
            <img src={logo} alt="Logo" className="h-auto w-20 object-cover" />
          </a>

          <HamburgerButton isToggled={isToggled} onToggle={handleIsToggled} />
        </div>

        {isToggled && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="w-full"
          >
            <MobileMenu isToggled={isToggled} setIsToggled={setIsToggled} />
          </motion.div>
        )}
      </motion.div>
    </motion.nav>
  );
};

export default NavBar;
