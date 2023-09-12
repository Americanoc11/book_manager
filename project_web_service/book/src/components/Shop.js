import React, { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import * as shopService from "../service/ShopService"
import { ShopContext } from "../context/shop-context"
import { Product } from "./Product";

export default function Shop() {

    const [typeProducts, setTypeProduct] = useState([]);
    const [products, setProducts] = useState([]);
    const getTypeProduct = async () => {
        try {
            const res = await shopService.getAllType();
            setTypeProduct(res);
            console.log("getTypeProduct");
        } catch (error) {
            console.log("Error Type Product List");
        }
    }
    const getAllProduct = async () => {
        try {
            const res = await shopService.getAllProductShop();
            setProducts(res)
            console.log("getAllProduct");
        } catch (error) {
            console.log("Error Product List");
        }
    }
    const getTypeId = async (id) => {
        try {
            const res = await shopService.getAllProductByTypeId(id)
            setProducts(res);
            console.log("getTypeId");
        } catch (error) {
            console.log("Type Id error");
        }
    }
    useEffect(() => {
        getTypeProduct();
        getAllProduct();
    }, [setProducts, setTypeProduct])

    return (
        <>
            <section className="padding-large">
                <div className="container">
                    <div className="row">
                        <ul className="tabs">
                            <li data-tab-target="#all-genre" className="active tab" onClick={() => getAllProduct()}>All Genre</li>
                            {typeProducts && typeProducts.map((typeProduct) => {
                                return (
                                    <React.Fragment key={typeProduct.id}>
                                        <li data-tab-target={`#${typeProduct.id}`} className="tab" onClick={() => getTypeId(typeProduct.id)}>
                                            <span>
                                                {typeProduct.name}
                                            </span>
                                        </li>
                                    </React.Fragment>
                                )
                            })}
                        </ul>
                        <div className="tab-content">
                            <div id="all-genre" data-tab-content className="active">
                                <div className="container">
                                    <div className="row container">
                                        <div className="products-grid grid">


                                            <div >
                                                <div className="container">
                                                    <div className="row container">
                                                        <div className="products-grid grid">
                                                            {products && products.map((product) => {
                                                                return (
                                                                    <React.Fragment key={product.id}>
                                                                        <Product data={product} />

                                                                    </React.Fragment>
                                                                )
                                                            })}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}