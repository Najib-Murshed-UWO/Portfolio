import React, { useState } from "react";
import ProjectDetails from "./ProjectDetails";
import { useTheme } from "../context/ThemeContext";

const isVideoUrl = (url) => /\.(mov|mp4|webm|ogg)$/i.test(String(url));

const Project = ({
  title,
  description,
  subDescription,
  href,
  image,
  preview,
  previewLight,
  previewDark,
  images,
  tags,
  setPreview,
}) => {
  const [isHidden, setIsHidden] = useState(false);
  const { theme } = useTheme();
  const themePreview = theme === "dark" && previewDark ? previewDark : (previewLight || preview);
  const previewImage =
    themePreview ||
    preview ||
    (images?.length > 0
      ? images.find((src) => !isVideoUrl(src)) || images[0]
      : null) ||
    image;
  
  return (
    <>
      <div
        className="flex-wrap items-center justify-between py-10 space-y-14 sm:flex sm:space-y-0"
        onMouseEnter={() => setPreview(previewImage)}
        onMouseLeave={() => setPreview(null)}
      >
        <div>
          <p className="text-2xl">{title}</p>
          <div className="flex gap-5 mt-2 text-sand">
            {tags.map((tag) => (
              <span key={tag.id}>{tag.name}</span>
            ))}
          </div>
        </div>
        <button
          onClick={() => setIsHidden(true)}
          onMouseEnter={() => setPreview(null)}
          className="flex items-center gap-1 cursor-pointer hover-animation"
        >
          Read More
          <img src="/images/arrow-right.svg" className="w-5" />
        </button>
      </div>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      {isHidden && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          images={images}
          tags={tags}
          href={href}
          closeModal={() => setIsHidden(false)}
        />
      )}
    </>
  );
};

export default Project;
