import React, { useEffect, useState } from 'react';
import { Table, Form, Button, Row, Col } from 'react-bootstrap';
import Header from '../Layouts/Header';
import { Link } from 'react-router-dom';
import AxiosInstance from '../services/DataService';
import ReactPaginate from 'react-paginate';

const CategoryList = () => {
  const [categoryList, setCategoryList] = useState([]);
  const[pageNumber, setPageNumber] = useState(0);
  const itemsPerPage = 10;

  const fetchCategory = async() =>{
    try {
      const response = await AxiosInstance.get("category/list")
      setCategoryList(response.data.data)
    } catch (error) {
      
    }
  }

  useEffect(()=>{
    fetchCategory();
  }, [])

  const pageCount = Math.ceil(categoryList.length / itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setPageNumber(selected);
  };

  const slicedData = categoryList.slice(
    pageNumber * itemsPerPage,
    (pageNumber + 1) * itemsPerPage
  );

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
          { slicedData.length ? slicedData?.map((category, index)=>{
            console.log("Category:", category);
          return (
          <tr key={index}>
            <td>{index +1}</td>
            <td>{category.name}</td>
            <td>
              {category.image && (
                <img 
                src={`${category.image}`}
                style={{ width: '50px', height: '50px', objectFit: 'cover'}}
                className="common-image"
                />
              )}
            </td>
            <td>
              <Button variant="info">Edit</Button>{' '}
              <Button variant="danger">Delete</Button>
            </td>
          </tr>
          )
        })
       : "No record found"}
        </tbody>
      </Table>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
        pageClassName={"page-item"} // Add this line for box-style
        previousClassName={"page-item"} // Add this line for box-style
        nextClassName={"page-item"} // Add this line for box-style
        pageLinkClassName={"page-link"} // Add this line for box-style
        previousLinkClassName={"page-link"} // Add this line for box-style
        nextLinkClassName={"page-link"} // Add this line for box-style
      />
    </div>
    </>
  );
};

export default CategoryList;
