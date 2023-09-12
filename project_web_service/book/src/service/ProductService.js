import axios from "axios";
axios.defaults.baseURL = "http://localhost:8080"
export const getAllProduct = async () => {
    try {
        const res = await axios.get("/products/")
        return res.data
    } catch (error) {
        console.log("Error");
    }
}
export const getProductById = async (id) => {
    try {
        const res = await axios.put(`/product/${id}`);
        return res.data;
    } catch (error) {
        console.log("Error");
    }
}