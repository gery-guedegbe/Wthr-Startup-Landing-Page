import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import phone_img from "../../../assets/images/phone_4.png";

const ForeCastsDiv = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Variants for the card
  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1 } },
  };

  // Variants for the text
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.2 * index, duration: 0.6 },
    }),
  };

  // Variant for the image
  const imageVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { delay: 0.5, duration: 1 },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={cardVariants}
      className="flex h-[440px] w-full flex-col items-start justify-between gap-10 overflow-hidden rounded-3xl border border-customBorderPrimary bg-customBlack p-6 text-start shadow-lg lg:w-2/3"
    >
      <div className="flex w-full flex-col items-start justify-between gap-10 lg:flex-row">
        <motion.div className="w-full max-w-full space-y-3 break-words lg:max-w-md">
          <motion.h6
            className="text-lg font-black text-customHighLightPrimary"
            variants={textVariants}
            custom={0}
          >
            PRECISE FORECASTS
          </motion.h6>

          <motion.h3
            className="break-words text-3xl font-medium text-customTextPrimary md:text-4xl"
            variants={textVariants}
            custom={1}
          >
            AI-powered weather forecasts
          </motion.h3>
        </motion.div>

        <motion.img
          src={phone_img}
          alt="Phone Image"
          className="mt-0 h-auto w-full object-cover md:mt-6 lg:w-72"
          variants={imageVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        />
      </div>
    </motion.div>
  );
};

export default ForeCastsDiv;
