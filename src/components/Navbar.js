import React from 'react'
import Inbox from '../assets/minbox.png'
import Notification from '../assets/mbell.png'
import Profile from '../assets/profile.png'
import ArrowDown from '../assets/arrowdown.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Navbar = () => {

   const [drop, setDrop] = useState(false)

   const handleMenu = () => {
      setDrop(!drop)
   }

   return (
      <>
         <div className='flex-1 h-[64px] bg-white flex justify-end items-center gap-6 p-4'>
            <div><img src={Inbox} alt="" /></div>
            <div><img src={Notification} alt="" /></div>
            <div>
               <Link to=""><img src={Profile} alt="" /></Link>
            </div>
            <div className='relative pr-10' onClick={handleMenu}><img src={ArrowDown} alt="" />
               {drop && (
                  <div class="absolute right-0 z-10 p-3 w-[136px] h-[96px] rounded-[10px] box-border mt-8  origin-top-right bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                     <div className='flex flex-col justify-start gap-3 pt-2'>
                        <Link to="/profile" class="text-gray-700 text-[12px] font-[400]">Profile</Link>
                        <a className="text-red-700 w-full text-[12px] font-[400]">Sign out</a>
                     </div>
                  </div>
               )}
            </div>
         </div>
      </>
   )
}

export default Navbar