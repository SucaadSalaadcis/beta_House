import React from 'react'
import { Link } from 'react-router-dom'
import { BsFillHouseDownFill,BsList ,BsFillBootstrapFill} from "react-icons/bs";
import { useState } from 'react';

const menu = [
    {name:'Home', path:'/'},
    {name:'About', path:'/About'},
    {name:'Type of House', path:'/Factypehouse'},
    {name:'Contact', path:'/Contact'},
]
export default function TestHome() {

       const [mobile,setismobile] = useState(false)
       const [misk,setismisk] = useState(true)
      
  return (<>

{misk && <div className='bg-blue-500 text-white py-2 text-center flex justify-center items-center gap-7'>
<div>helasdnakldnhkadkasndandan</div>

<BsFillHouseDownFill onClick={()=>setismisk(false)}/>
</div>}
  <div className='bg-white h-full  py-8 px-5 md:px-16'>

       <div className={` ${mobile ? 'block' : 'hidden'} w-[80%]  md:hidden bg-green-50 shadow-sm h-[500px] fixed  top-0 left-0`}> 
asda

       </div>

       {/* example */}
      
 
<div>
{/* header menu */}
<div className='flex justify-between items-center  p-3'>

    <div className='flex gap-4 text-2xl'>
        <BsFillHouseDownFill className='text-3xl  text-blue-500'/>
        <span className='text-blue-800 text-xl md:text-2xl font-extrabold'>Logo</span></div>
    <div className='flex items-center gap-x-6' > 
        <ul className='hidden md:flex gap-5 ' >
      
 {menu.map((item, index) => {
        return    <Link key={index} to={item.path}>   <li className=' text-lg text-gray-600'>{item.name}</li></Link>
 }
 )}
        </ul>
        <button className='border hidden md:block md:border-1 text-sm   md:font-semibold text-blue-500 border-blue-500 rounded px-6  p-1.5'>Sign</button>
 
 <button>
    <BsList  onClick={()=>setismobile(!mobile)}   className='text-3xl  block   md:hidden'/>
 </button>
   </div>

</div>
{/* header hero */}
<div className='grid grid-cols-1 md:grid-cols-2 gap-10 p-5 py-10  ' > 


    <div className='leading-6 flex items-center flex-col justify-center gap-10'> 
       <div className='text-2xl md:text-4xl  font-mahad'>

 enim architecto qui cumque.
       
       </div>
       <div className='font-mahad text-sm text-gray-600 break-words'>
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam repudiandae earum similique optio! Error incidunt dicta earum se

       </div>
       <div>
<Link to='/About'>     
  <button className='border border-blue-500 text-blue-500 rounded px-6  p-1.5'>Read More</button></Link>

  

       </div>
    </div>
    <div className='flex justify-center items-center'>

       <img className='hidden md:block rounded-full h-[300px] w-[300px]' src='https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=853&q=80'/>
    </div>

    </div>



{/* after hero */}

<div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-5  gap-x-6 gap-y-8'> 
 <div className='text-center'>
 <div className='text-3xl '> 2345</div>  
       <div className='text-gray-500'>Happy Customers</div>  
       </div>  

       {/* rental houses  */}
       <div className='text-center'>
 <div className='text-3xl '> 2345+</div>  
       <div className='text-gray-500'>Rent property</div>  
       </div>


       {/* Award wining */}

       <div className='text-center'>
 <div className='text-3xl '> 130+</div>  
       <div className='text-gray-500'>Happy Customers</div>  
       </div>
</div>
{/*  */}


{/* likst houses */}
<div className='grid grid-cols-1  md:grid-cols-2  lg:grid-col-3 gap-y-3 xl:grid-cols-4   mt-10'>

{[1,2,3,4].map((item, index) => {

return <div key={index} className='shadow border rounded p-4'>  
<img src='https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=853&q=80' className='w-full h-[200px] object-cover rounded-md'/>

<div className='text-sm font-mahad text-gray-600 mt-3 '>Shibis , N/B street</div>
<div className='text-sm font-mahad text-blue-600 mt-3 '>$380/<span className='text-gray-600'>mo</span></div>
 
{/* footer */}
 <div className='mt-4 border-t p-2 flex justify-between '>

<div className='flex items-center gap-1'>
      <BsFillBootstrapFill className='text-sm'/>
       <div className='text-xs text-gray-600'>4 bathroms</div>
</div>
<div className='flex items-center gap-1'>
      <BsFillBootstrapFill className='text-sm'/>
       <div className='text-xs text-gray-600'>2 bedroom</div>
</div>
<div className='flex items-center gap-1'>
      <BsFillBootstrapFill className='text-sm'/>
       <div className='text-xs fonts text-gray-600'>1 parking</div>
</div>
 

 </div>
<div> 
</div>


</div>
})}

</div>


<div className='bg-gray-800 py-16 px-12 mt-10  flex flex-col justify-center items-center gap-y-10 md:justify-around md:flex-row  text-white'>
    
{/* right box */}

<div>

       
    <div className=' bg-blue-500 py-8 px-6 rounded-md w-[190px] '>
       
       <BsFillBootstrapFill className='text-4xl'/>

       <div className='text-lg mt-3'>Trusted Agancy</div>

<div className='text-gray-100 mt-3'>Content</div>

        </div>


        
    <div className=' bg-gray-600 py-8 px-6 mt-5 rounded-md w-[190px] '>
       
       <BsFillBootstrapFill className='text-4xl'/>

       <div className='text-lg mt-3'>Trusted Agancy</div>

<div className='text-gray-100 mt-3'>Content</div>

        </div>
</div>
{/* box image house */}
<div> 
<div   className='shadow bg-white border rounded p-4'>  
<img src='https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=853&q=80' className='w-full h-[200px] object-cover rounded-md'/>

<div className='text-sm font-mahad text-gray-600 mt-6 '>Shibis , N/B street</div>
<div className='text-sm font-mahad text-blue-600 mt-3 '>$380/<span className='text-gray-600'>mo</span></div>
 
{/* footer */}
 <div className='mt-8 border-t p-2 flex justify-between '>

<div className='flex items-center gap-2'>
      <BsFillBootstrapFill className='text-sm  text-gray-600'/>
       <div className='text-xs text-gray-600'>4 bathroms</div>
</div>
<div className='flex items-center gap-2'>
      <BsFillBootstrapFill className='text-sm  text-gray-600'/>
       <div className='text-xs text-gray-600'>2 bedroom</div>
</div>
<div className='flex items-center gap-2'>
      <BsFillBootstrapFill className='text-sm text-gray-600'/>
       <div className='text-xs fonts text-gray-600'>1 parking</div>
</div>
 

 </div>
<div> 
</div>


</div>

</div>


{/* right box */}

<div>

       
    <div className=' bg-gray-600 py-8 px-6 rounded-md w-[190px] '>
       
       <BsFillBootstrapFill className='text-4xl'/>

       <div className='text-lg mt-3'>Trusted Agancy</div>

<div className='text-gray-100 mt-3'>Content</div>

        </div>


        
    <div className=' bg-gray-600 py-8 px-6 mt-5 rounded-md w-[190px] '>
       
       <BsFillBootstrapFill className='text-4xl'/>

       <div className='text-lg mt-3'>Trusted Agancy</div>

<div className='text-gray-100 mt-3'>Content</div>

        </div>
</div>

</div>

<div className='h-[200px]'>ss</div>
    </div>


   




 
  </div></>
  )
}
