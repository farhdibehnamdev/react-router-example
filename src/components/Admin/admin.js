import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductsIndex from "../Products/ProductsIndex";
import ProductEdit from "../Products/ProductEdit";
const Admin = function () {
  return (
    <>
      <h1>Admin</h1>
      <Routes>
        <Route path="/" element={<ProductsIndex />} />
        <Route path="/new" element={<ProductEdit />} />
      </Routes>
    </>
  );
};

export default Admin;
