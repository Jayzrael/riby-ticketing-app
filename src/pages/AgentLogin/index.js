import React from 'react'
import Riby from "../../assets/riby-logo.png"
import { useForm } from "react-hook-form"

const AgentLogin = () => {

   const { register, handleSubmit, reset, trigger, formState: { errors } } = useForm();

   const onSubmit = (data) => {
      console.log(data)
      reset()
   }

   const HandleClick = (e) => {
      e.preventDevault()
   }


   return (
      <div className='w-screen h-screen bg-[#0D233D]'>
         <div className='w-full h-full flex flex-col justify-center items-center'>
            <div className='mb-5'>
               <img src={Riby} alt="" />
            </div>
            <div className='w-[352px] h-[384px] max-w-[500px] my-7'>
               <form action="" className='flex flex-col w-full h-full min-h-[67vh] bg-white rounded-[10px]'
                  onSubmit={handleSubmit(onSubmit)}>
                  <h2 className='text-[#0D233D] font-[600] text-[24px] text-center mt-10'>Sign In</h2>

                  <div className='flex flex-col justify-center text-[#0D233D] m-4 '>
                     <label htmlFor="email">Email Address</label>
                     <input className='w-[304px] h-[40px] border-[1px] rounded-[5px] border-[#C9C9C9] border-solid mt-2 text-[14px] font-[400]  pl-3 box-border outline-none' type="email" placeholder='Email Address'
                        {...register("email", {
                           required: 'Email is Required',
                           pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: 'Invalid Email'
                           }
                        })}
                        onKeyUp={() => {
                           trigger("email")
                        }} />
                     {errors.email && (<small className='text-red-400'>{errors.email.message}</small>)}
                  </div>
                  <div className='flex flex-col justify-center text-[#0D233D] m-4 '>
                     <label htmlFor="password">Password</label>
                     <input className='w-[304px] h-[40px] border-[1px] rounded-[5px] border-[#C9C9C9] border-solid mt-2 text-[14px] font-[400]  pl-3 box-border outline-none ' type="password" placeholder='Password'
                        {...register("password", {
                           required: 'Password is Required'
                        })}
                        onKeyUp={() => {
                           trigger("password")
                        }} />
                     {errors.password && (<small className='text-red-400'>{errors.password.message}</small>)}
                  </div>
                  <button className='w-[304px] h-[40px] bg-[#EE095B] ml-auto mr-auto text-white my-2 rounded-[5px]' onClick={HandleClick}>Sign In</button>
                  <p className='text-[#EE095B] text-center text-[12px] font-[500] cursor-pointer'>Forgot Password?</p>
               </form>
            </div>
         </div>
      </div>
   )
}

export default AgentLogin