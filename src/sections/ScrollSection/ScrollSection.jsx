import Marquee from "react-fast-marquee";
import phone_1 from "../../assets/images/phone_1.png";
import phone_2 from "../../assets/images/phone_2.png";
import phone_3 from "../../assets/images/phone_3.png";
import phone_4 from "../../assets/images/phone_4.png";
import phone_5 from "../../assets/images/phone_5.png";

const ScrollSection = () => {
  const phones = [phone_1, phone_2, phone_3, phone_4, phone_5];

  // Configuration des colonnes : vitesse et direction
  const columnConfigs = [
    { speed: 50, direction: "down" },
    { speed: 40, direction: "down" },
    { speed: 60, direction: "down" },
    { speed: 30, direction: "down" },
    { speed: 70, direction: "down" },
  ];

  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden">
      {/* Grille responsive */}
      <div className="grid h-full w-full grid-cols-3 gap-4 px-4 md:grid-cols-3 xl:grid-cols-5">
        {columnConfigs.map((config, columnIndex) => (
          <div
            key={columnIndex}
            className={`${
              columnIndex > 2 ? "hidden xl:flex" : "flex"
            } h-full w-full flex-col items-center justify-center overflow-hidden`}
          >
            <Marquee
              gradient={false} // Supprime le dégradé
              speed={config.speed} // Vitesse de défilement
              direction={config.direction} // Direction : haut ou bas
              pauseOnHover={false} // Maintient le défilement
              className="flex flex-col gap-12" // Espacement entre les images
            >
              {/* Images dans chaque colonne */}
              {phones.map((img, imgIndex) => (
                <div
                  key={`${columnIndex}-${imgIndex}`}
                  className="flex h-full w-full items-center justify-center"
                >
                  <img
                    src={img}
                    alt={`Phone ${imgIndex + 1}`}
                    className="h-[300px] w-full object-contain xl:h-[380px]" // Dimensions adaptatives
                  />
                </div>
              ))}
            </Marquee>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ScrollSection;
