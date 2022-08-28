import { FaHeart, FaStore } from "react-icons/fa";
import Flex from "../Flex.styled";
import StyledProduct from "./Product.styled";
import StyledImage from "../Image.styled";
import { Link } from "react-router-dom";

const ProductCard = function ({ products }) {
  return (
    <Flex statusPosition="center">
      {products.map((item) => (
        <Link key={item.id} to={`product/${item.id}`}>
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
        </Link>
      ))}
    </Flex>
  );
};

export default ProductCard;
