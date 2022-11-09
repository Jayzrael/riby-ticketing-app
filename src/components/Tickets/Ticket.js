import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Ticket = ({ currentItems, Dots }) => {

   const [checkedBoxes, setCheckedBoxes] = useState([]);


   const toggleCheckbox = (e, item) => {
      if (e.target.checked) {
         let arr = checkedBoxes
         arr.push(item.id)
         setCheckedBoxes(arr)
      } else {
         let items = checkedBoxes.splice(checkedBoxes.indexOf(item.id), 1);
         setCheckedBoxes(items)
      }
      console.log(checkedBoxes)
   }




   return (
      <div>
         {currentItems && currentItems.map((ticket, index) => (
            <div key={index} className='flex justify-between w-[976px] bg-white h-[56px] rounded-[10px] m-4 p-4'>
               <div className='flex justify-center items-center gap-4'>
                  <div>
                     <input className='accent-red-500 line-through' type="checkbox" name="check" value={ticket.id} checked={checkedBoxes.find((p) => p.id === ticket.id)}
                        onChange={(e) => toggleCheckbox(e, ticket)} />
                  </div>
                  <div>
                     <div>
                        <Link to="/ticketDetails">
                           <span className='text-[14px] font-[500]'>
                              {ticket.TicketId}
                           </span>
                        </Link>
                     </div>
                     <div className='flex gap-2'>
                        <div><span className='text-[10px] font-[600] text-[#EE095B]'>{ticket.TicketName}</span></div>
                        <div><span className='text-[10px] font-[400] text-[#BFBEC2]'>{ticket.TicketTime}</span></div>
                     </div>
                  </div>
               </div>
               <div className='flex justify-center items-center gap-3'>
                  <div><span className='text-[12px] text-[#707070] font-[400]'>{ticket.TicketStatus}</span></div>
                  <div>
                     <img src={Dots} alt="" />
                  </div>

               </div>
            </div>

         ))}
      </div>
   )
}

export default Ticket



