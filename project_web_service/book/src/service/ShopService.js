import axios from "axios";
axios.defaults.baseURL = "http://localhost:8080";
export const getAllType = async () => {
    try {
        const res = await axios.get("/shop/")
        return res.data
    } catch (error) {
        console.log("Error getProduct Home: " + error.message);
    }
}
export const getAllProductShop = async () => {
    try {
        const res = await axios.get("/shop/product")
        return res.data
    } catch (error) {
        console.log("Error getProduct Home: " + error.message);
    }
}
export const getTypeId = async (id) => {
    try {
        const res = await axios.put(`/shop/${id}`);
        return res.data;
    } catch (error) {
        console.log("Error");
    }
}
export const getDetailProduct = async (id) => {
try {
    const res= await axios.put(`/shop/detail/${id}`);
    return res.data
} catch (error) {
    console.log("Error detail product");
}
}
export const getAllProductByTypeId = async (id) => {
    try {
        const res = await axios.get(`/shop/product/type/${id}`);
        return res.data;
    } catch (error) {
        console.log("Error");
    }
}