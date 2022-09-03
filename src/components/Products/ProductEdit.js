import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  addProduct,
  deleteProduct,
  getProduct,
  updateProduct,
} from "../../services/ProductServices";
import Form from "../Form/Form";

const ProductEdit = function ({ isEdit }) {
  const [form, setForm] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isEdit) {
      setForm({
        title: "",
        price: 0,
        description: "",
      });
      return;
    }

    const fetchData = async function () {
      try {
        const product = await getProduct(id);
        setForm(product);
      } catch (error) {
        console.warn(error);
        navigate(`/admin`, { replace: true });
      }
    };
    fetchData();
  }, []);

  const updateField = function ({ name, value }) {
    setForm({ ...form, [name]: value });
  };

  const addProductHandler = async function () {
    const response = await addProduct(form);
    const result = await response.json();
    if (result) {
      navigate(`/admin/${result.id}`);
    }
  };

  const updateProductHandler = async function () {
    try {
      console.log("updateProductHandler :::", form);
      await updateProduct(form);
      alert(`Updated ${form.title}`);
      navigate(`/admin/${id}`);
    } catch (err) {
      console.warn(err);
    }
  };

  const deleteProductHandler = async function () {
    if (!window.confirm(`Do you want to Delete ${form.title} product.`)) {
      return;
    }
    try {
      await deleteProduct(form.id);
      navigate("/admin");
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <Form
      addProduct={() => addProductHandler()}
      updateProduct={() => updateProductHandler()}
      form={form}
      updateField={updateField}
      deleteProduct={deleteProductHandler}
      isEdit={isEdit}
    />
  );
};

export default ProductEdit;
