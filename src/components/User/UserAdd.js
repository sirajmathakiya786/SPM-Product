import React from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Header from "../Layouts/Header";
import { InputLabel, MenuItem, Select } from "@mui/material";

const UserAdd = () => {
  return (
    <>
      <Header />
      <div className="container mt-4">
        <h2 className="mb-4" style={{ marginTop: "70px", textAlign: "center" }}>
          Add User
        </h2>

        <React.Fragment>
          <Grid container justifyContent="center" spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="name"
                name="name"
                label="Full Name"
                fullWidth
                autoComplete="Name"
                variant="outlined"
                style={{ borderRadius: "20px", marginTop: "30px" }}
              />
            </Grid>
          </Grid>
          <Grid container justifyContent="center" spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="email"
                name="email"
                label="Email"
                fullWidth
                autoComplete="email"
                type="email"
                variant="outlined"
                style={{ borderRadius: "20px", marginTop: "30px" }}
              />
            </Grid>
          </Grid>
          <Grid container justifyContent="center" spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="password"
                name="password"
                label="Password"
                fullWidth
                autoComplete="password"
                type="password"
                variant="outlined"
                style={{ borderRadius: "20px", marginTop: "30px" }}
              />
            </Grid>
          </Grid>
          <Grid container justifyContent="center" spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="phoneNumber"
                name="phoneNumber"
                label="PhoneNumber"
                fullWidth
                autoComplete="phoneNumber"
                type="number"
                variant="outlined"
                style={{ borderRadius: "20px", marginTop: "30px" }}
              />
            </Grid>
          </Grid>
          <Grid container justifyContent="center" spacing={3}>
            <Grid item xs={12} sm={6}>
              <InputLabel
                htmlFor="role"
                style={{ marginTop: "30px", marginBottom: "10px" }}
              >
                Role
              </InputLabel>
              <Select
                required
                id="role"
                name="role"
                fullWidth
                autoComplete="Role"
                variant="outlined"
                style={{ borderRadius: "20px" }}
              >
                <MenuItem value="option1">Seller</MenuItem>
                <MenuItem value="option2">Admin</MenuItem>
              </Select>
            </Grid>
          </Grid>
        </React.Fragment>
      </div>
    </>
  );
};

export default UserAdd;
