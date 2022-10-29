import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Dots from '../../assets/dots.png'
import ItemCard from '../ItemCard'

const Ticket = ({ currentItems, TicketId }) => {

   // const [drop, setDrop] = useState(false);
   // const [isChecked, setIsChecked] = useState(false);

   // const handleMenu = () => {
   //    setDrop(!drop)
   // }

   // const handleCheck = () => {
   //    setIsChecked(!isChecked)
   // }

   return (
      <div>
         {currentItems && currentItems.map((ticket, index) => (
            <div>
               <ItemCard
                  key={index}
                  TicketId={ticket.TicketId}
                  TicketName={ticket.TicketName}
                  TicketStatus={ticket.TicketStatus}
                  TicketTime={ticket.TicketTime}
                  Dots={Dots}
               // onClick={handleMenu}
               // drop={drop}
               />
            </div>


         ))}
         {/* {drop && (
            <div class="absolute right-0 z-10 p-3 w-[136px] h-[96px] rounded-[10px] box-border mt-8  origin-top-right bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
               <div className='flex flex-col justify-start gap-3 pt-2'>
                  <a href="#" class="text-gray-700 text-[12px] font-[400]">Profile</a>
                  <a className="text-red-700 w-full text-[12px] font-[400]">Sign out</a>
               </div>
            </div>
         )} */}
      </div>
   )
}

export default Ticket