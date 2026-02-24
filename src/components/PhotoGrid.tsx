"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const photos = [
  { id: 1, src: "/photos/golden-gate.jpeg", rotation: -3 },
  { id: 2, src: "/photos/sf-venue.png", rotation: 2 },
  { id: 3, src: "/photos/event-setup.jpeg", rotation: -1.5 },
  { id: 4, src: "/photos/sf-skyline-coffee.jpeg", rotation: 4 },
  { id: 5, src: "/photos/boat-day.jpeg", rotation: -2 },
  { id: 6, src: "/photos/summer-of-rho.png", rotation: -2.5 },
  { id: 7, src: "/photos/big-heads.jpeg", rotation: 1.5 },
  { id: 8, src: "/photos/ballgame.png", rotation: -4 },
  { id: 9, src: "/photos/lounge-vibes.jpeg", rotation: 3 },
  { id: 10, src: "/photos/event-hustle.jpeg", rotation: 3 },
  { id: 11, src: "/photos/night-out.jpeg", rotation: -2 },
  { id: 12, src: "/photos/tennis-day.png", rotation: 1 },
  { id: 13, src: "/photos/bar-night.jpeg", rotation: -1.5 },
  { id: 14, src: "/photos/team-dinner.jpeg", rotation: -3.5 },
  { id: 15, src: "/photos/downtown-sf.png", rotation: 2.5 },
  { id: 16, src: "/photos/venue-vibes.png", rotation: -1 },
  { id: 17, src: "/photos/friends-night.jpeg", rotation: 3.5 },
  { id: 18, src: "/photos/airport-selfie.jpeg", rotation: -2.5 },
  { id: 19, src: "/photos/winnie-intern.png", rotation: -2 },
  { id: 20, src: "/photos/car-selfie.jpg", rotation: 4 },
  { id: 21, src: "/photos/city-walk.png", rotation: 1.5 },
];

const tapeStyles = [
  "tape-top-left",
  "tape-top-right",
  "tape-top-center",
  "tape-top-left tape-pink",
  "tape-top-right tape-yellow",
  "tape-top-center",
  "tape-top-left tape-yellow",
  "tape-top-right tape-pink",
];

export default function PhotoGrid() {
  return (
    <section className="bg-abyss-800 py-24 sm:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="font-headline font-medium text-4xl sm:text-5xl text-center mb-4 tracking-[0.02em]"
        >
          Remembering 1 year of{" "}
          <span className="text-caribbean-300">unforgettable memories!</span>
        </motion.h2>
        <div className="mb-16" />

        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 sm:gap-8 space-y-6 sm:space-y-8">
          {photos.map((photo, i) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 40, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: photo.rotation }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.7,
                delay: (i % 4) * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                rotate: 0,
                scale: 1.05,
                zIndex: 20,
                transition: { duration: 0.3 },
              }}
              className="polaroid !pb-3 cursor-pointer relative break-inside-avoid"
              style={{ transform: `rotate(${photo.rotation}deg)` }}
            >
              {/* Tape */}
              <div className={`tape ${tapeStyles[i % tapeStyles.length]}`} />

              {/* Photo */}
              <div className="relative overflow-hidden">
                <Image
                  src={photo.src}
                  alt=""
                  width={400}
                  height={400}
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
