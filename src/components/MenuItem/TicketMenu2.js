import React from "react";
import { Menu, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";

const TicketMenu2 = ({
  anchorEl,
  open,
  handleClose,
  HandleTicketMod,
  EditTicketMod,
  TicketPage,
}) => {
  return (
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
          HandleTicketMod();
        }}
      >
        <Link to={TicketPage}>View Ticket</Link>
      </MenuItem>
      <MenuItem
        onClick={() => {
          handleClose();
          EditTicketMod();
        }}
      >
        Edit Ticket
      </MenuItem>
    </Menu>
  );
};

export default TicketMenu2;
