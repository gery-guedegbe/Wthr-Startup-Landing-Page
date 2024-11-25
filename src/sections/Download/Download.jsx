import { motion } from "framer-motion";
import phone_img from "../../assets/images/phone_1.png";
import app_store_logo from "../../assets/icons/app-store-icon.svg";
import google_play_logo from "../../assets/icons/google-play-icon.svg";

const Download = () => {
  return (
    <section
      id="Download"
      className="clickable flex h-full w-full flex-col items-center justify-center gap-6 px-6 text-start lg:gap-10 lg:px-24"
    >
      <motion.div
        className="flex w-full flex-col-reverse items-center justify-between gap-16 rounded-3xl border border-customBorderPrimary bg-customCardBackground px-8 py-12 text-start lg:flex-row lg:px-16"
        initial={{ opacity: 0, y: 50 }} // Point de départ de l'animation
        whileInView={{ opacity: 1, y: 0 }} // Position finale une fois visible
        transition={{ duration: 0.8, ease: "easeOut" }} // Transition fluide
        viewport={{ once: true, amount: 0.5 }} // Déclenchement lorsque 50 % visible
      >
        {/* Texte et boutons */}
        <div className="w-full space-y-16 lg:w-1/2 lg:space-y-24">
          <motion.div
            className="w-full space-y-3"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h6 className="text-base font-bold text-customHighLightPrimary">
              DOWNLOAD THE APP
            </h6>

            <h2 className="text-3xl font-bold text-customTextPrimary lg:text-5xl">
              Experience the future of weather forecasts with AI
            </h2>
          </motion.div>

          <motion.div
            className="flex w-full flex-col items-center justify-between gap-4 lg:flex-row"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.button
              whileHover={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="flex w-full items-center justify-center rounded-full bg-customHighLightPrimary px-4 py-2.5 text-black"
            >
              <img
                src={app_store_logo}
                alt="App Store Logo"
                className="h-auto w-24 object-cover"
              />
            </motion.button>

            <motion.button
              whileHover={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="flex w-full items-center justify-center rounded-full bg-customHighLightPrimary px-4 py-3 text-black"
            >
              <img
                src={google_play_logo}
                alt="Google Play Store Logo"
                className="h-auto w-24 object-cover"
              />
            </motion.button>
          </motion.div>
        </div>

        {/* Image du téléphone */}
        <motion.div
          className="overflow-hidden"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <img
            src={phone_img}
            alt="Phone Image"
            className="h-auto w-64 object-cover"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Download;
