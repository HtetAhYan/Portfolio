import { setMenuLoading } from "@/lib/Slice/LoadSlice";
import { useAppDispatch } from "@/lib/hookTypes";


 const HamburgerMenu = ({loaded, setOpen, open}:any) => {

const dispatch = useAppDispatch();
     const handleClick = () => {

     loaded &&  setOpen(!open);

       loaded &&  dispatch(setMenuLoading(!open));
  };
     const hamburgerClasses = ` bg-white transform transition-transform `;
     
  return (
    <div className={` ${open && 'bg-opacity-[10%]' } bg-black  h-screen w-[100%]   header cursor-pointer`}  >
      
          <div onClick={handleClick} className="w-full  h-full flex justify-center items-center flex-col z-50 "> 
          <div 
        className={`${hamburgerClasses}  hamburgerOne  ${loaded && open && 'rotate-45 translate-y-2' }`}
      ></div>
    
      <div
        className={`${hamburgerClasses} mt-2 hamburgerTwo ${loaded && open && 'rotate-[-45deg] translate-y-[-3px]'}`}
      ></div></div>
    </div>
  );

}
export default HamburgerMenu
