import React from "react";
import { Menu, MenuItem } from "@mui/material";

const TicketMenu1 = ({
  anchorEl,
  open,
  handleClose,
  HandleOpenModal,
  CloseTicket,
  handleOpenDel,
  setAssignID,
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
          setAssignID();
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
          setAssignID();
          handleOpenDel();
        }}
      >
        Delete Ticket
      </MenuItem>
    </Menu>
  );
};

export default TicketMenu1;
