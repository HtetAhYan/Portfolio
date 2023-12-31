
import type { Metadata } from 'next'
import { Bebas_Neue } from 'next/font/google'
import './globals.css'
import { LenisScroller } from '@/components/General/LenisScroll'
import { Header } from '@/components/General/Header'
import StoreProvider from './StateProvider'


import TransitionHandler from '@/components/transition/TransitionManager'

import { SpeedInsights } from "@vercel/speed-insights/next"

const Bebas = Bebas_Neue({ subsets:['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
  },) {

  return (
    <html lang="en">
      
      <body className={Bebas.className}>
        <SpeedInsights/>
        <StoreProvider >
        <LenisScroller> <TransitionHandler >  <Header/> <div className='relative top-0'> </div>{children}</TransitionHandler></LenisScroller></StoreProvider>
       </body>
    </html>
  )
}
