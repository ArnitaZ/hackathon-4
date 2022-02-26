import { Route, Routes } from "react-router-dom";
import CategoryLaura from "./CategoryLaura";

function Content() {
    return (
        <div className="container">
            <Routes>
                <Route path="/categories" element={<CategoryLaura />} />
            </Routes>
        </div>
    )
}

export default Content;