import { Link } from "react-router-dom";
import "../Pages/Login.css";

function Pagination() {
  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-end">
          <li className="page-item">
            <Link className="page-link" to={""} aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link" to={""}>
              1
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link" to={""}>
              2
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link" to={""}>
              3
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link" to={""} aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Pagination;
