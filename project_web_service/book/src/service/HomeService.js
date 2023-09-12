import axios from "axios"
axios.defaults.baseURL = "http://localhost:8080"

export const getProductHome = async () => {
     try {
        const res= await axios.get("/home/")
        return res.data
     } catch (error) {
        console.log("Error getProduct Home: "+error.message);
     }
}
export const getTypeProductHome= async ()=>{
    try {
        const res= await axios.get("/home/type");
        return res.data;
    } catch (error) {
        console.log("Error getTypeProductHome");
    }
}