import React from 'react'
import { Link } from 'react-router-dom'
import { BsFillHouseDownFill,BsList } from "react-icons/bs";
import {useTypewriter} from 'react-simple-typewriter'
import { useState } from 'react';

function Header() {
     const [text] = useTypewriter({
        words: ['Susu','Developer','Programmer'],
        loop:{},
        typeSpeed: 120,
     });

    const menu = [
        {name:'Home', path:'/'},
        {name:'About', path:'/About'},
        {name:'Type of House', path:'/typehouse'},
        {name:'Contact', path:'/Contact'},
        {name:'Services', path:'/Services'},
    ]

    
    const [mobile,setismobile] = useState(false)
    const [suu,setissuu] = useState(true)
  return (
    <>
{suu && <div className='bg-lime-500 text-white py-2 text-center flex justify-center items-center gap-7 text-lg font-bold'>
<div> I'm {text}</div>

<BsFillHouseDownFill onClick={()=>setissuu(false)}/>
</div>}
{/*  */}


{/*  */}
<div className='flex justify-between items-center  p-3'>

  <div className='flex gap-4 text-2xl'><BsFillHouseDownFill className='text-3xl  text-slate-600'/>

    <span className='text-black text-xl md:text-2xl font-extrabold'><span className='text-lime-500'>BetaHouse </span>Logo</span></div>
    {/*  */}
    <ul className='hidden  md:flex  gap-5 ml-20 mt-10' >
     {menu.map((item, index) => {
        return <Link key={index} to={item.path}><li className=' text-lg  font-bold text-gray-600'>{item.name}</li></Link>}
        )}
    </ul>
    {/*  */}

    <div className='flex items-center gap-x-6' > 

    <div className={` ${mobile ? 'block' : 'hidden'} w-[50%]  md:hidden bg-slate-100 shadow-sm h-[300px] fixed  top-0 left-0`}> 
    <ul className='md:flex  gap-5 ml-20 mt-10' >
     {menu.map((item, index) => {
        return <Link key={index} to={item.path}><li className=' text-lg  font-bold text-gray-600'>{item.name}</li></Link>}
        )}
    </ul></div>

    <button className='border hidden md:block md:border-1 text-sm   md:font-semibold text-lime-500 border-slate-500 rounded px-6  p-1.5'>Sign</button>

<button>
<BsList onClick={()=>setismobile(!mobile)} className='text-3xl  block   md:hidden'/>
</button>
</div>
   </div>


    {/* section 2 */}
    <div className="mx-10 py-20 ">
        <div className="flex flex-col items-center  md:flex-row">
            <div className="text-center mb-12 md:text-left md:w-3/4 ">
                <p className="font-bold  mb-6 text-neutral-800 text-5xl">Beautifull Houses </p>
                <p className="mb-10 text-black hover:text-lime-500 text-xl ml-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum accusantium magnam consequuntur nostrum quo cumque consectetur sapiente dolorem, tempore suscipit.</p>
               
    <button className='border md:block md:border-1 text-md  md:font-semibold text-lime-500 border-slate-500 rounded px-6  p-1.5'>AVAILABLE NOW</button>
            </div>

            <div className="md:w-1/2 ml-6">
                <img src="../../src/Components/img/10.jpeg" className=" rounded-tl-3xl rounded-br-3xl" alt=""/>
            </div>
        </div>
    </div>



    </>
  )
}

export default Header