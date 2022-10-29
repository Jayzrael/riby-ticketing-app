import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'


const Chats = () => {


   return (
      <div className='flex'>
         <Sidebar />
         <div className="w-full h-screen">
            <Navbar />
            <div className='bg-slate-100 w-full h-screen p-8'>
               Chats Page
            </div>

         </div>
      </div>
   )
}

export default Chats