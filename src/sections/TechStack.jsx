import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import TitleHeader from "../components/TitleHeader";
import { techStackSections } from "../constants";

const TechStack = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".tech-card",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#skills",
          start: "top center",
        },
      }
    );
  });

  return (
    <div id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="How I Can Contribute & My Key Skills"
          sub="🤝 What I Bring to the Table"
        />
        <div className="flex flex-col gap-12 md:gap-16 mt-12 md:mt-16">
          {techStackSections.map((section) => (
            <div key={section.heading}>
              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6 md:mb-8 text-center">
                {section.heading}
              </h3>
              <div className="tech-grid">
                {section.items.length > 0 ? (
                  section.items.map((item) => (
                    <div
                      key={item.name}
                      className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
                    >
                      <div className="tech-card-animated-bg" />
                      <div className="tech-card-content">
                        <div className="tech-icon-wrapper">
                          <img
                            src={item.imgPath}
                            alt={item.name}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="padding-x w-full">
                          <p>{item.name}</p>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-white-50 col-span-full">Coming soon</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
