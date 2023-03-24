import React from "react";
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
import { Avatar, TableFooter } from "@mui/material";
import DetachedTable from "./DetachedTable";
import SkeletonAgents from "./Skeleton/SkeletonAgents";

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
  skloader,
}) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
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
              .reverse()
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
            {!skloader && (
              <TablePagination
                rowsPerPageOptions={[10, 15, 20]}
                component="div"
                count={AgentData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            )}
          </TableFooter>
        </Table>
      </TableContainer>
      {skloader && [1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => <SkeletonAgents />)}
    </div>
  );
};

export default AgentTable;
