import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";

import { useQuery, useMutation } from "@apollo/client";
import { QUERY_PRODUCT } from "../../utils/queries";

// const addresses = ["404 Placeholder Dr", "Reactville", "JS", "12345", "USA"];

export default function Review() {
  const productName = localStorage.getItem("productName");

  const { loading, data } = useQuery(QUERY_PRODUCT, {
    variables: { name: productName },
  });

  const product = data?.product || [];

  // const { address1, address2, city, state, zip, country};
  let firstname = localStorage.getItem("firstName");
  let lastname = localStorage.getItem("lastName");
  let addresses = [];
  addresses.push(
    localStorage.getItem("address1"),
    // localStorage.getItem("address2"),
    localStorage.getItem("city"),
    localStorage.getItem("state"),
    localStorage.getItem("country")
  );

  localStorage.setItem("shippingAddress", addresses.join(", "));

  const payments = [
    { name: "Card type", detail: "Visa" },
    { name: "Card holder", detail: firstname + " " + lastname },
    { name: "Card number", detail: "xxxx-xxxx-xxxx-1234" },
    { name: "Expiry date", detail: "04/2024" },
  ];
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
          <ListItemText primary={product.name} />
          <Typography variant="body2">${product.price}</Typography>
        </ListItem>

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            ${product.price}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>
            {firstname} {lastname}
          </Typography>
          <Typography gutterBottom>{addresses.join(", ")}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
