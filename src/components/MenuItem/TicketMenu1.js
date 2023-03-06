import React from "react";
import { Menu, MenuItem } from "@mui/material";

const TicketMenu1 = ({
  anchorEl,
  open,
  handleClose,
  HandleOpenModal,
  CloseTicket,
  DeleteTicket,
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
  );
};

export default TicketMenu1;
