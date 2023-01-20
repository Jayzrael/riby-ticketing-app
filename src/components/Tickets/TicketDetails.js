import React from "react";
import CloseTicket from "../../assets/closeticket.png";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import TicketInformation from "./TicketInformation";
import TicketMessage from "./TicketMessage";

const TicketDetails = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full h-full">
        <Navbar />
        <section className="bg-slate-100 w-full h-full p-8">
          {/* <div className='flex justify-between'>
                  <div className='flex justify-center items-center'>
                     <div><span className='text-[#707070] text-[14px] font-[400]'>Tickets/</span></div>
                     <div><span className='text-[#0D233D] text-[24px] font-[600]'>Tickets Details</span></div>
                  </div>
                  <div className='flex justify-center items-center gap-1 cursor-pointer'>
                     <img src={CloseTicket} alt="" /> <span className='text-red-500 mr-20'>Close Ticket</span>
                  </div>
               </div> */}
          <TicketInformation />
          <TicketMessage />
        </section>
      </div>
    </div>
  );
};

export default TicketDetails;
