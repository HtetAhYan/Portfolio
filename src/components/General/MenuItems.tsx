import { setMenuLoading, setPath } from '@/lib/Slice/LoadSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hookTypes';
import gsap from 'gsap-trial';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
const animateMenuItems = (menu:any, props: any) => {
  gsap.to(menu, {
    ...props,
   
  });
};
const animateMenuItemsClose = () => {
  animateMenuItems('.items', {
    fontSize: 0,
    opacity: 0,
    x: 1200,
    y: -500,

 
  })
}
const animateMenuItemsOpen = () => {
  animateMenuItems('.items', {
    fontSize: window.innerWidth >= 900 ? (window.innerWidth >= 1560 ? '80px' : '70px') : (window.innerWidth >= 728 ? '60px' : '40px'),
    opacity: 1,
    y: 0,
    x: 0,
    ease: 'power4.out', // Use a modern easing function
    delay: 0.2,
    duration: 0.4, // Increase the duration for a smoother effect
    stagger: 0.1,
  })
}
export const MenuItems = () => {
  const isMenuLoading = useAppSelector((state) => state.loadReducer.menuLoading);
  const itemRefs = useRef([]);
  const dispatch = useAppDispatch();
    useEffect(() => {
      console.log('.items');
      
    if (!isMenuLoading) {
      animateMenuItemsOpen()
      } {
        animateMenuItemsClose()
    }
}, [isMenuLoading, dispatch]);

  return (
      <div className={'0 absolute  bottom-1/3 left-[5%] op h-1/3 w-full items-container'}>
          <h3 className='text-xl text-white'>Navigations-{">" }</h3>
          {items.map((item, index) => (
          // @ts-ignore
        <h1  onClick={() => dispatch(setPath(item.url))}  key={index} className=' underline-pass-through translate-x-[500px] translate-y-[500px] text-[80px] text-white items' ref={(el) => itemRefs.current.push(el)}>
{item.name}
        </h1>
      ))}
    </div>
  );
};

const items = [
  {
    name: 'Home',
    ref: null,
    url: '/',
  },
  {
    name: 'About',
    ref: null,
    url: '/about',
  },
  {
    name: 'Projects',
    ref: null,  url: '/about',
  },
  {
    name: 'Contact',
    ref: null,  url: '/about',
  },
];
