import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const Mainlayout = () => {
    return (
        <div className="font-inter">
            <Navbar></Navbar>
            <div className="max-w-[1440px] mx-auto">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Mainlayout;