import React from 'react';
import { Table, Form, Button, Row, Col } from 'react-bootstrap';
import Header from '../Layouts/Header';

const UserList = () => {
  return (
    <>
    <Header />
    <div className="container mt-4">
      <h2 className="mb-4" style={{ marginTop: '70px' }}>
        User List
      </h2>

      <Row className="mb-3">
        <Col md={6}>
          <Form.Control type="text" placeholder="Search User" />
        </Col>
        <Col md={6} className="text-end">
          <Button variant="primary">Add User</Button>
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
          <tr>
            <td>1</td>
            <td>Test</td>
            <td>test@gmail.com</td>
            <td>1234567890</td>
            <td>Admin</td>
            <td>1</td>
            <td>
              <Button variant="info">Edit</Button>{' '}
              <Button variant="danger">Delete</Button>
            </td>
          </tr>
          {/* Add more rows for additional categories */}
        </tbody>
      </Table>
    </div>
    </>
  );
};

export default UserList;
