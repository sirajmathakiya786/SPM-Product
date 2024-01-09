import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Header from "../Layouts/Header";
import { Grid } from "@mui/material";
import { Link } from 'react-router-dom';


const ProductList = () => {
  return (
    <>
      <Header />
      <Link to={"/add-product"}>
        <Button variant="outlined" color="primary" style={{ marginTop:"80px", marginLeft: "1120px" }}>
          Add Product
        </Button>
        </Link>
      <Card
        style={{ marginLeft: "20px", marginTop: "40px",marginBottom: "20px", maxWidth: 345 }}
      >
        <CardMedia
          component="img"
          image="https://via.placeholder.com/300"
          height="190"
        />
        <CardContent>
          <Typography variant="h6" component="div">
            ProductName:
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" gutterBottom>
            Category:
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" gutterBottom>
            Subcategory:
          </Typography>
          <Typography variant="body1" color="textPrimary">
            Price:
          </Typography>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "10px",
            }}
          >
            <IconButton color="primary">
              <FavoriteIcon />
            </IconButton>
            <span>Like</span>
            <IconButton color="secondary">
              <FavoriteIcon />
            </IconButton>
            <span>Dislike</span>
          </div>
          <Grid container spacing={1} justifyContent="space-between">
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                startIcon={<ShoppingCartIcon />}
              >
                Add to Cart
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="secondary"
                startIcon={<ShoppingCartIcon />}
              >
                Buy Now
              </Button>
              </Grid>
            {/* <Grid item>
              <Button variant="outlined" color="primary">
                Add Product
              </Button>
            </Grid> */}
          </Grid>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "10px",
            }}
          >
            <IconButton color="primary">
              <EditIcon />
            </IconButton>
            <IconButton color="secondary">
              <DeleteIcon />
            </IconButton>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default ProductList;
