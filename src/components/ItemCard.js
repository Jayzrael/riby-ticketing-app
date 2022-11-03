import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'

const ItemCard = ({ TicketId, TicketName, TicketTime, TicketStatus, Dots }) => {


   const [drop, setDrop] = useState(false);
   // const [isChecked, setIsChecked] = useState(false);

   const handleMenu = () => {
      setDrop(!drop)
   }

   return (
      <div className='flex justify-between min-w-[976px] bg-white h-[56px] rounded-[10px] m-4 p-4'>
         <div className='flex justify-center items-center gap-4'>
            <div>
               <input className='accent-red-500 line-through' type="checkbox" name="check" />
            </div>
            <div>
               <div>
                  <Link to="/ticketDetails">
                     <span className='text-[14px] font-[500]'>
                        {TicketId}
                     </span>
                  </Link>
               </div>
               <div className='flex gap-2'>
                  <div><span className='text-[10px] font-[600] text-[#EE095B]'>{TicketName}</span></div>
                  <div><span className='text-[10px] font-[400] text-[#BFBEC2]'>{TicketTime}</span></div>
               </div>
            </div>
         </div>
         <div className='flex justify-center items-center gap-3'>
            <div><span className='text-[12px] text-[#707070] font-[400]'>{TicketStatus}</span></div>
            <div>
               <img src={Dots} alt="" onClick={handleMenu} />
            </div>

         </div>
      </div>
   )
}

export default ItemCard