import React from 'react'
import Riby from "../../assets/riby-logo.png"

const AgentLogin = () => {
   return (
      <div className='w-screen h-screen bg-[#0D233D]'>
         <div className='w-full h-full flex flex-col justify-center items-center'>
            <div className='mb-5'>
               <img src={Riby} alt="" />
            </div>
            <div className='w-[352px] h-[384px] max-w-[500px] my-7'>
               <form action="" className='flex flex-col w-full h-full min-h-[65vh] bg-white rounded-[10px]'>
                  <h2 className='text-[#0D233D] font-[600] text-[24px] text-center mt-10'>Sign In</h2>

                  <div className='flex flex-col justify-center text-[#0D233D] m-4 '>
                     <label htmlFor="email">Email Address</label>
                     <input className='w-[304px] h-[40px] border-[1px] rounded-[5px] border-[#C9C9C9] border-solid mt-2 text-[14px] font-[400]  pl-3 box-border outline-none' type="email" placeholder='Email Address' />
                  </div>
                  <div className='flex flex-col justify-center text-[#0D233D] m-4 '>
                     <label htmlFor="password">Password</label>
                     <input className='w-[304px] h-[40px] border-[1px] rounded-[5px] border-[#C9C9C9] border-solid mt-2 text-[14px] font-[400]  pl-3 box-border outline-none ' type="email" placeholder='Password' />
                  </div>
                  <button className='w-[304px] h-[40px] bg-[#EE095B] ml-auto mr-auto text-white my-2 rounded-[5px]'>Sign In</button>
                  <p className='text-[#EE095B] text-center text-[12px] font-[500]'>Forgot Password?</p>
               </form>
            </div>
         </div>
      </div>
   )
}

export default AgentLogin