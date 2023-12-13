// LenisScroller.tsx
"use client"
import React, { ReactElement, useEffect, useLayoutEffect } from "react";
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
  gsap.ticker.lagSmoothing(1000, 16);

gsap.ticker.fps(60);


   // Change text color to white when scrolling over the background
gsap.to(".text-color", {
  color: "white", // Change to the desired color
  duration: 2,
  ease: "expo.inOut",
  scrollTrigger: {
    trigger: ".pj-bg",
    start: "-=100",
    end: "top top",
    toggleActions: "play none none reverse",
  },
});
changeColor(".header", "black");
    changeColor(".hamburgerOne", "black");
    changeColor(".hamburgerTwo", "black");
// Change background color to black when scrolling over the background
gsap.fromTo(".pj-bg", {
  backgroundColor: "rgba(0,0,0,0)",
}, {
  backgroundColor: "black",
  ease: "none",
  scrollTrigger: {
    trigger: ".pj-bg",
    start: "-=600",
    end: "end  end",
    scrub: true,
   
    onLeave: () => {
      // Revert text color to its original state (e.g., red)
      gsap.to(".text-color", {
        color: "white",
        duration: 0.5,
        ease: "power2.inOut",
      });
      gsap.set(".header", {
        backgroundColor: "white",
          duration: 2,
        ease: "none",
      })
      gsap.set(".hamburgerOne", {
        backgroundColor: "black",
          duration: 0.5,
        ease: "power2.inOut",
      })
      gsap.set(".hamburgerTwo", {
        backgroundColor: "black",
          duration: 0.5,
        ease: "power2.inOut",
      })
    },
  },
});


    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};
const changeColor = (element: String, bgColor: any) => {
  gsap.to(element, {
    backgroundColor: bgColor,
    scrollTrigger: {
      trigger: ".pj-bg",
      start: "-=200",
      end: "top center",
      scrub: true,
      toggleActions: "play none none reverse",
    }
  });
}

// Usage

