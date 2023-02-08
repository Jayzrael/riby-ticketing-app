import React, { useState } from "react";
// import { Link } from "react-router-dom";
import axios, { BaseUrl } from "../../Api/axios";
import dots from "../../assets/dots.png";

const Ticket = ({
  ticket,
  TicketTime,
  HandleOnChange,
  IsChecked,
  OpenModal,
}) => {
  const [drop, setDrop] = useState(false);

  const handleDrop = () => {
    setDrop(!drop);
  };

  // const CloseTicket = () => {
  //   var data = { ticketId: "63d23c459ec6d43b065101e7" };

  //   var config = {
  //     method: "patch",
  //     url: `${BaseUrl}/tickets/close`,
  //     headers: {},
  //     data: data,
  //   };

  //   axios(config)
  //     .then(function (response) {
  //       console.log(JSON.stringify(response.data));
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // };

  // const DeleteTicket = () => {
  //   var config = {
  //     method: "delete",
  //     url: `${BaseUrl}/tickets/63e0a6d01880276437b57db2`,
  //     headers: {},
  //   };

  //   axios(config)
  //     .then(function (response) {
  //       console.log(JSON.stringify(response.data));
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // };

  return (
    <div>
      <section className="bg-white mt-3 min-w-[976px] w-full flex justify-between p-3 rounded-[10px]">
        <div className="flex gap-4">
          <input
            type="checkbox"
            checked={IsChecked}
            onChange={HandleOnChange}
            className="accent-[#EE095B]"
            name=""
            id=""
          />
          <div>
            <h2 className="text-black font-[600]">{ticket.title}</h2>
            <div className="flex justify-center items-center gap-2">
              <h4 className="text-[10px] text-[#EE095B] font-bold">
                {ticket.description}
              </h4>{" "}
              <span className="text-[10px] text-[#BFBEC2]">{TicketTime}</span>{" "}
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-4">
          <h2>{ticket.status}</h2>
          <button type="button">
            <img src={dots} alt="" onClick={handleDrop} />
          </button>
          {drop && (
            <div class="absolute right-0 z-10 p-2 w-[100px] min-h-[96px] rounded-[10px] box-border mt-[130px]  origin-top-right bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="flex flex-col justify-start gap-3 pt-2">
                <h4 className="text-[12px] cursor-pointer" onClick={OpenModal}>
                  Assign ticket
                </h4>
                <h5
                  className="text-[12px] cursor-pointer"
                  // onClick={CloseTicket}
                >
                  Close ticket
                </h5>
                <h5
                  className="text-red-700 w-full text-[12px] font-[400] cursor-pointer"
                  // onClick={DeleteTicket}
                >
                  Delete ticket
                </h5>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Ticket;
