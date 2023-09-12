import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context"
export const CartItem = (props) => {
    const { id, name, img, price, quantity } = props.data;
    const { addToCart } = useContext(ShopContext);
    return (
        <div className="row mb-4 d-flex justify-content-between align-items-center"
        // th: each="item: ${cart.getItems()}"
        >
            <div className="col-md-2 col-lg-2 col-xl-2">
                <img className="img-fluid rounded-3" alt="photo" src={img} />
            </div>
            <div className="col-md-3 col-lg-3 col-xl-3">
                <h6 className="text-muted" >{name}</h6>
                <h6 className="text-black mb-0">Price</h6>
                <h6 className="text-black mb-0">Quantity</h6>
            </div>
            <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                <button className="btn btn-link px-2" >
                    <i className="bi bi-dash"></i>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash" viewBox="0 0 16 16">
                        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                    </svg>
                </button>
                <input readOnly min="0"

                    type="number"
                    className="form-control form-control-sm" value={quantity} />
                <button className="btn btn-link px-2"
                    onClick={() => addToCart(id)}>
                    <i className="bi bi-plus"></i>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg>
                </button>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                <h6 className="mb-0" >{price}</h6>
                <input readOnly hidden="hidden" className="mb-0" />

            </div>
            <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                <button type="button" className="btn btn-light" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <i className="fas fa-times"></i>
                </button>
            </div>
        </div>
    )
}