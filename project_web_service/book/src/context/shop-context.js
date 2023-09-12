import React, { createContext, useState } from "react";
import { useProductList } from "../context/UseProductList"

export const ShopContext = createContext(null);
const getDefaultCart = (products) => {

    console.log("getDefaultCart:" + products.length);
    let cart = [];
    for (let i = 0; i < products.length; i++) {
        const product = products[i]
        cart[i + 1] = {
            id: product.id,
            name: product.name,
            img: product.img,
            quantity: 1,
            price: product.price
        }
    }
    console.log(cart);
    return cart;

}

export const ShopContextProvider = (props) => {
    let products = useProductList();

    const [cartItems, setCartItems] = useState(getDefaultCart(products));
    const addToCart = (itemId) => {
        console.log("addToCart-itemId : " + itemId);
        setCartItems((prevCart) => {
            debugger
            const updatedCart = { ...prevCart };
            const updateCart1 = updatedCart;
            const product = products.find((product) => product.id == itemId); // Tìm sản phẩm trong danh sách sản phẩm

            if (product) {
                if (updatedCart[itemId] === undefined) {
                    updatedCart[itemId] = { // Sử dụng itemId làm key
                        id: itemId,
                        name: product.name, // Sử dụng thông tin sản phẩm từ danh sách sản phẩm
                        img: product.img,
                        quantity: 1, // Đặt số lượng ban đầu là 1
                        price: product.price,
                    };

                } else {
                    updatedCart[itemId].quantity += 1; // Tăng số lượng sản phẩm lên 1
                }

            }


            return updatedCart

        });
    };

    // const removeFromCart = (itemId) => {
    //     setCartItems((prev) => {
    //         const updatedCart = { ...prev };
    //         if (updatedCart[itemId]) {
    //             if (updatedCart[itemId].quantity > 1) {
    //                 updatedCart[itemId].quantity -= 1; // Giảm số lượng sản phẩm đi 1
    //             } else {
    //                 delete updatedCart[itemId]; // Nếu số lượng sản phẩm chỉ còn 1, thì xóa sản phẩm khỏi giỏ hàng
    //             }
    //         }
    //         return updatedCart;
    //     });
    // }
    console.log("CartItem:" + cartItems);
    const contextValue = { cartItems, addToCart }
    return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
}