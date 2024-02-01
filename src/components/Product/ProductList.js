import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import { Modal, Button as BootstrapButton } from 'react-bootstrap';
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button as MuiButton } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Header from "../Layouts/Header";
import { Grid } from "@mui/material";
import { Link, useNavigate } from 'react-router-dom';
import AxiosInstance from "../services/DataService";
import { toast } from "react-toastify";

const ProductList = () => {
  let navigate = useNavigate();
  const [productList, setProductList] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteProductId, setDeleteProductId] = useState('');
  

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

  const handleDelete = async(id)=>{
    try {
      const response = await AxiosInstance.delete(`product/delete/${id}`)
      console.log(response.data);
      if(response.status === 200){
        toast.success(response.data.message)
        fetchProduct();
      }
    } catch (error) {
      if(error.response && error.response.data && error.response.data.message){
        toast.error(error.response.data.message)
      }
    }
  }

  const handleConfirmDelete = ()=>{
    if(deleteProductId){
      handleDelete(deleteProductId);
      setShowDeleteModal(false);
      setDeleteProductId(null)
    }
  }

  const showDeleteConfirmation = (productId)=>{
    setDeleteProductId(productId);
    setShowDeleteModal(true);
  }

  const handleCancelConfirmation = ()=>{
    setShowDeleteModal(false);
    setDeleteProductId(null);
  }

  const handleEdit = (product)=>{
    navigate(`/edit-product/${product._id}`,{
      state:{product}
    })
  }

  return (
    <>
      <Header />
      
      <Link to={"/add-product"}>
        <MuiButton variant="outlined" color="primary" style={{ marginTop: "80px", marginLeft: "1120px" }}>
          Add Product
        </MuiButton>
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
                <Typography variant="h6" component="div" style={{ fontWeight: 'bold' }}>
                  ProductName: {product.productName}
                </Typography>
                <Typography variant="subtitle1" color="textPrimary" gutterBottom>
                  <span style={{ fontWeight: 'bold' }}>Category:</span> {product.categoryId.name}
                </Typography>
                <Typography variant="body1" color="textPrimary" gutterBottom>
                  <span style={{ fontWeight: 'bold' }}>Subcategory:</span> {product.subCategoryId.name}
                </Typography>
                <Typography variant="body1" color="textPrimary">
                  <span style={{ fontWeight: 'bold' }}>Price:</span> {product.price}
                </Typography>
                <Typography variant="body1" color="textPrimary">
                  <span style={{ fontWeight: 'bold' }}>Description:</span> {product.description}
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
                    <MuiButton
                      variant="contained"
                      color="primary"
                      startIcon={<ShoppingCartIcon />}
                    >
                      Add to Cart
                    </MuiButton>
                  </Grid>
                  <Grid item>
                    <MuiButton
                      variant="contained"
                      color="secondary"
                      startIcon={<ShoppingCartIcon />}
                    >
                      Buy Now
                    </MuiButton>
                    </Grid>
                  
                </Grid>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginTop: "10px",
                  }}
                >
                  <IconButton color="primary" onClick={()=> handleEdit(product)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton color="secondary" onClick={()=> showDeleteConfirmation(product._id)}>
                    <DeleteIcon />
                  </IconButton>
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Modal show={showDeleteModal} onHide={handleCancelConfirmation}  style={{ marginTop: '50px' }}>
          <Modal.Header closeButton>
            <Modal.Title>Confirm Delete</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Are you sure you want to delete this product?
          </Modal.Body>
          <Modal.Footer>
          <BootstrapButton variant="secondary" onClick={handleCancelConfirmation}>
            Cancel
          </BootstrapButton>
          <BootstrapButton variant="danger" onClick={handleConfirmDelete}>
            Delete
          </BootstrapButton>
          </Modal.Footer>
        </Modal>
    </>
  );
};

export default ProductList;

