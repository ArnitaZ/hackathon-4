import { useState } from "react";
import getDataLaura from "../API/getDataLaura";
import "./Login.css";
import Pagination from "../Components/Pagination";

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
    <div>
      <div className="row mt-3">
        <div className="col">
          <p className="text-muted">Products</p>
        </div>
        <div className="col d-flex justify-content-end">
          <button className="btn btn-purple btn-sm">Create product</button>
        </div>
      </div>

      <div className="row mt-3 d-flex justify-content-end">
        <div className="col-4 mb-3">
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
      <Pagination />
    </div>
  );
}

export default Products;
