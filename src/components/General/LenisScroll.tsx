// LenisScroller.tsx
"use client";
import React, { useLayoutEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap-trial";
import { ScrollTrigger } from "gsap-trial/dist/ScrollTrigger";
const navColors =     ["#ffffff",  "red",]
export const LenisScroller = ({ children }: { children: React.ReactNode }) => {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(1000, 16);
    const text = document.querySelector(".text-color");
    gsap.ticker.fps(60);
    const pjs = gsap.utils.toArray(".pj-bg");

   pjs.forEach((pj: any, index) => {
  ScrollTrigger.create({
    trigger: pj,
    start: "top top",
    end: "bottom bottom", // Adjust as needed
    scrub: true,

    toggleActions: "restart none none reverse",
    preventOverlaps: true,
    onUpdate: (self) => {
      // Check if the trigger is "escape" and update the color accordingly
      const isEscape = self.getVelocity() < 0; // You might need to adjust this condition based on your requirements
      const color = isEscape ? "black" : navColors[index];

      gsap.to(text, { color, immediateRender: true, ease: "none" });
    },
    onLeave: () => {
      console.log("onLeave");
      
    },onEnterBack: () => {
      console.log("onEnterBack");
    },
    onLeaveBack: () => {
      console.log("onLeaveBack");
    },
    onEnter: () => {
      console.log("onEnter");
    }
  });
});


    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};


