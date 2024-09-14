
'use client'
import logo from '../header/monday.jpg'

import Image from 'next/image'
import { IoDiamondOutline } from "react-icons/io5";
import Tippy from '@tippyjs/react';
import { IoIosNotificationsOutline } from "react-icons/io";
import icon from '../header/icon.jpg';
import 'tippy.js/dist/tippy.css'; // optional
// import  from "."; // Assuming the photo is a JPEG
// import './NavBar.css'; // Assuming the CSS file is named "NavBar.css"

const NavBar = () => {
  return (
    <>
      <div className="flex w-full h-[50px] items-center bg-[#ECEFF8] ">
          <div className='ml-3 flex gap-x-1'>
          <Image src={logo} alt='logo' className="" />
          <h3 className='font-bold font- text-md'>monday</h3>
          <h6 className='font-sans font-light text-lg'>work management</h6>
         <button className="relative border-[#0073EA] border text-[#0073EA] text-[13px] font-medium hover:text-white hover:bg-[#0060B9] h-7 w-28 flex justify-center items-center rounded-[4px] gap-x-1 transition-colors duration-300">
    <IoDiamondOutline className="text-[#0073EA] group-hover:text-white transition-colors duration-300" />
    See plans
  </button>
          </div>
          {/* 2nd notification */}
          <div className='bg-inherit flex h-10 items-center ml-20'>
             <Tippy content="Notifications">
            <div className='bg-inherit hover:bg-[#DFE2EB] h-10 w-10 flex justify-center items-center hover:border hover:rounded-md'>
                
                 <span><IoIosNotificationsOutline className='text-xl'/></span>  
            </div>
             </Tippy>
              <Tippy content="Notifications">
            <div className='bg-inherit hover:bg-[#DFE2EB] h-10 w-10 flex justify-center items-center hover:border hover:rounded-md'>
                
                 <span><Image src={icon} className='text-xl'/></span>  
            </div>
             </Tippy>



          </div>
     
        
      </div>
    </>
  );
};

export default NavBar;