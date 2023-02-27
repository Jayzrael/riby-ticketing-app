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
import Dots from "../assets/dots.png";
import { useEffect } from "react";
import axios, { BaseUrl } from "../Api/axios";
import {
  Avatar,
  Grid,
  makeStyles,
  TableFooter,
  Typography,
} from "@mui/material";

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

const CrmTable = () => {
  const [ticketData, setTicketData] = useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [drop, setDrop] = useState(false);

  const handleMenu = () => {
    setDrop(!drop);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  // const classes = useStyle();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    var config = {
      method: "get",
      url: `${BaseUrl}/tickets`,
      headers: {},
    };

    axios(config)
      .then((res) => {
        console.log(res.data.tickets);
        setTicketData(res.data.tickets);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Customer Name</StyledTableCell>
              <StyledTableCell>Email Address</StyledTableCell>
              <StyledTableCell>Phone Number</StyledTableCell>
              <StyledTableCell>Call Type</StyledTableCell>
              <StyledTableCell>Product Category</StyledTableCell>
              <StyledTableCell></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ticketData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((data) => (
                <StyledTableRow key={data.id}>
                  <StyledTableCell>
                    <Grid
                      container
                      spacing={4}
                      className="flex justify-center items-center"
                    >
                      <Grid item lg={2}>
                        <StyledAvatar alt={data.firstName} src="." />
                      </Grid>
                      <Grid item lg={10}>
                        {data.firstName + " " + data.lastName}
                      </Grid>
                    </Grid>
                  </StyledTableCell>
                  <StyledTableCell>{data.email}</StyledTableCell>
                  <StyledTableCell>{data.tell}</StyledTableCell>
                  <StyledTableCell>{data.callType}</StyledTableCell>
                  <StyledTableCell>{data.productCategory}</StyledTableCell>
                  <StyledTableCell>
                    {" "}
                    <img
                      src=""
                      className="cursor-pointer"
                      alt=""
                      onClick={() => {
                        handleMenu();
                      }}
                    />{" "}
                    {/* {drop && (
                      <div class="absolute right-0 z-10 p-3 w-[120px] h-[110px] rounded-[10px] box-border mt-8  origin-top-right bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div
                          className="flex flex-col justify-start gap-3 pt-2 cursor-pointer"
                          onClick={() => {
                            setDrop(false);
                          }}
                        >
                          View Ticket
                        </div>
                        <div
                          className="flex flex-col justify-start gap-3 pt-2 cursor-pointer"
                          onClick={() => {
                            setDrop(false);
                          }}
                        >
                          Edit Agent
                        </div>
                      </div>
                    )} */}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
          <TableFooter>
            <TablePagination
              rowsPerPageOptions={[5, 10, 15]}
              component="div"
              count={ticketData.length}
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

export default CrmTable;
