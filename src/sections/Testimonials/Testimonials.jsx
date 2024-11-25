import { motion } from "framer-motion";
import Carrousel from "./components/Carrousel";

const Testimonials = () => {
  return (
    <section
      id="Testimonials"
      className="flex h-full w-full flex-col items-start gap-6 px-6 text-start lg:gap-14 lg:px-8"
    >
      <h2 className="to-customHighLightSecondary ml-0 w-full bg-gradient-to-t from-customHighLightPrimary bg-clip-text text-3xl font-bold text-transparent md:text-4xl lg:ml-10 xl:text-5xl">
        Hear it from our users
      </h2>

      <div className="mt-6 flex w-full items-center justify-center space-y-8">
        <ul className="flex w-full flex-col items-start justify-between gap-8 text-center lg:flex-row">
          {[
            { title: "5000+", description: "Community members" },
            { title: "10m+", description: "App Downloads" },
            { title: "240", description: "Countries" },
          ].map((item, index) => (
            <motion.li
              key={index}
              className="relative w-full space-y-1 text-center lg:space-y-4"
            >
              {/* Bordure gauche */}
              <motion.div
                className="absolute left-0 top-0 hidden h-full border-l-2 border-customTextPrimary lg:block"
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1, ease: "easeOut" }}
              />

              {/* Bordure droite */}
              <motion.div
                className="absolute right-0 top-0 hidden h-full border-r-2 border-customTextPrimary xl:block"
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1, ease: "easeOut" }}
              />

              {/* Contenu */}
              <h1 className="to-customHighLightSecondary bg-gradient-to-t from-customHighLightPrimary bg-clip-text text-5xl font-bold text-transparent md:text-6xl lg:ml-10">
                <strong>{item.title}</strong>
              </h1>

              <p className="text-xl font-bold text-customTextPrimary md:text-2xl">
                {item.description}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>

      <Carrousel />
    </section>
  );
};

export default Testimonials;
