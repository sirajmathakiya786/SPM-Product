
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import VerifyOTP from './components/ForgotPassword/VerifyOTP';
import ResetPassword from './components/ForgotPassword/ResetPassword';
import Dashboard from './components/Dashboard/Dashboard';
import CategoryList from './components/Category/ListCategory';
import SubCategoryList from './components/SubCategory/SubCategoryList';
import UserList from './components/User/UserList';
import CreateCategory from './components/Category/CreateCategory';
import CreateSubCategory from './components/SubCategory/CreateSubCategory';
import ProductList from './components/Product/ProductList';
import ProductAdd from './components/Product/ProductAdd';
import UserAdd from './components/User/UserAdd';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EditCategory from './components/Category/EditCategory';
import ProductEdit from './components/Product/ProductEdit';

function AppRoutes() {
  return (
    <>
    <ToastContainer/>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-otp" element={<VerifyOTP />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/category-list" element={<CategoryList />} />
        <Route path="/create-category" element={<CreateCategory />} />
        <Route path="/sub-category-list" element={<SubCategoryList />} />
        <Route path="/create-sub-category" element={<CreateSubCategory />} />
        <Route path="/user-list" element={<UserList />} />
        <Route path="/product-list" element={<ProductList />} />
        <Route path="/add-product" element={<ProductAdd />} />
        <Route path="/add-user" element={<UserAdd />} />
        <Route path="/edit-category/:id" element={<EditCategory />} />
        <Route path="/edit-product/:id" element={<ProductEdit />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
