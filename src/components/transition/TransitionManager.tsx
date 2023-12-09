//@ts-nocheck
'use client';
/* import styles from "./transition-handler.module.css"; */

import { useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap-trial";
import { useAppSelector } from "@/lib/hookTypes";

export default function TransitionHandler({ children }) {
  const elementRef = useRef();
  const firstLoad = useRef(true);
  const router = useRouter();
const url =useAppSelector((state) => state.loadReducer.path)
  useEffect(() => {
    if (!firstLoad.current) {
      const element = elementRef.current;

      function onPageExit() {
        router.prefetch(url);
        gsap.set(element, { autoAlpha: 1, yPercent: 0 });
        gsap
          .timeline({
            paused: true,
            onComplete: () => onPageEnter(element, url),
          })
          .to(element, { y: 100, autoAlpha: 0, duration: 1 })
          .play();
      }

      function onPageEnter() {
        router.push(url);
        gsap.set(element, { autoAlpha: 0, y: 100 });
        gsap
          .timeline({
            paused: true,
          })
          .to(element, { autoAlpha: 1, y: 0, duration: 1 })
          .play();
      }

      onPageExit(element);
    }
    firstLoad.current = false;
  }, [router, url, firstLoad]);

  return (
    <main ref={elementRef}>
      {children}
    </main>
  );
}