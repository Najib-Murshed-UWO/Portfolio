import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  images,
  tags,
  href,
  closeModal,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageList = images && images.length > 0 ? images : [image];
  const hasMultipleImages = imageList.length > 1;
  const currentItem = imageList[currentIndex];
  const isVideo = typeof currentItem === "string" && /\.(mov|mp4|webm|ogg)$/i.test(currentItem);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? imageList.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === imageList.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center w-full h-full overflow-hidden bg-black/90 backdrop-blur-sm">
      <motion.div
        className="relative z-[101] max-w-2xl border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <button
          onClick={closeModal}
          className="absolute p-2 rounded-sm top-5 right-5 bg-midnight hover:bg-gray-500 z-10"
        >
          <img src="/images/x.svg" alt="Close" className="w-6 h-6" />
        </button>
        
        {/* Carousel Container */}
        <div className="relative w-full">
          <div className="relative overflow-hidden rounded-t-2xl">
            <AnimatePresence mode="wait">
              {isVideo ? (
                <motion.div
                  key={currentIndex}
                  className="w-full bg-black"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                >
                  <video
                    src={currentItem}
                    className="w-full h-auto max-h-[70vh] object-contain"
                    controls
                    playsInline
                    muted
                    loop
                  />
                </motion.div>
              ) : (
                <motion.img
                  key={currentIndex}
                  src={currentItem}
                  alt={`${title} - Image ${currentIndex + 1}`}
                  className="w-full h-auto"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </AnimatePresence>

            {/* Navigation Arrows */}
            {hasMultipleImages && (
              <>
                <button
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white p-2 rounded-full transition-all z-10"
                  aria-label="Previous image"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m15 18-6-6 6-6"/>
                  </svg>
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white p-2 rounded-full transition-all z-10"
                  aria-label="Next image"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6"/>
                  </svg>
                </button>
              </>
            )}

            {/* Dots Indicator */}
            {hasMultipleImages && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {imageList.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? "bg-white w-6"
                        : "bg-white/50 hover:bg-white/75"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold text-white">{title}</h5>
          <p className="mb-3 font-normal text-neutral-400">{description}</p>
          {subDescription.map((subDesc, index) => (
            <p key={index} className="mb-3 font-normal text-neutral-400">{subDesc}</p>
          ))}
          <div className="flex items-center justify-between mt-4">
            <div className="flex gap-3">
              {tags
                .filter((tag) => tag.path && String(tag.path).trim() !== "")
                .map((tag) => {
                  const isThreeJs = tag.name === "Three.js" || /threejs\.svg$/i.test(String(tag.path));
                  return (
                    <span
                      key={tag.id}
                      className={`inline-flex rounded-lg ${isThreeJs ? "bg-sky-200 p-1" : ""}`}
                    >
                      <img
                        src={tag.path}
                        alt={tag.name}
                        className="rounded-lg size-10 hover-animation"
                      />
                    </span>
                  );
                })}
            </div>
            <a
              href={href || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-medium cursor-pointer hover-animation"
            >
              View Project{" "}
              <img src="/images/arrow-right.svg" alt="" className="size-4" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
