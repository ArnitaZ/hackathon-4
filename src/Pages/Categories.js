import { useState } from "react";
import getDataLaura from "../API/getDataLaura";
import Header from "../Components/Header";
import "./Login.css";

function Categories() {
  const [categories, setCategories] = useState(getDataLaura());
  const [filter, setFilter] = useState("");

  const deleteCategory = (categoryIndex) => {
    categories.splice(categoryIndex, 1);
    setCategories([...categories]);
  };

  const searchText = (event) => {
    setFilter(event.target.value);
  };

  let dataSearch = categories.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filter.toString().toLowerCase())
    );
  });

  const categoriesRow = dataSearch.map((category, index) => {
    const borderStyle = "1px solid rgba(1, 1, 1, 1)";
    const deleteButton = (
      <button
        className="btn btn-purple btn-sm mx-1 my-1"
        onClick={() => deleteCategory(index)}
      >
        Delete
      </button>
    );

    return (
      <div className="container category-row category-container mt-1">
        <div className="row" style={{ border: borderStyle }} key={index}>
          <div className="col-1">{category.id}</div>
          <div className="col-2">{category.title}</div>
          <div className="col-7">{category.description}</div>
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
              <p className="h3">Categories</p>
            </div>
            <div className="col-4 d-flex flex-column">
              <button className="btn btn-purple btn-sm my-3">
                Create category
              </button>

              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={filter}
                  onChange={searchText.bind(this)}
                />
                <button className="btn btn-purple btn-sm" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
          <div className="category-row mt-2">
            <div className="row mx-1">
              <div className="col-1">
                <h6>ID</h6>
              </div>
              <div className="col-2">
                <h6>Title</h6>
              </div>
              <div className="col-7">
                <h6>Description</h6>
              </div>
            </div>
            <div>{categoriesRow}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
