import React from 'react';
import { Table, Form, Button, Row, Col } from 'react-bootstrap';
import Header from '../Layouts/Header';
import { Link } from 'react-router-dom';

const CategoryList = () => {
  return (
    <>
    <Header />
    <div className="container mt-4">
      <h2 className="mb-4" style={{ marginTop: '70px' }}>
        Category List
      </h2>

      <Row className="mb-3">
        <Col md={6}>
          <Form.Control type="text" placeholder="Search Category" />
        </Col>
        <Col md={6} className="text-end">
        <Link to={"/create-category"} >
          <Button variant="primary">Add Category</Button>
        </Link>
        
        </Col>
      </Row>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Category Name</th>
            <th>Category Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Category 1</td>
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

export default CategoryList;
