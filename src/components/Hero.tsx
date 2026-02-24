"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const scatteredPhotos: {
  src: string;
  rotation: number;
  width: number;
  delay: number;
  style: React.CSSProperties;
}[] = [
  // === TOP ROW ===
  {
    src: "/photos/golden-gate.jpeg",
    rotation: -12,
    width: 180,
    delay: 0.6,
    style: { top: "3%", left: "5%" },
  },
  {
    src: "/photos/tech-week.jpeg",
    rotation: 6,
    width: 150,
    delay: 0.8,
    style: { top: "2%", left: "24%" },
  },
  {
    src: "/photos/summer-of-rho.png",
    rotation: -5,
    width: 145,
    delay: 0.9,
    style: { top: "2%", right: "23%" },
  },
  {
    src: "/photos/sf-skyline-coffee.jpeg",
    rotation: 10,
    width: 175,
    delay: 0.7,
    style: { top: "3%", right: "4%" },
  },
  // === LEFT SIDE ===
  {
    src: "/photos/event-setup.jpeg",
    rotation: 8,
    width: 165,
    delay: 1.0,
    style: { top: "38%", left: "3%" },
  },
  {
    src: "/photos/big-heads.jpeg",
    rotation: -7,
    width: 150,
    delay: 1.1,
    style: { top: "58%", left: "5%" },
  },
  // === RIGHT SIDE ===
  {
    src: "/photos/ballgame.png",
    rotation: -9,
    width: 160,
    delay: 1.0,
    style: { top: "37%", right: "4%" },
  },
  {
    src: "/photos/event-hustle.jpeg",
    rotation: 7,
    width: 155,
    delay: 1.1,
    style: { top: "57%", right: "3%" },
  },
  // === BOTTOM ROW ===
  {
    src: "/photos/friends-night.jpeg",
    rotation: 5,
    width: 160,
    delay: 1.2,
    style: { bottom: "4%", left: "6%" },
  },
  {
    src: "/photos/venue-vibes.png",
    rotation: -8,
    width: 140,
    delay: 1.3,
    style: { bottom: "3%", left: "24%" },
  },
  {
    src: "/photos/downtown-sf.png",
    rotation: 11,
    width: 140,
    delay: 1.3,
    style: { bottom: "3%", right: "23%" },
  },
  {
    src: "/photos/night-out.jpeg",
    rotation: -6,
    width: 165,
    delay: 1.2,
    style: { bottom: "4%", right: "5%" },
  },
];

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image */}
      <Image
        src="/photos/hero-bridge.jpg"
        alt="Tarlon at the Golden Gate Bridge"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />

      {/* Dark overlay for text legibility */}
      <div className="absolute inset-0 bg-abyss-900/60 z-[1]" />

      {/* Scattered polaroid photos */}
      <div className="absolute inset-0 z-[2] hidden lg:block">
        {scatteredPhotos.map((photo, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.7, rotate: 0 }}
            animate={{ opacity: 1, scale: 1, rotate: photo.rotation }}
            transition={{
              duration: 0.8,
              delay: photo.delay,
              type: "spring",
              stiffness: 70,
              damping: 12,
            }}
            className="absolute polaroid !p-[6px] !pb-[22px] shadow-2xl"
            style={{
              ...photo.style,
              width: photo.width,
            }}
          >
            <Image
              src={photo.src}
              alt=""
              width={photo.width}
              height={Math.round(photo.width * 1.1)}
              className="w-full h-auto object-cover"
              sizes={`${photo.width}px`}
            />
          </motion.div>
        ))}
      </div>

      {/* Centered headline */}
      <div className="absolute inset-0 z-[3] flex items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-headline font-medium text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9] tracking-[0.02em] text-center px-6 drop-shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
        >
          Happy 1 year
          <br />
          anniversary,{" "}
          <span className="text-caribbean-200 drop-shadow-[0_2px_20px_rgba(156,247,230,0.3)]">
            Tarlon!
          </span>
        </motion.h1>
      </div>
    </section>
  );
}
