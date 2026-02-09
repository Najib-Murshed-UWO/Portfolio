// import { OrbitControls } from "@react-three/drei";
// import { Canvas } from "@react-three/fiber";
// import { useMediaQuery } from "react-responsive";

// import { Room } from "./Room";
// import HeroLights from "./HeroLights";
// import Particles from "./Particles";
// import { Suspense } from "react";

// const HeroExperience = () => {
//   const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
//   const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

//   return (
//     <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
//       {/* deep blue ambient */}
//       <ambientLight intensity={0.2} color="#1a1a40" />
//       {/* Configure OrbitControls to disable panning and control zoom based on device type */}
//       <OrbitControls
//         enablePan={false} // Prevents panning of the scene
//         enableZoom={!isTablet} // Disables zoom on tablets
//         maxDistance={20} // Maximum distance for zooming out
//         minDistance={5} // Minimum distance for zooming in
//         minPolarAngle={Math.PI / 5} // Minimum angle for vertical rotation
//         maxPolarAngle={Math.PI / 2} // Maximum angle for vertical rotation
//       />

//       <Suspense fallback={null}>
//         <HeroLights />
//         <Particles count={100} />
//         <group
//           scale={isMobile ? 0.7 : 1}
//           position={[0, -3.5, 0]}
//           rotation={[0, -Math.PI / 4, 0]}
//         >
//           <Room />
//         </group>
//       </Suspense>
//     </Canvas>
//   );
// };

// export default HeroExperience;


import { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

export function HeroExperience() {
  const lastIndex = images.length - 1;
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1280);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-transparent p-4 pt-20 md:pt-4">
      <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] xl:w-[500px] xl:h-[500px]">
        {/* Render all squares except the last one */}
        {Array.from({ length: images.length }).map((_, index) =>
          index === lastIndex ? null : <Square index={index} key={index} windowWidth={windowWidth} />
        )}

        {/* Render the last square with the duplicate first (index 0) square masked inside it */}
        <Square index={lastIndex} windowWidth={windowWidth}>
          <SquareWithOffset index={0} parentIndex={lastIndex} windowWidth={windowWidth} />
        </Square>
      </div>
    </div>
  );
}

function SquareWithOffset({ index, parentIndex, windowWidth }) {
  const image = images[index];

  // For the specific case of the first square (index 0) inside the last square (index 7),
  // we want to position it at the same place as the original first square would be
  // This creates the illusion of continuity in the circle
  const firstSquareOffset = useMotionValue(0);

  useEffect(() => {
    // Create animation that goes from current value to 1
    const controls = animate(firstSquareOffset, 1, {
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 1,
      ease: [0.42, 0, 0.58, 1],
      duration: 7,
    });
    return () => controls.stop();
  }, [firstSquareOffset]);

  // Responsive radius based on screen size
  const radius = windowWidth >= 1280 ? 220 : windowWidth >= 768 ? 140 : 100;

  // Transform the offset to x and y coordinates relative to the parent square
  const x = useTransform(firstSquareOffset, (offset) => {
    // Calculate the angle for both the first square and the last square
    const firstAngle = ((getPathOffset(index) + offset) % 1) * Math.PI * 2;
    const lastAngle = ((getPathOffset(parentIndex) + offset) % 1) * Math.PI * 2;

    // Calculate the x position difference
    return Math.cos(firstAngle) * radius - Math.cos(lastAngle) * radius;
  });

  const y = useTransform(firstSquareOffset, (offset) => {
    // Calculate the angle for both the first square and the last square
    const firstAngle = ((getPathOffset(index) + offset) % 1) * Math.PI * 2;
    const lastAngle = ((getPathOffset(parentIndex) + offset) % 1) * Math.PI * 2;

    // Calculate the y position difference
    return Math.sin(firstAngle) * radius - Math.sin(lastAngle) * radius;
  });

  return (
    <motion.div
      className="absolute inset-0 rounded-lg overflow-clip"
      style={{ x, y }}
    >
      <img
        src={image}
        alt={`Square ${index}`}
        className="w-full h-full object-cover"
        draggable={false}
      />
    </motion.div>
  );
}

function Square({ index, children, className, windowWidth }) {
  const image = images[index];
  const pathOffset = useMotionValue(getPathOffset(index));

  // Responsive size based on screen size
  const { size, half } = windowWidth >= 1280 
    ? { size: 200, half: 100 }  // xl screens
    : windowWidth >= 768 
    ? { size: 120, half: 60 }  // md screens
    : { size: 90, half: 45 };  // small screens

  // Responsive radius based on screen size
  const radius = windowWidth >= 1280 ? 220 : windowWidth >= 768 ? 140 : 100;

  // Animate the path offset
  useEffect(() => {
    // Create animation that goes from current value to current value + 1
    const controls = animate(pathOffset, pathOffset.get() + 1, {
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 1,
      ease: [0.42, 0, 0.58, 1],
      duration: 7,
    });
    return () => controls.stop();
  }, [pathOffset]);

  // Transform the offset to x and y coordinates
  const x = useTransform(pathOffset, (offset) => {
    const angle = (offset % 1) * Math.PI * 2;
    return Math.cos(angle) * radius;
  });

  const y = useTransform(pathOffset, (offset) => {
    const angle = (offset % 1) * Math.PI * 2;
    return Math.sin(angle) * radius;
  });

  return (
    <motion.div
      key={index}
      className={`absolute rounded-lg overflow-clip ${className}`}
      style={{
        width: size,
        height: size,
        left: `calc(50% - ${half}px)`,
        top: `calc(50% - ${half}px)`,
        x,
        y,
      }}
      initial={{
        opacity: 0,
        scale: 0.9,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        opacity: {
          duration: 1,
          delay: index * 0.12 + 0.35,
          ease: "easeOut",
        },
        scale: {
          duration: 1,
          delay: index * 0.12 + 0.35,
          ease: "easeOut",
        },
      }}
    >
      <img
        src={image}
        alt={`Square ${index}`}
        className="w-full h-full object-cover"
        draggable={false}
      />
      <motion.div
        className="absolute inset-0 rounded-lg overflow-clip"
        initial={{
          scale: 1.1,
        }}
        animate={{
          scale: 1,
        }}
        transition={{
          duration: 1,
          delay: index * 0.12 + 0.35,
          ease: "easeOut",
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

// Helper function to get the path offset for a specific index
function getPathOffset(index) {
  return index / 8;
}

// Images for the squares
const images = [
  "/images/Grad.jpg",
  "/images/Drumheller.jpg",
  "/images/Ottawa.jpeg",
  "/images/Maldives.jpg",
  "/images/Grad-Wife.jpg",
  "/images/Waterton.jpg",
  "/images/Western-Fall.jpg",
  "/images/Banff.jpg",
];
