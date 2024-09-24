



// import  from "."; // Assuming the photo is a JPEG
// import './NavBar.css'; // Assuming the CSS file is named "NavBar.css"

const NavBar = () => {
  return (
    <>
      <div className=" ">
          <div className=' w-auto'>
          
          <h3 className='font-bold font- text-md mt-1'>monday</h3>
          <h6 className='font-sans font-light text-[20px] whitespace-normal flex-nowrap    ml-1'>work management</h6>
         <button className="ml-5  text-[#0073EA] text-[13px] font-medium   h-7 w-28 flex justify-center items-center rounded-[4px] gap-x-1 transition-colors duration-300">
    <IoDiamondOutline className="text-[#0073EA] group-hover:text-white transition-colors duration-300" />
    See plans
  </button>
          </div>
          {/* 2nd notification */}
          <div className='bg-inherit flex items-center  gap-x-[1px] '>
             <Tippy content="Notifications">
            <div className='bg-inherit hover:bg-[#DFE2EB]  flex justify-center items-center hover:border hover:rounded-md '>
                
                 <span><IoIosNotificationsOutline className='text-xl'/></span>  
            </div>
             </Tippy>
              <Tippy content="Update feed ">
            <div className='bg-inherit hover:bg-[#DFE2EB]   flex justify-center items-center hover:border hover:rounded-md'>
                
                 <span><Image src={icon} className='text-[1px]'/></span>  
            </div>
             </Tippy>
                <Tippy content="Invite members">
            <div className='bg-inherit hover:bg-[#DFE2EB]   flex justify-center items-center hover:border hover:rounded-md'>
                
                 <span><RiUserAddLine  className='text-[1px]'/></span>  
            </div>
             </Tippy>
                    <Tippy content="monday marketplace">
            <div className='bg-inherit hover:bg-[#DFE2EB]  flex justify-center items-center hover:border hover:rounded-md'>
                
                 <span><IoExtensionPuzzleOutline  className='text-lg font-bold'/></span>  
            </div>
             </Tippy>
               <Tippy content="Search everything">
            <div className='bg-inherit hover:bg-[#DFE2EB]   flex justify-center items-center hover:border hover:rounded-md'>
                
                 <span><IoIosSearch   className='text-[1px]'/></span>  
            </div>
             </Tippy>
                  <Tippy content="Help">
            <div className='bg-inherit hover:bg-[#DFE2EB] h-10  flex justify-center items-center hover:border hover:rounded-md'>
                
                 <span><IoHelpSharp   className='text-[1px]'/></span>  
            </div>
             </Tippy>
             {/* line  */}
             <div className='h-7 border-r w-2 border-[#DFE2EB]   '>

             </div>
            
                    <Tippy content="Help">
            <div className='bg-inherit hover:bg-[#DFE2EB] h-10 w-10 ml-2 flex justify-center items-center hover:border hover:rounded-md'>
                
                 <span>< TbGridDots    className='text-[1px]'/></span>  
            </div>
             </Tippy>

            <div className='w-auto  bg-[#F6F7FC] flex justify-end hover:bg-[#DFE2EB]  rounded-l-[3px] rounded-r-full    items-center'>
              <div  style={{ transform: 'rotate(30deg)' }}  className='bg-[#FF3D57] w-[6px] border rounded-lg ml-2  h-[14px]'></div>
              <div   style={{ transform: 'rotate(30deg)' }}className='bg-[#FFCB00] w-[6px] border rounded-lg ml-[1px] h-[14px]'></div>
              <div className='bg-[#00D647] w-[8px] h-2 border rounded-full mt-2'></div>
              <FaCircleUser className='w-10 h-8  '/>
              
            </div>
              

             
             




          </div>
     
        
      </div>
    </>
  );
};

export default NavBar;