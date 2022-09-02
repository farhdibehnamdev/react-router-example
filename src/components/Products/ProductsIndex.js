import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import { getProducts } from "../../services/ProductServices";
import Flex from "../Flex.styled";
import StyledRadioCard from "../RadioCard.styled";
import StyledRadio from "../Radio.styled";
const ProductsIndex = function () {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchProducts = async function () {
      const data = await getProducts();
      const params = Object.fromEntries([...searchParams]);
      setLoading(false);
      sortProductsFromParams(data, params);
      console.log("searchParams");
    };
    fetchProducts();
  }, []);

  const sortProductsFromParams = function (data, params) {
    if (!Object.keys(params).length) {
      console.log("not sort");
      setProducts(data);
      return;
    }
    console.log("sorted");

    const sorted = [...data].sort((x, y) => {
      const { sort, order } = params;
      switch (order) {
        case "ascending": {
          return x[sort] > y[sort] ? 1 : -1;
        }
        case "descending": {
          return x[sort] < y[sort] ? 1 : -1;
        }
        default: {
          return 0;
        }
      }
    });
    setProducts(sorted);
  };

  const updateParams = (e) => {
    const { name, value } = e.target;
    const currentParams = Object.fromEntries([...searchParams]);
    const newParams = { ...currentParams, [name]: value };
    setSearchParams(newParams);
    sortProductsFromParams(products, newParams);
  };

  const data = function () {
    const rows = [...Array(Math.ceil(products.length / 4))];

    const productRows = rows.map((_, index) =>
      products.slice(index * 4, index * 4 + 4)
    );

    return productRows;
  };

  return (
    <>
      <Flex statusPosition="center">
        <StyledRadioCard>
          <span>Sort</span>
          <br />
          <label>
            Name
            <StyledRadio
              type="radio"
              name="sort"
              value="name"
              onChange={(e) => updateParams(e)}
              defaultChecked={searchParams.get("sort") === "name"}
            />
          </label>
          <label>
            Price
            <StyledRadio
              type="radio"
              name="sort"
              value="price"
              onChange={(e) => updateParams(e)}
              defaultChecked={searchParams.get("sort") === "price"}
            />
          </label>
        </StyledRadioCard>
        <StyledRadioCard>
          <span>Order</span>
          <br />
          <label>
            Ascending
            <StyledRadio
              type="radio"
              name="order"
              value="ascending"
              onChange={(e) => updateParams(e)}
              defaultChecked={searchParams.get("order") === "ascending"}
            />
          </label>
          <label>
            Descending
            <StyledRadio
              type="radio"
              name="order"
              value="descending"
              onChange={(e) => updateParams(e)}
              defaultChecked={searchParams.get("order") === "descending"}
            />
          </label>
        </StyledRadioCard>
      </Flex>
      {loading
        ? "Data is Loading...."
        : data().map((products, index) => (
            <ProductCard products={products} key={index} />
          ))}
    </>
  );
};

export default ProductsIndex;
