import React, { useEffect, useState } from "react";
import { FaHeart, FaStore } from "react-icons/fa";
import Flex from "../Flex.styled";
import StyledProduct from "./Product.styled";
const Products = function () {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async function () {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <StyledProduct>
      <img src={products.thumbnail} alt="" />
      <p>{products.brand}</p>
      <h3>{products.title}</h3>
      <p>{products.description}</p>
      <hr />
      <Flex>
        <div>
          <span style={{ textDecoration: "line-through" }}>
            ${products.price}
          </span>
          <span>${products.discountPercentage}</span>
        </div>
        <div>
          <FaHeart />
          <FaStore />
        </div>
      </Flex>
    </StyledProduct>
  );
};

export default Products;
