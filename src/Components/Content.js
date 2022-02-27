import { Route, Routes } from "react-router-dom";
import Categories from "../Pages/Categories";

function Content() {
    return (
        <div className="container">
            <Routes>
                <Route path="/categories" element={<Categories />} />
            </Routes>
        </div>
    )
}

export default Content;