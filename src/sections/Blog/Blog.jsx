import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { blogData } from "./index";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { motion } from "framer-motion";

const Blog = () => {
  const navigate = useNavigate();
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0); // Index de l'article actuellement visible

  // Fonction pour centrer l'élément ciblé
  const scrollToElement = (index) => {
    const container = carouselRef.current;
    const containerWidth = container.offsetWidth;

    // Largeur d'un élément dans le carrousel
    const itemWidth = container.scrollWidth / blogData.length;

    // Calcul de la position centrale
    const scrollPosition =
      itemWidth * index - containerWidth / 2 + itemWidth / 2;

    // Défilement fluide vers la position calculée
    container.scrollTo({ left: scrollPosition, behavior: "smooth" });
  };

  // Fonction pour gérer les clics sur les boutons "Next" et "Prev"
  const handleScroll = (direction) => {
    let newIndex = currentIndex;

    if (direction === "left") {
      newIndex = Math.max(currentIndex - 1, 0); // Empêcher de sortir des limites
    } else if (direction === "right") {
      newIndex = Math.min(currentIndex + 1, blogData.length - 1); // Empêcher de dépasser le dernier élément
    }

    setCurrentIndex(newIndex);
    scrollToElement(newIndex);
  };

  return (
    <section
      id="Blog"
      className="flex h-full w-full flex-col items-start gap-6 px-6 text-start lg:gap-10 lg:px-8"
    >
      <h2 className="to-customHighLightSecondary ml-0 w-full bg-gradient-to-t from-customHighLightPrimary bg-clip-text text-3xl font-bold text-transparent md:text-4xl lg:ml-10 xl:text-5xl">
        <strong>Our latest stories</strong>
      </h2>

      <div className="relative w-full">
        {/* Bouton Précédent */}
        <button
          className="absolute left-0 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-white/10 p-3 shadow-lg backdrop-blur-xl"
          onClick={() => handleScroll("left")}
        >
          <AiOutlineLeft className="text-xl text-customTextPrimary" />
        </button>

        {/* Carrousel */}
        <div
          ref={carouselRef}
          className="scrollbar-hide flex w-full gap-4 overflow-x-scroll scroll-smooth"
        >
          {[...blogData, ...blogData].map((article, index) => (
            <motion.div
              key={article.id}
              onClick={() => navigate(`/blog/${article.id}`)}
              className={`clickable flex h-full w-full max-w-sm flex-shrink-0 flex-col items-center justify-center gap-6 overflow-hidden p-4 shadow-md hover:shadow-lg ${
                currentIndex === index ? "scale-105" : ""
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            >
              <img
                src={article.image}
                alt={article.title}
                className="h-64 w-64 rounded-3xl object-cover lg:h-80 lg:w-80"
              />

              <div className="space-y-4">
                <p className="text-lg font-bold text-customTextPrimary lg:text-xl">
                  {article.date}
                </p>

                <h3 className="to-customHighLightSecondary w-full max-w-xs bg-gradient-to-t from-customHighLightPrimary bg-clip-text text-2xl font-bold text-transparent">
                  {article.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bouton Suivant */}
        <button
          className="absolute right-0 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-white/10 p-3 shadow-lg backdrop-blur-xl"
          onClick={() => handleScroll("right")}
        >
          <AiOutlineRight className="text-xl text-customTextPrimary" />
        </button>
      </div>

      <div className="mt-6 flex w-full items-center justify-center">
        <motion.button
          onClick={() => navigate("/all-posts")}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          whileHover={{ scale: 0.9 }}
          className="flex cursor-pointer rounded-full bg-customHighLightPrimary px-6 py-4 text-lg font-bold text-black outline-none xl:px-10"
        >
          See all posts
        </motion.button>
      </div>
    </section>
  );
};

export default Blog;
