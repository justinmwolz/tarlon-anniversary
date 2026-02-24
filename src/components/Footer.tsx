"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Footer() {
  return (
    <section className="relative py-24 sm:py-32 px-6 overflow-hidden">
      {/* Background image */}
      <Image
        src="/photos/footer-backdrop.jpg"
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
      />

      {/* Dark overlay for legibility */}
      <div className="absolute inset-0 bg-abyss-900/65" />

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="font-headline font-medium text-4xl sm:text-5xl md:text-6xl tracking-[0.02em] mb-6"
        >
          Here&apos;s to{" "}
          <span className="text-caribbean-200">year two</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-moon-300 text-lg font-body mb-16"
        >
          Tarlon, thank you for everything. We can&apos;t wait for Year 2!
        </motion.p>

        {/* Rho logo */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex justify-center"
        >
          <Image
            src="/rho-logo-white.png"
            alt="Rho"
            width={80}
            height={32}
            className="h-8 w-auto opacity-60"
          />
        </motion.div>
      </div>
    </section>
  );
}
