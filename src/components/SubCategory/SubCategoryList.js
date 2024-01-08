import React from 'react';
import { Table, Form, Button, Row, Col } from 'react-bootstrap';
import Header from '../Layouts/Header';

const SubCategoryList = () => {
  return (
    <>
    <Header />
    <div className="container mt-4">
      <h2 className="mb-4" style={{ marginTop: '70px' }}>
        SubCategoryList
      </h2>

      <Row className="mb-3">
        <Col md={6}>
          <Form.Control type="text" placeholder="Search SubCategory" />
        </Col>
        <Col md={6} className="text-end">
          <Button variant="primary">Add SubCategory</Button>
        </Col>
      </Row>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Category Name</th>
            <th>SubCategory Name</th>
            <th>SubCategory Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Category 1</td>
            <td>SubCategory 1</td>
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

export default SubCategoryList;
