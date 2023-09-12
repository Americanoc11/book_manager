import axios from "axios";
axios.defaults.baseURL = "http://localhost:8080";

export const getAllTypeProduct = async () => {
    try {
        const res = await axios.get("/typeProducts/")
        return res.data
    } catch (error) {
        console.log("Error");
    }
}
export const getTypeProductById = async (id) => {
    try {
        const res = await axios.put(`/typeProducts/${id}`);
        return res.data;
    } catch (error) {
        console.log("Error");
    }
}