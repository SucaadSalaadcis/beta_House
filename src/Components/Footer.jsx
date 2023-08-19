import React from 'react'

function Footer() {
  return (
    <>
    <div className='bg-zinc-900 p-52 '>
    <h1 className='text-xl md:text-3xl font-bold text-white mb-14'>What do <span className='text-gray-400'>people say</span><br/> about us ?</h1>
             {/*  */}
        
     <div className="flex">
                    <div className="py-10  px-20 border w-[500px] text-flex   md:w-[500px] sm:w-[500px] lg:w-[500px]  rounded-tl-3xl rounded-br-3xl  ">
                    <h3 className='flex text-sm text-white '>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui assumenda ab eaque labore quos illo dolorum 
                       </h3>
                         <div className='flex gap-5 mt-3'>
                        <img src="../../src/Components/img/8.jpeg"  className='rounded-lg w-[70px]'  alt="" />
                        <h3 className="text-xl font-bold py-4 text-white "><span className="text-lime-500">Name:</span> SuSu</h3>

                         </div>
                    </div>

                {/* <!--  --> */}

                
               
            </div>
    </div>

    {/*  */}

    
    <div className='bg-lime-500 p-20 '>
            <h1 className='text-3xl text-center font-bold text-white'>Start a new Journey <br/> to the fullest</h1>
        <div className="flex space-x-4 ml-[40px]  md:ml-[150px] lg:ml-[500px]  mt-10">
        <input type="text" className="border-2 border-black p-3 rounded-lg " placeholder='Email address...'/>
        <button className="mr-52 text-white font-medium bg-black
                border-2 border-black rounded-md w-24 py-2  ">Sign</button>
        </div>
        </div>
    
    </>
  )
}

export default Footer