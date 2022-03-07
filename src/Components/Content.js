import { Route, Routes } from "react-router";
import Categories from "../Pages/Categories";
import Login from "../Pages/Login";
import Orders from "../Pages/Orders";
import Products from "../Pages/Products";
import "./Footer.css";
import PaginationII from "./PaginationII";

function Content() {
  return (
    <div>
      <div className="container content-container d-flex flew-column">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/products" element={<Products />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/PaginationII" element={<PaginationII />} />
        </Routes>
      </div>
    </div>
  );
}

export default Content;
