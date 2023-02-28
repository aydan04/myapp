import React from "react";
import { ReactDOM } from "react";
import Header from "./pages/Header";
import FirstSection from "./pages/FirstSection";
import Shop from "./pages/Shop";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import SingleCard from "./pages/SingleCard";
import ProductDetails from "./pages/ProductDetails";
import Main from "./pages/Main";
import ShopPage from "./pages/ShopPage";
import Home from "./pages/Home";
import Footer from "./pages/Footer";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" component={<Home />}></Route>
          <Route path="/shop" component={<ShopPage />}></Route>
          <Route path="/shop/:url" component={<ProductDetails />}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
};

export default App;
