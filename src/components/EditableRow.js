import React from "react";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import TableRow from "@mui/material/TableRow";

import { Grid } from "@mui/material";
import Button from "./Button";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.grey[500],
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
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

const EditableRow = ({ data, agent, setAgent, SetSelectedId }) => {
  function handleInput(e) {
    const newData = agent.map((item) =>
      item.id === data.id ? { ...item, [e.target.name]: e.target.value } : item
    );
    setAgent(newData);
  }

  console.log("editable agent", agent);

  function handleUpdate(data) {
    // SetSelectedId(-1);
    console.log("look here", data);
  }

  return (
    <StyledTableRow key={data.id}>
      <StyledTableCell>
        <label className="block" htmlFor="firstname">
          Firstname
        </label>
        <input
          className="block pl-2 pt-1 pr-1 pb-1 border-[2px] border-black rounded-[5px]"
          type="text"
          name="firstname"
          onChange={handleInput}
          value={data.firstname}
        />
      </StyledTableCell>
      <StyledTableCell>
        <label htmlFor="lastname">Lastname</label>
        <input
          className="block pl-2 pt-1 pr-1 pb-1 border-[2px] border-black rounded-[5px]"
          type="text"
          name="lastname"
          onChange={handleInput}
          value={data.lastname}
        />
      </StyledTableCell>
      <StyledTableCell>
        <label htmlFor="email">Email</label>
        <input
          className="block pl-2 pt-1 pr-1 pb-1 border-[2px] border-black rounded-[5px]"
          type="email"
          name="email"
          onChange={handleInput}
          value={data.email}
        />
      </StyledTableCell>
      <StyledTableCell>
        <label htmlFor="role">Role</label>
        <input
          className="block pl-2 pt-1 pr-1 pb-1 border-[2px] border-black rounded-[5px]"
          type="text"
          name="role"
          onChange={handleInput}
          value={data.role}
        />
      </StyledTableCell>
      <StyledTableCell>
        <Button
          ClassName="bg-green-600 w-[90px] h-[40px] text-white rounded-[5px] text-[14px] font-[600] mt-4"
          ButtonText="Update"
          HandleOpen={() => handleUpdate(data)}
        />
      </StyledTableCell>
    </StyledTableRow>
  );
};

export default EditableRow;
