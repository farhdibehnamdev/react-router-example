import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Admin from "./components/Admin/admin";
import Container from "./components/Container.styled";
import GlobalStyles from "./components/globalStyles";
import Products from "./components/Products/products";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <GlobalStyles />
          <Container>
            <Route path="/" element={<Products />} />
            <Route path="/admin" element={<Admin />} />
          </Container>
        </Routes>
      </Router>
    </>
  );
};

export default App;
