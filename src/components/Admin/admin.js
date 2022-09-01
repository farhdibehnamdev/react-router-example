import React from "react";
import { useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import ProductsIndex from "../Products/ProductsIndex";
import ProductEdit from "../Products/ProductEdit";
import Flex from "../Flex.styled";
import StyledLink from "../Link.styled";
const Admin = function () {
  const location = useLocation();
  return (
    <>
      <Flex>
        <h1>Admin</h1>
        <StyledLink to="new">New</StyledLink>
      </Flex>
      <br />
      <Routes>
        <Route path="/" element={<ProductsIndex />} />
        <Route path="/new" element={<ProductEdit />} />
        <Route path="/:id" element={<ProductEdit />} />
      </Routes>
    </>
  );
};

export default Admin;
