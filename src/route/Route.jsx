import { createBrowserRouter } from "react-router-dom";

import Mainlayout from "../pages/Mainlayout";
import Home from "../pages/home/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Mainlayout></Mainlayout>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        }
      ]
      
    },
  ]);
  export default router