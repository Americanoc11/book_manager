import axios from "axios";
axios.defaults.baseURL = "http://localhost:8080"
export const getAllUser = async () => {
    try {
        const res = await axios.get("/users")
        return res.data
    } catch (error) {
        console.log("Error getListUser " + error);
    }
}
export const getUserById = async (id) => {
    try {
        const res = await axios.put(`/users/${id}`)
        return res.data;
    } catch (error) {
        console.log("Error");
    }
}