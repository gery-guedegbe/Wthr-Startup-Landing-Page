import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import avatar_1 from "../../../assets/images/avatar-1.jpg";
import avatar_2 from "../../../assets/images/avatar-2.jpg";
import avatar_3 from "../../../assets/images/avatar-3.jpg";
import avatar_4 from "../../../assets/images/avatar-4.jpg";
import avatar_5 from "../../../assets/images/avatar-5.jpg";
import avatar_6 from "../../../assets/images/avatar-6.jpg";
import avatar_7 from "../../../assets/images/avatar-7.jpg";
import avatar_8 from "../../../assets/images/avatar-8.jpg";
import you_div from "../../../assets/images/you_div.png";

const CommunityDiv = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Variants for the card
  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1 } },
  };

  const line1 = [avatar_1, avatar_2, avatar_3].map((item, index) => (
    <img
      key={index}
      src={item}
      alt="Avatar Image"
      className="h-14 w-14 rounded-full border-4 border-customHighLightPrimary object-cover lg:h-16 lg:w-16"
    />
  ));

  const line2 = [avatar_4, avatar_5, you_div, avatar_5].map((item, index) => (
    <img
      key={index}
      src={item}
      alt="Avatar Image"
      className="h-14 w-14 rounded-full border-4 border-customHighLightPrimary object-cover lg:h-16 lg:w-16"
    />
  ));

  const line3 = [avatar_6, avatar_7, avatar_8].map((item, index) => (
    <img
      key={index}
      src={item}
      alt="Avatar Image"
      className="h-14 w-14 rounded-full border-4 border-customHighLightPrimary object-cover lg:h-16 lg:w-16"
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
          <strong>COMMUNITY</strong>
        </h6>

        <h3 className="break-words text-3xl font-medium text-customTextPrimary md:text-4xl">
          Join the community of likeminded people
        </h3>
      </div>

      <div className="mt- flex w-full flex-col items-center justify-center gap-2">
        <div className="flex flex-row items-center gap-2">{line1}</div>
        <div className="flex flex-row items-center gap-2">{line2}</div>
        <div className="flex flex-row items-center gap-2">{line3}</div>
      </div>
    </motion.div>
  );
};

export default CommunityDiv;
