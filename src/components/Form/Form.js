import { useState } from "react";
import StyledButton from "../Button.styled";
import StyledForm from "./Form.styled";

const Form = function ({ addProduct }) {
  console.log("hoo");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const handleChange = function () {
    if (title && price && description) {
      const product = {
        title,
        price,
        description,
      };
      addProduct(product);
    }
  };
  return (
    <StyledForm>
      <input
        name="title"
        placeholder="Title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        name="price"
        placeholder="Price"
        type="number"
        value={price}
        onChange={(e) => setPrice(Number.parseInt(e.target.value, 10))}
      />
      <textarea
        name="description"
        placeholder="Description"
        cols="50"
        rows="10"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <StyledButton type="button" onClick={handleChange}>
        Submit
      </StyledButton>
    </StyledForm>
  );
};

export default Form;
