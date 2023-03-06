import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Login";
import Users from "./pages/Users";
import Products from "./pages/Products";
import Dashboard from "./pages/Dashboard";
import AddProduct from "./pages/AddProduct";
import AddUser from "./pages/AddUser";
import NotFound from "./pages/NotFound";
import EditProduct from "./pages/EditProduct";
import EditUser from "./pages/EditUser";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/add" element={<AddUser />} />
        <Route path="/users/edit/:id" element={<EditUser />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/add" element={<AddProduct />} />
        <Route path="/products/edit/:id" element={<EditProduct />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
