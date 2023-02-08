import React from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import { useEffect } from "react";
import axios, { BaseUrl } from "../Api/axios";

const CrmComp = ({ currentItem }) => {
  const [agentData, setAgentData] = useState([]);

  useEffect(() => {
    var config = {
      method: "get",
      url: `${BaseUrl}/agents`,
      headers: {},
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data.agents));
        setAgentData(response.data.agents);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Agent Name</TableCell>
              <TableCell>Email Address</TableCell>
              <TableCell>Date Joined</TableCell>
              <TableCell>Extension</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {agentData.map((data) => (
              <TableRow key={data.name}>
                <TableCell>{data.name}</TableCell>
                <TableCell>{data.calories}</TableCell>
                <TableCell>{data.fat}</TableCell>
                <TableCell>{data.carbs}</TableCell>
                <TableCell>{data.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CrmComp;
