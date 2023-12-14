// LenisScroller.tsx
"use client";
import React, { useLayoutEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap-trial";
import { ScrollTrigger } from "gsap-trial/dist/ScrollTrigger";
const navColors =     ["#ffffff",]
export const LenisScroller = ({ children }: { children: React.ReactNode }) => {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(1000, 16);
    gsap.ticker.fps(60);





    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};


