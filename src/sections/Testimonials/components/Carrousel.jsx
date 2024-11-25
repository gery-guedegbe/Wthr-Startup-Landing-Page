import Marquee from "react-fast-marquee";
import user_1 from "../../../assets/images/avatar-8.jpg";
import user_2 from "../../../assets/images/avatar-6.jpg";

const testimonialInfo = [
  {
    user_name: "James Bearman",
    comment:
      "“This app has revolutionized how I perceive weather forecasts. It's just enjoyable to use and being part of the community is better than I expected.”",
    img: user_1,
  },
  {
    user_name: "Natasha Jackson",
    comment:
      "“I had no idea how much fun checking weather can be. Also, it has lots of valuable insights and guidance in it.”",
    img: user_2,
  },
];

const Carrousel = () => {
  return (
    <div className="relative mt-8 flex w-full overflow-hidden">
      {/* Utilisation de react-fast-marquee */}
      <Marquee
        gradientColor="black"
        gradientWidth={100}
        gradient={true} // Supprime le dégradé sur les bords
        speed={60} // Vitesse de défilement
        pauseOnHover={true} // Pause lorsque l'utilisateur survole
      >
        {[...testimonialInfo, ...testimonialInfo].map((item, index) => (
          <div
            key={index}
            className="mx-4 flex h-48 w-full max-w-lg flex-col items-center justify-around rounded-xl border border-customBorderPrimary bg-customCardBackground p-6 text-center shadow-md md:h-64" // mx-4 ajoute un espace entre les cartes
          >
            {/* Commentaire */}
            <p className="text-sm font-medium leading-relaxed text-customTextPrimary md:text-lg">
              {item.comment}
            </p>

            {/* Informations utilisateur */}
            <div className="flex w-full items-center justify-start gap-3">
              <img
                src={item.img}
                alt="User Picture"
                className="h-8 w-8 rounded-full object-cover md:h-11 md:w-11"
              />

              <span className="text-sm font-bold text-customHighLightPrimary">
                {item.user_name}
              </span>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Carrousel;
