import { Menu, Bell } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

const AdminNavbar = ({ title = "Dashboard", onMenuClick }) => {
  const { currentUser } = useAuth();

  const today = new Date().toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="sticky top-0 z-40 h-20 bg-white border-b border-slate-200 shadow-sm px-8 flex items-center justify-between">

      {/* Left */}
      <div className="flex items-center gap-4">

        {/* Mobile Menu Button */}
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 rounded-lg hover:bg-slate-100"
        >
          <Menu size={24} />
        </button>

        <div>
          <h1 className="text-2xl font-bold text-[#0A2342]">
            {title}
          </h1>

          <p className="text-sm text-slate-500">
            {today}
          </p>
        </div>

      </div>

      {/* Right */}
      <div className="flex items-center gap-6">

        {/* Notification */}
        <button className="relative p-2 rounded-full hover:bg-slate-100 transition">

          <Bell
            size={22}
            className="text-[#0A2342]"
          />

          <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-yellow-400 border border-white"></span>

        </button>

        {/* Admin */}
        <div className="flex items-center gap-3">

          <div className="text-right hidden sm:block">

            <p className="font-semibold text-[#0A2342]">
              Administrator
            </p>

            <p className="text-sm text-slate-500 truncate max-w-[180px]">
              {currentUser?.email}
            </p>

          </div>

          <div className="w-11 h-11 rounded-full bg-[#D4AF37] text-[#0A2342] flex items-center justify-center font-bold text-lg shadow">

            {currentUser?.email?.charAt(0).toUpperCase()}

          </div>

        </div>

      </div>

    </header>
  );
};

export default AdminNavbar;