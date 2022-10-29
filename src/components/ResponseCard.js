import React from 'react'
import { GoPrimitiveDot } from 'react-icons/go'

const ResponseCard = ({ ClassName, ClassName0, ClassName1, ClassName2, ClassName3, ClassName4 }) => {
   return (
      <div className={ClassName}>
         <h2 className={ClassName0}>Response time</h2>
         <div className={ClassName1}>
            <span className='text-[#0D233D] text-[14px] font-[400]'>Average Response Time</span>
            <span className='text-[#04AD85] text-[12px] font-[500]'>2mins 40Secs </span>
         </div>

         <div className={ClassName2}>
            <span className='text-[#0D233D] text-[14px] font-[400]'>Average Wait Time</span>
            <span className='text-[#EE095B] text-[12px] font-[500]'>10mins 40Secs </span>
         </div>

         <div className={ClassName3}>
            <span className='text-[#0D233D] text-[14px] font-[400] whitespace-nowrap'>
               Average Resolution Time</span>
            <span className='text-[#FFA217] text-[12px] font-[500] whitespace-nowrap'>5mins 40Secs</span>
         </div>

         <div className={ClassName4}>
            <span className='flex justify-center items-center gap-1 text-[#0D233D] text-[10px] font-[500] whitespace-nowrap'>
               <GoPrimitiveDot size={12} color="#04AD85" /> Below 5 Minutes</span>
            <span className='flex justify-center items-center gap-1 text-[#0D233D] text-[10px] font-[500] whitespace-nowrap'><GoPrimitiveDot size={12} color="#FFA217" /> Between 5 and 15 Minutes</span>
            <span className='flex justify-center items-center gap-1 text-[#0D233D] text-[10px] font-[500] whitespace-nowrap'><GoPrimitiveDot size={12} color="#D80C1B" /> Above 15 Minutes</span>
         </div>

      </div>
   )
}

export default ResponseCard