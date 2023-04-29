import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Resturents from "../Pages/Resturents/Resturents";
import Services from "../Pages/Services/Services";
import Foods from "../Pages/Foods/Foods";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import Privateroute from "../Pages/Privateroute/Privateroute";
import Orders from "../Pages/Orders/Orders";

const router= createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/resturents',
                element:<Resturents></Resturents>
            },
            {
                path:'/services',
                element:<Services></Services>
            },
            {
                path:'/foods',
                element:<Foods></Foods>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<Signup></Signup>
            },
            {
                path:'/orders',
                element:<Privateroute><Orders></Orders></Privateroute>
            },
        ]
    }
])
export default router