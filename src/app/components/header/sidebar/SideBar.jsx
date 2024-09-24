
"use client"
import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import "../sidebar/SideBar.css"
import { FaRegCalendarCheck } from "react-icons/fa6";
import { GrHomeRounded } from "react-icons/gr";
import { FaRegStar } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import photo from '../sidebar/photo.jpg'
import Image from 'next/image';
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { PiCalendarCheckLight } from "react-icons/pi";


import { useState } from "react";
function SideBar() {
  //  const [slide,setSlide]=useState(true)
  return (
    <>

  
    <div   className='BTN  h-auto  border  rounded-r-xl bg-[#F5F7FC]'>
      <div className='ml-[4px] sm:ml-3'>  
        <div className='flex justify-start mt-1 h-3 sm:h-8 items-center hover:border lg:gap-x-2 hover:rounded-sm w-16 sm:w-40 lg:w-[225px] gap-x-1 hover:bg-[#EEEEF0]
                            sm:'>
          <GrHomeRounded  className='text-[6px] sm:text-[12px] lg:text-[14px] ml-1'/>
          <h6 className='text-[6px] sm:text-[12px] sm:mt-1 lg:text-[14px] lg:font-extralight' >Home</h6> 
        </div>
         <div className='flex justify-start mt-1 h-3 items-center sm:h-8 lg:gap-x-2  hover:border hover:rounded-sm sm:w-48 w-[75px] lg:w-[247px] gap-x-1 hover:bg-[#EEEEF0]'>
          <PiCalendarCheckLight   className='text-[6px]  sm:text-[12px] ml-1 lg:ml-0 lg:text-[18px]'/>
          <h6 className='text-[6px] sm:text-[12px] sm:mt-1 lg:text-[14px] lg:font-extralight' >My work</h6> 

        </div>
       <hr className='mt-1'/>
          <div className='flex  mt-1 h-3 justify-around sm:justify-start sm:h-8  items-center lg:gap-x-2 hover:border hover:rounded-sm w-[75px] lg:w-[240px] sm:w-48 gap-x-1 hover:bg-[#EEEEF0]'>
          <FaRegStar  className='text-[6px] ml-1 sm:text-[15px] lg:ml-0 lg:text-[18px]'/>
             <h6 className='text-[6px] mr- sm:text-[12px] sm:mr-0 lg:-mr-[14px] lg:text-[14px]  ' >Favorites</h6> 
             <FaAngleDown className='text-[6px] sm:text-[12px]  sm:ml-24 hover:bg-[#EEEEF0] lg:ml-36  '/>
            

            

       

        </div>
               <hr className='mt-1'/>
         
        <div className='flex justify-'>
              <div className='flex  mt-1 h-3 justify-around  items-center sm:h-8    hover:border hover:rounded-sm sm:w-48 w-[75px] lg:w-[200px]  gap-x-1 hover:bg-[#EEEEF0]'>
           <Image src={photo}  className='h-2 w-2 ml-1 lg:ml-0 lg:w-6 lg:h-6  sm:h-5 sm:w-5 '/>
             <h1 className='text-[3px] font-semibold  mr-2 sm:mr-8 sm:text-[12px] lg:-ml-1 lg:text-[15px]'  >Main Workspace</h1> 
             <FaAngleDown className='text-[6px]  sm:text-[12px] lg:ml- '/>

        </div>
        <div> <HiOutlineDotsHorizontal className='bg-[#F5F7FC]] pl-1 mt-[2px] mr-2 sm:mt-3 lg:ml-2 sm:text-[20px]' /></div>
        

        </div>
       <div>
       
<div className="flex items-center justify-start  sm:mt-3 h-[20px] gap-x-1 lg:gap-x-[0px] sm:gap-x-">
  <form method="GET">
    <div className="relative text-gray-600">
      <span className="absolute inset-y-0 left-0 flex items-center mt-[2px]">
        <button type="submit" class="p-1 focus:outline-none focus:shadow-outline">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-[8px] lg:w-4 lg:pb-1 sm:w-3 sm:h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </button>
      </span>
      <input type="search"  className="text-md border-[1px] w-16 sm:w-[160px] h-[15px] sm:h-8   lg:w-[190px] text-white lg:rounded-md lg:placeholder:text-[14px] lg:placeholder:pl-3 rounded-sm pl-4 placeholder:text-[10px] sm:placeholder:pl-2 " placeholder="Search" autocomplete="off "/>
    </div>
  </form>
<button type="button" class="text-white lg:ml-2 bg-blue-700 focus:ring-blue-300 font-medium sm:h-8  lg:w-8 rounded-sm flex justify-center items-center  w-3 h-[15px] sm:w-8 "><span className='mt-1 lg:mt-0 lg:text-2xl'>+</span></button>

</div>
  <div className='flex justify-start mt-1 h-3 items-center sm:h-8 lg:gap-x-2   hover:rounded-sm sm:w-48 bg-[#CCE5FF] lg:mt-4 border rounded-[3px] lg:h-9 w-[75px] lg:w-[240px] gap-x-1 '>
          <PiCalendarCheckLight   className='text-[6px]  sm:text-[12px] -ml-1 lg:ml-0 lg:text-[18px]'/>
          <h6 className='text-[6px] sm:text-[12px] sm:mt-1 lg:-mt-[1px] text-[#393C42] lg:text-[14px] lg:font-extralight' >EUT_DEMO</h6> 

        </div>
       </div>




      </div>





    </div>
    

    

    </>
  )
}

export default SideBar;
