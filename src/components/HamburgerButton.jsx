import { motion } from "framer-motion";

const HamburgerButton = ({ isToggled, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="z-50 flex flex-col items-center justify-center gap-2 lg:hidden"
    >
      <motion.div
        animate={isToggled ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
        className="h-1 w-9 rounded-lg bg-customHighLightPrimary"
      ></motion.div>

      <motion.div
        animate={isToggled ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
        className="h-1 w-9 rounded-lg bg-customHighLightPrimary"
      ></motion.div>
    </button>
  );
};

export default HamburgerButton;
