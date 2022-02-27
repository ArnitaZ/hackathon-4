import { useState } from "react";
import getDataLaura from "../API/getDataLaura"

function Categories() {

    const [categories, setCategories] = useState(getDataLaura())

    const deleteCategory = (categoryIndex) => {
        categories.splice(categoryIndex, 1)
        setCategories([...categories])    
    }

    const categoriesRow = categories.map((category, index) => {
        const borderStyle = '1px solid rgba(1, 1, 1, 1)';
        const deleteButton = <button className="btn btn-success mx-1 my-1" onClick={() => deleteCategory(index)}>Delete</button>

        return (
            <div className="container category-row">
                <div className="row" style={{border: borderStyle}} key={index}>
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
                        <button className="btn btn-success mx-1 my-1">Edit</button>
                        {deleteButton}
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className="category-row">
            <div className="row">
                <div className="col-1">
                    <h6>ID</h6>
                </div>
                <div className="col-2">
                    <h6>Title</h6>
                </div>
                <div className="col-7">
                    <h6>Description</h6>
                </div>
                <div className="col-2">
                    <h6>Edit/Delete buttons</h6>
                </div>
            </div>
            <div>
                {categoriesRow}
            </div>
        </div>
    )
}

export default Categories