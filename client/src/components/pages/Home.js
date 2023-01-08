import React, { useState, useContext, Component } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_PRODUCTS } from "../../utils/queries";

import { Box, Grid } from "@mui/material";
import ProductCard from "../ProductCard";

// import { experimentalStyled as styled } from '@mui/material/styles';
// import { spacing } from '@mui/system';

// mui homepage with product cards
const Home = (props) => {
  const { loading, data } = useQuery(QUERY_PRODUCTS);

  const userInfo = localStorage.getItem("userInfo");

  const products = data?.products || [];

  return (
    <Box sx={{ flexGrow: 1, mt: 6 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {products.map((products, index) => (
          <Grid
            sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
            item
            xs={2}
            sm={4}
            md={4}
            key={index}
          >
            <ProductCard product={products} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Home;
