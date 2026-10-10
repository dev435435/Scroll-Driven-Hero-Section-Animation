"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Car from "./Car";

const STATS = [
  {
    id: "stat1",
    value: 58,
    text: "Increase in pick up point use",
  },
  {
    id: "stat2",
    value: 23,
    text: "Decrease in customer phone calls",
  },
  {
    id: "stat3",
    value: 27,
    text: "Increase in pick up point use",
  },
  {
    id: "stat4",
    value: 40,
    text: "Decrease in missed deliveries",
  },
];

export default function Hero() {
  const root = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const section = root.current;
      const screen = section.querySelector(".hero-screen");
      const car = section.querySelector("[data-car]");
      const trail = section.querySelector("[data-trail]");
      const letters = gsap.utils.toArray(
        section.querySelectorAll("[data-letter]")
      );

      /* =========================================================
         INITIAL POSITIONS
      ========================================================== */

      gsap.set(letters, {
        opacity: 0,
        y: 30,
      });

      gsap.set(car, {
        x: 0,
      });

      gsap.set(trail, {
        width: 0,
      });

      /* =========================================================
         HEADLINE LOAD ANIMATION
      ========================================================== */

      gsap.to(letters, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.05,
        ease: "power3.out",
      });

      /* =========================================================
         CAR SCROLL ANIMATION
         
         THIS IS THE IMPORTANT PART.

         The car starts at the LEFT.
         As the user scrolls down,
         the car moves to the RIGHT.

         It does NOT autoplay.
      ========================================================== */

      const carAnimation = gsap.to(car, {
        x: () => {
          const screenWidth = screen.offsetWidth;
          const carWidth = car.offsetWidth;

          return screenWidth - carWidth - 30;
        },

        ease: "none",

        scrollTrigger: {
          trigger: section,

          start: "top top",

          /*
           * The animation continues for 1200px
           * of actual mouse-wheel scrolling.
           */
          end: "+=1200",

          scrub: 1,

          pin: screen,

          anticipatePin: 1,

          invalidateOnRefresh: true,
        },
      });

      /* =========================================================
         ROAD TRAIL
      ========================================================== */

      gsap.to(trail, {
        width: () => {
          const screenWidth = screen.offsetWidth;
          const carWidth = car.offsetWidth;

          return screenWidth - carWidth / 2;
        },

        ease: "none",

        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=1200",
          scrub: 1,
        },
      });

      /* =========================================================
         STAT 1
         
         Appears early.
      ========================================================== */

      gsap.fromTo(
        '[data-stat="stat1"]',
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",

          scrollTrigger: {
            trigger: section,
            start: "top+=150 top",
            end: "top+=350 top",
            scrub: 1,
          },
        }
      );

      /* =========================================================
         STAT 2
         
         Appears after the car has moved further.
      ========================================================== */

      gsap.fromTo(
        '[data-stat="stat2"]',
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",

          scrollTrigger: {
            trigger: section,
            start: "top+=400 top",
            end: "top+=600 top",
            scrub: 1,
          },
        }
      );

      /* =========================================================
         STAT 3
         
         Appears around the middle.
      ========================================================== */

      gsap.fromTo(
        '[data-stat="stat3"]',
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",

          scrollTrigger: {
            trigger: section,
            start: "top+=650 top",
            end: "top+=850 top",
            scrub: 1,
          },
        }
      );

      /* =========================================================
         STAT 4
         
         Appears after 50% of the car journey.
      ========================================================== */

      gsap.fromTo(
        '[data-stat="stat4"]',
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",

          scrollTrigger: {
            trigger: section,
            start: "top+=900 top",
            end: "top+=1100 top",
            scrub: 1,
          },
        }
      );

      /* =========================================================
         NUMBER COUNTERS
      ========================================================== */

      const counterTriggers = [
        {
          selector: '[data-stat="stat1"] [data-number]',
          value: 58,
          start: "top+=150 top",
          end: "top+=350 top",
        },
        {
          selector: '[data-stat="stat2"] [data-number]',
          value: 23,
          start: "top+=400 top",
          end: "top+=600 top",
        },
        {
          selector: '[data-stat="stat3"] [data-number]',
          value: 27,
          start: "top+=650 top",
          end: "top+=850 top",
        },
        {
          selector: '[data-stat="stat4"] [data-number]',
          value: 40,
          start: "top+=900 top",
          end: "top+=1100 top",
        },
      ];

      counterTriggers.forEach((item) => {
        const element = section.querySelector(item.selector);

        const counter = {
          value: 0,
        };

        gsap.to(counter, {
          value: item.value,
          ease: "none",

          scrollTrigger: {
            trigger: section,
            start: item.start,
            end: item.end,
            scrub: 1,

            onUpdate: () => {
              element.textContent = Math.round(counter.value);
            },
          },
        });
      });

      /* =========================================================
         HEADLINE FADES WHEN CAR STARTS MOVING
      ========================================================== */

      gsap.to("[data-headline]", {
        opacity: 0,
        y: -50,
        ease: "none",

        scrollTrigger: {
          trigger: section,
          start: "top+=100 top",
          end: "top+=450 top",
          scrub: 1,
        },
      });

      /* =========================================================
         REFRESH
      ========================================================== */

      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });

      /*
       * Store animation so cleanup works correctly.
       */
      return () => {
        carAnimation.kill();
      };
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="hero-section relative h-[1300px]"
    >
      {/* =====================================================
          PINNED SCREEN
      ====================================================== */}

      <div
        className="
          hero-screen
          relative
          h-screen
          w-full
          overflow-hidden
          bg-concrete
        "
      >

        {/* ===================================================
            HEADLINE
        ==================================================== */}

        <div
          data-headline
          className="
            absolute
            left-[6vw]
            top-[12vh]
            z-30
          "
        >
          <h1
            aria-label="WELCOME ITZFIZZ"
            className="
              font-display
              text-[clamp(1.4rem,5vw,4.5rem)]
              font-bold
              leading-none
              tracking-[0.3em]
              text-ink
            "
          >
            {"WELCOME ITZFIZZ".split("").map(
              (char, index) => (
                <span
                  key={index}
                  data-letter
                  className="inline-block"
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              )
            )}
          </h1>
        </div>

        {/* ===================================================
            ROAD
        ==================================================== */}

        <div
          className="
            absolute
            left-0
            top-1/2
            h-[180px]
            w-full
            -translate-y-1/2
            overflow-hidden
            bg-asphalt
          "
        >

          {/* Top road line */}

          <div
            className="
              absolute
              left-0
              top-0
              h-[3px]
              w-full
              bg-white/70
            "
          />

          {/* Bottom road line */}

          <div
            className="
              absolute
              bottom-0
              left-0
              h-[3px]
              w-full
              bg-white/70
            "
          />

          {/* =================================================
              YELLOW ROAD MARKING
          ================================================== */}

          <div
            className="
              absolute
              left-0
              top-1/2
              h-[6px]
              w-full
              -translate-y-1/2
            "
            style={{
              background:
                "repeating-linear-gradient(to right, #f1c232 0 45px, transparent 45px 90px)",
            }}
          />

          {/* =================================================
              GREEN TRAIL
          ================================================== */}

          <div
            data-trail
            className="
              absolute
              left-0
              top-0
              z-[1]
              h-full
              bg-teal/20
            "
          />

          {/* =================================================
              CAR
          ================================================== */}

          <div
            data-car
            className="
              absolute
              left-0
              top-1/2
              z-20
              h-[120px]
              w-[262px]
              -translate-y-1/2
              will-change-transform
            "
          >
            <Car
              className="
                h-[120px]
                w-[262px]
                rotate-90
              "
            />
          </div>
        </div>

        {/* ===================================================
            STAT 1
        ==================================================== */}

        <div
          data-stat="stat1"
          className="
            absolute
            left-[8vw]
            top-[27vh]
            z-40
            max-w-[230px]
            border-l-[3px]
            border-teal
            pl-4
            opacity-0
          "
        >
          <div
            data-number
            className="
              font-display
              text-[clamp(2rem,4vw,4rem)]
              font-bold
              leading-none
              text-teal
            "
          >
            0
          </div>

          <p className="mt-2 text-sm leading-snug text-ink">
            Increase in pick up point use
          </p>
        </div>

        {/* ===================================================
            STAT 2
        ==================================================== */}

        <div
          data-stat="stat2"
          className="
            absolute
            left-[30vw]
            top-[62vh]
            z-40
            max-w-[240px]
            border-l-[3px]
            border-teal
            pl-4
            opacity-0
          "
        >
          <div
            data-number
            className="
              font-display
              text-[clamp(2rem,4vw,4rem)]
              font-bold
              leading-none
              text-teal
            "
          >
            0
          </div>

          <p className="mt-2 text-sm leading-snug text-ink">
            Decrease in customer phone calls
          </p>
        </div>

        {/* ===================================================
            STAT 3
        ==================================================== */}

        <div
          data-stat="stat3"
          className="
            absolute
            right-[25vw]
            top-[24vh]
            z-40
            max-w-[240px]
            border-l-[3px]
            border-teal
            pl-4
            opacity-0
          "
        >
          <div
            data-number
            className="
              font-display
              text-[clamp(2rem,4vw,4rem)]
              font-bold
              leading-none
              text-teal
            "
          >
            0
          </div>

          <p className="mt-2 text-sm leading-snug text-ink">
            Increase in pick up point use
          </p>
        </div>

        {/* ===================================================
            STAT 4
        ==================================================== */}

        <div
          data-stat="stat4"
          className="
            absolute
            right-[8vw]
            top-[62vh]
            z-40
            max-w-[240px]
            border-l-[3px]
            border-teal
            pl-4
            opacity-0
          "
        >
          <div
            data-number
            className="
              font-display
              text-[clamp(2rem,4vw,4rem)]
              font-bold
              leading-none
              text-teal
            "
          >
            0
          </div>

          <p className="mt-2 text-sm leading-snug text-ink">
            Decrease in missed deliveries
          </p>
        </div>

      </div>
    </section>
  );
}