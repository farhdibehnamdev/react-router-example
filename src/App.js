import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import Header from "./components/Header/Header";
import Container from "./components/Container.styled";
import Products from "./components/Products/products";
import ProductsIndex from "./components/Products/ProductsIndex";
import Admin from "./components/Admin/admin";

const App = () => {
  const theme = {
    colors: {
      body: "#fff",
      header: "#524d4d",
    },
    flex: {
      spaceBetween: "space-between",
      center: "center",
    },
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Router>
          <Header />
          <Container>
            <Routes>
              <Route path="/" element={<Products />}>
                <Route path="/" element={<ProductsIndex />} />
              </Route>
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </Container>
        </Router>
      </ThemeProvider>
    </>
  );
};

export default App;
