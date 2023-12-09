// LenisScroller.tsx
"use client"
import React, { useEffect, useLayoutEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap-trial";
import { ScrollTrigger } from "gsap-trial/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export  const LenisScroller = ({ children }: { children: React.ReactNode }) => {
  useLayoutEffect(() => {
    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
      gsap.ticker.lagSmoothing(0);
      gsap.to( 
          ".text-color", {
           
        
              color: "red",
          duration: 2,
          ease: "expo.inOut",
          scrollTrigger: {
            trigger: ".text-color",
            start: "top",
            end: "top 80%",
            toggleActions: "play none none reverse",
          },
      })


    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};
