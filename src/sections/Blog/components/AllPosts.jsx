import { blogData } from "../index";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Footer from "../../../components/Footer";
import CustomCursor from "../../../components/CustomCursor";
import NavBar from "../../../components/NavBar";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import DownloadCard from "./DownloadCard";
import { useNavigate } from "react-router-dom";

const AllPosts = () => {
  const navigate = useNavigate();
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToElement = (index) => {
    const container = carouselRef.current;
    const containerWidth = container.offsetWidth;
    const itemWidth = container.scrollWidth / blogData.length;

    const scrollPosition =
      itemWidth * index - containerWidth / 2 + itemWidth / 2;

    container.scrollTo({ left: scrollPosition, behavior: "smooth" });
  };

  const handleScroll = (direction) => {
    let newIndex = currentIndex;
    if (direction === "left") {
      newIndex = Math.max(currentIndex - 1, 0);
    } else if (direction === "right") {
      newIndex = Math.min(currentIndex + 1, blogData.length - 1);
    }

    setCurrentIndex(newIndex);
    scrollToElement(newIndex);
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="h-screen w-full flex-col items-start text-start larg:mx-auto larg:px-56">
      <CustomCursor />
      <NavBar />

      <motion.div
        className="relative flex h-full w-full items-center justify-center py-4"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        {/* Bouton Précédent */}
        <button
          className="absolute left-6 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-white/10 p-3 shadow-lg backdrop-blur-xl lg:left-14"
          onClick={() => handleScroll("left")}
        >
          <AiOutlineLeft className="text-xl text-customTextPrimary" />
        </button>

        {/* Carrousel */}
        <div
          ref={carouselRef}
          className="scrollbar-hide flex h-full w-full gap-6 overflow-x-scroll scroll-smooth px-10"
        >
          {[...blogData].map((article) => (
            <motion.div
              key={article.id}
              onClick={() => navigate(`/blog/${article.id}`)}
              className="clickable relative flex w-full flex-shrink-0 items-end overflow-hidden rounded-3xl shadow-lg"
              style={{
                backgroundImage: `url(${article.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
            >
              <div className="absolute bottom-6 w-full space-y-2 px-6 py-3">
                <p className="text-lg font-bold text-customTextPrimary lg:text-xl">
                  {article.date}
                </p>

                <h3 className="to-customHighLightSecondary bg-gradient-to-t from-customHighLightPrimary bg-clip-text text-2xl font-bold text-transparent">
                  {article.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bouton Suivant */}
        <button
          className="absolute right-6 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-white/10 p-3 shadow-lg backdrop-blur-xl lg:right-12"
          onClick={() => handleScroll("right")}
        >
          <AiOutlineRight className="text-xl text-customTextPrimary" />
        </button>
      </motion.div>

      <div className="mb-10 mt-12 flex w-full flex-col items-start justify-center gap-12 px-6 lg:flex-row lg:justify-between lg:px-8">
        <motion.div
          className="w-full flex-col items-start justify-center gap-6 lg:w-2/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <h2 className="to-customHighLightSecondary mb-10 w-full bg-gradient-to-t from-customHighLightPrimary bg-clip-text text-3xl font-bold text-transparent md:text-4xl xl:text-5xl">
            <strong>All stories</strong>
          </h2>

          <ul className="space-y-8">
            {blogData.map((article) => (
              <motion.li
                key={article.id}
                onClick={() => navigate(`/blog/${article.id}`)}
                className="w-full space-y-2 border-b border-white/40 pb-2"
                initial="hidden"
                whileInView="visible"
                whileHover={{ scale: 1.02 }}
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeIn}
              >
                <p className="text-lg font-medium text-customTextPrimary lg:text-xl">
                  {article.date}
                </p>

                <h3 className="text-2xl font-bold text-customTextPrimary">
                  {article.title}
                </h3>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="w-full lg:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <DownloadCard />
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default AllPosts;
