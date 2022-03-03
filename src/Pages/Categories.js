import { useState } from "react";
import getDataLaura from "../API/getDataLaura"
import "./Login.css"

function Categories() {

    const [categories, setCategories] = useState(getDataLaura())

    const deleteCategory = (categoryIndex) => {
        categories.splice(categoryIndex, 1)
        setCategories([...categories])
    }

    const categoriesRow = categories.map((category, index) => {
        const borderStyle = '1px solid rgba(1, 1, 1, 1)';
        const deleteButton = <button className="btn btn-purple btn-sm mx-1 my-1" onClick={() => deleteCategory(index)}>Delete</button>

        return (
            <div className="container category-row category-container mt-1">
                <div className="row" style={{ border: borderStyle }} key={index}>
                    <div className="col-1">
                        {category.id}
                    </div>
                    <div className="col-2">
                        {category.title}
                    </div>
                    <div className="col-7">
                        {category.description}
                    </div>
                    <div className="col-2">
                        <button className="btn btn-purple btn-sm mx-1 my-1">Edit</button>
                        {deleteButton}
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div>

            <div className="row mt-3">
                <div className="col">
                    <p className="text-muted">Categories</p>
                </div>
                <div className="col d-flex justify-content-end">
                    <button className="btn btn-purple btn-sm">Create category</button>
                </div>
            </div>

            <div className="row mt-3 d-flex justify-content-end">
                <div className="col-4">
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-purple btn-sm" type="submit">Search</button>
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
                <div>
                    {categoriesRow}
                </div>
            </div>
        </div>
    )
}

export default Categories