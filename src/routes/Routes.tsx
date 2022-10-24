import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CreateProduct } from "../products/views/CreateProduct";
import { ListProduct } from "../products/views/ListProduct";
import { Login } from "../auth/views/Login";

export const Router = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />

          //ADMIN ROUTES
          <Route path="/product/create" element={<CreateProduct />} />
          <Route path="/products" element={<ListProduct />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
};
