import { FaHeart, FaStore } from "react-icons/fa";
import Flex from "../Flex.styled";
import StyledProduct from "./Product.styled";
import StyledImage from "../Image.styled";
import TextContainer from "../TextContainer.styled";
import { Link } from "react-router-dom";

const ProductCard = function ({ products }) {
  return (
    <Flex statusPosition="center">
      {products.map((item) => (
        <Link key={item.id} to={`product/${item.id}`}>
          <StyledProduct key={item.id}>
            <StyledImage src={`./assets/images/${item.id}.jpg`} alt="" />
            <TextContainer>
              <p>{item.brand}</p>
              <h3>{item.title}</h3>
              <p>
                {item.description.length > 30
                  ? `${item.description.slice(0, 30)}...`
                  : item.description}
              </p>
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
            </TextContainer>
          </StyledProduct>
        </Link>
      ))}
    </Flex>
  );
};

export default ProductCard;
