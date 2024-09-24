'use client'
import React from 'react'
import logo from '../header/monday.jpg';

import { IoDiamondOutline } from "react-icons/io5";
import { RiUserAddLine } from "react-icons/ri";
import Image from 'next/image'

import Tippy from '@tippyjs/react';
import { IoIosNotificationsOutline } from "react-icons/io";
import icon from '../header/icon.jpg';
import { IoIosSearch } from "react-icons/io";
import { IoHelpSharp } from "react-icons/io5";
import { TbGridDots } from "react-icons/tb";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import { FaCircleUser } from "react-icons/fa6";
import 'tippy.js/dist/tippy.css'; // optional
import puzzle from '../header/puzzle.jpg'




function Navbar2() {
  return (
    <>
    <div className='flex w-screen h-4 justify-between bg-[#ECEFF8] 
                    sm:flex sm:w-full sm:justify-between sm:h-[47px] 
                    '>
        <div className='ml-[2px] sm:ml-3 flex items-center justify-between   sm:gap-x-1  gap-x-[1px]'>
   <Image src={logo} alt='logo' className=" h-[10px] sm:h-7 sm:w-8 w-[10px]" />
   <h3 className='font-bold  text-[8px] sm:text-[17px]  '>monday</h3>
   <h6 className='font-sans font-[350] text-[3px] mt-1 sm:mt-0 sm:text-[19px]   flex    '>work management</h6>
           <button className="lg:ml-3    ml-0  hover:bg-[#0060B9] sm:gap-x-2 sm:rounded-[5px] rounded-sm hover:text-white hover:bg-hover hover:border-white h-3 sm:h-7  sm:w-[100px] items-center  w-12  flex justify-center text-[7px] border sm:border-1 gap-x-[1px] border-[#0073EA]  ">
    <IoDiamondOutline className="text-[#0073EA] mt-[2px] text-[8px] sm:text-[16px] " />
    <span className='mt-[1px] text-[4px] sm:text-[14px] text-[#0073EA]  hover:text-white hover:border-white'>See plans</span>
  </button>
        </div>
         <div className='bg-inherit flex items-center  gap-x-[7px] lg:gap-x-4  '>
             <Tippy content="Notifications">
            <div className='bg-inherit hover:bg-[#DFE2EB] sm:h-10 sm:w-10 md:h-7 md:w-7 flex justify-center  items-center hover:border hover:rounded-md '>
                
                 <span><IoIosNotificationsOutline className='text-[10px] sm:text-xl sm:font-bold'/></span>  
            </div>
             </Tippy>
              <Tippy content="Update feed ">
            <div className='bg-inherit hover:bg-[#DFE2EB]  sm:h-10 sm:w-10 md:h-7 md:w-7 flex justify-center items-center hover:border hover:rounded-md'>
                
                 <span><Image src={icon}  className='text-[10px] sm:text-xl sm:font-bold rounded-[700px] w-3 sm:w-5 lg:w-5 border'/></span>  
            </div>
             </Tippy>
                <Tippy content="Invite members">
            <div className='bg-inherit hover:bg-[#DFE2EB]  sm:h-10 sm:w-10 md:h-7 md:w-7 flex justify-center items-center hover:border hover:rounded-md'>
                
                 <span><RiUserAddLine  className='text-[10px] sm:text-xl sm:font-bold'/></span>  
            </div>
             </Tippy>
                    <Tippy content="monday marketplace">
            <div className='bg-inherit hover:bg-[#DFE2EB] sm:h-10 sm:w-10 flex md:h-7 md:w-7 justify-center items-center hover:border hover:rounded-md'>
                
                 <span><Image src={puzzle}  className='text-[10px] sm:text-xl sm:font-bold rounded-[700px] w-3 sm:w-5 lg:w-5 border '/></span>  
            </div>
             </Tippy>
               <Tippy content="Search everything">
            <div className='bg-inherit hover:bg-[#DFE2EB] sm:h-10 sm:w-10 md:h-7 md:w-7  flex justify-center items-center hover:border hover:rounded-md'>
                
                 <span><IoIosSearch   className='text-[10px] sm:text-xl sm:font-bold'/></span>  
            </div>
             </Tippy>
                  <Tippy content="Help">
            <div className='bg-inherit hover:bg-[#DFE2EB]    sm:h-10 sm:w-10   md:h-7 md:w-7           flex justify-center items-center hover:border hover:rounded-md'>
                
                 <span><IoHelpSharp   className='text-[10px] sm:text-xl sm:font-bold  '/></span>  
            </div>
             </Tippy>
             {/* line  */}
             <div className='h-[8px] sm:h-7 border-r w-1     border-[#DFE2EB]   '>

             </div>
            
                    <Tippy content="Product Switcher">
            <div className=' hover:bg-[#DFE2EB]   flex justify-center sm:h-10 md:h-7 md:w-7 sm:w-10 items-center '>
                
                 <span>< TbGridDots    className='text-[10px] sm:text-xl sm:font-bold'/></span>  
            </div>
             </Tippy>
                <div className='w-10 sm:w-auto  bg-[#F6F7FC] flex h-5 sm:h-7 justify-between  gap-x-0 lg:gap-x-[1px]   hover:bg-[#DFE2EB] lg:h-8  rounded-l-[3px] rounded-r-full    items-center'>
              <div  style={{ transform: 'rotate(30deg)' }}  className='bg-[#FF3D57] w-[5px] border rounded-lg ml-2  h-[14px]'></div>
              <div   style={{ transform: 'rotate(30deg)' }}className='bg-[#FFCB00] w-[5px] border rounded-lg  h-[14px]'></div>
              <div className='bg-[#00D647] w-[8px] h-2 border mr-1 rounded-full mt-2'></div>
              <FaCircleUser className='w-10 h-8  '/>
              
            </div>
            
            </div>

     

    </div>



</>
      
   
  )
}

export default Navbar2
      