'use client'
import { useAppDispatch } from '@/lib/hookTypes';
import React, { ReactElement, useEffect, useLayoutEffect, useRef, useState } from 'react'
import HamburgerMenu from './Hamburger';
import { setLoading, setMenuLoading } from '@/lib/Slice/LoadSlice';
import gsap from 'gsap-trial';

import OutsideClickHandler from 'react-outside-click-handler';
import { MenuItems } from './MenuItems';
const animateMenu = (menu:any, props: any) => {
  gsap.to(menu, {
    ...props,
   
  });
};
const StickyMenu = () => {
  const [hamburgerLoaded, setHamburgerLoaded] = useState(false);
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);

  useLayoutEffect(() => {
    introAnimation(dispatch, setHamburgerLoaded);
  
  }, [])
  const menuRef = useRef(null);

   useEffect(() => {

     const menu = menuRef.current;
     const menuRight = window.innerWidth > 900 ? '-300' : '-400';
     const menuTop = window.innerWidth > 900 ? '-300' : '-50'; 
     const menusize = window.innerWidth >= 900 ? (window.innerWidth >= 1560 ? '1500px' : '1300px') : (window.innerWidth >= 728 ? '1100px' : (window.innerWidth >= 375 ? '800px' : '700px') )

     const animateMenuOpen = () => {
      animateMenu(menu, {
        position: 'fixed',
        top: menuTop,
        right: menuRight,
        borderRadius: '50%',
height: menusize,

        width: menusize,
        opacity: 1,
        zIndex: 40,
        backgroundColor: 'black',
        ease: 'circ.inOut',
      
      });
    };

    const animateMenuClose = () => {
      animateMenu(menu, {
        width: '0',
        height: '0',
        top: '-200',
        right: '-400',
        backgroundColor: 'transparent',
        zIndex: 0,
     
      });
    };

     if (open) {
      
          dispatch(setMenuLoading(false));
        
      animateMenuOpen();
    } else {
      animateMenuClose();
    }


  }, [open]);


  return (
    <> <OutsideClickHandler
      onOutsideClick={() => {
        if (open) {
          setOpen(false);
        }
      }}
    >
      <div ref={menuRef} className='fixed grid justify-center overflow-hidden '><MenuItems/></div>
  <div      className={`fixed  w-screen z-50 ${hamburgerLoaded ? 'top-1 right-1' : 'top-0 right-0'} flex justify-end `}>
    <HamburgerMenu loaded={hamburgerLoaded} setOpen={setOpen} open={open} />
  </div></OutsideClickHandler></>
);

}

export default StickyMenu
const introAnimation = (dispatch: any,setHamburgerLoaded: any) => {
 
  gsap.fromTo('.hamburgerOne', {
    width: 0,
    delay: 2,
  }, {
    width: '36px',
    height:'3px',
    duration: 1,
    ease: 'power4.out',
    onComplete: () => {
      gsap.fromTo('.hamburgerTwo', {
        width: '0px',
        
        duration: 1,
        
      }, {
        width: '36px',
  
        height:'3px',
        duration: 1,
        ease: 'power4.out',
        onComplete: () => {
          dispatch(setLoading(false))
 
             gsap.to('.header', {
    width: '54px', height: '54px',
    borderRadius: '50%',
  duration: 0.5,
               right: 0,
    onComplete: () => {
               setHamburgerLoaded(true)
    }
   
  })
            
      }
      })

   
}
})
};
