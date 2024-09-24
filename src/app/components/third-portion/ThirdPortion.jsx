"use client"
import React from 'react'

import { FaAngleDown } from "react-icons/fa";
import icons from '../third-portion/icons.jpg'
import plug from '../third-portion/plug.jpg'
import { RiRobot2Line } from "react-icons/ri"
import { LuMessageCircle } from "react-icons/lu";
import { FaCircleUser } from "react-icons/fa6";
import { GrHomeRounded } from "react-icons/gr";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import Tippy from '@tippyjs/react';
import { CgArrowsExpandRight } from "react-icons/cg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import person from "../third-portion/person.jpg"
import { PiArrowsDownUpThin } from "react-icons/pi";
import { BiHide } from "react-icons/bi";
import { BiMessageRoundedAdd } from "react-icons/bi";
import group from "../third-portion/group.jpg"
import sign from "../third-portion/sign.png"
import people from "../third-portion/people.jpg"

import { PiWarningCircleLight } from "react-icons/pi"
import { BiFilterAlt } from "react-icons/bi";;

import { CompactTable } from '@table-library/react-table-library/compact';


import Image from 'next/image';

function ThirdPortion() {
  return (
    <>
      <div  className='w-full  bg-[#FFFFFF] rounded-l-xl '>
        <div className=' h-auto ml-4'>
            <div className='flex mt-1 lg:ml-8  justify-between md:gap-x-[130px] lg:gap-x-[240px] '>
                {/* first */}
                <div className='flex gap-x-1 mt-[2px] h-7 lg:mt-4 hover:bg-[#F0F0F1]  hover:rounded-sm'>
                    <h1 className='text-[5px] mt-[2px] sm:text-lg font-normal lg:font-nomal lg:text-[24px]'>EUT_DEMO</h1>
                    <FaAngleDown className='text-[8px] sm:text-lg sm:mt-2 mt-[1px] text-[#7D7E8C]'/>

                </div>
                {/* first end  */}
                {/* 2nd */}
                <div className='flex gap-x-3 mr-[100px] md:mr-[215px] lg:mr-[275px] lg:mt-4 lg:gap-x-3 '>
                    <div className='flex gap-x-[1px] sm:gap-x-2 justify-center h-7 hover:bg-[#F0F0F1] lg:h-10 lg:w-[200px]  hover:rounded-sm'>
                        <Image src={plug} alt='plug' className='h-2 sm:h-4 sm:w-4 w-2 mt-1 lg:w-4 lg:h-4 lg:mt-[9px]'/>
                        <h6 className='text-[5px] sm:text-[12px] lg:text-[13px] mt-1 lg:mt-2'>integrate</h6>
                        <Image src={icons} alt="icons" className='h-2 sm:w-12 sm:h-5 w-5 mt-1 lg:mt-1 lg:w-[85px] lg:h-7'/>
                    </div>
                    <div className='flex gap-x-[2px] sm:gap-x-1 h-4 lg:w-28 hover:border  justify-center sm:mt-1 lg:-mt-[2px] lg:gap-x-2 hover:bg-[#F0F0F1] lg:h-8 items-center  hover:rounded-sm'>
                        <RiRobot2Line className='w-2 sm:w-4 sm:mt-1 lg:text-[28px] lg:mt-'/>
                        <h6 className='text-[7px] mt-0 sm:text-[12px]  lg:text-[14px] lg:mt-1'>Automate</h6>
                    </div>
                    
                    <LuMessageCircle className='w-2 sm:w-4 sm:mt-1   hover:bg-[#F0F0F1] lg:w-5 hover:border  justify-center  lg:h-7 lg:-mt-[2px] hover:rounded-sm'/>
                    <FaCircleUser className='w-2 sm:w-4 sm:mt-1  lg:mt-  hover:bg-[#F0F0F1]  hover:rounded-sm lg:w-14 hover:border lg:-mt-[2px] justify-center  lg:h-7' />
                    <button className='text-[3px] sm:w-9 sm:h-5 h-2 w-4 mt-1 sm:text-[8px] border rounded-sm sm:mt-1 lg:w-14 lg:h-7 lg:text-[12px] lg:-mt-[2px] hover:bg-[#F0F0F1]  hover:rounded-sm'>Invite / 1</button>
                    
                   
                     <HiOutlineDotsHorizontal className='text-[8px] sm:text-[12px] mt-1 mr-2 sm:mt-2 lg:text-[18px]  hover:bg-[#F0F0F1]  hover:rounded-sm lg:-mt-[1px]' />
          
       


                </div>
{/* GrHomeRounded  */}
            </div>
            {/* 2nd row */}
            <div className='flex gap-x-[2px] sm:gap-x-3 lg:gap-x-[15px] ml-0 lg:ml-8 '>
              <div className='flex -mt-2 sm:mt-3 h-2 sm:w-[120px] sm:h-5 lg:w-[160px] rounded-sm lg:h-8 justify-around items-center border hover:bg-[#F0F0F1]  hover:rounded-sm  '>
                <div className='flex gap-x-[1px] sm:gap-x-1 sm:mt-[2px]'>
                <GrHomeRounded  className='text-[5px] sm:text-[14px] lg:text-[16px] mt-[1px]'/>
                <h6 className='text-[5px] sm:text-[12px] ml-0 lg:text-[14px] lg:ml-2'>Main Table</h6>
                </div>
                <FaAngleDown className='text-[6px] mt-[2px] sm:text-[14px]'/>
              </div>
                 <div className='h-[8px] sm:h-7 border-r w-1   -mt-2 sm:mt-2  border-[#DFE2EB] lg:mt-3   '>

             </div>
              <div className='flex -mt-2 sm:mt-3 h-2 sm:w-[80px] sm:h-5 bg-[#0073EA] lg:h-8 rounded-md lg:w-28 hover:border hover:rounded-md  hover:bg-[#0060B9]  justify-around items-center   '>
                <div className='flex gap-x-[1px] sm:gap-x-1 sm:mt-[2px]  '>
              
                <h6 className='text-[6px] sm:text-[12px] text-white lg:text-[14px]'>New task</h6>
                </div>
                <div className='border-l-[1px] sm:w-3'>
                <FaAngleDown className='text-[6px] mt-[2px]  text-white  sm:text-[14px] sm:ml-[2px] '/>
                </div>
              </div>
              <div className='flex hover:bg-[#F0F0F1] h-2  sm:h-5 -mt-[7px] gap-x-[1px] sm:gap-x-1 sm:mt-3 lg:h-8 lg:w-20 justify-center items-center hover:rounded-md '>
                <IoIosSearch   className='text-[10px] sm:text-xl sm:font-bold -mt-1 sm:mt-1 '/>
                <h6 className='text-[6px] -mt-1 sm:text-[14px] sm:mt-[2px] lg:mt-[3px]'>Search</h6>
              </div>
                <div className='flex hover:bg-[#F0F0F1] h-2  sm:h-7 -mt-[7px] sm:mt-2 justify-center sm:gap-x-2 items-center hover:rounded-md lg:mt-3  lg:h-8 lg:w-20  '>
                <Image src={person}  className='text-[10px] h-2 border rounded-xl w-2 sm:w-4 sm:h-4 sm:font-bold -mt-1 sm:mt-1 '/>
                <h6 className='text-[6px] -mt-1 sm:text-[14px] sm:mt-[2px] '>Person</h6>

              </div>
              <div className='flex -mt-2 sm:mt-3 h-2 sm:w-[80px] sm:h-5  hover:bg-[#F0F0F1] sm:gap-x-1 justify-around items-center  hover:rounded-md lg:mt-3  lg:h-8 lg:w-24  '>
                <div className='flex gap-x-[1px] sm:gap-x-1 sm:mt-[2px]  '>

              <BiFilterAlt  className='text-[10px] sm:text-lg sm:font-bold -mt-1 sm:mt-1 ' />
                <h6 className='text-[6px] sm:text-[12px] lg:mt-1'>Filter</h6>
                </div>
                <div className='border-l-[1px] sm:w-1 hover:bg-[#F0F0F1] lg:mt-1 lg:w-3'>
                <FaAngleDown className='text-[6px] mt-[2px]   sm:text-[14px] sm:ml-[2px] lg:'/>
                </div>
              </div>
              <div className='flex hover:bg-[#F0F0F1] h-2  sm:h-5 -mt-[7px] gap-x-[1px] sm:gap-x-1 sm:mt-3 justify-center items-center hover:rounded-md lg:mt-3  lg:h-8 lg:w-20  '>
                <PiArrowsDownUpThin    className='text-[10px] sm:text-lg sm:font-bold -mt-1 sm:mt-1 '/>
                <h6 className='text-[6px] -mt-1 sm:text-[14px] sm:mt-[2px] '>Sort</h6>
              </div>
               <div className='flex hover:bg-[#F0F0F1] h-2  sm:h-5 -mt-[7px] gap-x-[1px] sm:gap-x-1 sm:mt-3 justify-center items-center hover:rounded-md lg:mt-3  lg:h-8 lg:w-20  '>
                <BiHide    className='text-[10px] sm:text-lg sm:font-bold -mt-1 sm:mt-1 '/>
                <h6 className='text-[6px] -mt-1 sm:text-[14px] sm:mt-[2px] '>Hide</h6>
              </div>
               <div className='flex hover:bg-[#F0F0F1] h-2   sm:h-7 -mt-[7px] sm:mt-2 justify-center sm:gap-x-1 items-center hover:rounded-md lg:mt-3  lg:h-8 lg:w-20   '>
                <Image src={group}  className='text-[10px] h-2 w-2 sm:w-4 sm:h-4 sm:font-bold border rounded-full -mt-1 sm:mt-1 '/>
                <h6 className='text-[6px] -mt-1 sm:text-[14px]  sm:mt-[2px] whitespace-nowrap '>group by</h6>

              </div>
              <HiOutlineDotsHorizontal className='text-[8px] sm:text-[12px]  -mt-2  sm:mt-3 lg:text-[18px]  hover:bg-[#F0F0F1] lg:h-8  hover:rounded-md lg:mt-3' />
            </div>
          <div>
          
          </div>
          <div className='flex lg:mt-5 mt-3 sm:mt-5 lg:gap-x-3 lg:ml-2 sm:-ml-2 sm:gap-x-1' >
             <HiOutlineDotsHorizontal className='text-[8px] sm:text-[12px] opacity- mt-2   sm:mt-2 lg:text-[18px]  hover:bg-[#F0F0F1] lg:h-  hover:rounded-md lg:mt-3  ' />
              <FaAngleDown className='text-[10px] mt-2  text-[#9CC4FD]  lg:text-[18px] sm:mt-2 sm:text-[14px] sm:ml-[2px] lg:mt-3 '/>
            <h1 className='text-[#579AFB] sm:text-lg  lg:mt-2 text-[8px] mt-2 sm:mt-0 '>To-Do</h1>
            <h1 className='text-[#6A6B7C] lg:mt-3 lg:text-[15px] sm:text-[12px] md:text-[15px] sm:mt-1 text-[8px] mt-2'>7 Tasks</h1>

            </div>

{/* <div className='flex  mt-10 ml-1 lg:ml-8 w-[300px] sm:w-[520px] lg:w-[940px] overflow-auto'> */}
  <div className='flex  mt-2 sm:mt-3 lg:mt-2 ml-1 lg:ml-8 '>
  <div className='flex flex-col'>
  {/* first column */}
  <div className='flex stic'>
    <div className='border-[#579BFC] lg:h-9 border lg:w-[6px]  bg-[#579BFC] rounded-tl-3xl sm:h-6  w-[2px] h-3'> </div>
    <div className='w-3 h-3 sm:h-6 sm:w-6 border lg:h-9  flex justify-center items-center'><input type='checkbox' className='w-2 sm:w-4 sm:h-3 border-[#D0D4E4] opacity- h-[7px] '></input></div>
    {/* 
    <div className='h-4 w-12 border-b border-t text-[7px] flex justify-center  items-center'><span className='ml-2'>Status</span><PiWarningCircleLight className='ml-3' /></div>
        <div className='h-4 w-12 border-b border-t text-[7px] flex justify-center  items-center'><span className='ml-2'>Due date</span><PiWarningCircleLight classNsame='ml-3' /></div> */}
  </div>
    <div className='flex'>
    <div className='border-[#579BFC] lg:w-[6px] border lg:h-9 bg-[#579BFC]  sm:h-6  w-[2px] h-3'> </div>
    <div className='w-3 h-3 sm:h-6 sm:w-6 border lg:h-9 flex justify-center items-center'><input type='checkbox' className='w-2 sm:w-4 sm:h-3 border-[#D0D4E4] opacity- h-[7px] '></input></div>
    {/* 
    <div className='h-4 w-12 border-b border-t text-[7px] flex justify-center  items-center'><span className='ml-2'>Status</span><PiWarningCircleLight className='ml-3' /></div>
        <div className='h-4 w-12 border-b border-t text-[7px] flex justify-center  items-center'><span className='ml-2'>Due date</span><PiWarningCircleLight className='ml-3' /></div> */}
  </div>
     <div className='flex'>
    <div className='border-[#579BFC] border lg:w-[6px] bg-[#579BFC] lg:h-9 sm:h-6  w-[2px] h-3'> </div>
    <div className='w-3 h-3 sm:h-6 sm:w-6 border flex justify-center lg:h-9 items-center'><input type='checkbox' className='w-2 sm:w-4 sm:h-3 border-[#D0D4E4] opacity- h-[7px] '></input></div>
    {/* 
    <div className='h-4 w-12 border-b border-t text-[7px] flex justify-center  items-center'><span className='ml-2'>Status</span><PiWarningCircleLight className='ml-3' /></div>
        <div className='h-4 w-12 border-b border-t text-[7px] flex justify-center  items-center'><span className='ml-2'>Due date</span><PiWarningCircleLight className='ml-3' /></div> */}
  </div>
    <div className='flex'>
    <div className='border-[#579BFC] border lg:w-[6px] bg-[#579BFC] lg:h-9  sm:h-6  w-[2px] h-3'> </div>
    <div className='w-3 h-3 sm:h-6 sm:w-6 border flex justify-center lg:h-9 items-center'><input type='checkbox' className='w-2 sm:w-4 sm:h-3 border-[#D0D4E4] opacity- h-[7px] '></input></div>
    {/* 
    <div className='h-4 w-12 border-b border-t text-[7px] flex justify-center  items-center'><span className='ml-2'>Status</span><PiWarningCircleLight className='ml-3' /></div>
        <div className='h-4 w-12 border-b border-t text-[7px] flex justify-center  items-center'><span className='ml-2'>Due date</span><PiWarningCircleLight className='ml-3' /></div> */}
  </div>
     <div className='flex'>
    <div className='border-[#579BFC] lg:w-[6px] border bg-[#579BFC]  sm:h-6 lg:h-9 w-[2px] h-3'> </div>
    <div className='w-3 h-3 sm:h-6 sm:w-6 border flex justify-center items-center lg:h-9'><input type='checkbox' className='w-2 sm:w-4 sm:h-3 border-[#D0D4E4] opacity- h-[7px] '></input></div>
    {/* 
    <div className='h-4 w-12 border-b border-t text-[7px] flex justify-center  items-center'><span className='ml-2'>Status</span><PiWarningCircleLight className='ml-3' /></div>
        <div className='h-4 w-12 border-b border-t text-[7px] flex justify-center  items-center'><span className='ml-2'>Due date</span><PiWarningCircleLight className='ml-3' /></div> */}
  </div>
    <div className='flex'>
    <div className='border-[#579BFC] lg:w-[6px] border bg-[#579BFC]  sm:h-6 lg:h-9 w-[2px] h-3'> </div>
    <div className='w-3 h-3 sm:h-6 sm:w-6 border flex justify-center items-center lg:h-9'><input type='checkbox' className='w-2 sm:w-4 sm:h-3 border-[#D0D4E4] opacity- h-[7px] '></input></div>
    {/* 
    <div className='h-4 w-12 border-b border-t text-[7px] flex justify-center  items-center'><span className='ml-2'>Status</span><PiWarningCircleLight className='ml-3' /></div>
        <div className='h-4 w-12 border-b border-t text-[7px] flex justify-center  items-center'><span className='ml-2'>Due date</span><PiWarningCircleLight className='ml-3' /></div> */}
  </div>
     <div className='flex'>
    <div className='border-[#579BFC] border lg:w-[6px] bg-[#579BFC]  sm:h-6 lg:h-9  w-[2px] h-3'> </div>
    <div className='w-3 h-3 sm:h-6 sm:w-6 border flex justify-center items-center lg:h-9'><input type='checkbox' className='w-2 sm:w-4 sm:h-3 border-[#D0D4E4] opacity- h-[7px] '></input></div>
    {/* 
    <div className='h-4 w-12 border-b border-t text-[7px] flex justify-center  items-center'><span className='ml-2'>Status</span><PiWarningCircleLight className='ml-3' /></div>
        <div className='h-4 w-12 border-b border-t text-[7px] flex justify-center  items-center'><span className='ml-2'>Due date</span><PiWarningCircleLight className='ml-3' /></div> */}
  </div>
    <div className='flex'>
    <div className='border-[#579BFC] border lg:w-[6px] bg-[#579BFC]  sm:h-6 lg:h-9  w-[2px] h-3'> </div>
    <div className='w-3 h-3 sm:h-6 sm:w-6 border flex justify-center items-center lg:h-9'><input type='checkbox' className='w-2 sm:w-4 sm:h-3 border-[#D0D4E4] opacity- h-[7px] '></input></div>
    {/* 
    <div className='h-4 w-12 border-b border-t text-[7px] flex justify-center  items-center'><span className='ml-2'>Status</span><PiWarningCircleLight className='ml-3' /></div>
        <div className='h-4 w-12 border-b border-t text-[7px] flex justify-center  items-center'><span className='ml-2'>Due date</span><PiWarningCircleLight className='ml-3' /></div> */}
  </div>
  <div className='flex'>
    <div className='border-[#AECEFB] border lg:w-[6px] hover:border-[#579BFC] hover:bg-[#579BFC] bg-[#AECEFB] rounded-bl-3xl sm:h-6 lg:h-9  w-[2px] h-3 bg-'> </div>
    <div className='w-3 h-3 sm:h-6 sm:w-6 border flex justify-center items-center lg:h-9'><input type='checkbox' className='w-2 sm:w-4 sm:h-3 border-[#AECEFB] opacity- h-[7px] '></input></div>
    {/* 
    <div className='h-4 w-12 border-b border-t text-[7px] flex justify-center  items-center'><span className='ml-2'>Status</span><PiWarningCircleLight className='ml-3' /></div>
        <div className='h-4 w-12 border-b border-t text-[7px] flex justify-center  items-center'><span className='ml-2'>Due date</span><PiWarningCircleLight className='ml-3' /></div> */}
  </div>
  {/* first coumn end  */}
  
  
  </div>
  {/* 2nd column  */}
  <div>
    <div className='h-3 w-24 border- border-r sm:h-6 sm:w-44 sm:text-[12px] border-t text-[7px] lg:h-9 flex justify-center items-center lg:w-[288px]'>Task</div>
 <div className='flex'>
    <div className='h-3 w-[72px] border-b sm:h-6 sm:w-36 sm:text-[12px] border-r border-t text-[7px] lg:h-9 flex justify-center  items-center lg:w-[240px] gap-x-2 lg:gap-x-10 sm:gap-x-2'>

      <div className='h-3 w-[32px] sm:h-6 sm:w-[20px] sm:text-[12px]  text-[7px] lg:h-9 flex   ml-0 sm:-ml-8 items-center lg:-ml-18   lg:w-[200px] gap-x-3 sm:gap-x-2'>
 <Tippy content="Expand this item">
             <span> <MdOutlineKeyboardArrowRight className='text-[8px] sm:text-[15px] hover:bg-[[#636475] hover:rounded-sm  lg:text-[18px] text-[#636475] lg:h- lg:-mt-[2px] opacity-0 hover:opacity-100' /></span>
           
             </Tippy>            <h1 className='h-3 w-[20px] border-b  sm:h-6 sm:text-[12px]  text-[7px] lg:h-9 flex  lg:text-[15px] text-[#636475] -ml-5  items-center  sm:ml-10 lg:ml-14'>Task</h1>

        </div>
          <Tippy content="Open Task page">
               <div className="flex lg:gap-x-12 -gap-x-5 -ml-5 sm:-ml-10  sm:gap-x-3 lg:-ml-20 hover:opacity-100 opacity-0">
  <CgArrowsExpandRight className="text-[8px] sm:text-[12px]  mt-[2px] sm:mt-2 lg:text-[18px] text-[#636475] lg:h- lg:mt-3" />
  <h6 className="h-3 w-[20px] sm:h-6 sm:w-3 sm:text-[12px]  text-[7px] lg:h-9 flex ml-0  justify-center lg:-ml-6 items-center lg:mt-1 lg:w-[0px]">Open</h6>
</div> 
           
             </Tippy> 
      </div>
    <div className='h-3 w-6 border-b sm:h-6 sm:w-8 border-r  border-t text-[7px] flex justify-center lg:h-9  items-center lg:w-12'><BiMessageRoundedAdd  className="sm:text-[12px] hover:text-[#9AC5F3] lg:text-lg "/></div>
    </div>

   <div className='flex'>
    <div className='h-3 w-[72px] border-b sm:h-6 sm:w-36 sm:text-[12px] border-r border-t text-[7px] lg:h-9 flex justify-center  items-center lg:w-[240px] gap-x-2 lg:gap-x-10 sm:gap-x-2'>

      <div className='h-3 w-[32px] sm:h-6 sm:w-[20px] sm:text-[12px]  text-[7px] lg:h-9 flex   ml-0 sm:-ml-8 items-center lg:-ml-18   lg:w-[200px] gap-x-3 sm:gap-x-2'>
 <Tippy content="Expand this item">
             <span> <MdOutlineKeyboardArrowRight className='text-[8px] sm:text-[15px] hover:bg-[[#636475] hover:rounded-sm  lg:text-[18px] text-[#636475] lg:h- lg:-mt-[2px] opacity-0 hover:opacity-100' /></span>
           
             </Tippy>            <h1 className='h-3 w-[20px] border-b  sm:h-6 sm:text-[12px]  text-[7px] lg:h-9 flex  lg:text-[15px] text-[#636475] -ml-5  items-center  sm:ml-10 lg:ml-14'>Task</h1>

        </div>
         <Tippy content="Open Task page">
               <div className="flex lg:gap-x-12 -gap-x-5 -ml-5 sm:-ml-10  sm:gap-x-3 lg:-ml-20 hover:opacity-100 opacity-0">
  <CgArrowsExpandRight className="text-[8px] sm:text-[12px]  mt-[2px] sm:mt-2 lg:text-[18px] text-[#636475] lg:h- lg:mt-3" />
  <h6 className="h-3 w-[20px] sm:h-6 sm:w-3 sm:text-[12px]  text-[7px] lg:h-9 flex ml-0  justify-center lg:-ml-6 items-center lg:mt-1 lg:w-[0px]">Open</h6>
</div> 
           
             </Tippy>  
      </div>
    <div className='h-3 w-6 border-b sm:h-6 sm:w-8 border-r  border-t text-[7px] flex justify-center lg:h-9  items-center lg:w-12'><BiMessageRoundedAdd  className="hover:text-[#9AC5F3] sm:text-[12px] lg:text-lg "/></div>
    </div>
   <div className='flex'>
    <div className='h-3 w-[72px] border-b sm:h-6 sm:w-36 sm:text-[12px] border-r border-t text-[7px] lg:h-9 flex justify-center  items-center lg:w-[240px] gap-x-2 lg:gap-x-10 sm:gap-x-2'>

      <div className='h-3 w-[32px] sm:h-6 sm:w-[20px] sm:text-[12px]  text-[7px] lg:h-9 flex   ml-0 sm:-ml-8 items-center lg:-ml-18   lg:w-[200px] gap-x-3 sm:gap-x-2'>
 <Tippy content="Expand this item">
             <span> <MdOutlineKeyboardArrowRight className='text-[8px] sm:text-[15px] hover:bg-[[#636475] hover:rounded-sm  lg:text-[18px] text-[#636475] lg:h- lg:-mt-[2px] opacity-0 hover:opacity-100' /></span>
           
             </Tippy>              <h1 className='h-3 w-[20px] border-b  sm:h-6 sm:text-[12px]  text-[7px] lg:h-9 flex  lg:text-[15px] text-[#636475] -ml-5  items-center  sm:ml-10 lg:ml-14'>Task</h1>

        </div>
     <Tippy content="Open Task page">
               <div className="flex lg:gap-x-12 -gap-x-5 -ml-5 sm:-ml-10  sm:gap-x-3 lg:-ml-20 hover:opacity-100 opacity-0">
  <CgArrowsExpandRight className="text-[8px] sm:text-[12px]  mt-[2px] sm:mt-2 lg:text-[18px] text-[#636475] lg:h- lg:mt-3" />
  <h6 className="h-3 w-[20px] sm:h-6 sm:w-3 sm:text-[12px]  text-[7px] lg:h-9 flex ml-0  justify-center lg:-ml-6 items-center lg:mt-1 lg:w-[0px]">Open</h6>
</div> 
           
             </Tippy> 
      </div>
    <div className='h-3 w-6 border-b sm:h-6 sm:w-8 border-r  border-t text-[7px] flex justify-center lg:h-9  items-center lg:w-12'><BiMessageRoundedAdd  className="hover:text-[#9AC5F3] sm:text-[12px] lg:text-lg "/></div>
    </div>
   <div className='flex'>
    <div className='h-3 w-[72px] border-b sm:h-6 sm:w-36 sm:text-[12px] border-r border-t text-[7px] lg:h-9 flex justify-center  items-center lg:w-[240px] gap-x-2 lg:gap-x-10 sm:gap-x-2'>

      <div className='h-3 w-[32px] sm:h-6 sm:w-[20px] sm:text-[12px]  text-[7px] lg:h-9 flex   ml-0 sm:-ml-8 items-center lg:-ml-18   lg:w-[200px] gap-x-3 sm:gap-x-2'>
 <Tippy content="Expand this item">
             <span> <MdOutlineKeyboardArrowRight className='text-[8px] sm:text-[15px] hover:bg-[[#636475] hover:rounded-sm  lg:text-[18px] text-[#636475] lg:h- lg:-mt-[2px] opacity-0 hover:opacity-100' /></span>
           
             </Tippy>              <h1 className='h-3 w-[20px] border-b  sm:h-6 sm:text-[12px]  text-[7px] lg:h-9 flex  lg:text-[15px] text-[#636475] -ml-5  items-center  sm:ml-10 lg:ml-14'>Task</h1>

        </div>
     <Tippy content="Open Task page">
               <div className="flex lg:gap-x-12 -gap-x-5 -ml-5 sm:-ml-10  sm:gap-x-3 lg:-ml-20 hover:opacity-100 opacity-0">
  <CgArrowsExpandRight className="text-[8px] sm:text-[12px]  mt-[2px] sm:mt-2 lg:text-[18px] text-[#636475] lg:h- lg:mt-3" />
  <h6 className="h-3 w-[20px] sm:h-6 sm:w-3 sm:text-[12px]  text-[7px] lg:h-9 flex ml-0  justify-center lg:-ml-6 items-center lg:mt-1 lg:w-[0px]">Open</h6>
</div> 
           
             </Tippy> 
      </div>
    <div className='h-3 w-6 border-b sm:h-6 sm:w-8 border-r  border-t text-[7px] flex justify-center lg:h-9  items-center lg:w-12'><BiMessageRoundedAdd  className="hover:text-[#9AC5F3] sm:text-[12px] lg:text-lg "/></div>
    </div>
   <div className='flex'>
    <div className='h-3 w-[72px] border-b sm:h-6 sm:w-36 sm:text-[12px] border-r border-t text-[7px] lg:h-9 flex justify-center  items-center lg:w-[240px] gap-x-2 lg:gap-x-10 sm:gap-x-2'>

      <div className='h-3 w-[32px] sm:h-6 sm:w-[20px] sm:text-[12px]  text-[7px] lg:h-9 flex   ml-0 sm:-ml-8 items-center lg:-ml-18   lg:w-[200px] gap-x-3 sm:gap-x-2'>
  <Tippy content="Expand this item">
             <span> <MdOutlineKeyboardArrowRight className='text-[8px] sm:text-[15px] hover:bg-[[#636475] hover:rounded-sm  lg:text-[18px] text-[#636475] lg:h- lg:-mt-[2px] opacity-0 hover:opacity-100' /></span>
           
             </Tippy>           <h1 className='h-3 w-[20px] border-b  sm:h-6 sm:text-[12px]  text-[7px] lg:h-9 flex  lg:text-[15px] text-[#636475] -ml-5  items-center  sm:ml-10 lg:ml-14'>Task</h1>

        </div>
     <Tippy content="Open Task page">
               <div className="flex lg:gap-x-12 -gap-x-5 -ml-5 sm:-ml-10  sm:gap-x-3 lg:-ml-20 hover:opacity-100 opacity-0">
  <CgArrowsExpandRight className="text-[8px] sm:text-[12px]  mt-[2px] sm:mt-2 lg:text-[18px] text-[#636475] lg:h- lg:mt-3" />
  <h6 className="h-3 w-[20px] sm:h-6 sm:w-3 sm:text-[12px]  text-[7px] lg:h-9 flex ml-0  justify-center lg:-ml-6 items-center lg:mt-1 lg:w-[0px]">Open</h6>
</div> 
           
             </Tippy>
      </div>
    <div className='h-3 w-6 border-b sm:h-6 sm:w-8 border-r  border-t text-[7px] flex justify-center lg:h-9  items-center lg:w-12'><BiMessageRoundedAdd  className="hover:text-[#9AC5F3] sm:text-[12px] lg:text-lg "/></div>
    </div>
  <div className='flex'>
    <div className='h-3 w-[72px] border-b sm:h-6 sm:w-36 sm:text-[12px] border-r border-t text-[7px] lg:h-9 flex justify-center  items-center lg:w-[240px] gap-x-2 lg:gap-x-10 sm:gap-x-2'>

      <div className='h-3 w-[32px] sm:h-6 sm:w-[20px] sm:text-[12px]  text-[7px] lg:h-9 flex   ml-0 sm:-ml-8 items-center lg:-ml-18   lg:w-[200px] gap-x-3 sm:gap-x-2'>
 <Tippy content="Expand this item">
             <span> <MdOutlineKeyboardArrowRight className='text-[8px] sm:text-[15px] hover:bg-[[#636475] hover:rounded-sm  lg:text-[18px] text-[#636475] lg:h- lg:-mt-[2px] opacity-0 hover:opacity-100' /></span>
           
             </Tippy>             <h1 className='h-3 w-[20px] border-b  sm:h-6 sm:text-[12px]  text-[7px] lg:h-9 flex  lg:text-[15px] text-[#636475] -ml-5  items-center  sm:ml-10 lg:ml-14'>Task</h1>

        </div>
     <Tippy content="Open Task page">
               <div className="flex lg:gap-x-12 -gap-x-5 -ml-5 sm:-ml-10  sm:gap-x-3 lg:-ml-20 hover:opacity-100 opacity-0">
  <CgArrowsExpandRight className="text-[8px] sm:text-[12px]  mt-[2px] sm:mt-2 lg:text-[18px] text-[#636475] lg:h- lg:mt-3" />
  <h6 className="h-3 w-[20px] sm:h-6 sm:w-3 sm:text-[12px]  text-[7px] lg:h-9 flex ml-0  justify-center lg:-ml-6 items-center lg:mt-1 lg:w-[0px]">Open</h6>
</div> 
           
             </Tippy> 
      </div>
    <div className='h-3 w-6 border-b sm:h-6 sm:w-8 border-r  border-t text-[7px] flex justify-center lg:h-9  items-center lg:w-12'><BiMessageRoundedAdd  className="hover:text-[#9AC5F3] sm:text-[12px] lg:text-lg "/></div>
    </div>
   <div className='flex'>
    <div className='h-3 w-[72px] border-b sm:h-6 sm:w-36 sm:text-[12px] border-r border-t text-[7px] lg:h-9 flex justify-center  items-center lg:w-[240px] gap-x-2 lg:gap-x-10 sm:gap-x-2'>

      <div className='h-3 w-[32px] sm:h-6 sm:w-[20px] sm:text-[12px]  text-[7px] lg:h-9 flex   ml-0 sm:-ml-8 items-center lg:-ml-18   lg:w-[200px] gap-x-3 sm:gap-x-2'>
 <Tippy content="Expand this item">
             <span> <MdOutlineKeyboardArrowRight className='text-[8px] sm:text-[15px] hover:bg-[[#636475] hover:rounded-sm  lg:text-[18px] text-[#636475] lg:h- lg:-mt-[2px] opacity-0 hover:opacity-100' /></span>
           
             </Tippy>              <h1 className='h-3 w-[20px] border-b  sm:h-6 sm:text-[12px]  text-[7px] lg:h-9 flex  lg:text-[15px] text-[#636475] -ml-5  items-center  sm:ml-10 lg:ml-14'>Task</h1>

        </div>
      <Tippy content="Open Task page">
               <div className="flex lg:gap-x-12 -gap-x-5 -ml-5 sm:-ml-10  sm:gap-x-3 lg:-ml-20 hover:opacity-100 opacity-0">
  <CgArrowsExpandRight className="text-[8px] sm:text-[12px]  mt-[2px] sm:mt-2 lg:text-[18px] text-[#636475] lg:h- lg:mt-3" />
  <h6 className="h-3 w-[20px] sm:h-6 sm:w-3 sm:text-[12px]  text-[7px] lg:h-9 flex ml-0  justify-center lg:-ml-6 items-center lg:mt-1 lg:w-[0px]">Open</h6>
</div> 
           
             </Tippy>
      </div>
    <div className='h-3 w-6 border-b sm:h-6 sm:w-8 border-r  border-t text-[7px] flex justify-center lg:h-9  items-center lg:w-12'><BiMessageRoundedAdd  className="sm:text-[12px] lg:text-lg "/></div>
    </div>
    <div className='flex'>
    <div className='h-3 w-[97px]  border-b sm:h-6 sm:w-36 lg:w-72  sm:text-[12px]  border-t text-[7px] lg:h-9  flex justify-start items-center'><span className='ml-4' >+ Add task</span></div>
   
    </div>
  </div>
  {/* 3rd column  */}
   
  <div className=' '> 
    <div className='h-3 w-[72px] sm:h-6 sm:w-36 lg:w-[144px]  sm:text-[12px] border-t text-[7px] lg:h-9  flex justify-end items-center'><span>Status</span><PiWarningCircleLight className="lg:text-[13px] ml-11" /></div>
<div className='flex'>
    <div className='h-3 w-[72px] border-b sm:h-6 sm:w-36 sm:text-[12px] border-r border-t text-[7px] lg:h-9 flex justify-center items-center text-white bg-[#FDAB3D]'>Working on it</div>
    </div>
    <div className='flex'>
    <div className='h-3 w-[72px] border-b sm:h-6 sm:w-36 sm:text-[12px] border-r lg:h-9 border-t text-[7px] flex justify-center items-center  text-white bg-[#00C875]'>Done</div>
    </div>
    <div className='flex'>
    <div className='h-3 w-[72px] border-b sm:h-6 sm:w-36 sm:text-[12px] border-r border-t lg:h-9 text-[7px] flex justify-center items-center  text-white bg-[#DF2F4A]'>Stuck</div>
    </div>
    <div className='flex'>
    <div className='h-3 w-[72px] border-b sm:h-6 sm:w-36 sm:text-[12px] border-r border-t text-[7px] lg:h-9 flex justify-center items-center  text-white  bg-[#FDAB3D]'>Working on it</div>
    </div>
    <div className='flex'>
    <div className='h-3 w-[72px] border-b sm:h-6 sm:w-36 sm:text-[12px] border-r border-t text-[7px] lg:h-9 flex justify-center items-center  text-white bg-[#00C875]'>Done</div>
    </div>
    <div className='flex'>
    <div className='h-3 w-[72px] border-b sm:h-6 sm:w-36 sm:text-[12px] border-r border-t text-[7px] lg:h-9 flex justify-center items-center  text-white bg-[#DF2F4A]'>Stuck</div>
    </div>
    <div className='flex'>
    <div className='h-3 w-[72px] border-b sm:h-6 sm:w-36 sm:text-[12px] border-r border-t text-[7px] lg:h-9 flex justify-center items-center  text-white bg-[#DF2F4A]'>Stuck</div>
    
    </div>
    <div className='flex'>
    <div className='h-3 w-[74px]  border-b sm:h-6 sm:w-36 sm:text-[12px]  border-t text-[7px] lg:h-9  flex justify-center items-center'></div>
    </div>
     <div className='flex'>
    <div className='h-3 w-[72px] border-b sm:h-6 border-l rounded-bl-md  sm:w-36 sm:text-[12px] border-r border-t text-[7px] lg:h-9 flex justify-center items-center'>
  {/* <div className=" hover:bg-[#ABABAB] lg:h-6 lg:w-32 border  w-14 h-2 sm:h-4 md:w-28 text-white  items-center justify-center flex w-inherit bg-[#C4C4C4]">

      </div> */}

   
      
           <Tippy content="Done 2/6 33.3%">
           <div  className='lg:h-6 h-2 lg:w-[42px] sm:h-4  hover:sm:h-5 hover:h-[10px] hover:border lg:hover:rounded-[3px] lg:hover:w-[45px]  lg:hover:h-8 bg-[#05C878]'></div>
          
             </Tippy>
     
      
           <Tippy content="Working on it 2/6 33.3%">
           <div  className='lg:h-6 h-2 lg:w-[42px] sm:h-4  hover:sm:h-5 hover:h-[10px] hover:border lg:hover:rounded-[3px] lg:hover:w-[45px] lg:hover:h-8 bg-[#FDAB3D]'></div>
          
             </Tippy>

      
           <Tippy content="Stuck 2/6 33.3%">
             <div  className='lg:h-6 h-2 lg:w-[42px] sm:h-4  hover:sm:h-5 hover:h-[10px] hover:border lg:hover:rounded-[3px] lg:hover:w-[45px] lg:hover:h-8 bg-[#DF2F4A]'></div>
          
             </Tippy>
      

    </div>
    
    </div>
    
  </div>
  {/* 3rd column */}
  {/* 4th column  */}
  <div className=' '> 
    <div className='h-3 w-[72px] sm:h-6 sm:w-36 lg:w-[144px]  sm:text-[12px] border-r border-t text-[7px] lg:h-9  flex justify-end items-center'><span>Due date </span><PiWarningCircleLight className="lg:text-[13px] ml-11" /></div>
<div className='flex'>    
    <div className='h-3 w-[72px] border-b sm:h-6 sm:w-36 sm:text-[12px] border-r border-t text-[7px] lg:h-9 flex justify-start items-center '><Image src={sign} className="lg:text-[8px] lg:w-4 border rounded-full   w-[5px] sm:w-4  ml-1 text-white bg-[#DE394D]" /><span className= 'ml-4 sm:ml-8 lg:ml-7'>13 sep   </span></div>
    </div>
    <div className='flex'>
    <div className='h-3 w-[72px] border-b sm:h-6 sm:w-36 sm:text-[12px] border-r lg:h-9 border-t text-[7px] flex justify-start items-center'><Image src={sign} className="lg:text-[8px] lg:w-4 border rounded-full   w-[5px] sm:w-4  ml-1 text-white bg-[#DE394D]" /><span className= 'ml-4 sm:ml-8 lg:ml-7'>13 sep   </span></div>
    </div>
    <div className='flex'>
    <div className='h-3 w-[72px] border-b sm:h-6 sm:w-36 sm:text-[12px] border-r border-t lg:h-9 text-[7px] flex justify-start items-center'><Image src={sign} className="lg:text-[8px] lg:w-4 border rounded-full   w-[5px] sm:w-4  ml-1 text-white bg-[#DE394D]" /><span className= 'ml-4 sm:ml-8 lg:ml-7'>13 sep   </span></div>
    </div>
    <div className='flex'>
    <div className='h-3 w-[72px] border-b sm:h-6 sm:w-36 sm:text-[12px] border-r border-t text-[7px] lg:h-9 flex justify-start items-center'><Image src={sign} className="lg:text-[8px] lg:w-4 border rounded-full   w-[5px] sm:w-4  ml-1 text-white bg-[#DE394D]" /><span className= 'ml-4 sm:ml-8 lg:ml-7'>13 sep   </span></div>
    </div>
    <div className='flex'>
    <div className='h-3 w-[72px] border-b sm:h-6 sm:w-36 sm:text-[12px] border-r border-t text-[7px] lg:h-9 flex justify-start items-center'><Image src={sign} className="lg:text-[8px] lg:w-4 border rounded-full   w-[5px] sm:w-4  ml-1 text-white bg-[#DE394D]" /><span className= 'ml-4 sm:ml-8 lg:ml-7'>13 sep   </span></div>
    </div>
    <div className='flex'>
    <div className='h-3 w-[72px] border-b sm:h-6 sm:w-36 sm:text-[12px] border-r border-t text-[7px] lg:h-9 flex justify-start items-center'><Image src={sign} className="lg:text-[8px] lg:w-4 border rounded-full   w-[5px] sm:w-4  ml-1 text-white bg-[#DE394D]" /><span className= 'ml-4 sm:ml-8 lg:ml-7'>13 sep   </span></div>
    </div>
    <div className='flex'>
    <div className='h-3 w-[72px] border-b sm:h-6 sm:w-36 sm:text-[12px] border-r border-t text-[7px] lg:h-9 flex justify-start items-center'><Image src={sign} className="lg:text-[8px] lg:w-4 border rounded-full   w-[5px] sm:w-4  ml-1 text-white bg-[#DE394D]" /><span className= 'ml-4 sm:ml-8 lg:ml-7'>13 sep   </span></div>
    
    </div>
    <div className='flex'>
    <div className='h-3 w-[74px]  border-b sm:h-6 sm:w-36 sm:text-[12px]  border-t text-[7px] lg:h-9  flex justify-center items-center'></div>   
    </div>
     <div className='flex'>
    <div className='h-3 w-[72px] border-b sm:h-6 sm:w-36 sm:text-[12px] border-r border-t text-[7px] lg:h-9 flex justify-center items-center'>
      <div className=" hover:bg-[#257DFB] lg:h-6 lg:w-28 border rounded-xl w-14 h-2 sm:h-4 md:w-28 text-white  items-center justify-center flex w-inherit bg-[#579BFC]">
13 Sep
      </div>
    </div>
    
    </div>
  </div>
  {/* 4th column end  */}
  {/* 5th column */}
  <div className=' '> 
    <div className='h-3 w-[72px] sm:h-6 sm:w-36 lg:w-[144px]  sm:text-[12px] border-t border-r text-[7px] lg:h-9  flex justify-center items-center'>Text</div>
<div className='flex'>
    <div className='h-3 w-[72px] border-b sm:h-6 sm:w-36 sm:text-[12px] border-r border-t text-[7px] lg:h-9 flex justify-center items-center'>Done Gracefully</div>
    </div>
    <div className='flex'>
    <div className='h-3 w-[72px] border-b sm:h-6 sm:w-36 sm:text-[12px] border-r lg:h-9 border-t text-[7px] flex justify-center items-center'>Logic is done</div>
    </div>
    <div className='flex'>
    <div className='h-3 w-[72px] border-b sm:h-6 sm:w-36 sm:text-[12px] border-r border-t lg:h-9 text-[7px] flex justify-center items-center'>important</div>
    </div>
    <div className='flex'>
    <div className='h-3 w-[72px] border-b sm:h-6 sm:w-36 sm:text-[12px] border-r border-t text-[7px] lg:h-9 flex justify-center items-center'>important</div>
    </div>
    <div className='flex'>
    <div className='h-3 w-[72px] border-b sm:h-6 sm:w-36 sm:text-[12px] border-r border-t text-[7px] lg:h-9 flex justify-center items-center'>required</div>
    </div>
    <div className='flex'>
    <div className='h-3 w-[72px] border-b sm:h-6 sm:w-36 sm:text-[12px] border-r border-t text-[7px] lg:h-9 flex justify-center items-center'>Logic is done</div>
    </div>
    <div className='flex'>
    <div className='h-3 w-[72px] border-b sm:h-6 sm:w-36 sm:text-[12px] border-r border-t text-[7px] lg:h-9 flex justify-center items-center'>required</div>
    
    </div>
    <div className='flex'>
    <div className='h-3 w-[74px]  border-b sm:h-6 sm:w-36 sm:text-[12px]  border-t text-[7px] lg:h-9  flex justify-center items-center'></div>
   
    </div>
     <div className='flex'>
    <div className='h-3 w-[72px] border-b sm:h-6 sm:w-36 sm:text-[12px] border-r border-t text-[7px] lg:h-9 flex justify-center items-center'>Task</div>
    
    </div>
  </div>
  {/* 5th end  */}
  <div className=' '> 
    <div className='h-3 w-[72px] sm:h-6 sm:w-36 lg:w-[144px]  sm:text-[12px] border-r border-t text-[7px] lg:h-9  flex justify-center items-center'>Link</div>
<div className='flex'>
    <div className='h-3 w-[72px] border-b sm:h-6 sm:w-36 sm:text-[12px] border-r border-t text-[7px] lg:h-9 flex justify-center items-center'><a href="https://www.youtube.com/" className='text-[#0073EA]'>Youtube</a></div>
    </div>
    <div className='flex'>
    <div className='h-3 w-[72px] border-b sm:h-6 sm:w-36 sm:text-[12px] border-r lg:h-9 border-t text-[7px] flex justify-center items-center'><a href="https://www.youtube.com/" className='text-[#0073EA]'>Youtube</a></div>
    </div>
    <div className='flex'>
    <div className='h-3 w-[72px] border-b sm:h-6 sm:w-36 sm:text-[12px] border-r border-t lg:h-9 text-[7px] flex justify-center items-center'><a href="https://www.youtube.com/" className='text-[#0073EA]'>Youtube</a></div>
    </div>
    <div className='flex'>
    <div className='h-3 w-[72px] border-b sm:h-6 sm:w-36 sm:text-[12px] border-r border-t text-[7px] lg:h-9 flex justify-center items-center'><a href="https://www.youtube.com/" className='text-[#0073EA]'>Youtube</a></div>
    </div>
    <div className='flex'>
    <div className='h-3 w-[72px] border-b sm:h-6 sm:w-36 sm:text-[12px] border-r border-t text-[7px] lg:h-9 flex justify-center items-center'><a href="https://www.youtube.com/" className='text-[#0073EA]'>Youtube</a></div>
    </div>
    <div className='flex'>
    <div className='h-3 w-[72px] border-b sm:h-6 sm:w-36 sm:text-[12px] border-r border-t text-[7px] lg:h-9 flex justify-center items-center'><a href="https://www.youtube.com/" className='text-[#0073EA]'>Youtube</a></div>
    </div>
    <div className='flex'>
    <div className='h-3 w-[72px] border-b sm:h-6 sm:w-36 sm:text-[12px] border-r border-t text-[7px] lg:h-9 flex justify-center items-center'><a href="https://www.youtube.com/" className='text-[#0073EA]'>Youtube</a></div>
    
    </div>
    <div className='flex'>
    <div className='h-3 w-[74px]  border-b sm:h-6 sm:w-36 sm:text-[12px]  border-t text-[7px] lg:h-9  flex justify-center items-center'></div>
   
    </div>
     <div className='flex'>
    <div className='h-3 w-[72px] border-b sm:h-6 sm:w-36 sm:text-[12px] border-r lg:h-9 border-t text-[7px] flex justify-center items-center'>Task</div>
    </div>
  </div>
  {/* 6th end */}
  <div className=' '> 
    <div className='h-3 w-[72px] sm:h-6 sm:w-36 lg:w-[144px]  sm:text-[12px] border-t text-[7px] lg:h-9  flex border-r justify-center items-center'>People</div>
<div className='flex'>
    <div className='h-3 w-[72px] border-b sm:h-6 sm:w-36 sm:text-[12px] border-r border-t text-[7px] lg:h-9 flex justify-center items-center'><Image src={people} alt='' className="lg:w-8 w-2 md:w-5"/></div>
    </div>
    <div className='flex'>
    <div className='h-3 w-[72px] border-b sm:h-6 sm:w-36 sm:text-[12px] border-r lg:h-9 border-t text-[7px] flex justify-center items-center'><Image src={people} alt='' className="lg:w-8 w-2 md:w-5"/></div>
    </div>
    <div className='flex'>
    <div className='h-3 w-[72px] border-b sm:h-6 sm:w-36 sm:text-[12px] border-r border-t lg:h-9 text-[7px] flex justify-center items-center'><Image src={people} alt='' className="lg:w-8 w-2 md:w-5"/></div>
    </div>
    <div className='flex'>
    <div className='h-3 w-[72px] border-b sm:h-6 sm:w-36 sm:text-[12px] border-r border-t text-[7px] lg:h-9 flex justify-center items-center'><Image src={people} alt='' className="lg:w-8 w-2 md:w-5"/></div>
    </div>
    <div className='flex'>
    <div className='h-3 w-[72px] border-b sm:h-6 sm:w-36 sm:text-[12px] border-r border-t text-[7px] lg:h-9 flex justify-center items-center'><Image src={people} alt='' className="lg:w-8 w-2 md:w-5"/></div>
    </div>
    <div className='flex'>
    <div className='h-3 w-[72px] border-b sm:h-6 sm:w-36 sm:text-[12px] border-r border-t text-[7px] lg:h-9 flex justify-center items-center'><Image src={people} alt='' className="lg:w-8 w-2 md:w-5"/></div>
    </div>
    <div className='flex'>
    <div className='h-3 w-[72px] border-b sm:h-6 sm:w-36 sm:text-[12px] border-r border-t text-[7px] lg:h-9 flex justify-center items-center'><Image src={people} alt='' className="lg:w-8 w-2 md:w-5"/></div>
    
    </div>
    <div className='flex'>
    <div className='h-3 w-[74px]  border-b sm:h-6 sm:w-36 sm:text-[12px]  border-t text-[7px] lg:h-9  flex justify-center items-center'></div>
   
    </div>
     <div className='flex'>
    <div className='h-3 w-[72px] border-b sm:h-6 sm:w-36 sm:text-[12px] border-r border-t text-[7px] lg:h-9 flex justify-center items-center'><Image src={people} alt='' className="lg:w-8 w-2 md:w-5"/></div>
    </div>
  </div>
{/* 7th end */}

  {/* 7th end */}
  <div className=' '> 
    <div className='h-3 w-[72px] sm:h-6 sm:w-36 lg:w-[144px]  sm:text-[12px] border-t text-[7px] lg:h-9 border-r  flex justify-center items-center'><span>Number</span></div>
<div className='flex'>
    <div className='h-3 w-[72px] border-b sm:h-6 sm:w-36 sm:text-[12px] border-r border-t text-[7px] lg:h-9 flex justify-center items-center'>15</div>
    </div>
    <div className='flex'>
    <div className='h-3 w-[72px] border-b sm:h-6 sm:w-36 sm:text-[12px] border-r lg:h-9  text-[7px] flex justify-center items-center'>20</div>
    </div>
    <div className='flex'>
    <div className='h-3 w-[72px] border-b sm:h-6 sm:w-36 sm:text-[12px] border-r  lg:h-9 text-[7px] flex justify-center items-center'>50</div>
    </div>
    <div className='flex'>
    <div className='h-3 w-[72px] border-b sm:h-6 sm:w-36 sm:text-[12px] border-r text-[7px] lg:h-9 flex justify-center items-center'>60</div>
    </div>
    <div className='flex'>
    <div className='h-3 w-[72px] border-b sm:h-6 sm:w-36 sm:text-[12px] border-r  text-[7px] lg:h-9 flex justify-center items-center'>90</div>
    </div>
    <div className='flex'>
    <div className='h-3 w-[72px] border-b sm:h-6 sm:w-36 sm:text-[12px] border-r  text-[7px] lg:h-9 flex justify-center items-center'>200</div>
    </div>
    <div className='flex'>
    <div className='h-3 w-[72px] border-b sm:h-6 sm:w-36 sm:text-[12px] border-r  text-[7px] lg:h-9 flex justify-center items-center'>90</div>
    
    </div>
    <div className='flex'>
    <div className='h-3 w-[74px]  border-b sm:h-6 sm:w-36 sm:text-[12px]   text-[7px] lg:h-9  flex justify-center items-center'></div>
   
    </div>
     <div className='flex'>
    <div className='h-3 w-[72px] border-b sm:h-6 sm:w-36 sm:text-[12px] border-r border-t lg:h-9 text-[7px] flex justify-center items-center'>  <div>
        <h1>435</h1><h1 className="text-[#3B93EF]">sum</h1>
        </div>
        </div>
    </div>
  </div>
  {/* 8 end  */}
  <div className=' '> 
    <div className='h-3 w-[72px] sm:h-6 sm:w-36 lg:w-[144px]  sm:text-[12px] border-t text-[7px] lg:h-9  flex justify-start pl-2 lg:text-xl items-center'><span>+</span></div>
<div className='flex'>
    <div className='h-3 w-[72px] border-b sm:h-6 sm:w-36 sm:text-[12px]  border-t text-[7px] lg:h-9 flex justify-center items-center'></div>
    </div>
    <div className='flex'>
    <div className='h-3 w-[72px] border-b sm:h-6 sm:w-36 sm:text-[12px]  lg:h-9  text-[7px] flex justify-center items-center'></div>
    </div>
    <div className='flex'>
    <div className='h-3 w-[72px] border-b sm:h-6 sm:w-36 sm:text-[12px]   lg:h-9 text-[7px] flex justify-center items-center'></div>
    </div>
    <div className='flex'>
    <div className='h-3 w-[72px] border-b sm:h-6 sm:w-36 sm:text-[12px] text-[7px] lg:h-9 flex justify-center items-center'></div>
    </div>
    <div className='flex'>
    <div className='h-3 w-[72px] border-b sm:h-6 sm:w-36 sm:text-[12px]  text-[7px] lg:h-9 flex justify-center items-center'></div>
    </div>
    <div className='flex'>
    <div className='h-3 w-[72px] border-b sm:h-6 sm:w-36 sm:text-[12px]  text-[7px] lg:h-9 flex justify-center items-center'></div>
    </div>
    <div className='flex'>
    <div className='h-3 w-[72px] border-b sm:h-6 sm:w-36 sm:text-[12px]  text-[7px] lg:h-9 flex justify-center items-center'></div>
    
    </div>
    <div className='flex'>
    <div className='h-3 w-[74px]  border-b sm:h-6 sm:w-36 sm:text-[12px]  text-[7px] lg:h-9  flex justify-center items-center'></div>
   
    </div>
     <div className='flex'>
    <div className='h-3 w-[74px]  border-b sm:h-6 sm:w-36 sm:text-[12px]   text-[7px] lg:h-9  flex justify-center items-center'></div>
   
    </div>
    
    
  </div>





  


  
</div>
  <div className='flex lg:mt-5 mt-3 sm:mt-5 lg:gap-x-3 lg:ml-2 sm:-ml-2 sm:gap-x-1' >
             <HiOutlineDotsHorizontal className='text-[8px] sm:text-[12px] opacity- mt-2   sm:mt-2 lg:text-[18px]  hover:bg-[#F0F0F1] lg:h-  hover:rounded-md lg:mt-3  ' />
              <FaAngleDown className='text-[10px] mt-2  text-[#9CC4FD]  lg:text-[18px] sm:mt-2 sm:text-[14px] sm:ml-[2px] lg:mt-3 '/>
            <h1 className='text-[#13CA7E] sm:text-lg  lg:mt-2 text-[8px] mt-2 sm:mt-0 '>Completed</h1>
            <h1 className='text-[#6A6B7C] lg:mt-3 lg:text-[15px] sm:text-[12px] md:text-[15px] sm:mt-1 text-[8px] mt-2'>0 Tasks</h1>

            </div>
<div className='flex  mt-2 sm:mt-3 lg:mt-2 ml-1 lg:ml-8 '>
{/* <div className='flex  mt-10 ml-1 lg:ml-8 w-[300px] sm:w-[520px] lg:w-[940px] overflow-auto'> */}
  <div className='flex flex-col w-96'>
  {/* first column */}
  <div className='flex'>
    <div className='border-[#00C875] lg:h-9 border lg:w-[6px]  bg-[#00C875] rounded-tl-3xl sm:h-6  w-[2px] h-3'> </div>
    <div className='w-3 h-3 sm:h-6 sm:w-6 border lg:h-9  flex justify-center items-center'><input type='checkbox' className='w-2 sm:w-4 sm:h-3 border-[#D0D4E4] opacity- h-[7px] '></input></div>
    {/* 
    <div className='h-4 w-12 border-b border-t text-[7px] flex justify-center  items-center'><span className='ml-2'>Status</span><PiWarningCircleLight className='ml-3' /></div>
        <div className='h-4 w-12 border-b border-t text-[7px] flex justify-center  items-center'><span className='ml-2'>Due date</span><PiWarningCircleLight classNsame='ml-3' /></div> */}
  </div>
    <div className='flex'>
    <div className='border-[#7FE3BA] hover:bg-[#00C875] rounded-bl-md hover:border-[#00C875] lg:w-[6px] border lg:h-9 bg-[#7FE3BA]  sm:h-6  w-[2px] h-3'> </div>
    <div className='w-3 h-3 sm:h-6 sm:w-6 border lg:h-9 flex justify-center items-center'><input type='checkbox' className='w-2 sm:w-4 sm:h-3 border-[#D0D4E4] opacity- h-[7px] '></input></div>
    {/* 
    <div className='h-4 w-12 border-b border-t text-[7px] flex justify-center  items-center'><span className='ml-2'>Status</span><PiWarningCircleLight className='ml-3' /></div>
        <div className='h-4 w-12 border-b border-t text-[7px] flex justify-center  items-center'><span className='ml-2'>Due date</span><PiWarningCircleLight className='ml-3' /></div> */}
  </div>
  </div>
 

  {/* 2nd column  */}
  <div>
    <div className='h-3 w-24 border- border-r sm:h-6 sm:w-44 sm:text-[12px] border-t text-[7px] lg:h-9 flex justify-center items-center lg:w-[288px]'>Task</div>

   
   
   
    <div className='flex'>
    <div className='h-3 w-[97px]  border-b sm:h-6 sm:w-36 lg:w-72  sm:text-[12px]  border-t text-[7px] lg:h-9  flex justify-start items-center'><span className='ml-4' >+ Add task</span></div>
   
    </div>
  </div>
  {/* 3rd column  */}
   
  <div className=' '> 
    <div className='h-3 w-[72px] sm:h-6 sm:w-36 lg:w-[144px]  sm:text-[12px] border-t text-[7px] lg:h-9  flex justify-end items-center'><span>Status</span><PiWarningCircleLight className="lg:text-[13px] ml-11" /></div>

   
   
    <div className='flex'>
    <div className='h-3 w-[74px]  border-b sm:h-6 sm:w-36 sm:text-[12px]  border-t text-[7px] lg:h-9  flex justify-center items-center'></div>
    </div>
     <div className='flex'>
    <div className='h-3 w-[72px] border-b sm:h-6 border-l rounded-bl-md  sm:w-36 sm:text-[12px] border-r border-t text-[7px] lg:h-9 flex justify-center items-center'>
       <div className=" hover:bg-[#ABABAB] lg:h-6 lg:w-32 border  w-14 h-2 sm:h-4 md:w-28 text-white  items-center justify-center flex w-inherit bg-[#C4C4C4]">

      </div>
           

    </div>
    
    </div>
    
  </div>
  {/* 3rd column */}
  {/* 4th column  */}
  <div className=' '> 
    <div className='h-3 w-[72px] sm:h-6 sm:w-36 lg:w-[144px]  sm:text-[12px] border-r border-t text-[7px] lg:h-9  flex justify-end items-center'><span>Due date </span><PiWarningCircleLight className="lg:text-[13px] ml-11" />
    </div>

  
    
    <div className='flex'>
    <div className='h-3 w-[74px]  border-b sm:h-6 sm:w-36 sm:text-[12px]  border-t text-[7px] lg:h-9  flex justify-center items-center'></div>   
    </div>
     <div className='flex'>
    <div className='h-3 w-[72px] border-b sm:h-6 sm:w-36 sm:text-[12px] border-r border-t text-[7px] lg:h-9 flex justify-center items-center'>
      <div className=" hover:bg-[#ABABAB] lg:h-6 lg:w-28 border rounded-xl w-14 h-2 sm:h-4 md:w-28 text-white  items-center justify-center flex w-inherit bg-[#C4C4C4]">
-
      </div>
      </div>
    
    </div>
  </div>
  {/* 4th column end  */}
  {/* 5th column */}
  <div className=' '> 
    <div className='h-3 w-[72px] sm:h-6 sm:w-36 lg:w-[144px]  sm:text-[12px] border-t border-r text-[7px] lg:h-9  flex justify-center items-center'>Text</div>

   
    <div className='flex'>
    <div className='h-3 w-[74px]  border-b sm:h-6 sm:w-36 sm:text-[12px]  border-t text-[7px] lg:h-9  flex justify-center items-center'></div>
   
    </div>
     <div className='flex'>
    <div className='h-3 w-[72px] border-b sm:h-6 sm:w-36 sm:text-[12px] border-r border-t text-[7px] lg:h-9 flex justify-center items-center'>Task</div>
    
    </div>
  </div>
  {/* 5th end  */}
  <div className=' '> 
    <div className='h-3 w-[72px] sm:h-6 sm:w-36 lg:w-[144px]  sm:text-[12px] border-r border-t text-[7px] lg:h-9  flex justify-center items-center'>Link</div>

   
    <div className='flex'>
    <div className='h-3 w-[74px]  border-b sm:h-6 sm:w-36 sm:text-[12px]  border-t text-[7px] lg:h-9  flex justify-center items-center'></div>
   
    </div>
     <div className='flex'>
    <div className='h-3 w-[72px] border-b sm:h-6 sm:w-36 sm:text-[12px] border-r lg:h-9 border-t text-[7px] flex justify-center items-center'>Task</div>
    </div>
  </div>
  {/* 6th end */}
  <div className=' '> 
    <div className='h-3 w-[72px] sm:h-6 sm:w-36 lg:w-[144px]  sm:text-[12px] border-t text-[7px] lg:h-9  flex border-r justify-center items-center'>People</div>

    
    
    <div className='flex'>
    <div className='h-3 w-[74px]  border-b sm:h-6 sm:w-36 sm:text-[12px]  border-t text-[7px] lg:h-9  flex justify-center items-center'></div>
   
    </div>
     <div className='flex'>
    <div className='h-3 w-[72px] border-b sm:h-6 sm:w-36 sm:text-[12px] border-r border-t text-[7px] lg:h-9 flex justify-center items-center'><Image src={people} alt='' className="lg:w-8 w-2 md:w-5"/></div>
    </div>
  </div>
{/* 7th end */}

  {/* 7th end */}
  <div className=' '> 
    <div className='h-3 w-[72px] sm:h-6 sm:w-36 lg:w-[144px]  sm:text-[12px] border-t text-[7px] lg:h-9 border-r border-b flex justify-center items-center'><span>Number</span></div>

   
    <div className='flex'>
    <div className='h-3 w-[74px]  border-b sm:h-6 sm:w-36 sm:text-[12px]   text-[7px] lg:h-9  flex justify-center items-center'></div>
   
    </div>
     <div className='flex'>
    <div className='h-3 w-[72px] border-b sm:h-6 sm:w-36 sm:text-[12px] border-r border-t lg:h-9 text-[7px] flex justify-center items-center'>
          <div>
        <h1 className="text-center">0</h1><h1 className="text-[#3B93EF]">sum</h1>
        </div>
    </div>
    </div>
  </div>
  {/* 8 end  */}
  <div className=' '> 
    <div className='h-3 w-[72px] sm:h-6 sm:w-36 lg:w-[144px]  sm:text-[12px] border-t text-[7px] lg:h-9  flex justify-start pl-2 lg:text-xl items-center'><span>+</span></div>
<div className='flex'>
    <div className='h-3 w-[72px] border-b sm:h-6 sm:w-36 sm:text-[12px]  border-t text-[7px] lg:h-9 flex justify-center items-center'></div>
    </div>
    <div className='flex'>
    <div className='h-3 w-[72px] border-b sm:h-6 sm:w-36 sm:text-[12px]  lg:h-9  text-[7px] flex justify-center items-center'></div>
    </div>
    <div className='flex'>
    <div className='h-3 w-[72px] border-b sm:h-6 sm:w-36 sm:text-[12px]   lg:h-9 text-[7px] flex justify-center items-center'></div>
    </div>
    <div className='flex'>
  
      
   
    </div>
    
    
  </div>





  


  
</div>



        </div>
        
          {/* before this */}
  
      </div>
      
    </>
  )
}

export default ThirdPortion
