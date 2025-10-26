"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/img/Mietservice-1.jpg",
  "/img/Mietservice-6.jpg",
  "/img/Mietservice-8.jpg",
  "/img/Mietservice-4.jpg",
  "/img/Mietservice-3.jpg"
];

export default function SliderFront() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[40svh] md:h-[55svh] overflow-hidden rounded-2xl shadow-lg">
      <AnimatePresence>
        <motion.img
          key={index}
          src={images[index]}
          alt="Baumaschinen-Slider"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
        />
      </AnimatePresence>

      {/* Optional: Dunkler Verlauf für Text */}
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

{/* Zentrierter Text-Overlay */}
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

{/* Text-Overlay im unteren Drittel */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
    <div className="absolute bottom-[15%] w-full text-center text-white px-4">
  <h2 className="text-2xl md:text-4xl font-bold drop-shadow-lg tracking-wide">MIETSERVICE DIGITALSANIERUNG</h2>
   <p className="text-sm md:text-lg mt-2 drop-shadow-md">Baumaschinen für jedes Projekt</p>
  </div>

    </div>
  );
}
