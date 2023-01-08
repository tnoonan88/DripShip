import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import { QUERY_USERS, QUERY_PRODUCTS, QUERY_ORDERS } from "../../utils/queries";
import { ADD_USER } from "../../utils/mutations";

import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

// add users
// do we display user list on same screen as adding users?

const User = () => {
  const { loading, data } = useQuery(QUERY_USERS);

  const userList = data?.user || [];

  const [createUser, { error }] = useMutation(ADD_USER);

  return (
    <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
      <h2 id="role-grabber">Welcome, {userList.firstname}!</h2>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Ship To</TableCell>
            <TableCell>Payment Method</TableCell>
            <TableCell align="right">Sale Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userList.map((user) => (
            <TableRow key={user.id}>
              <TableCell>text1</TableCell>
              <TableCell>{user.firstname}</TableCell>
              <TableCell>row.shipTo</TableCell>
              <TableCell>row.paymentMethod</TableCell>
              <TableCell align="right">`$$row.amount`</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default User;
