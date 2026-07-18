import React from "react";
import logo from "@/assets/shield-logo.png"
import { Link, useNavigate } from "react-router";
import { doSignOut } from "@/firebase/auth";
import { useAuth } from "@/context/AuthContext";


const Navbar = () => {

  const navigate = useNavigate()
  const {currentUser,userLoggedIn,logout,isAdmin} = useAuth()

  const handleLogout = async ()=> {
   try {
    await logout();
    navigate("/login");
   }catch (error){
    console.error("Logout failed",error);
   }
  };

  return (
     
<nav className="bg-white shadow-sm">


 {/* ================= TOP BAR ================= */}
      <div className="bg-slate-900 text-white">

        <div className="max-w-7xl mx-auto flex justify-end items-center h-12 px-8">

          <div className="flex items-center gap-8 text-sm ">

            <Link to={'/login'} className="hover:text-amber-400 transition"> Applicant Portal</Link>

            <a href="#" className="hover:text-amber-400 transition"> | Students </a>

            <a href="#" className="hover:text-amber-400 transition">| Faculty</a>

            <a href="#" className="hover:text-amber-400 transition">| Alumni </a>

            <a href="#" className="hover:text-amber-400 transition"> | Parents </a>

          </div>

        </div>

      </div> 
      {/* ================= MAIN NAVBAR ================= */}
        <div className="max-w-7xl mx-auto px-8">

          <div className="flex justify-between items-center h-24">

            {/* Logo */}

            <div className="flex items-center gap-2">

              <img
                src={logo}
                alt="Bridgeview logo"
                className="h-20 w-auto"
              />

              <div>

                <h1 className="text-xl font-serif font-bold text-[#0B1F3A]">
                  Bridgeview
                </h1>

                <p className="uppercase tracking-[0.35em] text-xs text-gray-600">
                  University
                </p>

              </div>

            </div>

            {/* Navigation */}

            <ul className="flex items-center gap-10 text-gray-700 font-medium">

              <li>
                <a href="#" className="hover:text-amber-500 transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-amber-500 transition">
                  About
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-amber-500 transition">
                  Faculties &  Programs
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-amber-500 transition">
                  Admissions
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-amber-500 transition">
                  Contact
                </a>
              </li>

            </ul>

            

{userLoggedIn ? (
  <div className="flex items-center gap-4">

    <div className="text-right">

      <p className="font-semibold text-[#0B1F3A]">
        {currentUser?.email.split("@")[0]}
      </p>

      {isAdmin && (
        <span className="text-xs bg-[#D4AF37] text-[#0B1F3A] px-2 py-1 rounded-full">
          Administrator
        </span>
      )}

    </div>

    {isAdmin && (
      <Link
        to="/admin"
        className="bg-[#0B1F3A] text-white px-4 py-2 rounded-lg hover:bg-[#12355B] transition"
      >
        Dashboard
      </Link>
    )}

    <button
      onClick={handleLogout}
      className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
    >
      Logout
    </button>

  </div>
) : (
  <Link
    to="/StudyLevel"
    className="bg-[#D4AF37] text-[#0B1F3A] px-5 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition"
  >
    Apply →
  </Link>
)}   
        </div>
        </div>

 </nav>
  );
};

export default Navbar;