// import { Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import axios, { BaseUrl } from "../../Api/axios";
import dots from "../../assets/dots.png";
import TicketMenu1 from "../MenuItem/TicketMenu1";
import TicketMenu2 from "../MenuItem/TicketMenu2";
import EditTicket from "./EditTicket";
import TicketDetails from "./TicketDetails";

const Ticket = ({
  ticket,
  TicketTime,
  HandleOpenModal,
  CloseTicket,
  DeleteTicket,
  ViewTicketDetail,
  TicketPage,
  // EditTicketMod,
  HandleTicketMod,
}) => {
  const [drop, setDrop] = useState(false);
  // const [viewDetails, setViewDetails] = useState({});
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [isChecked, setIsChecked] = useState(false);
  const [viewEditTicket, setViewEditTicket] = useState(false);

  const closeEditTicket = () => {
    setViewEditTicket(false);
  };

  const editTicketMod = () => {
    setViewEditTicket(true);
  };

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOnChange = (tickets) => {
    console.log("this is ticket", tickets);
    console.log("this is ticket id", tickets.id);
    setIsChecked(!isChecked);
  };

  const User = localStorage.getItem("user");
  const appUser = JSON.parse(User);

  return (
    <div>
      {viewEditTicket && <EditTicket closeEditTicket={closeEditTicket} />}
      <section
        className="bg-white mt-3 min-w-[976px] w-full flex justify-between p-3 rounded-[10px]"
        // onClick={() => Navigate("/ticketDetails")}
      >
        <div className="flex gap-4">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleOnChange}
            className="accent-[#EE095B]"
            name=""
            id=""
            onClick={ViewTicketDetail}
          />
          <div>
            <h2 className="text-black font-[600]">
              <Link to={TicketPage}>{ticket.title}</Link>
            </h2>
            <div className="flex justify-center items-center gap-2">
              <h4 className="text-[10px] text-[#EE095B] font-bold">
                {ticket.reason}
              </h4>{" "}
              <span className="text-[10px] text-[#BFBEC2]">{TicketTime}</span>{" "}
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-4">
          <h2>{ticket.status}</h2>
          <button type="button">
            <img
              src={dots}
              alt=""
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            />
          </button>
          {appUser.role == "admin" ? (
            <TicketMenu1
              anchorEl={anchorEl}
              open={open}
              handleClose={handleClose}
              HandleOpenModal={HandleOpenModal}
              CloseTicket={CloseTicket}
              DeleteTicket={DeleteTicket}
            />
          ) : (
            <TicketMenu2
              anchorEl={anchorEl}
              open={open}
              handleClose={handleClose}
              HandleTicketMod={HandleTicketMod}
              EditTicketMod={editTicketMod}
              TicketPage={TicketPage}
            />
          )}
        </div>
      </section>
    </div>
  );
};

export default Ticket;
