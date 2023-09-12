import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/shop-context";
import * as productService from "../../service/ProductService";
import { CartItem } from "./Cart-item";
import { useProductList } from "../../context/UseProductList";
// export default function Cart() {
export const Cart = () => {
    // const [products, setProducts] = useState([]);
    const { cartItems } = useContext(ShopContext);
    const cartItemsArray = Object.keys(cartItems).map((itemId) => ({
        id: itemId,
        name: cartItems[itemId].name,
        img: cartItems[itemId].img,
        quantity: cartItems[itemId].quantity
    }))

    return (
        <>
            <div>
                <section className="h-100 h-custom" style={{ background: "rgb(243, 242, 236)" }} >
                    <div className="container py-5 h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12">
                                <div className="card card-registration card-registration-2" style={{ borderRadius: "15px" }}>
                                    <div className="card-body p-0">
                                        <div className="row g-0">
                                            <div className="col-lg-8">
                                                <div className="p-5">
                                                    <div className="d-flex justify-content-between align-items-center mb-5">
                                                        <h1 className="fw-bold mb-0 text-black">Shopping Cart</h1>
                                                        <h6 className="mb-0 text-muted" ></h6>
                                                    </div>
                                                    <b><p style={{ color: "red" }}></p></b>
                                                    <hr className="my-4" />
                                                    {cartItemsArray.map((item) => {
                                                        if (cartItemsArray[item.id] !== 0) {
                                                            return (
                                                                < CartItem data={item} />
                                                            )
                                                        }
                                                    })}



                                                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                        <div className="modal-dialog">
                                                            <div className="modal-content">
                                                                <div className="modal-header" style={{ background: "rgb(213,209,191)" }}>
                                                                    <h5 className="modal-title" id="exampleModalLabel" style={{ color: "#9a3737" }}>This function cannot be undone!</h5>
                                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                </div>
                                                                <div className="modal-body" style={{ background: "rgb(243, 242, 236)" }}>
                                                                    <h6>Are you sure want to delete the book:</h6>
                                                                    <h6 style={{ color: "#9a3737" }} id="nameDelete"></h6>

                                                                </div>
                                                                <div className="modal-footer" style={{ background: "rgb(213,209,191)" }}>
                                                                    <form action="/cart/delete" method="post">
                                                                        <input type="hidden" name="idDelete" id="idDelete" />
                                                                        <button type="button" className="btn btn-dark" data-bs-dismiss="modal">No</button>
                                                                        <button type="submit" className="btn btn-light">Yes</button>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <hr className="my-4" />

                                                    <div className="pt-5">
                                                        <h6 className="mb-0"><a href="/welcome/view-all" className="text-body"><i
                                                            className="fas fa-long-arrow-alt-left me-2"></i>Back to shop</a></h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 bg-grey">
                                                <div className="p-5">
                                                    <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                                                    <hr className="my-4" />

                                                    <div className="d-flex justify-content-between mb-4">
                                                        <h5 className="text-uppercase"></h5>
                                                    </div>
                                                    <form method="post">
                                                        <h5 className="text-uppercase mb-3">Address<span style={{ color: "red" }}>*</span></h5>
                                                        <div>
                                                            <input type="hidden" />
                                                        </div>
                                                        <div className="mb-4 pb-2">
                                                            <textarea placeholder="address"
                                                                style={{ width: "100%", height: "20%" }}
                                                                required></textarea>
                                                            <br />
                                                        </div>

                                                        <h5 className="text-uppercase mb-3">Note</h5>

                                                        <div className="mb-5">
                                                            <div className="form-outline">
                                                                <textarea placeholder="note"
                                                                    style={{ width: "100%" }}></textarea>
                                                            </div>
                                                        </div>

                                                        <hr className="my-4" />

                                                        <div className="d-flex justify-content-between mb-5">
                                                            <h5 className="text-uppercase">TOTAL PRICE</h5>
                                                            <h5 id="total"></h5>
                                                        </div>

                                                        <button type="submit" className="btn btn-dark btn-block btn-lg"
                                                            data-mdb-ripple-color="dark">ORDER
                                                        </button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section >
            </div >
        </>

    )
}