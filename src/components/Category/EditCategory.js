// import { useFormik } from 'formik';
// import * as Yup from 'yup';
import Header from "../Layouts/Header";
import React, { useRef, useState } from "react";
import { Grid, TextField } from '@mui/material';
import { Button } from "react-bootstrap";
import AxiosInstance from "../services/DataService";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";


const EditCategory = () => {
    let navigate = useNavigate();
    const [selectedImage, setSelectedImage] = useState('');
    const inputRef = useRef('');
    const { category } = useLocation().state
    
    const [formData, setFormData] = useState({
        name: category?.name || "",
        image: category?.image || ""
    })
    
    const handleChange = (e)=>{
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      })
    }

    const handleSubmit = async(e)=>{
      e.preventDefault();
      try {
        
        const updateCategory = new FormData();
        updateCategory.append('name', formData.name);
        updateCategory.append('image', formData.image);
        
        const response = await AxiosInstance.patch(`category/update/${category._id}`,updateCategory)
        toast.success(response.data.message)
        setTimeout(()=>{
          navigate('/category-list')
        },2000)
      } catch (error) {
        
      }
    }
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
          setFormData({
            ...formData,
            image: file,
          })
          const reader = new FileReader();
          reader.onload = (e) => {
            setSelectedImage(e.target.result);
          };
          reader.readAsDataURL(file);
        }
      };
      
      const handleImageBoxClick = () => {
        inputRef.current.click();
      };
      
      const removeImage = () => {
        setFormData({
          image: ''
        })
        setSelectedImage('');
      };

  return (
    <>
      <Header />
      <div className="container mt-4">
      <h2 className="mb-4" style={{ marginTop: '70px', textAlign: 'center' }}>
        Edit Category
      </h2>

      <React.Fragment>
        <form onSubmit={handleSubmit}>
        <Grid container justifyContent="center"  spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="name"
              name="name"
              label="Category Name"
              fullWidth
              autoComplete="Category"
              variant="outlined"
              value={formData.name}
              onChange={handleChange}
              style={{ borderRadius: '20px' }}
            />
          </Grid>
          </Grid>
          <div className="mb-3" >
            <input
              type="file"
              className="form-control"
              id="image"
              name="image"
              onChange={handleImageChange}
              ref={inputRef}
              style={{ display: 'none' }}
            />
            <div
              className="mt-4"
              style={{ width: '200px', height: '200px', border: '1px solid #ccc', marginLeft: '285px', overflow: 'hidden', position: 'relative', cursor: 'pointer' }}
              onClick={handleImageBoxClick}
            >
              {selectedImage || formData?.image ? (
                <>
                  <span
                    style={{ position: 'absolute', top: '5px', right: '5px', cursor: 'pointer', color: '#fff', backgroundColor: '#333', padding: '5px' }}
                    onClick={removeImage}
                  >
                    Remove
                  </span>
                  <img src={selectedImage ? selectedImage : formData?.image } alt="Selected" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </>
              ) : 
              (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%', backgroundColor: '#f0f0f0', border: '1px solid #ccc' }}>
                  <span>No Image Selected</span>
                </div>
              )}
              </div>
            </div>
            <div style={{ textAlign: 'center', marginTop: '20px', marginRight:"380px" }}>
              <button className="btn btn-primary mx-2" >
                Submit
              </button>
              <button className="btn btn-secondary mx-2" >
                Cancel
              </button>
            </div>
            </form>

      </React.Fragment>
    </div>

    </>
  );
};

export default EditCategory;
