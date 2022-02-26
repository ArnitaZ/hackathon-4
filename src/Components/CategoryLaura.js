import { useState } from "react"
import getDataLaura from "../API/getDataLaura"

function CategoryLaura() {

    const [categories, addCategory] = useState(getDataLaura())

    const categoriesTitleList = categories.map((category, index) => {
        return <div key={index}>{category.title}</div>
    })

    // return (
    //     <div>
    //         <h2>A table of 5 columns for Categories page</h2>
    //         <div>
    //             {categoriesTitleList}
    //         </div>
    //     </div>
    // )

    return (
        <div>
            <h2>A table of 5 columns for Categories page</h2>
            <div className="row">
                <div className="col-2">
                    <h6>ID</h6>
                </div>
                <div className="col-3">
                    <h6>Title</h6>
                </div>
                <div className="col-5">
                    <h6>Description</h6>
                </div>
                <div className="col">
                    <h6>Edit/Delete buttons</h6>
                </div>
            </div>
        </div>
    )
}

export default CategoryLaura