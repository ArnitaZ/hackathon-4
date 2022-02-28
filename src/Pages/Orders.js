import { useState } from "react";
import getDataLaura from "../API/getDataLaura"

function Orders() {

    const [orders, setOrders] = useState(getDataLaura())

    const deleteOrder = (orderIndex) => {
        orders.splice(orderIndex, 1)
        setOrders([...orders])
    }

    const ordersRow = orders.map((order, index) => {
        const borderStyle = '1px solid rgba(1, 1, 1, 1)';
        const deleteButton = <button className="btn btn-sm mx-1 my-1" onClick={() => deleteOrder(index)}>Delete</button>

        return (
            <div className="container order-row mt-1">
                <div className="row d-flex order-container align-items-center" style={{ border: borderStyle }} key={index}>
                    <div className="col-1">
                        {order.id}
                    </div>
                    <div className="col-3">
                        <span style={{ fontWeight: 'bold' }}>{order.customer.name}</span><br/>
                        {order.customer.street}<br/>
                        {order.customer.city}<br/>
                        {order.customer.zip}<br/>
                        {order.customer.country}<br/>
                    </div>
                    <div className="col-1">
                        {order.quantity}
                    </div>
                    <div className="col-1">
                        {order.price} Eur
                    </div>
                    <div className="col-1">
                        {order.vat} Eur
                    </div>
                    <div className="col-1">
                        total sum
                    </div>
                    <div className="col-2">
                        {order.status}
                    </div>
                    <div className="col-2">
                        <button className="btn btn-sm mx-1 my-1">Edit</button>
                        {deleteButton}
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className="container">

            <div className="row mt-3">
                <div className="col">
                    <p className="text-muted">Orders</p>
                </div>
            </div>

            <div className="row mt-3 d-flex justify-content-end">
                <div className="col-4 mb-3">
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-sm" type="submit">Search</button>
                    </form>
                </div>
            </div>

            <div className="order-row mt-2">
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
                <div>
                    {ordersRow}
                </div>
            </div>
        </div>
    )
}

export default Orders