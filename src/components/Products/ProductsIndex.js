import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { getProducts } from "../../services/ProductServices";
const ProductsIndex = function () {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchProducts = async function () {
      const data = await getProducts();
      setProducts(data);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  const data = function () {
    const rows = [...Array(Math.ceil(products.length / 4))];

    const productRows = rows.map((_, index) =>
      products.slice(index * 4, index * 4 + 4)
    );

    return productRows;
  };

  return (
    <>
      {loading
        ? "Data is Loading...."
        : data().map((products, index) => (
            <ProductCard products={products} key={index} />
          ))}
    </>
  );
};

export default ProductsIndex;
