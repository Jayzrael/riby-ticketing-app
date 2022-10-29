import React, { useEffect, useRef, useState } from 'react'
import { GiCancel } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import axios, { BaseUrl } from '../Api/axios'
import Button from './Button'

const ResetPwdModal = ({ Close }) => {

   const [errMsg, setErrMsg] = useState('');
   const [email, setEmail] = useState('')
   const [success, setSuccess] = useState(false);

   const errRef = useRef();

   useEffect(() => {
      setErrMsg('')
   }, [email])

   const forgotPassword = (e) => {

      e.preventDefault()

      var data = { email }
      var config = {
         method: "POST",
         url: `${BaseUrl}/qa/resetPassword`,
         headers: {},
         data: data
      }

      axios(config).then((result) => {
         console.log(JSON.stringify(result.data))
         setEmail('')
         setSuccess(true)

      }).catch((err) => {
         const { message } = err.response.data
         const msg = message[0].message
         console.log(msg)
         setErrMsg(msg)
         errRef.current.focus()
      })
   }


   return (
      <>
         <div className='fixed bg-black bg-opacity-[0.7] w-full h-full'>
            <div className={success ? "fixed bg-white w-[400px] h-[30vh]  top-[30%] left-[35%] rounded-[10px]" : 'fixed bg-white w-[400px] h-[41vh]  top-[30%] left-[35%] rounded-[10px]'}>
               <GiCancel color='red' size={20} className="absolute right-3 top-2 cursor-pointer" onClick={Close} />
               <h1 className='text-[20px] font-[600] text-center pt-10 pb-2'>Reset Password</h1>
               <section>
                  <p ref={errRef} className={errMsg ? "bg-red-500 text-center text-white text-xs p-2" : "hidden"} aria-live="assertive">
                     {errMsg}
                  </p>
               </section>
               {success ? (
                  <section className='flex flex-col justify-center items-center'>
                     <p>Reset password link sent to your email</p>
                     <p className='pt-2 text-red-600' onClick={Close}><Link to="/">Back to Login</Link></p>
                  </section>
               ) : (
                  <section className='flex flex-col justify-center items-center pb-5'>
                     <p className='text-red-600 text-[12px] pb-2 text-center'>Provide the email you used to register</p>
                     <input className='flex flex-col w-[304px] h-[40px] border-[#C9C9C9] border-[1px] border-solid rounded-[5px] pl-2 outline-none text-[14px] font-[400]' type="email"
                        name="email address"
                        id="email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Email Address'
                     />
                  </section>
               )}
               <section className='flex justify-center items-center'>
                  <Button
                     ButtonText="Reset Password"
                     ClassName={success ? "hidden" : "bg-[#EE095B] w-[150px] h-[40px] text-white rounded-[5px] text-[14px] font-[600]"}
                     HandleOpen={forgotPassword}
                  />
               </section>
            </div>
         </div>
      </>
   )
}

export default ResetPwdModal