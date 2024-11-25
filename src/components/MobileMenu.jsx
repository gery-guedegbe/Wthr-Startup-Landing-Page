import { motion } from "framer-motion";
import { MdKeyboardArrowRight } from "react-icons/md";

const MobileMenu = ({ isToggled, setIsToggled }) => {
  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.ul
      className="flex w-full flex-col items-start gap-6 px-2"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
      }}
    >
      {["Features", "Testimonials", "FAQ", "Blog", "Download"].map(
        (link, index) => (
          <motion.li
            key={index}
            className="flex w-full items-start justify-between"
            variants={menuVariants}
            transition={{ duration: 0.3 }}
            onClick={() => setIsToggled(false)}
          >
            <a
              href={`#${link}`}
              className="text-base font-bold leading-5 tracking-widest text-customTextPrimary"
            >
              {link}
            </a>

            <MdKeyboardArrowRight className="text-2xl text-white" />
          </motion.li>
        ),
      )}

      <motion.button
        className="mt-2 flex w-full items-center justify-center rounded-full bg-customHighLightPrimary py-3 text-lg font-bold text-customBlack outline-none"
        variants={menuVariants}
      >
        Download
      </motion.button>
    </motion.ul>
  );
};

export default MobileMenu;
