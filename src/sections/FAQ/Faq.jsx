import { motion } from "framer-motion";
import { IoIosArrowUp } from "react-icons/io";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Faq = () => {
  const faqData = [
    {
      id: 1,
      question:
        "Is the weather app available for both iOS and Android devices?",
      answer:
        "Absolutely! Our weather app is compatible with both iOS and Android devices, ensuring seamless access to accurate weather forecasts wherever you go. Simply download it from the App Store or Google Play Store to get started.",
    },
    {
      id: 2,
      question: "How often are weather updates provided within the app?",
      answer:
        "Weather updates are provided regularly within the app, with frequency varying based on factors such as location, weather conditions, and user preferences. You can expect to receive timely updates to ensure you stay informed about any changes in the forecast.",
    },
    {
      id: 3,
      question: "Is the weather app available in multiple languages?",
      answer:
        "Yes, our weather app supports multiple languages, ensuring accessibility for users worldwide. You can easily switch between languages within the app settings to customize your experience based on your preferences.",
    },
    {
      id: 4,
      question:
        "Is your weather app accessible to users with visual impairments?",
      answer:
        "Yes, our weather app is designed with accessibility in mind, featuring compatibility with screen readers and support for alternative text for images. We strive to ensure that users with visual impairments can access all app features and information effectively.",
    },
  ];

  const navigate = useNavigate();

  const [expanded, setExpanded] = useState(null); // Suivi de l'élément actif

  const toggleExpand = (id) => {
    setExpanded((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="FAQ"
      className="flex h-full w-full flex-col items-start gap-6 px-6 text-start lg:gap-10 lg:px-8"
    >
      <motion.h2
        className="to-customHighLightSecondary ml-0 w-full bg-gradient-to-t from-customHighLightPrimary bg-clip-text text-3xl font-bold text-transparent md:text-4xl lg:ml-10 xl:text-5xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        Frequently asked questions
      </motion.h2>

      <button className="flex w-full flex-col items-start justify-center gap-8 px-6 text-start lg:px-10">
        {faqData.map((faq) => (
          <motion.div
            key={faq.id}
            onClick={() => toggleExpand(faq.id)}
            className={`flex w-full flex-col items-start justify-center ${expanded ? "gap-6" : "gap-2"} border-b border-b-customHighLightPrimary pb-5`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: faq.id * 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Question */}
            <div className="inline-flex w-full cursor-pointer items-start justify-between lg:items-center">
              <p className="text-lg font-bold text-customTextPrimary lg:text-2xl">
                {faq.question}
              </p>

              <IoIosArrowUp
                className={`text-4xl font-bold text-customHighLightPrimary transition-transform duration-500 lg:text-2xl ${
                  expanded === faq.id ? "rotate-0" : "rotate-180"
                }`}
              />
            </div>

            {/* Réponse */}
            <motion.div
              className="overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: expanded === faq.id ? "auto" : 0,
                opacity: expanded === faq.id ? 1 : 0,
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <p className="text-lg font-medium text-customTextPrimary lg:text-xl">
                {faq.answer}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </button>

      <div className="mt-6 flex w-full items-center justify-center">
        <motion.button
          onClick={() => navigate("/contact")}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          whileHover={{ scale: 0.9 }}
          className="flex cursor-pointer rounded-full bg-customHighLightPrimary px-6 py-4 text-lg font-bold text-black outline-none xl:px-10"
        >
          Contact us
        </motion.button>
      </div>
    </section>
  );
};

export default Faq;
