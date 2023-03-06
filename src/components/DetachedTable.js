import {
  Avatar,
  Grid,
  Menu,
  MenuItem,
  styled,
  TableCell,
  tableCellClasses,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { BsFillCircleFill } from "react-icons/bs";
import axios from "../Api/axios";
import Dots from "../assets/dots.png";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.grey[500],
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.dark,
  color: theme.palette.common.white,
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const DetachedTable = ({
  data,
  openEditModal,
  DeleteAgent,
  HandleModOpen,
  open,
}) => {
  const [drop, setDrop] = useState(false);

  const handleMenu = () => {
    setDrop(!drop);
  };

  function setData(data) {
    console.log("udated data", data);
    let { id, firstname, lastname, email } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("firstname", firstname);
    localStorage.setItem("lastname", lastname);
    localStorage.setItem("email", email);
  }

  return (
    <StyledTableRow key={data.id}>
      <StyledTableCell>
        <Grid
          container
          spacing={1}
          className="flex justify-center items-center"
        >
          <Grid item lg={2}>
            <StyledAvatar alt={data.firstname} src="." />
          </Grid>
          <Grid item lg={10}>
            {data.firstname + " " + data.lastname}
          </Grid>
        </Grid>
      </StyledTableCell>
      <StyledTableCell>{data.email}</StyledTableCell>
      <StyledTableCell>8 Feb 2022</StyledTableCell>
      <StyledTableCell>456</StyledTableCell>
      <StyledTableCell>
        <Typography className="text-[#04AD85] flex justify-center items-center gap-1">
          {" "}
          <BsFillCircleFill size={5} />{" "}
          <span className="text-[12px]">Active</span>
        </Typography>
      </StyledTableCell>
      <StyledTableCell>
        {" "}
        <img
          src={Dots}
          className="cursor-pointer"
          alt=""
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          // onClick={handleClick}
          onClick={() => {
            handleMenu();
            setData(data);
          }}
          // onClick={() => setData(data)}
        />{" "}
        {drop && (
          <div class="absolute right-0 z-10 p-3 w-[120px] h-[110px] rounded-[10px] box-border mt-8  origin-top-right bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div
              className="flex flex-col justify-start gap-3 pt-2 cursor-pointer"
              onClick={() => {
                setDrop(false);
                HandleModOpen();
                setData(data);
              }}
            >
              View Agent
            </div>
            <div
              className="flex flex-col justify-start gap-3 pt-2 cursor-pointer"
              onClick={() => {
                setDrop(false);
                openEditModal();
                setData(data);
              }}
            >
              Edit Agent
            </div>
            <div
              className="flex flex-col justify-start gap-3 pt-2 cursor-pointer"
              onClick={() => {
                setDrop(false);
                DeleteAgent(data.id);
                console.log("delete data", data.id);
              }}
            >
              Delete Agent
            </div>
          </div>
        )}
      </StyledTableCell>
    </StyledTableRow>
  );
};

export default DetachedTable;
