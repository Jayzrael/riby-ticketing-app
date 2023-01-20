import React, { useState } from "react";
import { Link } from "react-router-dom";
import dots from "../../assets/dots.png";

const Ticket = ({ ticket, TicketTime, HandleOnChange, IsChecked, OnClick }) => {
  const [drop, setDrop] = useState(false);

  const handleDrop = () => {
    setDrop(!drop);
  };

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
            <h2 className="text-black font-bold">{ticket.title}</h2>
            <div className="flex justify-center items-center gap-2">
              <h4 className="text-[12px] text-[#EE095B] font-bold">
                {ticket.title}
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
                <h4 className="text-[12px]">
                  {" "}
                  <Link to="/ticketDetails">View ticket</Link>
                </h4>
                <h5 className="text-[12px] cursor-pointer">edit ticket</h5>
                <a className="text-red-700 w-full text-[12px] font-[400] cursor-pointer">
                  Delete ticket
                </a>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Ticket;
