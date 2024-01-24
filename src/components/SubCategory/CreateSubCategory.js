import Header from "../Layouts/Header";
import React, { useRef, useState } from "react";
import { Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';


const CreateSubCategory = () => {
  const [selectedImage, setSelectedImage] = useState('');
  const inputRef = useRef('');
  const [formData, setFormData] = useState({
    
  })

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
       
        profileImage: file
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
      profileImage: ''
    })
    setSelectedImage('');
  };
  return (
    <>
      <Header />
      <div className="container mt-4">
      <h2 className="mb-4" style={{ marginTop: '70px', textAlign: 'center' }}>
        Add SubCategory
      </h2>

      <React.Fragment>
        <Grid container justifyContent="center" spacing={3}>
            <Grid item xs={12} sm={6}>
                <InputLabel htmlFor="subCategory" style={{ marginBottom: '10px' }}>
                Category Name
                </InputLabel>
                <Select
                required
                id="subCategory"
                fullWidth
                autoComplete="Category"
                variant="outlined"
                style={{ borderRadius: '20px' }}
                >
                <MenuItem value="option1">Option 1</MenuItem>
                <MenuItem value="option2">Option 2</MenuItem>
                <MenuItem value="option3">Option 3</MenuItem>
                </Select>
            </Grid>
        </Grid>
        <Grid container justifyContent="center" spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="name"
              name="name"
              label="SubCategory Name"
              fullWidth
              autoComplete="Category"
              variant="outlined"
              style={{ borderRadius: '20px', marginTop: '30px'  }}
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
              {selectedImage ? (
                <>
                  <span
                    style={{ position: 'absolute', top: '5px', right: '5px', cursor: 'pointer', color: '#fff', backgroundColor: '#333', padding: '5px' }}
                    onClick={removeImage}
                  >
                    Remove
                  </span>
                  <img src={selectedImage} alt="Selected" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
      </React.Fragment>
    </div>

    </>
  );
};

export default CreateSubCategory;
