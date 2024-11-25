import AdaptablityDiv from "./components/AdaptablityDiv";
import AppStoreDiv from "./components/AppStoreDiv";
import CommunityDiv from "./components/CommunityDiv";
import ForeCastsDiv from "./components/ForeCastsDiv";
import { motion } from "framer-motion";

const Features = () => {
  return (
    <section
      id="Features"
      className="flex h-full w-full flex-col items-start gap-6 px-6 text-start lg:gap-10 lg:px-8"
    >
      <h2 className="to-customHighLightSecondary ml-0 w-full bg-gradient-to-t from-customHighLightPrimary bg-clip-text text-3xl font-bold text-transparent md:text-4xl lg:ml-10 xl:text-5xl">
        What makes us the best app for you
      </h2>

      <div className="mt-8 w-full space-y-12">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex w-full flex-col items-start justify-between gap-12 lg:flex-row xl:gap-6"
        >
          <AdaptablityDiv />
          <AppStoreDiv />
        </motion.div>

        <div className="flex w-full flex-col items-start justify-between gap-12 lg:flex-row xl:gap-6">
          <CommunityDiv />
          <ForeCastsDiv />
        </div>
      </div>
    </section>
  );
};

export default Features;
