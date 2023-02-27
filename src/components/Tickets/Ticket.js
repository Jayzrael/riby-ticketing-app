import { Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import axios, { BaseUrl } from "../../Api/axios";
import dots from "../../assets/dots.png";
import TicketDetails from "./TicketDetails";

const Ticket = ({
  ticket,
  TicketTime,
  HandleOpenModal,
  CloseTicket,
  DeleteTicket,
  ViewTicketDetail,
  TicketPage,
}) => {
  const [drop, setDrop] = useState(false);
  // const [viewDetails, setViewDetails] = useState({});
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [isChecked, setIsChecked] = useState(false);

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

  const Navigate = useNavigate();

  // const viewOneUser = () => {
  //   console.log(ticket);
  //   setViewDetails(ticket);
  // };

  // console.log("ticketState", viewDetails);

  return (
    <div>
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
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem
              onClick={() => {
                handleClose();
                HandleOpenModal();
              }}
            >
              Assign Ticket
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleClose();
                CloseTicket();
              }}
            >
              Close Ticket
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleClose();
                DeleteTicket();
              }}
            >
              Delete Ticket
            </MenuItem>
          </Menu>
        </div>
      </section>
    </div>
  );
};

export default Ticket;
