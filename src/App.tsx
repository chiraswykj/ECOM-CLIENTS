import { Route, Routes } from "react-router-dom"
import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"
import AdminOrders from "./pages/admin/AdminOrders"
import AdminUsers from "./pages/admin/AdminUsers"
import AdminProducts from "./pages/admin/AdminProducts"
import UserProduct from "./pages/user/UserProduct"


const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/register" element={<Register />}/>
                <Route path="/admin/products" element={<AdminProducts/>}/>
                <Route path="/admin/users" element={<AdminUsers/>}/>
                <Route path="/admin/orders" element={<AdminOrders/>}/>
                <Route path="/users/products" element={<UserProduct/>}/>
            </Routes>
        </div>
    )
}

export default App
