import { useState } from "react";
import getDataLaura from "../API/getDataLaura";
import Header from "../Components/Header";
import Pagination from "../Components/Pagination";
import "./Login.css";

function Orders() {
  const [orders, setOrders] = useState(getDataLaura());

  const deleteOrder = (orderIndex) => {
    orders.splice(orderIndex, 1);
    setOrders([...orders]);
  };

  const ordersRow = orders.map((order, index) => {
    const borderStyle = "1px solid rgba(1, 1, 1, 1)";
    const deleteButton = (
      <button
        className="btn btn-purple btn-sm mx-1 my-1"
        onClick={() => deleteOrder(index)}
      >
        Delete
      </button>
    );

    let badgeText;
    if (order.status === "pending") {
      badgeText = <button className="btn btn-warning btn-sm">Pending</button>;
    } else if (order.status === "cancelled") {
      badgeText = <button className="btn btn-danger btn-sm">Cancelled</button>;
    } else if (order.status === "completed") {
      badgeText = <button className="btn btn-success btn-sm">Success</button>;
    }

    return (
      <div className="container mt-1">
        <div
          className="row d-flex order-container align-items-center"
          style={{ border: borderStyle }}
          key={index}
        >
          <div className="col-1">{order.id}</div>
          <div className="col-3">
            <span style={{ fontWeight: "bold" }}>{order.customer.name}</span>
            <br />
            {order.customer.street}
            <br />
            {order.customer.city}
            <br />
            {order.customer.zip}
            <br />
            {order.customer.country}
            <br />
          </div>
          <div className="col-1">{order.quantity}</div>
          <div className="col-1">{order.price} Eur</div>
          <div className="col-1">{order.vat} Eur</div>
          <div className="col-1">total sum</div>
          <div className="col-2">{badgeText && <div>{badgeText}</div>}</div>
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
              <p className="h3">Orders</p>
            </div>
            <div className="col-4 mb-3">
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-purple btn-sm" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>

          <div className="row mx-1">
            <div className="col-1">
              <h6>ID</h6>
            </div>
            <div className="col-3">
              <h6>Customer</h6>
            </div>
            <div className="col-1">
              <h6>Qty</h6>
            </div>
            <div className="col-1">
              <h6>Price</h6>
            </div>
            <div className="col-1">
              <h6>VAT</h6>
            </div>
            <div className="col-1">
              <h6>Total</h6>
            </div>
            <div className="col-2">
              <h6>Status</h6>
            </div>
          </div>
          <div>{ordersRow}</div>
        </div>

      </div>

      <div className="row d-flex flex-row-reverse my-5 pagination--bottom">
            <div className="col-6">
              <Pagination />
            </div>
          </div>
    </div>

  );
}

export default Orders;
