import StyledButton from "../Button.styled";
import Flex from "../Flex.styled";
import StyledForm from "./Form.styled";

const Form = function ({ form, updateField, addProduct, updateProduct }) {
  return (
    <StyledForm>
      <input
        name="title"
        placeholder="Title"
        type="text"
        defaultValue={form.title}
        onChange={(e) => updateField({ name: "title", value: e.target.value })}
      />
      <input
        name="discountPercentage"
        placeholder="Price"
        type="number"
        defaultValue={form.discountPercentage}
        onChange={(e) =>
          updateField({
            name: "discountPercentage",
            value: Number.parseInt(e.target.value, 10),
          })
        }
      />
      <textarea
        name="description"
        placeholder="Description"
        cols="50"
        rows="10"
        defaultValue={form.description}
        onChange={(e) =>
          updateField({ name: "description", value: e.target.value })
        }
      />
      <Flex>
        <StyledButton type="button" onClick={addProduct}>
          Add
        </StyledButton>
        <StyledButton type="button" onClick={updateProduct}>
          Update
        </StyledButton>
      </Flex>
    </StyledForm>
  );
};

export default Form;
