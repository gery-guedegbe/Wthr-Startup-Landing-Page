import phone_1 from "../../../assets/images/phone_3.png";
import phone_2 from "../../../assets/images/phone_5.png";
import phone_3 from "../../../assets/images/phone_1.png";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AdaptablityDiv = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  // Variants for the main container
  const containerVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1 } },
  };

  // Variants for the images
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (index) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.3 * index,
        duration: 0.8,
      },
    }),
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="flex h-[440px] w-full flex-col items-start justify-between gap-10 overflow-hidden rounded-3xl border border-customBorderPrimary bg-customBlack p-6 text-start shadow-lg lg:w-2/3"
    >
      <div className="space-y-2">
        <h6 className="text-lg font-black text-customHighLightPrimary">
          ADAPTABILITY
        </h6>

        <h3 className="break-words text-3xl font-medium text-customTextPrimary md:text-4xl">
          Make the experience truly intuitive
        </h3>
      </div>

      <div className="inline-flex items-start gap-4">
        {[phone_1, phone_2, phone_3].map((phone, index) => (
          <motion.img
            key={index}
            src={phone}
            alt={`Phone Image ${index + 1}`}
            className="h-auto w-40 object-cover lg:w-60"
            custom={index} // Pass index for staggered animations
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default AdaptablityDiv;
