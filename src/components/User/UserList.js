import React, { useEffect, useState } from "react";
import { Table, Form, Button, Row, Col } from "react-bootstrap";
import Header from "../Layouts/Header";
import { Link } from "react-router-dom";
import AxiosInstance from "../services/DataService";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from '@mui/icons-material/Edit';


const UserList = () => {
  const [userList, setUserList] = useState([]);

  const fetchUser = async () => {
    try {
      const response = await AxiosInstance.get("users/list");
      setUserList(response.data.data);
    } catch (error) {}
  };
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      <Header />
      <div className="container mt-4">
        <h2 className="mb-4" style={{ marginTop: "70px" }}>
          User List
        </h2>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Control type="text" placeholder="Search User" />
          </Col>
          <Col md={6} className="text-end">
            <Link to="/add-user">
              <Button variant="primary">Add User</Button>
            </Link>
          </Col>
        </Row>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>PhoneNumber</th>
              <th>Role</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {userList.length
              ? userList?.map((user, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.phoneNumber}</td>
                      <td>{user.role}</td>
                      <td>1</td>
                      <td>
                        <IconButton color="primary">
                          <EditIcon />
                        </IconButton>
                        <IconButton color="secondary">
                          <DeleteIcon />
                        </IconButton>
                      </td>
                    </tr>
                  );
                })
              : "No record found"}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default UserList;
