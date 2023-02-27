import React from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import { useEffect } from "react";
import axios, { BaseUrl } from "../Api/axios";
import {
  Avatar,
  Grid,
  makeStyles,
  Menu,
  MenuItem,
  TableFooter,
  Typography,
} from "@mui/material";
// import CircleIcon from "@material-ui/icons/Circle";
// import FiberManualRecordRoundedIcon from "@material-ui/icons/FiberManualRecordRounded";
import { BsFillCircleFill } from "react-icons/bs";
import EditMod from "./EditMod";
import EditableRow from "./EditableRow";
import { Fragment } from "react";
import DetachedTable from "./DetachedTable";
import AgentTableSk from "./Skeleton/AgentTableSk";

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

const AgentTable = ({
  HandleModOpen,
  openEditModal,
  AgentData,
  DeleteAgent,
  Search,
  loading,
}) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedId, setSelectedId] = useState(-1);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Agent Name</StyledTableCell>
              <StyledTableCell>Email Address</StyledTableCell>
              <StyledTableCell>Date Joined</StyledTableCell>
              <StyledTableCell>Extension</StyledTableCell>
              <StyledTableCell>Status</StyledTableCell>
              <StyledTableCell></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {AgentData.filter((item) => {
              return Search.toLowerCase() === ""
                ? item
                : item.firstname.toLowerCase().includes(Search);
            })
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(
                (data) => (
                  <DetachedTable
                    data={data}
                    handleClose={handleClose}
                    openEditModal={openEditModal}
                    DeleteAgent={DeleteAgent}
                    handleClick={handleClick}
                    anchorEl={anchorEl}
                    HandleModOpen={HandleModOpen}
                    open={open}
                  />
                )
                // )
              )}
          </TableBody>
          <TableFooter>
            <TablePagination
              rowsPerPageOptions={[5, 10, 15]}
              component="div"
              count={AgentData.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </TableFooter>
        </Table>
      </TableContainer>
    </div>
  );
};

export default AgentTable;
