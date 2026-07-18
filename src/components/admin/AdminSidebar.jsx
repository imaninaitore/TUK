import { NavLink, useNavigate } from "react-router";
import {
  LayoutDashboard,
  GraduationCap,
  CalendarDays,
  Megaphone,
  House,
  Phone,
  FileText,
  LogOut,
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import logo from "@/assets/logo.png";
import { Link } from "react-router";

const AdminSidebar = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  const menu = [
    {
      title: "Dashboard",
      icon: LayoutDashboard,
      path: "/admin",
    },
    {
      title: "Programmes",
      icon: GraduationCap,
      path: "/admin/programmes",
    },
    {
      title: "Events",
      icon: CalendarDays,
      path: "/admin/events",
    },
    {
      title: "Homepage",
      icon: House,
      path: "/admin/homepage",
    },
    {
      title: "Announcements",
      icon: Megaphone,
      path: "/admin/announcements",
    },
    {
      title: "Contact",
      icon: Phone,
      path: "/admin/contact",
    },
  ];

  return (
    <aside className="w-72 max-w-[85vw] bg-[#0A2342] text-white min-h-screen lg:h-screen flex flex-col shadow-2xl">

      {/* Top Section */}
      <div className="flex-1 overflow-y-auto">

        {/* Logo */}
        <div className="flex flex-col items-center py-6 border-b border-yellow-500/30">

          <img
            src={logo}
            alt="Bridgeview University"
            className="w-24 h-24 object-contain"
          />

          <h1 className="mt-4 text-xl font-bold tracking-wide text-center">
            UNIVERSITY ADMIN
          </h1>

          <p className="text-sm text-slate-300">
            Management Portal
          </p>

        </div>

        {/* Navigation */}

        <div className="mt-6">

          <p className="px-7 mb-3 text-xs uppercase tracking-widest text-yellow-400">
            Content
          </p>

          {menu.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.title}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-4 mx-3 px-4 py-3 rounded-xl transition-all duration-300 mb-2
                  ${
                    isActive
                      ? "bg-yellow-400 text-[#0A2342] font-semibold shadow-lg"
                      : "hover:bg-[#12355B]"
                  }`
                }
              >
                <Icon size={20} />
                <span>{item.title}</span>
              </NavLink>
            );
          })}

          {/* Admissions */}

          <p className="px-7 mt-8 mb-3 text-xs uppercase tracking-widest text-yellow-400">
            Admissions
          </p>

          <NavLink
            to="/admin/ManageApplications"
            className={({ isActive }) =>
              `flex items-center gap-4 mx-3 px-4 py-3 rounded-xl transition-all duration-300 mb-6
              ${
                isActive
                  ? "bg-yellow-400 text-[#0A2342] font-semibold shadow-lg"
                  : "hover:bg-[#12355B]"
              }`
            }
          >
            <FileText size={20} />
            <span>Applications</span>
          </NavLink>

        </div>

      </div>

      {/* Bottom Section */}

      <div className="border-t border-slate-700 p-5">

        <div className="flex items-center gap-3 mb-5">

          <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center text-[#0A2342] font-bold text-lg">

            {currentUser?.email?.charAt(0).toUpperCase()}

          </div>

          <div className="overflow-hidden">

            <p className="font-semibold">
              Administrator
            </p>

            <p className="text-xs text-slate-300 truncate">
              {currentUser?.email}
            </p>

          </div>

<Link to={'/'}><button>Home</button></Link>

        </div>

        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 rounded-xl py-3 transition-all duration-300"
        >
          <LogOut size={18} />
          Logout
        </button>

      </div>

    </aside>
  );
};

export default AdminSidebar;