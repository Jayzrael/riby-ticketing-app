import React from 'react'
import { BsFillPersonFill } from 'react-icons/bs'
import Button from '../components/Button'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const Profile = () => {
   return (
      <div className='flex'>
         <Sidebar />
         <div className="w-full h-full">
            <Navbar />

            {/* content  */}
            <div className='flex flex-col gap-4 bg-slate-100 w-full h-full p-8'>
               <h1 className='text-[#0D233D] text-[24px] font-[600]'>Profile</h1>

               <section className='flex gap-4'>

                  {/* first form  */}
                  <div className='flex flex-col gap-6 p-4 w-[400px] min-h-[300px] bg-white rounded-[10px]'>
                     <h2 className='text-[14px] font-[500] text-[#0D233D]'>Personal Information</h2>
                     <section className='flex gap-4'>
                        <div>
                           <label className="text-[10px] font-[400] text-[#0D233D]" htmlFor="firstname">First Name</label>
                           <input className='w-[176px] h-[40px] outline-none bg-white border-[1px] border-solid border-[#C9C9C9] rounded-[5px] pl-2' type="text" name="firstname" value="Adekunle" id="" />
                        </div>
                        <div>
                           <label className="text-[10px] font-[400] text-[#0D233D]" htmlFor="lastname">Last Name</label>
                           <input className='w-[176px] h-[40px] outline-none bg-white border-[1px] border-solid border-[#C9C9C9] rounded-[5px] pl-2' type="text" name="lastname" value="Ciroma" id="" />
                        </div>
                     </section>

                     {/* email  */}
                     <div>
                        <label className="text-[10px] font-[400] text-[#0D233D]" htmlFor="email">Email Address</label>
                        <input className='w-[368px] h-[40px] outline-none bg-white border-[1px] border-solid border-[#C9C9C9] rounded-[5px] pl-2' type="text" name="email" value="adekunleciroma@riby.ng" id="" />
                     </div>
                     <Button
                        ButtonText="Save Changes"
                        ClassName="w-[136px] h-[40px] bg-[#EE095B] rounded-[5px] text-white text-[14px] font-[600]" />
                  </div>



                  {/* profile picture  */}
                  <div className='flex flex-col justify-center items-center gap-8 w-[366px] min-h-[288px] bg-white rounded-[10px] border-[0.5px] border-[#D9D8DA] border-solid'>
                     <div className='relative bg-[#605D66] bg-opacity-[0.4] w-[100px] h-[100px] border-[1px] rounded-full borderblack border-solid'>
                        <BsFillPersonFill size={90} color="#605D66" className='absolute left-[2px]' />
                     </div>
                     <h1 className='text-[18px] font-[600] text-[#0D233D]'>Adekunle Ciroma</h1>
                     <p className='text-[#EE095B] text-[14px] font-[600]'>Edit Photo</p>
                  </div>
               </section>

               {/* last form  */}
               <div className='flex flex-col gap-6 p-4 w-[400px] min-h-[300px] bg-white rounded-[10px]'>
                  <h2 className='text-[14px] font-[500] text-[#0D233D]'>Password</h2>
                  <section className=''>
                     <div>
                        <label className="text-[10px] font-[400] text-[#0D233D]" htmlFor="current-password">Current Password</label>
                        <input className='w-[368px] h-[40px] outline-none bg-white border-[1px] border-solid border-[#C9C9C9] rounded-[5px] pl-2' type="Password" name="current-password" id="" />
                     </div>
                  </section>

                  {/* email  */}
                  <div>
                     <label className="text-[10px] font-[400] text-[#0D233D]" htmlFor="email">New Password</label>
                     <input className='w-[368px] h-[40px] outline-none bg-white border-[1px] border-solid border-[#C9C9C9] rounded-[5px] pl-2' type="password" name="new-password" id="" />
                  </div>
                  <div>
                     <label className="text-[10px] font-[400] text-[#0D233D]" htmlFor="confirm-password">Confirm Password</label>
                     <input className='w-[368px] h-[40px] outline-none bg-white border-[1px] border-solid border-[#C9C9C9] rounded-[5px] pl-2' type="password" name="confirm-password" id="" />
                  </div>
                  <Button
                     ButtonText="Save Changes"
                     ClassName="w-[136px] h-[40px] bg-[#EE095B] rounded-[5px] text-white text-[14px] font-[600]" />
               </div>
            </div>

         </div>
      </div>
   )
}

export default Profile