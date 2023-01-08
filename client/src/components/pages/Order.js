import { useQuery, useMutation } from "@apollo/client";
import { useParams, Link } from "react-router-dom";
import { ADD_ORDER, CREATE_ORDER } from "../../utils/mutations";
import { QUERY_USER_ORDERS } from "../../utils/queries";

import * as React from "react";
import Link2 from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

const Order = () => {
  let userID = localStorage.getItem("userID");

  let userEmail = localStorage.getItem("userEmail");

  console.log(userEmail);

  const { loading, data } = useQuery(QUERY_USER_ORDERS, {
    variables: { email: userEmail },
  });
  // const { loading, data } = useQuery(QUERY_PRODUCTS, {
  //   variables: { _id: id },
  // });

  console.log(data);

  const orders = data?.order || [];

  console.log(orders);

  const [addOrder, { error }] = useMutation(ADD_ORDER);

  return (
    <React.Fragment>
      <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Order ID</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Ship To</TableCell>
              <TableCell>Payment Method</TableCell>
              <TableCell align="right">Sale Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order._id}>
                <TableCell>{order._id}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>{order.user_email}</TableCell>
                <TableCell>{order.shipTo}</TableCell>
                <TableCell>{order.paymentMethod}</TableCell>
                <TableCell align="right">{`$${order.amount}`}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {/* < Link2 color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
          See more orders
            </>*/}
      </Paper>
    </React.Fragment>
  );
};
export default Order;
