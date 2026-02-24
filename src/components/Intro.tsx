"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Intro() {
  return (
    <section className="relative bg-moon-100 py-24 sm:py-32 px-6 overflow-hidden">
      {/* Decorative tape accents */}
      <div className="tape tape-yellow absolute top-8 right-12 rotate-12 w-24 hidden sm:block" />
      <div className="tape absolute bottom-12 left-8 rotate-[-15deg] w-20 hidden sm:block" />

      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Letter card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative flex-1"
          >
            <div
              className="tape tape-top-center w-24"
              style={{ background: "rgba(106, 243, 217, 0.3)" }}
            />
            <div className="bg-moon-0 px-8 sm:px-12 py-10 sm:py-14 shadow-lg rounded-sm">
              <div className="space-y-6 text-abyss-700 text-lg sm:text-xl leading-relaxed font-body tracking-tight">
                <p>
                  On February 24, 2025, two things happened.
                </p>
                <p>
                  1. We got the Rho House a much-needed cleaning.
                </p>
                <p>
                  2. We welcomed a powerhouse to the Rho team.
                </p>
                <p>
                  One year later, it&apos;s clear: Tarlon has helped us do what we
                  couldn&apos;t have done without her. She made Rho SF a thing. What
                  started from nothing has become a thriving network of founders,
                  operators, and builders who come together because of the events,
                  energy, and genuine connections she creates.
                </p>
                <p>
                  Every day, she brings a mix of energy, poise, and a real love of
                  driving impact for our team and everyone at Rho. She wears the Rho
                  SF brand as a badge of honor, and we couldn&apos;t be more grateful
                  to have her as a member of the amazing team we have in the Bay Area.
                </p>
                <p className="font-headline font-semibold text-abyss-800 text-xl sm:text-2xl">
                  Happy 1 year anniversary, Tarlon.
                </p>
                <p className="font-handwritten text-2xl sm:text-3xl text-abyss-600 pt-2">
                  — Justin Wolz
                </p>
              </div>
            </div>
          </motion.div>

          {/* Featured polaroid — Tech Week photo */}
          <motion.div
            initial={{ opacity: 0, rotate: 0, x: 30 }}
            whileInView={{ opacity: 1, rotate: 4, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
            className="polaroid flex-shrink-0 relative hidden md:block"
            style={{ transform: "rotate(4deg)" }}
          >
            <div className="tape tape-top-center w-20" style={{ background: "rgba(175, 223, 212, 0.45)" }} />
            <div className="w-64 lg:w-72">
              <Image
                src="/photos/tech-week.jpeg"
                alt="Tarlon at Tech Week breakfast"
                width={320}
                height={420}
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
