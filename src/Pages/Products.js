import { useState } from "react";
import getDataLaura from "../API/getDataLaura";
import Pagination from "../Components/Pagination";
import Header from "../Components/Header";
import "./Login.css";

function Products() {
  const [products, setProducts] = useState(getDataLaura());

  const deleteProduct = (productIndex) => {
    products.splice(productIndex, 1);
    setProducts([...products]);
  };

  const productsRow = products.map((product, index) => {
    const borderStyle = "1px solid rgba(1, 1, 1, 1)";
    const deleteButton = (
      <button
        className="btn btn-purple btn-sm mx-1 my-1"
        onClick={() => deleteProduct(index)}
      >
        Delete
      </button>
    );

    return (
      <div className="container product-row mt-1">
        <div className="row" style={{ border: borderStyle }} key={index}>
          <div className="col-2">
            <img
              src={product.coverImg}
              style={{ width: "100px" }}
              className="img-thumbnail"
              alt="landmark"
            />
          </div>
          <div className="col-1">{product.id}</div>
          <div className="col-1">{product.title}</div>
          <div className="col-4">{product.description}</div>
          <div className="col-1">{product.price} Eur</div>
          <div className="col-1">{product.discountedPrice} Eur</div>
          <div className="col-2">
            <button className="btn btn-purple btn-sm mx-1 my-1">Edit</button>
            {deleteButton}
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="container-fluid">
      <div className="row mt-4">
        <div className="col-2">
          <div>
            <Header />
          </div>
        </div>
        <div className="col-10">
          <div className="row mt-4 mb-5 d-flex justify-content-between">
            <div className="col-8">
              <p className="h3">Products</p>
            </div>
            <div className="col-4 d-flex flex-column">
              <button className="btn btn-purple btn-sm my-3">Create product</button>
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-purple btn-sm" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
          <div className="category-row mt-2">
            <div className="row mx-1">
              <div className="col-2">
                <h6>Image</h6>
              </div>
              <div className="col-1">
                <h6>ID</h6>
              </div>
              <div className="col-1">
                <h6>Title</h6>
              </div>
              <div className="col-4">
                <h6>Description</h6>
              </div>
              <div className="col-1">
                <h6>Price</h6>
              </div>
              <div className="col-1">
                <h6>Discounted price</h6>
              </div>
            </div>
            <div>{productsRow}</div>
          </div>
          <div className="row d-flex flex-row-reverse my-5">
            <div className="col-6">
              <Pagination />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
