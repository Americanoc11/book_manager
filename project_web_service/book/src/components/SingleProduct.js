import React, { useEffect, useState } from "react"
import { getDetailProduct } from "../service/ShopService"
import { useParams } from "react-router-dom"

export default function SingleProduct() {
    const { id } = useParams();
    const [product, setProduct] = useState({}); // Chú ý: Chỉ lưu một sản phẩm, không cần mảng []
    
    useEffect(() => {
        async function fetchProduct() {
            try {
                const res = await getDetailProduct(id);
                setProduct(res);
            } catch (error) {
                console.error("Error fetching product details:", error);
            }
        }

        fetchProduct();
    }, [id]); // Đảm bảo re-fetch khi ID thay đổi

    return (
        <div>
            <section className="bg-sand padding-large">
                <div className="container">
                    {/* Sử dụng product trực tiếp thay vì products */}
                    <div className="row">
                        <div className="col-md-6" style={{ textAlign: "center" }}>
                            <a href="#" className="product-image">
                                <img src={product.img} alt="Product" />
                            </a>
                        </div>
                        <div className="col-md-6 pl-5">
                            <div className="product-detail">
                                <h1>{product.name}</h1>
                                <p>{product.author}</p>
                                <p>{product.typeProduct && product.typeProduct.name}</p>
                                <span className="price colored">{product.price}</span>
                                <p>{product.describe}</p>
                                <p>{product.quantity}</p>
                                <button type="submit" className="button">
                                    <a style={{ color: "white" }}>Add to cart</a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
