import React, { useEffect, useState } from 'react';
import { Table, Form, Button, Row, Col, Modal, Dropdown } from 'react-bootstrap';
import Header from '../Layouts/Header';
import { Link, useNavigate } from 'react-router-dom';
import AxiosInstance from '../services/DataService';
import ReactPaginate from 'react-paginate';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from '@mui/icons-material/Edit';
import { Try } from '@mui/icons-material';
import { toast } from 'react-toastify';
import jsPDF from 'jspdf';
import * as XLSX from 'xlsx';
import Papa from 'papaparse';


const CategoryList = () => {
  let navigate = useNavigate()
  const [categoryList, setCategoryList] = useState([]);
  const[pageNumber, setPageNumber] = useState(0);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteCategoryId, setDeleteCategoryId] = useState('');
  const [selectedExportFormat, setSelectedExportFormat] = useState(null);
  const [searchParams, setSearchParams] = useState("");
  const itemsPerPage = 10;

  const fetchCategory = async() =>{
    try {
      let response;
      if(searchParams){
        response = await AxiosInstance.post("category/search",{
          searchParams:searchParams
        })
        console.log(response);
      }else{
        response = await AxiosInstance.get("category/list")
      }
      setCategoryList(response.data.data)
    } catch (error) {
      if(error.response && error.response.data && error.response.data.message){
        toast.error(error.response.data.message)
      }
    }
  }

  useEffect(()=>{
    fetchCategory();
  }, [searchParams])

  const pageCount = Math.ceil(categoryList.length / itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setPageNumber(selected);
  };

  const slicedData = categoryList.slice(
    pageNumber * itemsPerPage,
    (pageNumber + 1) * itemsPerPage
  );

  const handleDelete = async(id)=>{
    try {
      const response = await AxiosInstance.delete(`category/delete/${id}`)
      if(response.status === 200){
        toast.success(response.data.message)
        fetchCategory();
      }
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }

  const handleConfirmDelete = () => {
    if (deleteCategoryId) {
      handleDelete(deleteCategoryId);
      setShowDeleteModal(false);
      setDeleteCategoryId(null);
    }
  };

  const showDeleteConfirmation = (categoryId) =>{
    setDeleteCategoryId(categoryId);
    setShowDeleteModal(true);
  }
  
  const handleCancelConfirmation = () =>{
    setShowDeleteModal(false);
    setDeleteCategoryId(null)
  }

  const handleExportToExcel = () => {
    const dataToExport = categoryList.map((category) => ({
      "Category Name": category.name,
      "Category Image": category.image,
    }));

    const ws = XLSX.utils.json_to_sheet(dataToExport);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'CategoryData');
    XLSX.writeFile(wb, 'category_data.xlsx');
  };

  const handleExportToPDF = () => {
    const doc = new jsPDF();
    doc.text('Category List', 10, 10);

    categoryList.forEach((category, index) => {
      const yPos = 20 + index * 10;
      doc.text(`Category Name: ${category.name}`, 10, yPos);
     
    });

    doc.save('category_data.pdf');
  };

  const handleExportClick = (eventKey) => {
    if (!eventKey) {
      toast.error("Please select an export format");
      return;
    }

    switch (eventKey) {
      case 'excel':
        handleExportToExcel();
        break;
      case 'pdf':
        handleExportToPDF();
        break;
      default:
        toast.error("Unsupported export format");
        break;
    }
  };
  
  const handleEdit = (category)=>{
    navigate(`/edit-category/${category._id}`,{
      state:{category}
    })
  }

 

  return (
    <>
    <Header />
    <div className="container mt-4">
      <h2 className="mb-4" style={{ marginTop: '70px' }}>
        Category List
      </h2>

      <Row className="mb-3">
        <Col md={6}>
          <Form.Control type="text" placeholder="Search Category" value={searchParams} onChange={(e) => setSearchParams(e.target.value)} />
        </Col>
        <Col  className="text-end" style={{ marginRight: "150px"}} >
          <Dropdown onSelect={(eventKey) => handleExportClick(eventKey)}>
            <Dropdown.Toggle variant="outline-primary" id="export-dropdown">
              Export
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item eventKey="excel">Export to Excel</Dropdown.Item>
              <Dropdown.Item eventKey="pdf">Export to PDF</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col md={3} className="text-end">
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
              <IconButton color="primary" onClick={()=> handleEdit(category)}>
                <EditIcon />
              </IconButton>
              <IconButton color="secondary" onClick={()=> showDeleteConfirmation(category._id)} >
                <DeleteIcon />
              </IconButton>           
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
        pageClassName={"page-item"}  
        previousClassName={"page-item"}  
        nextClassName={"page-item"}  
        pageLinkClassName={"page-link"}  
        previousLinkClassName={"page-link"} 
        nextLinkClassName={"page-link"} 
      />
        <Modal show={showDeleteModal} onHide={handleCancelConfirmation} style={{ marginTop: '50px' }} >
          <Modal.Header closeButton>
            <Modal.Title>Confirm Delete</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Are you sure you want to delete this category?
          </Modal.Body>
          <Modal.Footer>
          <Button variant="secondary" onClick={handleCancelConfirmation}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleConfirmDelete}  >
            Delete
          </Button>
          </Modal.Footer>
        </Modal>
    </div>
    </>
  );
};

export default CategoryList;
