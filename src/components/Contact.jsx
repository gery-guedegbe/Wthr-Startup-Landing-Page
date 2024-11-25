import CustomCursor from "./CustomCursor";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="mt-16 h-screen w-full flex-col items-start justify-between lg:mt-36 larg:mt-0">
      <NavBar />
      <CustomCursor />

      <motion.div
        className="mb-20 flex h-full w-full flex-col items-center justify-center gap-3 px-2 text-center lg:mb-10 larg:mb-0"
        initial={{ opacity: 0, y: 20 }} // Départ invisible et légèrement décalé
        whileInView={{ opacity: 1, y: 0 }} // Apparition fluide
        transition={{ duration: 0.8, ease: "easeOut" }} // Transition fluide
        viewport={{ once: true, amount: 0.5 }} // Se déclenche une seule fois
      >
        <motion.h2
          className="to-customHighLightSecondary ml-0 w-full bg-gradient-to-t from-customHighLightPrimary bg-clip-text text-3xl font-bold text-transparent md:text-4xl lg:ml-10 xl:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Do you have further questions?
        </motion.h2>

        <motion.p
          className="text-xl font-medium text-customTextPrimary lg:text-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Reach out to us and we&apos;ll get back to you in less than 48 hours.
        </motion.p>

        <motion.form
          action=""
          className="mt-6 w-full max-w-full space-y-5 px-4 lg:max-w-xl lg:px-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.input
            required
            type="text"
            placeholder="Name"
            className="w-full rounded-xl border-none bg-white px-2 py-3 ps-4 text-sm font-semibold text-customBlack outline-none lg:text-lg"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          />

          <motion.input
            required
            type="email"
            placeholder="Email"
            className="w-full rounded-xl border-none bg-white px-2 py-3 ps-4 text-sm font-semibold text-customBlack outline-none lg:text-lg"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          />

          <motion.textarea
            name="message"
            id="message"
            rows={6}
            placeholder="Message"
            className="w-full rounded-xl border-none bg-white px-2 py-3 ps-4 text-sm font-semibold text-customBlack outline-none lg:text-lg"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          ></motion.textarea>

          <motion.button
            type="submit"
            whileHover={{ scale: 0.9 }}
            transition={{ duration: 0.4 }}
            className="flex w-full cursor-pointer items-center justify-center rounded-xl bg-customHighLightPrimary px-6 py-4 text-center text-lg font-bold text-black outline-none xl:px-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            Send message
          </motion.button>
        </motion.form>
      </motion.div>

      <Footer />
    </div>
  );
};

export default Contact;
