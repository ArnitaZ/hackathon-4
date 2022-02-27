import { Route, Routes } from "react-router"
import Categories from "../Pages/Categories"
import Home from "../Pages/Home"

function Content() {
    return (
        <div>
            <div className="container d-flex flew-column">
                <Routes>
                    <Route path="/categories" element={<Categories />} />
                    <Route path="/home" element={<Home />} />
                </Routes>
            </div>
        </div>
    )
}

export default Content