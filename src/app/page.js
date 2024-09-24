
import 'tippy.js/dist/tippy.css'; // optional
import Head from 'next/head'
import Navbar2 from "./components/header/Navbar2";
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
import SideBar from "./components/header/sidebar/SideBar";
import ThirdPortion from './components/third-portion/ThirdPortion';



export default function Home() {
 
  return (
    <div className="bg-[#ECEFF8]">
     <Head>
        <title>My page title</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
   
    <Navbar2/>
    <div className='flex gap-x-3'>
    <SideBar/>
    <ThirdPortion   />
    </div>

    
    </div>
     );
}
