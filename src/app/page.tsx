
'use client'

import { useAppSelector } from "@/lib/hookTypes";
import dynamic from "next/dynamic";


const Hero = dynamic(() => import('@/components/General/Hero'))
const Zero1 = dynamic(() => import('@/components/General/01'))
const Zero2 = dynamic(() => import('@/components/General/02'),)
// Import statements...

export default function Home() {
  const load = useAppSelector((state) => state.loadReducer.isLoading);

  return (
    <main className={` relative ${load ? 'overflow-hidden max-h-[100vh] overflow-y-hidden' : ''}`}>

      <Hero />
      <Zero1 />
        <Zero2 />
      
    </main>
  );
}

