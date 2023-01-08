// add / edit / delete product
// prefer a form layout for the layout of this screen
import { useQuery, useMutation } from "@apollo/client";
import { useParams, Link } from "react-router-dom";
import { CREATE_PRODUCT } from "../../utils/mutations";
import { QUERY_PRODUCTS } from "../../utils/queries";

import * as React from "react";
import Link2 from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

// add / edit / delete order
// prefer a form layout for the layout of this screen

const Product = () => {
  // let { id } = useParams();
  const { loading, data } = useQuery(QUERY_PRODUCTS);
  // const { loading, data } = useQuery(QUERY_PRODUCTS, {
  //   variables: { _id: id },
  // });

  const products = data?.products || [];

  const [createProduct, { error }] = useMutation(CREATE_PRODUCT);

  return (
    <React.Fragment>
      <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
        <Table size="small">
          <TableHead>Available Products:
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Stock</TableCell>
              <TableCell>Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.stock}</TableCell>
                <TableCell>{product.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {/* <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link> */}
      </Paper>
    </React.Fragment>
  );

  // return (
  //   <div className="card bg-white card-rounded w-50">
  //     <div className="card-header bg-dark text-center">
  //       <h1>Here are the products!</h1>
  //     </div>
  //     {loading ? (
  //       <div>Loading...</div>
  //     ) : (
  //       <div className="card-body text-center mt-3">
  //         <h2>{products[0].name}</h2>
  //         <button className="btn btn-info">Vote for {products[0].name}</button>{" "}
  //         <div className="card-footer text-center m-3">
  //           <br></br>
  //           <Link to="/">
  //             <button className="btn btn-lg btn-danger">View all products</button>
  //           </Link>
  //         </div>
  //       </div>
  //     )}
  //   </div>
  // );
};

export default Product;

// return (
//   <React.Fragment>
//     <Title>Recent Orders</Title>
//     <Table size="small">
//       <TableHead>
//         <TableRow>
//           <TableCell>Date</TableCell>
//           <TableCell>Name</TableCell>
//           <TableCell>Ship To</TableCell>
//           <TableCell>Payment Method</TableCell>
//           <TableCell align="right">Sale Amount</TableCell>
//         </TableRow>
//       </TableHead>
//       <TableBody>
//         {rows.map((row) => (
//           <TableRow key={row.id}>
//             <TableCell>{row.date}</TableCell>
//             <TableCell>{row.name}</TableCell>
//             <TableCell>{row.shipTo}</TableCell>
//             <TableCell>{row.paymentMethod}</TableCell>
//             <TableCell align="right">{`$${row.amount}`}</TableCell>
//           </TableRow>
//         ))}
//       </TableBody>
//     </Table>
//     <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
//       See more orders
//     </Link>
//   </React.Fragment>
// );
