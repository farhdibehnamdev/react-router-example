import { useEffect, useState } from "react";
import StyledProduct from "./Product.styled";
import { FaHeart, FaStore } from "react-icons/fa";
import Flex from "../Flex.styled";
import StyledImage from "../Image.styled";
import { useParams } from "react-router-dom";

const Product = function () {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async function () {
      try {
        const data = await fetch(`https://dummyjson.com/products/${id}`);
        const response = await data.json();
        if (response) {
          console.log(response);
          setProduct(response);
        } else {
          throw new Error("fetching data went wrong...");
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id]);

  return (
    <Flex statusPosition="center">
      <StyledProduct key={product.id}>
        <StyledImage src={product.thumbnail} alt="" />
        <p>{product.brand}</p>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <hr />
        <Flex>
          <div>
            <span style={{ textDecoration: "line-through" }}>
              {product.price}
            </span>
            <span>{product.discountPercentage}</span>
          </div>
          <div>
            <FaHeart />
            <FaStore />
          </div>
        </Flex>
      </StyledProduct>
    </Flex>
  );
};

export default Product;
