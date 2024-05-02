import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { CiSearch } from "react-icons/ci";
import { MdOutlineShoppingBag } from "react-icons/md";
const Navbar = () => {
  const nav = (
    <>
      <li className="text-sm font-bold">
        <Link
          className={({ isActive }) =>
            isActive ? "active font-bold text-[#FF3811]" : " font-bold"
          }
          to={"/"}
        >
          Home
        </Link>
      </li>
      <li  className="text-sm font-bold">
        <Link
          className={({ isActive }) =>
            isActive ? "active font-bold text-[#FF3811]" : " font-bold"
          }
          to={"/about"}
        >
          About
        </Link>
      </li>
      <li  className="text-sm font-bold">
        <Link
          className={({ isActive }) =>
            isActive ? "active font-bold text-[#FF3811]" : " font-bold"
          }
          to={"/service"}
        >
          service
        </Link>
      </li>
      <li  className="text-sm font-bold">
        <Link
          className={({ isActive }) =>
            isActive ? "active font-bold text-[#FF3811]" : " font-bold"
          }
          to={"/Blog"}
        >
          Blog
        </Link>
      </li>
      <li  className="text-sm font-bold">
        <Link
          className={({ isActive }) =>
            isActive ? "active font-bold text-[#FF3811]" : " font-bold"
          }
          to={"/contact"}
        >
          contact
        </Link>
      </li>
    </>
  );
  return (
    <div className="shadow-md">
      <div className="navbar bg-base-100 max-w-[1440px] mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {nav}
          </ul>
        </div>
        <Link to={"/"}>
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{nav}</ul>
      </div>
     
      <div className="navbar-end">
      <div className="flex gap-5 mr-4 items-center justify-center ">
        <MdOutlineShoppingBag className="cursor-pointer" size={22}/>
        <CiSearch className="cursor-pointer" size={22}/>
      </div>
        <a className="btn outline outline-[#FF3811] bg-transparent rounded-sm text-[#FF3811] hover:bg-transparent ">Appointment</a>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
