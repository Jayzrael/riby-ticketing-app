import React from 'react'
import Dots from '../../assets/dots.png'

const TicketMessage = () => {
   return (
      <div className='bg-white mt-7 w-[976px] h-[526px] rounded-[10px]'>
         <div className='flex justify-between items-center bg-white p-5 rounded-[10px]'>
            <span>#456 No Loan Records </span>
            <img src={Dots} alt="" />
         </div>
         {/* message */}
         <section className='flex justify-center items-center mt-2'>
            <div className='w-[944px] h-[408px] bg-white rounded-[10px] border-[0.5px] border-[#D9D8DA] border-solid mt-[26px]'>
               <p className='w-[655px] h-[312px] text-[16px] font-[300] text-[#0D233D] leading-6 bg-white ml-[24px] mt-[46px]'>Hi, <br />
                  <br />
                  A new ticket has been created by John  Doe on 4 August 2022 - 9:45AM <br />
                  <br />

                  #456 No loan records. <br />
                  <br />

                  Good day Riby, <br />
                  <br />

                  We can’t find the loan records of one of our members and its been giving us a bit of headache <br />
                  even when we’ve searched every where for it. We’re sure this person has a record because <br />
                  we’ve accepted and granted loans to this person and we have it on record. <br />
                  <br />
                  Please help look into it. Thank you.


                  </p>
            </div>
         </section>
      </div>
   )
}

export default TicketMessage