import React from 'react'
import { BsFillBootstrapFill} from "react-icons/bs";
function BodySec() {
  return (
    <>
    <div className='bg-gray-800 py-16 px-12 mt-10  flex flex-col justify-center items-center gap-y-10 md:justify-around md:flex-row  text-white'>
    
    {/* right box */}
    
    <div>
    
           
        <div className=' bg-lime-500 py-8 px-6 rounded-md w-[190px] '>
           
           <BsFillBootstrapFill className='text-4xl'/>
    
           <div className='text-lg mt-3'>Dharkeynley</div>
           <div className='text-gray-100 mt-3'>Content</div>
    
            </div>
       {/*  */}
    
     
        <div className=' bg-lime-500 py-8 px-6 mt-5 rounded-md w-[190px] '>
           
           <BsFillBootstrapFill className='text-4xl'/>
    
           <div className='text-lg mt-3'>Banadir</div>
           <div className='text-gray-100 mt-3'>Content</div>
    
            </div>
            {/*  */}

    </div>
    {/* box image house */}
    <div> 
    <div className='shadow bg-white border rounded p-4'>  
    <img src='../../src/Components/img/6.jpeg' className='w-full h-[200px] object-cover rounded-md'/>
    
    <div className='text-md font-mahad text-lime-600 mt-6 '>Madina Street 5</div>
    <div className='text-md font-mahad text-blue-900 mt-3 '>$1080/<span className='text-gray-600'>mo</span></div>
     
    {/* footer */}
     <div className='mt-8 border-t p-2 flex justify-between '>
    
    <div className='flex items-center gap-2'>
          <BsFillBootstrapFill className='text-sm  text-lime-600'/>
           <div className='text-xs text-lime-600'>4 bathroms</div>
    </div>
    <div className='flex items-center gap-2'>
          <BsFillBootstrapFill className='text-sm  text-lime-600 '/>
           <div className='text-xs text-lime-600'>2 bedroom</div>
    </div>
    <div className='flex items-center gap-2'>
          <BsFillBootstrapFill className='text-sm text-lime-600'/>
           <div className='text-xs fonts text-lime-600'>1 parking</div>
    </div>
     
    
     </div>
    <div> 
    </div>
    
    
    </div>
    
    </div>
    
    
    {/* right box */}
    
    <div>    
        <div className=' bg-lime-500 py-8 px-6 rounded-md w-[190px] '>
           
           <BsFillBootstrapFill className='text-4xl'/>
    
           <div className='text-lg mt-3'>Yaqshid</div>
           <div className='text-gray-100 mt-3'>Content</div>
           </div>
     
        <div className=' bg-lime-600 py-8 px-6 mt-5 rounded-md w-[190px] '>
           
           <BsFillBootstrapFill className='text-4xl'/>
    
           <div className='text-lg mt-3'>Daynile</div>
           <div className='text-gray-100 mt-3'>Content</div>
           </div>
    </div>
    
    </div>
    </>
  )
}

export default BodySec