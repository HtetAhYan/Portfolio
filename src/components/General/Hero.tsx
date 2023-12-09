'use client'
import React, {  useLayoutEffect, useRef } from 'react';
import Arrow from '@/assets/Arrow.svg';
import Image from 'next/image';
import { gsap } from 'gsap-trial';
import { ScrollTrigger } from 'gsap-trial/dist/ScrollTrigger';
import { ScrollToPlugin } from 'gsap-trial/dist/ScrollToPlugin';
import { useAppSelector } from '@/lib/hookTypes';

const Hero = () => {
  const ref = useRef(null);
  const loading=useAppSelector((state)=>state.loadReducer.isLoading)

    useLayoutEffect(() => {
      
gsap.registerPlugin(ScrollTrigger);
  
!loading &&
    animateTxt(ref);
    }, [loading]);
  console.log(loading);
  

  const highlightTextStyles = 'text-[#0e1129] font-bold text-8xl tablet:text-9xl laptop:text-[12em]';
  const ScrollTo = () => {
    gsap.registerPlugin(ScrollToPlugin)
    gsap.to(window, { duration: 2, scrollTo: `${window.innerHeight }` });
  }
  return (
    <div className="p-8  min-h-screen grid flex-col justify-center tablet:justify-normal items-center ">
      {/* Combined Text with Different Styles */}
      <div className='mx-auto  '>
        <div  className='overflow-hidden '>
  <h1 className="text-4xl justify-self-start tablet:text-6xl laptop:text-8xl second hidden">
    Greetings, I&apos;m Htet Ah Yan{' '}
   
  </h1></div> <div className='overflow-hidden '><h1 className={`${highlightTextStyles} first hidden`}>
      WEB-
        </h1> </div>
        <div className='overflow-hidden '><h1 className={`${highlightTextStyles} second hidden`}>DEVELOPER</h1></div>
       
          <h1 ref={ref} className='opacity-10 text-xl target:text-2xl  laptop:text-4xl'>Passionate about crafting innovative web solutions.</h1>
     
</div>

<div className='flex justify-between'>
      {/* Scroll Prompt */}
      <div className="justify-self-start ">
        <h1 className="text-xl text-center">Scroll to Explore</h1>

        {/* Arrow for scrolling */}
        <div onClick={ScrollTo} className="  hover:scale-105 transition-all cursor-pointer w-[100px] h-[100px] grid items-center border-2 border-[#0e1129] rounded-full">
          <Image src={Arrow} alt="Arrow" className="justify-self-center scale-75 " quality={10} />
        </div>
              </div>
          <h1 className='opacity-60 txt'>@2023</h1>
          </div>
    </div>
  );
};

export default Hero;
const animateTxt = (ref: React.RefObject<HTMLDivElement>) => {

// Animation configuration
const animationConfig = {
  duration: 1.2,
  opacity: 1,
  ease: 'power4.out', // You can experiment with different easing functions
};

// Animation for the first element
gsap.fromTo('.first ', { x: '-=1000', opacity: 0,display:'block' }, { x: 0, ...animationConfig });

// Animation for the second element with a slight stagger
gsap.fromTo('.second', { y: '-=1000', opacity: 0 ,display:'block'}, { y: 0, ...animationConfig, stagger: 0.2 });

      gsap.to(
        ref.current,
       
        {
          y: 50, // Final position (back to original position)
            opacity: 1,
            ease:'power2.inOut',// Final opacity
            scrollTrigger: {
              
            trigger: ref.current,
            start: 'bottom center+=100', // Adjust the starting point as needed
            end: '+=500', // Adjust the ending point as needed
              scrub: true,
           // Smoothly transition on scroll
          },
        }
      );
    };