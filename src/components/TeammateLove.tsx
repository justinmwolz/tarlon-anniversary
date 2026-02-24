"use client";

import { motion } from "framer-motion";

const quotes = [
  {
    text: "Tarloncita is the GOAT and she truly doesn't understand how much we appreciate everything she does for the love of Rho and the love of the game. Keep slaying frog sista",
    name: "Cristian Raygoza",
    rotation: -2,
  },
  {
    text: "You're a machine. SF wouldnt be where it is without Tarlon!",
    name: "Jason Grohowski",
    rotation: 1.5,
  },
  {
    text: "Congrats on 1 year!!! Everything you've done is so impressive, jealous of everyone in SF who gets to go to your awesome events :) keep killing it!",
    name: "Remi Chester",
    rotation: -1,
  },
  {
    text: "Tarlon! Happy one year!! I remember when you joined, we needed you so badly, and I can't believe you have done SO much within only a year. Thanks for being someone I can always go to for help+questions and also being just awesome to hangout with. Bay area 4 evrrrr <3",
    name: "Alina Osborn",
    rotation: 2.5,
  },
  {
    text: "Tarlon has been such a huge inspiration for me. Her perspectives, passion, and care not only shape the SF team but the overall community as well. Blessed to have her on the team!",
    name: "Esther Nguyen",
    rotation: -1.5,
  },
  {
    text: "You're truly the best partner in crime!! The kind who makes every plan better, every risk feel worth it, and every memory unforgettable!! We could not have built SF with out you!!!",
    name: "Drew Parten",
    rotation: 2,
  },
  {
    text: "Tarlon has been crucial to the build of San Francisco and Rho's community approach broadly. She is incredibly talented and well-respected across the entire org. She is excellent at whatever she creatively pursues.",
    name: "Will Schaffer",
    rotation: -2.5,
  },
  {
    text: "Tarlon has been the driving force in building Rho's West Coast community presence, cultivating relationships with diverse founder ecosystems, and creating a culture where founders genuinely feel Rho is embedded in their world. We wouldn't be where we are without her!",
    name: "Tommy McNulty",
    rotation: 1,
  },
  {
    text: "Working with you every week has been such a fun experience, even from across the coast. Had a blast with you in December and can't wait to meet up again! Cheers to another year",
    name: "Ansgar Devadhasan",
    rotation: -2,
  },
  {
    text: "Tarlon you are simply incredible. I cannot envision being where we are today with anyone else. You mean sooooo much to everyone here at Rho, not just on a professional level, but as a friend to all. Happy anniversary!!!",
    name: "David Perkins",
    rotation: 1.5,
  },
  {
    text: "The ultimate puppet master - thank you for all you have done and continue to do to make this office and team thrive. We couldn't do it without you!",
    name: "Charlie Ford",
    rotation: -1,
  },
  {
    text: "Tarlon, you are a leader! Your ideas and risks inspire me to think bigger and I'm so happy to have you on our team. So glad we got to see each other for the holiday party and I hope to come out to SF soon!",
    name: "Pilar Pheffer",
    rotation: 2,
  },
  {
    text: "Cheers, Tarlon! You're an incredibly fun, smart, and dedicated personality that manages 600+ amazing events in one year. You're a godsend to Rho and a blessing to our team!",
    name: "Michael Cochran",
    rotation: -2.5,
  },
  {
    text: "Tarlon, can't believe it's been a year! From working out of the Rho House and trying to figure out SF to absolutely dominating the SF market and showing everyone how community is truly done - its amazing how far we've come together. Grateful for the thoughtfulness and craft you bring to building the best community in all of tech. You care deeply about your colleagues, our customers and our company and it shows every day. Thank you for being such a wonderful Rho'er.",
    name: "Everett Cook",
    rotation: 1.5,
  },
];

export default function TeammateLove() {
  return (
    <section className="bg-abyss-800 py-24 sm:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="font-headline font-medium text-4xl sm:text-5xl text-center mb-4 tracking-[0.02em]"
        >
          A <span className="underline decoration-caribbean-300 underline-offset-4">few</span> reasons why Rho isn&apos;t Rho without{" "}
          <span className="text-caribbean-200">Tarlon</span>
        </motion.h2>
        <div className="mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {quotes.map((quote, i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                x: i % 2 === 0 ? -30 : 30,
              }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
            >
              <div
                className="sticky-note"
                style={{ transform: `rotate(${quote.rotation}deg)` }}
              >
                <p className="font-handwritten text-xl sm:text-2xl text-abyss-700 leading-snug mb-4">
                  &ldquo;{quote.text}&rdquo;
                </p>
                <div className="border-t border-mist-100 pt-3">
                  <p className="text-abyss-800 font-body text-sm font-medium">
                    {quote.name}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
