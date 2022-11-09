import React from 'react'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'

const CrmComp = ({ currentItem }) => {
   return (
      <div>
         {currentItem && currentItem.map((customer, index) => (
            <div className={customer.divClass} key={index}>
               <h2 className='flex justify-center items-center gap-2'>
                  <img src={customer.Initials} alt="" /> <span>{customer.Name}</span>
               </h2>
               <h2>{customer.Email}</h2>
               <h2>{customer.Phone}</h2>
               <h2>{customer.Type}</h2>
               <h2 className='flex justify-center items-center gap-2'>
                  <span className=''>{customer.Category}</span>
               </h2>
               <HiOutlineDotsHorizontal />
            </div>
         ))}
      </div>
   )
}

export default CrmComp