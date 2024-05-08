import { Link, NavLink } from "react-router-dom";
import logo from '../../../public/logo.svg'

const NavBar = () => {
  const navList = (
    <>
      <NavLink><li className="text-lg font-semibold text-[#444444]">Home</li></NavLink>
      <NavLink><li className="text-lg font-semibold text-[#444444]">About</li></NavLink>
      <NavLink><li className="text-lg font-semibold text-[#444444]">Services</li></NavLink>
      <NavLink><li className="text-lg font-semibold text-[#444444]">Blog</li></NavLink>
      <NavLink><li className="text-lg font-semibold text-[#444444]">Contact</li></NavLink>

    </>
  );
  return (
      <div className="navbar bg-base-100 mt-4 mb-6 ">
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
              {navList}
            </ul>
          </div>
          <Link to='/' >
            <img src={logo} alt="" className="h-16"/>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-6">
           {
            navList
           }
          </ul>
        </div>
        <div className="navbar-end">
          <button className="btn btn-outline btn-primary text-black">Appointment</button>
        </div>
      </div>
  );
};

export default NavBar;
