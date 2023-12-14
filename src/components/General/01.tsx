'use client';
import styles from '../../app/page.module.css';
import { useRef, useLayoutEffect,useEffect, useState } from 'react';
import { ScrollTrigger}  from 'gsap-trial/dist/ScrollTrigger';
import {gsap }from 'gsap-trial';


const phrase =
  "Hey there! I'm a web developer with 1 year of experience, dabbling in Spring Boot and Next.js. Always up for new coding adventures!";
const desc="- I am keen to contribute to open source or personal projects.  Feel free to invite me, and I'll bring a passion for innovation and a commitment to evolving in the ever-changing landscape of technology."
export default function ZeroOne() {

  let refs = useRef([]);
  const body = useRef(null);
  const container = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

  }, []);

  useEffect(() => {
    // Ensure that the DOM elements are available before creating the animation
    if (container.current!==null && body.current!==null && refs.current.length>0) {
      createAnimation();

    }
  }, [container, body]);

  const createAnimation = () => {
      gsap.to(refs.current, {
        scrollTrigger: {
            trigger: container.current,
            scrub: true,
            start: `-=${window.innerWidth>=768 ? `${window.innerHeight/ 1.2}` : `${window.innerHeight/ 1.5}`}`,
              end: `+=${ window.innerWidth>=768 ? window.innerHeight*1.5 : window.innerHeight*2}`,
         
        },
        opacity: 1,
        ease: "none",
        stagger: 0.1
      }) ;
   
    gsap.to('.scramble', {
      left: '50%',
      scale: '1',
      ease: 'none',
      
      scrollTrigger: {
        trigger: container.current,
      scrub: true,
            start: `-=${window.innerWidth>=768 ? `${window.innerHeight/1.2}` : `${window.innerHeight/ 1.5}`}`,
              end: `+=${ window.innerWidth>=768 ? window.innerHeight*1.5 : window.innerHeight*2}`,
      }
    })
  }

  const splitWords = (phrase: string,className: string) => {
    let body: JSX.Element[] = [];
    phrase.split(" ").forEach( (word, i) => {
      const letters = splitLetters(word);
      body.push(<p className={ `${className} mr-2`} key={word + "_" + i}>{letters}</p>)
    })
    return body
  }

  const splitLetters = (word: string) => {
    let letters: JSX.Element[] = []
    word.split("").forEach((letter, i) => {
      // @ts-ignore
      letters.push(<span className='opacity-30' key={letter + "_" + i} ref={el => {refs.current.push(el)}}>{letter}</span>)
    })
    return letters;
  }

  return (
    <main ref={container} className={`${styles.main}  pj-bg  justify-between py-36 z-20`}>
{/*       {!loaded && <div className='sticky top-0  h-screen w-screen bg-black'></div>} */}
      <h1 className='absolute top-0  text-2xl laptop:text-4xl opacity-80 heading '>1/3</h1>
   
      <div ref={body} className={`${styles.body}  `}>
        {
          splitWords(phrase,'')
        }
      </div>
   <div ref={body} className={` mx-auto w-[80%] mt-[5%] laptop:w-1/2  flex-wrap flex  items-center`}>
        {splitWords(desc,'text-xl tablet:text-2xl laptop:text-3xl text-[#0e1129]') }
        
 </div>
  
      <div className='relative cursor-pointer  scale-50 left-0 w-[120px] h-[120px] rounded-full scramble  border-2 border-black flex items-center justify-center '>

  <h1 className="cursor-pointer text-xl relative ">Invite Me</h1>
 





    </div>
    </main>
  )
}
