import Header from "../Layouts/Header";
import React from 'react';
import { Grid, TextField } from '@mui/material';


const CreateCategory = () => {
      
  return (
    <>
      <Header />
      <div className="container mt-4">
      <h2 className="mb-4" style={{ marginTop: '70px', textAlign: 'center' }}>
        Add Category
      </h2>

      <React.Fragment>
        <Grid container justifyContent="center" spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="name"
              name="name"
              label="Category Name"
             
              fullWidth
              autoComplete="Category"
              variant="outlined"
              style={{ borderRadius: '20px' }}
            />
          </Grid>
        </Grid>
      </React.Fragment>
    </div>

    </>
  );
};

export default CreateCategory;
