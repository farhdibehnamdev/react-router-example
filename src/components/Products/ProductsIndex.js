import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
const ProductsIndex = function () {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchProducts = async function () {
      try {
        const data = await fetch("https://dummyjson.com/products");
        const response = await data.json();
        if (response) {
          setLoading(false);
          setProducts(response.products);
        } else {
          throw new Error("Something went Wrong...");
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchProducts();
  }, []);

  const data = function () {
    const rows = [...Array(Math.ceil(products.length / 7))];
    const productRows = rows.map((item, index) =>
      products.slice(index * 4, index * 4 + 4)
    );

    return productRows;
  };

  return (
    <>
      {loading
        ? "Data is Loading...."
        : data().map((products) => <ProductCard products={products} />)}
    </>
  );
};

export default ProductsIndex;
