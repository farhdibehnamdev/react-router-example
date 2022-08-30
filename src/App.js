import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import Header from "./components/Header/Header";
import Container from "./components/Container.styled";
import Products from "./components/Products/products";
import Admin from "./components/Admin/admin";
import ProtectedRoute from "./components/common/ProtectedRoute";

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
              <Route path="/*" element={<Products />} />
              <Route
                path="/admin*"
                element={<ProtectedRoute redirectTo="/" />}
              />
              {/* <Route element={<ProtectedRoute redirectTo="/" />}>
                
              </Route> */}
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </Container>
        </Router>
      </ThemeProvider>
    </>
  );
};

export default App;
