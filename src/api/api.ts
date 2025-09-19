import axios from "axios";

const API = "https://ecom-server-dkn0.onrender.com";
const getAllProducts = () => axios.get(${API}/products/all);
const addNewProduct = () => axios.post(${API}/products/add);
const editProduct = (product:any, id:string)=> axios.put('$(API)/products/product/edit/$(id)',product)
const deleteProduct = (id:string)=> axios.put('$(API)/products/product/edit/$(id)')
export {getAllProducts,addNewProduct,editProduct,deleteProduct}

