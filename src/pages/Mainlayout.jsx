import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";


const Mainlayout = () => {
    return (
        <div className="font-inter">
            <Navbar></Navbar>
            <div className="max-w-[1440px] mx-auto">
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Mainlayout;