import React, { useEffect, useRef, useState } from 'react'
import { GiCancel } from 'react-icons/gi'
import axios, { BaseUrl } from '../Api/axios';
import Button from './Button'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MutatingDots } from 'react-loader-spinner'

const AgentForm = ({ Close }) => {

   const [firstname, setFirstName] = useState('');
   const [lastname, setLastName] = useState('');
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [role, setRole] = useState('')
   const [loading, setLoading] = useState(false)




   const create = (e) => {

      e.preventDefault()
      setLoading(true)
      console.log(loading)


      var data = { firstname, lastname, email, role, password }
      var config = {
         method: "POST",
         url: `${BaseUrl}/qa/createAgent`,
         headers: {},
         data: data
      }

      axios(config)
         .then((result) => {
            console.log(JSON.stringify(result.data))
            setLoading(false)
            toast.success('Agent Created Successfully!', {
               position: "top-right",
               autoClose: 5000,
               hideProgressBar: false,
               closeOnClick: true,
               pauseOnHover: true,
               draggable: true,
               progress: undefined,
               theme: "colored",
            });
            setEmail('')
            setFirstName('')
            setLastName('')
            setPassword('')
            setRole('')
         }).catch((err) => {
            const { message } = err.response.data
            const msg = message[0].message
            console.log(msg)
            if (!err?.response) {
               toast.error('No server response', {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "colored",
               });
            } else if (err.response?.status === 400) {
               toast.error('invalid email or password', {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "colored",
               });
            } else if (err.response?.status === 401) {
               toast.error('Unauthorized', {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "colored",
               });
            } else {
               toast.error('Login failed', {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "colored",
               });
            }
            setLoading(false)
         })
   }

   return (
      <>
         {loading && (
            <div className='fixed flex justify-center items-center w-full h-full bg-[#0D233D] bg-opacity-[0.7] z-10 inset-0'>
               <MutatingDots
                  height="100"
                  width="100"
                  color="#EE095B"
                  secondaryColor='#EE095B'
                  radius='12.5'
                  ariaLabel="mutating-dots-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
               />
            </div>
         )}
         <div className='fixed bg-black bg-opacity-[0.7] w-screen h-screen'>
            <div className='fixed w-[352px] h-[430px] bg-white rounded-[10px] top-[20%] left-[40%]'>
               <GiCancel color='red' size={20} className="absolute right-3 top-2 cursor-pointer" onClick={Close} />
               {/* {success ? } */}
               <h1 className='text-[20px] font-[600] text-center pt-10 pb-10'>Create Agent</h1>
               <section className='flex justify-center items-center gap-4 pb-5'>
                  {/* First Name  */}
                  <div>
                     <label className='flex flex-col text-[10px] font-[500] pb-1' htmlFor="first name">First Name</label>
                     <input className='flex flex-col w-[144px] h-[40px] border-[#C9C9C9] border-[1px] border-solid rounded-[5px] pl-2 outline-none text-[14px] font-[400]'
                        type="text"
                        name="first name"
                        id="first name"
                        onChange={(e) => { setFirstName(e.target.value) }}
                        value={firstname}
                        placeholder="First Name" />
                  </div>
                  {/* Last Name  */}
                  <div>
                     <label className='flex flex-col text-[10px] font-[500] pb-1' htmlFor="last name">Last Name</label>
                     <input className='flex flex-col w-[144px] h-[40px] border-[#C9C9C9] border-[1px] border-solid rounded-[5px] pl-2 outline-none text-[14px] font-[400]'
                        type="text"
                        name="first name"
                        id="first name"
                        onChange={(e) => { setLastName(e.target.value) }}
                        value={lastname}
                        placeholder="Last Name" />
                  </div>
               </section>
               {/* Password  */}
               <section className='flex justify-center items-center gap-4 pb-5'>
                  <div>
                     <label className='flex flex-col text-[10px] font-[500] pb-1' htmlFor="password">Password</label>
                     <input className='flex flex-col w-[144px] h-[40px] border-[#C9C9C9] border-[1px] border-solid rounded-[5px] pl-2 outline-none text-[14px] font-[400]'
                        type="text"
                        name="password"
                        id="password"
                        onChange={(e) => { setPassword(e.target.value) }}
                        value={password}
                        placeholder="Password" />
                  </div>
                  {/* Role  */}
                  <div>
                     <label className='flex flex-col text-[10px] font-[500] pb-1' htmlFor="Role">Role</label>
                     <input className='flex flex-col w-[144px] h-[40px] border-[#C9C9C9] border-[1px] border-solid rounded-[5px] pl-2 outline-none text-[14px] font-[400]'
                        type="text"
                        name="role"
                        id="role"
                        onChange={(e) => { setRole(e.target.value) }}
                        value={role}
                        placeholder="Role
                        " />
                  </div>
               </section>
               <section className='flex justify-center itens-center pb-5'>
                  <div>
                     <label className='flex flex-col text-[10px] font-[500] pb-1' htmlFor="email address">Email Address</label>
                     <input className='flex flex-col w-[304px] h-[40px] border-[#C9C9C9] border-[1px] border-solid rounded-[5px] pl-2 outline-none text-[14px] font-[400]'
                        type="email"
                        name="email address"
                        id="email address"
                        onChange={(e) => { setEmail(e.target.value) }}
                        value={email}
                        placeholder='Email Address' />
                  </div>
               </section>
               <section className='flex justify-center items-center'>
                  <Button
                     ButtonText="Create"
                     ClassName="bg-[#EE095B] w-[304px] h-[40px] text-white rounded-[5px] text-[14px] font-[600]"
                     HandleOpen={create}
                  />
               </section>
            </div>
            <ToastContainer
               position="top-right"
               autoClose={5000}
               hideProgressBar={false}
               newestOnTop={false}
               closeOnClick
               rtl={false}
               pauseOnFocusLoss
               draggable
               pauseOnHover
               theme="colored"
            />
         </div>
      </>

   )
}

export default AgentForm