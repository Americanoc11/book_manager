import { useEffect, useState } from "react";
import * as shopService from "../../src/service/ProductService";

export function useProductList() {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        try {
            const res = await shopService.getAllProduct();
            setProducts(res);
        } catch (error) {
            console.log("Error fetching products:", error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, [setProducts]);

    return products;
}
