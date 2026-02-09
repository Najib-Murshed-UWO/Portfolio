import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { abilities } from "../constants";

const FeatureCards = () => {
  const cardsRef = useRef([]);

  useGSAP(() => {
    const cleanupFunctions = [];

    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      // Add floating animation on hover
      const handleMouseEnter = () => {
        gsap.to(card, {
          y: -15,
          duration: 0.4,
          ease: "power2.out",
        });
      };

      const handleMouseLeave = () => {
        gsap.to(card, {
          y: 0,
          duration: 0.4,
          ease: "power2.out",
        });
      };

      card.addEventListener("mouseenter", handleMouseEnter);
      card.addEventListener("mouseleave", handleMouseLeave);

      // Store cleanup function
      cleanupFunctions.push(() => {
        card.removeEventListener("mouseenter", handleMouseEnter);
        card.removeEventListener("mouseleave", handleMouseLeave);
      });
    });

    // Return cleanup function
    return () => {
      cleanupFunctions.forEach((cleanup) => cleanup());
    };
  }, []);

  return (
    <div className="w-full padding-x-lg mt-20 md:mt-32">
      <div className="mx-auto grid-3-cols">
        {abilities.map(({ imgPath, title, desc }, index) => (
          <div
            key={title}
            ref={(el) => el && (cardsRef.current[index] = el)}
            className="card-border rounded-xl p-5 md:p-6 flex flex-col gap-3"
          >
            <div className="size-10 md:size-12 flex items-center justify-center rounded-full">
              <img src={imgPath} alt={title} />
            </div>
            <h3 className="text-white text-xl md:text-2xl font-semibold mt-1">{title}</h3>
            <p className="text-white-50 text-base md:text-lg">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;