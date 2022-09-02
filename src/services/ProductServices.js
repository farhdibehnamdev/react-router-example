export const getProducts = async function () {
  try {
    const data = await fetch("http://localhost:5000/products");
    const response = await data.json();
    if (response) {
      return response;
    } else {
      throw new Error("Something went Wrong...");
    }
  } catch (err) {
    console.warn(err);
  }
};

export const getProduct = async function (id) {
  try {
    const response = await fetch(`http://localhost:5000/products/${id}`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.warn(error);
  }
};

export const addProduct = async function (data) {
  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  };
  try {
    const response = await fetch(`http://localhost:5000/products`, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.warn(error);
  }
};

export const updateProduct = async function (payload) {
  console.log("payload :::", payload);
  const options = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  };
  const response = await fetch(
    `http://localhost:5000/products/${payload.id}`,
    options
  );
  console.log("sdfsfd :: ", response);
  if (response.ok) {
    return await response.json();
  }
  throw new Error("Something went wrong...");
};

export const deleteProduct = async function (id) {
  try {
    const options = { method: "DELETE" };
    const response = await fetch(
      `http://localhost:5000/products/${id}`,
      options
    );
    if (response.ok) return await response.json();
    else throw new Error("Something went wrong...");
  } catch (error) {
    console.warn(error);
  }
};
