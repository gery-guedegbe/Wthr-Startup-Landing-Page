import hero_logo from "../../assets/logos/hero_logo.svg";
import { motion } from "framer-motion";

const HeroSection = () => {
  // Variants pour les animations
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.3, // Délais entre les enfants
      },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.8, // Durée de l'animation
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      id="Home"
      className="mt-0 flex h-screen w-full flex-col items-center justify-center gap-6 px-2 text-center lg:mt-4"
    >
      {/* Conteneur principal pour orchestrer les animations */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariant}
        className="flex flex-col items-center justify-center gap-8"
      >
        {/* Logo */}
        <motion.img
          src={hero_logo}
          alt="Hero Logo"
          className="h-auto w-16 object-cover"
          variants={itemVariant} // Appliquer les variants
        />

        {/* Titre */}
        <motion.h1
          variants={itemVariant} // Appliquer les variants
          className="to-customHighLightSecondary flex w-full max-w-full flex-col items-center bg-gradient-to-t from-customHighLightPrimary bg-clip-text text-4xl font-extrabold leading-tight text-transparent md:text-6xl xl:max-w-4xl xl:text-7xl"
        >
          <span>THE ULTIMATE</span>
          <span>APP EXPERIENCE</span>
        </motion.h1>

        {/* Bouton */}
        <motion.button
          variants={itemVariant}
          whileHover={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="clickable cursor-pointer rounded-full bg-customHighLightPrimary px-6 py-4 text-lg font-bold text-black outline-none xl:px-10"
        >
          Download
        </motion.button>
      </motion.div>
    </section>
  );
};

export default HeroSection;
