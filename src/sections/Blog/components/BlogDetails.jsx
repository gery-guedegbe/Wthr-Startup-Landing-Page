import { useParams } from "react-router-dom";
import { blogData } from "../index";
import CustomCursor from "../../../components/CustomCursor";
import DownloadCard from "./DownloadCard";
import Blog from "../Blog";
import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import { useEffect } from "react";
import { motion } from "framer-motion";

const BlogDetail = () => {
  const { id } = useParams();

  // Scroll au sommet de la page à chaque ouverture
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Obtenir l'ID de l'article via useParams
  const article = blogData.find((item) => item.id === parseInt(id));

  if (!article) {
    return <div>Article non trouvé</div>;
  }

  // Variants pour l'animation
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="flex h-full min-h-screen w-full flex-col items-start px-6 text-white lg:px-12 larg:mx-auto larg:px-56">
      <CustomCursor />
      <NavBar />

      {/* Image en grandeur nature avec le gradient */}
      <motion.div
        className="relative h-[200px] w-full md:h-[300px]"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <img
          src={article.image}
          alt={article.title}
          className="h-full w-full rounded-b-3xl object-cover"
        />

        {/* Gradient */}
        <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-b from-black/50 to-transparent"></div>
      </motion.div>

      {/* Contenu de l'article */}
      <div className="mb-10 mt-12 flex w-full flex-col items-start justify-between gap-8 border-b border-b-customTextSecondary py-10 lg:flex-row">
        <motion.div
          className="w-full space-y-6 lg:w-2/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <div>
            <p className="text-lg font-bold text-customTextPrimary/90 lg:text-xl">
              {article.date}
            </p>

            <h1 className="to-customHighLightSecondary max-w-fulll mt-6 w-full bg-gradient-to-t from-customHighLightPrimary bg-clip-text text-4xl font-extrabold text-transparent lg:max-w-3xl lg:text-6xl">
              <strong>{article.title}</strong>
            </h1>
          </div>

          {article.sections.map((section, idx) => (
            <motion.div
              key={idx}
              className="space-y-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
            >
              <h2 className="text-2xl font-bold text-customTextPrimary lg:text-4xl">
                {section.subtitle}
              </h2>

              {section.paragraphs.map((para, pidx) => (
                <p
                  key={pidx}
                  className="text-lg font-medium text-customTextPrimary lg:text-xl"
                >
                  {para}
                </p>
              ))}
            </motion.div>
          ))}
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

      {/* Blog Section */}
      <motion.div
        className="mb-24 mt-6 w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <Blog />
      </motion.div>

      <Footer />
    </div>
  );
};

export default BlogDetail;
