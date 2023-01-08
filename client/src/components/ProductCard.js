import React from "react";
import { Link } from "react-router-dom";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ProductCard({ product }) {
  console.log("product", product);

  const imgPath = product.image;

  const handleOnClick = (event) => {
    localStorage.setItem("productName", product.name);
  };

  return (
    <Card sx={{ minWidth: 375, boxShadow: 7 }}>
      <CardMedia component="img" alt={product.name} height="250" src={imgPath} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ${product.price}
        </Typography>
      </CardContent>
      <CardActions style={{ justifyContent: "center" }}>
        <Button size="small" component={Link} to="/checkout" onClick={handleOnClick}>
          Buy Now
        </Button>
      </CardActions>
    </Card>
  );
}
