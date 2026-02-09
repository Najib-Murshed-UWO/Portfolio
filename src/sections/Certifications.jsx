import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { certifications } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

gsap.registerPlugin(ScrollTrigger);

const Certifications = () => {
  useGSAP(() => {
    // Animate certification cards as they come into view
    gsap.utils.toArray(".certification-card").forEach((card) => {
      gsap.from(card, {
        yPercent: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
        },
      });
    });
  }, []);

  return (
    <section
      id="certifications"
      className="flex-center md:mt-40 mt-20 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader
          title="Professional Certifications"
          sub="🎓 My Credentials"
        />
        <div className="mt-16 md:mt-20 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
            {certifications.map((cert, index) => (
              <div key={cert.title} className="certification-card flex">
                <div className="w-full h-full">
                  <GlowCard card={cert} index={index} className="h-full flex flex-col">
                    <div className="flex flex-col items-center gap-4 flex-1">
                      <div className="w-full h-64 flex items-center justify-center bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={cert.imgPath}
                          alt={cert.title}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                      <div className="text-center">
                        <h3 className="font-semibold text-xl md:text-2xl text-white mb-2">
                          {cert.title}
                        </h3>
                        <p className="text-white-50 text-sm md:text-base">
                          {cert.issuer}
                        </p>
                      </div>
                    </div>
                  </GlowCard>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
