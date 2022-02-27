import { Route, Routes } from "react-router"
import Categories from "../Pages/Categories"
import Orders from "../Pages/Orders"
import Products from "../Pages/Products"

function Content() {
    return (
        <div>
            <div className="container d-flex flew-column">
                <Routes>
                    <Route path="/categories" element={<Categories />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/orders" element={<Orders />} />
                </Routes>
            </div>
        </div>
    )
}

export default Content