import { Link } from "react-router-dom";
import "./Header.css"

function Header() {
    return (
        <>
            <nav className="navbar navbar-expand navbar-light d-flex flex-column align-item-start" id="sidebar">
                <a href="#" className="navbar-brand text-light" />

                <div className="container-fluid flex-column">
                    <a className="navbar-brand" href="#">
                        <img src="https://th.bing.com/th/id/R.0b562de767b80bfa845150849a5c1f42?rik=vsJBTMe5%2fmSh7w&pid=ImgRaw&r=0" alt="" width="150" height="80" />
                    </a>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav d-flex flex-column mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link menu" to="/categories">Categories</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link menu" to="/products">Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link menu" to="/orders">Orders</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header