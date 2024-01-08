import React from "react";
import Header from "../Layouts/Header";
import { Card, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Dashboard = () => {
  return (
    <>
      <Header />
      <div className="container mt-4">
      <h2 className="mb-4" style={{ marginTop: "70px" }}>
        Dashboard
      </h2>
      <Row>
        <Col md={6} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Category</Card.Title>
              <Card.Text>
                <p>Category Count: 00</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Sub Category</Card.Title>
              <Card.Text>
                <p>SubCategory Count: 00</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Product</Card.Title>
              <Card.Text>
                <p>Product Count: 00</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Order</Card.Title>
              <Card.Text>
                <p>Order Count: 00</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>User</Card.Title>
              <Card.Text>
                <p>User Count: 00</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>

    </>
  );
};

export default Dashboard;
