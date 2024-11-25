import { motion } from "framer-motion";

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute -z-10 h-10 rounded-full bg-customHighLightPrimary mix-blend-difference"
    />
  );
};

export default Cursor;
