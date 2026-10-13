"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Car from "./Car";

const STATS = [
  { value: 58, text: "Increase in pick up point use" },
  { value: 23, text: "Decrease in customer phone calls" },
  { value: 27, text: "Increase in repeat orders" },
  { value: 40, text: "Decrease in missed deliveries" },
];

export default function Hero() {
  const root = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const section = root.current;
      const car = section.querySelector("[data-car]");
      const reveal = section.querySelector("[data-reveal]");
      const cards = gsap.utils.toArray(
        section.querySelectorAll("[data-stat]")
      );

      const getTravelDistance = () =>
        Math.max(0, section.clientWidth - car.offsetWidth);

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=600",
          scrub: 0.5,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Move the car from the left to the right.
      timeline.to(
        car,
        {
          x: getTravelDistance,
          duration: 1,
          ease: "none",
        },
        0
      );

      // Reveal the green road and black headline as the car moves.
      timeline.to(
        reveal,
        {
          clipPath: "inset(0 0% 0 0)",
          duration: 1,
          ease: "none",
        },
        0
      );

      // Show each statistic at a different scroll point.
      cards.forEach((card, index) => {
        timeline.to(
          card,
          {
            opacity: 1,
            y: 0,
            duration: 0.12,
            ease: "none",
          },
          0.24 + index * 0.18
        );
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="relative h-screen w-full overflow-hidden bg-[#d1d1d1] text-[#111111]"
    >
      <p className="absolute left-6 top-6 z-40 text-xs font-semibold tracking-[0.25em]">
        SCROLL TO EXPLORE
      </p>

      {/* Road without yellow lines */}
      <div className="absolute left-0 top-[43%] h-[260px] w-full -translate-y-1/2 bg-[#202020]" />

      {/* Headline is hidden on the dark road initially */}
      <div className="absolute left-0 top-[43%] flex h-[260px] w-full -translate-y-1/2 items-center overflow-hidden">
        <h1 className="whitespace-nowrap pl-5 text-[clamp(2.4rem,10vw,9rem)] font-black tracking-tight text-[#202020] md:pl-10">
          WELCOME ITZFIZZ
        </h1>
      </div>

      {/* Green area and black text are progressively uncovered */}
      <div
        data-reveal
        className="absolute left-0 top-[43%] z-10 flex h-[260px] w-full -translate-y-1/2 items-center overflow-hidden bg-[#3cda7b]"
        style={{ clipPath: "inset(0 100% 0 0)" }}
      >
        <h1 className="whitespace-nowrap pl-5 text-[clamp(2.4rem,10vw,9rem)] font-black tracking-tight text-black md:pl-10">
          WELCOME ITZFIZZ
        </h1>
      </div>

      {/* Top-view car, above the reveal layer */}
      <div className="absolute left-0 top-[43%] z-20 -translate-y-1/2">
        <div
          data-car
          className="relative h-[210px] w-[min(48vw,360px)] will-change-transform md:h-[250px] md:w-[420px]"
        >
          <Car className="block h-full w-full" />
        </div>
      </div>

      {/* Statistics */}
      <div className="absolute inset-x-0 bottom-5 z-30 grid grid-cols-2 gap-3 px-4 md:bottom-8 md:grid-cols-4 md:gap-5 md:px-8">
        {STATS.map((stat) => (
          <div
            key={stat.value}
            data-stat
            className="min-h-[110px] rounded-xl bg-white p-3 shadow-lg md:min-h-[135px] md:p-5"
            style={{ opacity: 0, transform: "translateY(25px)" }}
          >
            <p className="text-3xl font-extrabold md:text-5xl">
              {stat.value}%
            </p>
            <p className="mt-2 text-xs leading-relaxed md:text-sm">
              {stat.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}