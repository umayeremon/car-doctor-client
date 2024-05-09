import {
  createBrowserRouter
} from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import CheckOut from "../Pages/CheckOut/CheckOut";

const router= createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/signUp',
        element:<SignUp/>
      },
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/checkout/:id',
        element:<CheckOut/>
      },
    ]
  }
])


export default router;