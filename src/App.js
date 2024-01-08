import React from 'react';
import { Route, Routes } from "react-router-dom"
import Register from "./components/Register/Register";
import Login  from './components/Login/Login';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import VerifyOTP from './components/ForgotPassword/VerifyOTP';
import ResetPassword from './components/ForgotPassword/ResetPassword';
import Dashboard from './components/Dashboard/Dashboard';
import CategoryList from './components/Category/ListCategory';
import SubCategoryList from './components/SubCategory/SubCategoryList';
import UserList from './components/User/UserList';

function App() {
  return (
    <>
    <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path="/register" element={ <Register />}/>
        <Route path="/forgot-password" element={ <ForgotPassword />}/>
        <Route path="/verify-otp" element={ <VerifyOTP />}/>
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/category-list' element={<CategoryList />} />
        <Route path='/sub-category-list' element={<SubCategoryList />} />
        <Route path='/user-list' element={<UserList />} />
        
    </Routes>
    </>
  )
}

export default App;
