import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import star_icon from "../../../assets/icons/star.svg";

const AppStoreDiv = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  // Variants for the card
  const cardVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1 } },
  };

  // Variants for the stars
  const starVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (index) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.2 * index, // Stagger effect
        duration: 0.4,
      },
    }),
  };

  const stars = Array.from({ length: 5 }, (_, i) => (
    <motion.img
      key={i}
      src={star_icon}
      alt="Star Icon"
      className="h-auto w-8 object-cover lg:w-10"
      variants={starVariants}
      custom={i} // Pass the index for staggered animations
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    />
  ));

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={cardVariants}
      className="flex h-[440px] w-full flex-col items-start justify-between gap-10 overflow-hidden rounded-3xl border border-customBorderPrimary bg-customBlack p-6 text-start shadow-lg lg:w-1/3"
    >
      <div className="space-y-2">
        <h6 className="text-lg font-black text-customHighLightPrimary">
          <strong>APP STORE</strong>
        </h6>

        <h3 className="break-words text-3xl font-medium text-customTextPrimary md:text-4xl">
          Top rated app in the world.
        </h3>
      </div>

      <div className="space-y-2">
        <h1 className="text-6xl font-black text-customHighLightPrimary md:text-8xl">
          <strong>4.9</strong>
        </h1>

        <span className="inline-flex items-center gap-4">{stars}</span>
      </div>
    </motion.div>
  );
};

export default AppStoreDiv;
