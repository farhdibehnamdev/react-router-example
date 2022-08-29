import { Route, Routes } from "react-router-dom";
import Product from "../Products/Product";
import ProductsIndex from "../Products/ProductsIndex";
const Products = function () {
  return (
    <Routes>
      <Route path="/" element={<ProductsIndex />} />
      <Route path="product/:id" element={<Product />} />
    </Routes>
  );
};

export default Products;
