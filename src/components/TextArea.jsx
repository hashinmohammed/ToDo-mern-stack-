import React from 'react'

function TextArea() {
  return (
    <div className='flex'>
      
      <div id="main" className='bg-[#FFFFFF] w-full h-3/4 z-30'>
            
            <nav className='bg-gradient-to-l from-[#87E3FA] h-12'><p>Add new+</p></nav>
            <div className='flex shadow-2xl rounded-b-3xl'>
              <img className='h-[18rem] rounded-3xl' src="https://img.freepik.com/free-vector/designer-girl-concept-illustration_114360-4455.jpg?w=740&t=st=1679598246~exp=1679598846~hmac=b4d18236a8544ad3307c0359940b3b2465eaa8c3961dee029bde6d594f50441d" alt="" />
              <form className='flex flex-col gap-5 w-3/4 items-center justify-center p-5' action=""> 
              <input className=' border-gray-300  border-2 rounded-md p-6 w-full focus:outline-red-300 focus:border-red-400 uppercase text-blue-400' type="date" />
              <input className=' h-10 border-2 border-gray-300 rounded-md p-6 w-full  text-blue-400 focus:outline-red-300 focus:border-red-400' type="text" placeholder='Heading'/>

                <input className='h-20 border-2 border-gray-300 rounded-md p-6 w-full  text-blue-400 focus:outline-red-300 focus:border-red-400 ' type="text" placeholder='Description' />
                <button className='ml-12 bg-slate-400' type="submit">add</button>
                </form>
               
            </div>
            
        
    </div>
      </div>
      
    
  )
}

export default TextArea