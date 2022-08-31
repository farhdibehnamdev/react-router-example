import styled from "styled-components";

const StyledForm = styled.form`
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
  background-color: #fff;
  max-width: 50%;
  margin: 0 auto;

  input,
  textarea {
    width: 80%;
    background-color: #fff;
    border-radius: 5px;
    padding: 1rem 1rem 1rem 1rem;
    display: block;
    margin: 0 auto;
    margin-bottom: 2rem;
    border: 1px solid #201911;
    font-size: 20px;
  }
  textarea {
  }
  button {
    margin: 0 auto;
    display: block;
  }
`;

export default StyledForm;
