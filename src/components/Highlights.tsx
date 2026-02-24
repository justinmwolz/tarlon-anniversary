"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function CountUp({ end, suffix = "" }: { end: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1500;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, end]);

  return (
    <span ref={ref} className="stat-number text-5xl sm:text-6xl text-abyss-800">
      {count}
      {suffix}
    </span>
  );
}

const stats = [
  { number: 75, suffix: "+", label: "Rho House events", rotation: -2 },
  { number: 10, suffix: "K+", label: "People connected in SF tech", rotation: 1.5 },
  { number: 100, suffix: "+", label: "(and counting) emails sent per day", rotation: -1 },
  { number: 30, suffix: "+", label: "Venues in SF that know her by name", rotation: 2.5 },
];

export default function Highlights() {
  return (
    <section className="bg-caribbean-50 py-24 sm:py-32 px-6 relative overflow-hidden">
      {/* Decorative tape */}
      <div className="tape tape-yellow absolute top-12 left-8 w-28 rotate-[-25deg] hidden sm:block" />
      <div className="tape absolute bottom-16 right-12 w-24 rotate-[20deg] hidden sm:block" />

      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="font-headline font-medium text-4xl sm:text-5xl text-abyss-800 text-center mb-4 tracking-[0.02em]"
        >
          1 year of Tarlon by the numbers
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-abyss-500 text-center mb-16 font-body text-lg"
        >
          Honestly insane.
        </motion.p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative"
            >
              <div
                className="bg-moon-0 p-6 sm:p-8 text-center shadow-md relative"
                style={{ transform: `rotate(${stat.rotation}deg)` }}
              >
                {/* Small tape accent */}
                <div
                  className="tape w-14 h-5 absolute -top-2 left-1/2 -translate-x-1/2"
                  style={{
                    transform: `translateX(-50%) rotate(${-stat.rotation + 3}deg)`,
                    background:
                      i % 2 === 0
                        ? "rgba(156, 247, 230, 0.35)"
                        : "rgba(175, 223, 212, 0.4)",
                  }}
                />
                <CountUp end={stat.number} suffix={stat.suffix} />
                <p className="text-abyss-500 text-sm sm:text-base mt-2 font-body">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
