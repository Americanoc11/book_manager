import * as shopService from "../service/ShopService"
import { ShopContext } from "../context/shop-context"
import React, { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
export const Product = (props) => {

    const { id, author, describe, img, name, nation, price, publication, publishing, quantity, typeProduct, isFlagDelete } = props.data;
    const { addToCart } = useContext(ShopContext)
    return (
        <>
            <figure className="product-style" key={id}>
                <Link to={`/shop/detail/${id}`} style={{ textDecoration: "none" }}>
                    <img src={img} alt="Books" className="product-item" />
                </Link>
                <figcaption>
                    <h3>
                        <Link to={`/shop/detail/${id}`} style={{ textDecoration: "none" }}>
                            {name}
                        </Link>
                    </h3>
                    <p>{author}</p>
                    <div style={{ position: "absolute, bottom: 0px, right: 43%" }} className="item-price">${price}</div>
                </figcaption>
                <button
                    className="btn btn-outline-secondary"
                    onClick={() =>
                        addToCart(id)
                    }
                >
                Add To Cart 
            </button>

        </figure >
        </>
    )
}