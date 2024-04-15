import React from "react";
import { Link } from "react-router-dom";

function Navbar() {

  return (
    <>
      <div className="navbar bg-[#337357] text-white sm:h-[100px]">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li>
          <a>Patients</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">PathoCare</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-18">
      <li><Link to="/dashboard" className="hover:font-semibold">Home</Link></li>
      <li>
        <details>
          <summary>Patients</summary>
        <ul className="p-2">
            <li className="mb-3 sm:w-[140px]"><a className="bg-[#337357] hover:bg-[#112d20] hover:font-semibold">Add Patient</a></li>
            <li><a className="bg-[#337357] hover:bg-[#112d20] hover:font-semibold" >Manage Patients</a></li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary>Reports</summary>
          <ul className="p-2">
          <li className="mb-3 sm:w-[160px]"><a className="bg-[#337357] hover:bg-[#112d20] hover:font-semibold"><Link to='/upload-report'>Upload Report</Link></a></li>
            <li className="mb-3"><a className="bg-[#337357] hover:bg-[#112d20] hover:font-semibold" >Export Report</a></li>
            <li><a className="bg-[#337357] hover:bg-[#112d20] hover:font-semibold" >Lab Revenue Report</a></li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary>Settings</summary>
          <ul className="p-2">
          <li className="mb-3 sm:w-[140px]"><a className="bg-[#337357] hover:bg-[#112d20] hover:font-semibold">Change Profile</a></li>
            <li><a className="bg-[#337357] hover:bg-[#112d20] hover:font-semibold" >Delete Account</a></li>
          </ul>
        </details>
      </li>
      <li><Link to='/contact-us'>Contact Us</Link></li>
      
    </ul>
  </div>
  <div className="navbar-end px-5 py-1">
    <Link to='/' className="btn text-base font-semibold">Logout</Link>
  </div>
</div>
    </>
  );
}

export default Navbar;
