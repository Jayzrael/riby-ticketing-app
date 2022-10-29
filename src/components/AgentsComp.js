import React from 'react'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import Marker from '../assets/Marker.png'

const AgentsComp = ({ currentItem }) => {
   return (
      <div>
         {currentItem && currentItem.map((agent, index) => (
            <div className={agent.divClass} key={index}>
               <h2 className='flex justify-center items-center gap-2'>
                  <img src={agent.Initials} alt="" /> <span>{agent.Name}</span>
               </h2>
               <h2>{agent.Email}</h2>
               <h2>{agent.DateJoined}</h2>
               <h2>{agent.Extension}</h2>
               <h2 className='flex justify-center items-center gap-2'>
                  <img src={Marker} alt="" /> <span className='text-[#04AD85]'>{agent.Status}</span>
               </h2>
               <HiOutlineDotsHorizontal />
            </div>
         ))}
      </div>
   )
}

export default AgentsComp