import React, { useEffect, useState } from "react";
import CloseTicket from "../../assets/closeticket.png";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import TicketInformation from "./TicketInformation";
import TicketMessage from "./TicketMessage";
import { Link } from "react-router-dom";
import axios, { BaseUrl } from "../../Api/axios";

const TicketDetails = () => {
  const [ticketDetails, setTicketDetails] = useState();

  const getDetail = () => {
    var config = {
      method: "get",
      url: `${BaseUrl}/tickets/63d23c459ec6d43b065101e7`,
      headers: {},
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getDetail();
  }, []);

  return (
    <></>
    // <div className="flex">
    //   <Sidebar />
    //   <div className="w-full h-full">
    //     <Navbar />
    //     <section className="bg-slate-100 w-full h-full p-8">
    //       <div className="flex justify-between">
    //         <div className="flex justify-center items-center">
    //           <span className="text-[#707070] text-[14px] font-[400]">
    //             <Link to="/home">Tickets/</Link>
    //           </span>
    //           <span className="text-[#0D233D] text-[24px] font-[600]">
    //             Tickets Details
    //           </span>
    //         </div>
    //         <div className="flex justify-center items-center gap-1 cursor-pointer">
    //           <img src={CloseTicket} alt="" />{" "}
    //           <span className="text-red-500 mr-2">Close Ticket</span>
    //         </div>
    //       </div>
    //       <TicketInformation />
    //       <TicketMessage />
    //     </section>
    //   </div>
    // </div>
  );
};

export default TicketDetails;
