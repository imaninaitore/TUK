import React from "react";
import logo from "@/assets/shield-logo.png"
import { Link } from "react-router";

const Navbar = () => {
  return (
     
      <nav className="bg-white shadow-sm">


 {/* ================= TOP BAR ================= */}
      <div className="bg-slate-900 text-white">

        <div className="max-w-7xl mx-auto flex justify-end items-center h-12 px-8">

          <div className="flex items-center gap-8 text-sm ">

            <a href="#" className="hover:text-amber-400 transition"> Applicant Portal</a>

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
                  Faculties
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-amber-500 transition">
                  Programs
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

            {/* Apply Button */}
            <div className="p-3">
              <Link to={'/StudyLevel'}>  
               <button className="bg-slate-800 hover:bg-slate-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition">Apply→</button>
              </Link>
            </div>

          </div>

        </div>

      </nav>
  );
};

export default Navbar;