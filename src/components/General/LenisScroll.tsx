// LenisScroller.tsx
"use client"
import React, {  useLayoutEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap-trial";
import { ScrollTrigger } from "gsap-trial/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const LenisScroller = ({ children }: { children: React.ReactNode }) => {
  
  useLayoutEffect(() => {
    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
  gsap.ticker.lagSmoothing(1000, 16);

gsap.ticker.fps(60);


   // Change text color to white when scrolling over the background
  gsap.to(".text-color", {
  color: "white", // Change to the desired color
  duration: 0.2,
  ease: "none",
  scrollTrigger: {
    trigger: ".pj-bg",
    start: "top top",
    end: "end end",
    markers: true,
    toggleActions: "play none none reverse",
  },
});

// Change background color to black when scrolling over the background
gsap.fromTo(".pj-bg", {
  backgroundColor: "rgba(0,0,0,0)",
}, {

  ease: "none",
  scrollTrigger: {
    trigger: ".pj-bg",
    start: "top top",
    end: "end  end",
    scrub: true,
   
    onLeave: () => {
      // Revert text color to its original state (e.g., red)
      gsap.to(".text-color", {
        color: "white",
        duration: 0.1,
        ease: "none",
      });
   
    },
  },
});

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};

// Usage

const changePjBg=()=>{

}

