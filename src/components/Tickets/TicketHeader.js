import React from 'react'
import CloseTicket from '../../assets/closeticket.png'
import AssignTicket from '../../assets/assignticket.png'
import DeleteTicket from '../../assets/deleteticket.png'

const TicketHeader = () => {
   return (
      <section className='flex justify-between ml-5 mr-[63px]'>
         <div className=' flex justify-center items-center'>
            <h1 className='text-[24px] font-[600]'>Tickets</h1>
         </div>
         <div className='flex justify-center items-center gap-5'>
            <div className='flex justify-center items-center gap-1 cursor-pointer'>
               <img src={CloseTicket} alt="" /> <span className='text-red-500'>Close Ticket</span>
            </div>
            <div className='flex justify-center items-center gap-1 cursor-pointer'>
               <img src={AssignTicket} alt="" /> <span className='text-red-500'>Assign Ticket</span>
            </div>
            <div className='flex justify-center items-center gap-1 cursor-pointer'>
               <img src={DeleteTicket} alt="" /> <span className='text-black'>Delete Ticket</span>
            </div>
            <div>
               <select className='w-[184px] h-[40px] rounded-[5px] border-[1px] border-[#C9C9C9] border-solid pl-3 pr-3' name="All Tickets(24)" id="All Tickets(24)">
                  <option value="All Tickets(24)">All Tickets(24)</option>
                  <option value="Ticket 1">Ticket 1</option>
                  <option value="Ticket 2">Ticket 2</option>
                  <option value="Ticket 3">Ticket 3</option>
                  <option value="Ticket 4">Ticket 4</option>
               </select>
            </div>
         </div>
      </section>
   )
}

export default TicketHeader