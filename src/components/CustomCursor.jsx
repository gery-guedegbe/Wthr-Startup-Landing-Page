import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isClicked, setIsClicked] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // Gérer la visibilité du custom cursor

  useEffect(() => {
    // Vérifier si l'appareil est tactile
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;

    if (isTouchDevice) {
      setIsVisible(false); // Désactiver le custom cursor
      return;
    }

    // Détecter le mouvement de la souris
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // Détecter le clic
    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    // Ajouter les écouteurs
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      // Nettoyer les écouteurs
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  useEffect(() => {
    const handleMouseEnter = (e) => {
      if (e.target.closest("button, a, .clickable")) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = (e) => {
      if (e.target.closest("button, a, .clickable")) {
        setIsHovering(false);
      }
    };

    document.addEventListener("mouseenter", handleMouseEnter, true);
    document.addEventListener("mouseleave", handleMouseLeave, true);

    return () => {
      document.removeEventListener("mouseenter", handleMouseEnter, true);
      document.removeEventListener("mouseleave", handleMouseLeave, true);
    };
  }, []);

  // Si le custom cursor n'est pas visible, ne rien afficher
  if (!isVisible) return null;

  return (
    <>
      {/* Cercle principal (curseur) */}
      <motion.div
        className="pointer-events-none fixed z-[1000] h-5 w-5 rounded-full border-2 bg-customTextPrimary"
        style={{
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%)",
        }}
        animate={{
          scale: isClicked ? 0.8 : 1,
          transition: { type: "spring", stiffness: 300, damping: 20 },
        }}
      />

      {/* Cercle extérieur */}
      {isHovering && (
        <motion.div
          className="pointer-events-none fixed z-[999] h-10 w-10 rounded-full border-2 border-customTextPrimary"
          style={{
            left: position.x - 10,
            top: position.y - 10,
            transform: "translate(-50%, -50%)",
          }}
          animate={{
            scale: isClicked ? 1.2 : [1, 0.95, 1], // Animation de respiration
            opacity: 1,
          }}
          initial={{
            opacity: 0,
          }}
          transition={{
            duration: 1.5, // Durée pour chaque cycle de respiration
            repeat: Infinity, // Répétition infinie
            ease: "easeInOut", // Transition douce
          }}
        />
      )}
    </>
  );
};

export default CustomCursor;
