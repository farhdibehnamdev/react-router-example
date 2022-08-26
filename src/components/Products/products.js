import React, { useEffect, useState } from "react";
import { FaHeart, FaStore } from "react-icons/fa";
import Flex from "../Flex.styled";
import StyledProduct from "./Product.styled";
import StyledImage from "../Image.styled";
const Products = function () {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchProducts = async function () {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      if (data) {
        setLoading(false);
        setProducts(data.products);
      }
    };

    fetchProducts();
  }, []);

  const htmlData = function (items, col) {
    let htmlElements = (
      <Flex>
        {items.map((item) => (
          <StyledProduct key={item.id}>
            <StyledImage src={item.thumbnail} alt="" />
            <p>{item.brand}</p>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <hr />
            <Flex>
              <div>
                <span style={{ textDecoration: "line-through" }}>
                  {item.price}
                </span>
                <span>{item.discountPercentage}</span>
              </div>
              <div>
                <FaHeart />
                <FaStore />
              </div>
            </Flex>
          </StyledProduct>
        ))}
      </Flex>
    );

    return htmlElements;
  };

  const renderFarm = function () {
    const rows = [...Array(Math.ceil(products.length / 7))];
    const productRows = rows.map((item, index) =>
      products.slice(index * 4, index * 4 + 4)
    );
    const data = productRows.map((row, index) => {
      return htmlData(row);
    });
    console.log(data);
    return data;
  };

  return <>{loading ? "Data is Loading...." : renderFarm()}</>;
};

export default Products;
