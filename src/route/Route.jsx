import { createBrowserRouter } from "react-router-dom";

import Mainlayout from "../pages/Mainlayout";
import Home from "../pages/home/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Mainlayout></Mainlayout>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },{
          path:'/login',
          element:<Login></Login>
        }
        ,{
          path:'/register',
          element:<Register></Register>
        }
      ]
      
    },
  ]);
  export default router