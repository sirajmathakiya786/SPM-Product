import React, { useEffect, useState } from "react";
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
import AxiosInstance from "../services/DataService";

const ProductList = () => {
  const [productList, setProductList] = useState([]);

  const fetchProduct = async () => {
    try {
      const response = await AxiosInstance.get("product/list");
      setProductList(response.data.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <>
      <Header />
      <Link to={"/add-product"}>
        <Button variant="outlined" color="primary" style={{ marginTop: "80px", marginLeft: "1120px" }}>
          Add Product
        </Button>
      </Link>
      <Grid container spacing={2} style={{ marginTop: "20px", marginLeft: "20px" }}>
        {productList.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card style={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                image={`${product.productImage}`}
                height="190"
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  ProductName: {product.productName}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                  Category: {product.categoryId.name}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                  Subcategory: {product.subCategoryId.name}
                </Typography>
                <Typography variant="body1" color="textPrimary">
                  Price: {product.price}
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
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ProductList;

// import React, { useEffect, useState } from "react";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import IconButton from '@mui/material/IconButton';
// import DeleteIcon from "@mui/icons-material/Delete";
// import EditIcon from '@mui/icons-material/Edit';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import Header from "../Layouts/Header";
// import { Grid } from "@mui/material";
// import { Link } from 'react-router-dom';
// import AxiosInstance from "../services/DataService";


// const ProductList = () => {
//   const [productList, setProductList] = useState([]);

//   const fetchProduct = async()=>{
//     try {
//       const response = await AxiosInstance.get("product/list");
//       setProductList(response.data.data);
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   useEffect(()=>{
//     fetchProduct();
//   })
//   return (
//     <>
//       <Header />
//       <Link to={"/add-product"}>
//         <Button variant="outlined" color="primary" style={{ marginTop:"80px", marginLeft: "1120px" }}>
//           Add Product
//         </Button>
//         </Link>
//         <Grid container spacing={2} style={{ marginTop: "20px", marginLeft: "20px" }}>
//         {productList.map((product,index)=>(
//       <Card item xs={12} sm={6} md={4} key={index}>
//         <CardMedia
//           component="img"
//           image="https://via.placeholder.com/300"
//           height="190"
//         />
//         <CardContent>
//           <Typography variant="h6" component="div">
//             ProductName:{product.productName}
//           </Typography>
//           <Typography variant="subtitle1" color="textSecondary" gutterBottom>
//             Category:
//           </Typography>
//           <Typography variant="subtitle1" color="textSecondary" gutterBottom>
//             Subcategory:
//           </Typography>
//           <Typography variant="body1" color="textPrimary">
//             Price:
//           </Typography>
//           <div
//             style={{
//               display: "flex",
//               alignItems: "center",
//               marginTop: "10px",
//             }}
//           >
//             <IconButton color="primary">
//               <FavoriteIcon />
//             </IconButton>
//             <span>Like</span>
//             <IconButton color="secondary">
//               <FavoriteIcon />
//             </IconButton>
//             <span>Dislike</span>
//           </div>
//           <Grid container spacing={1} justifyContent="space-between">
//             <Grid item>
//               <Button
//                 variant="contained"
//                 color="primary"
//                 startIcon={<ShoppingCartIcon />}
//               >
//                 Add to Cart
//               </Button>
//             </Grid>
//             <Grid item>
//               <Button
//                 variant="contained"
//                 color="secondary"
//                 startIcon={<ShoppingCartIcon />}
//               >
//                 Buy Now
//               </Button>
//               </Grid>
//             {/* <Grid item>
//               <Button variant="outlined" color="primary">
//                 Add Product
//               </Button>
//             </Grid> */}
//           </Grid>
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "flex-end",
//               marginTop: "10px",
//             }}
//           >
//             <IconButton color="primary">
//               <EditIcon />
//             </IconButton>
//             <IconButton color="secondary">
//               <DeleteIcon />
//             </IconButton>
//           </div>
//         </CardContent>
//       </Card>
//       ))}
//       </Grid>
//     </>
//   );
// };

// export default ProductList;
