import React from 'react'

function Section3() {
  return (
    <>
     <div className=" py-20">
            <div className="text-center m-auto mb-20 md:w-1/2">
                <h4 className="font-bold text-color-secondary mb-4 text-3xl">Top Beautifull Houses</h4>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12 lg:gap-8 px-4 sm:px-6 lg:px-6">
             {/*  */}
        
                    <div className="border text-center py-10 px-5  rounded-tl-3xl rounded-br-3xl  ">
        
                        <h3 className="text-xl font-bold py-4"> Address: <span className="text-lime-500" > Banadir</span>   </h3>
                            <img src="../../src/Components/img/7.jpeg" className=" rounded-tl-3xl rounded-br-3xl"  alt=""/>
                    </div>

                {/* <!--  --> */}
                
                    <div className="border text-center py-10 px-5  rounded-tl-3xl rounded-br-3xl  ">
        
                        <h3 className="text-xl font-bold py-4"><span className="text-lime-500">Address:</span> Madina</h3>
                            <img src="../../src/Components/img/4.jpeg" className=" rounded-tl-3xl rounded-br-3xl"  alt=""/>
                    </div>

                {/* <!-- --> */}

                    <div className="border text-center py-10 px-5 rounded-tl-3xl rounded-br-3xl">
        
                        <h3 className="text-xl font-bold py-4">address: <span className="text-lime-500" > Yaqshid</span></h3>
                            <img src="../../src/Components/img/6.jpeg" className=" rounded-tl-3xl rounded-br-3xl"  alt=""/>
                    </div>
            </div>
        </div>

    
     
            
                      

    

      

    
    </>
  )
}

export default Section3