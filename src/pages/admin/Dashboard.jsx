import AdminLayout from "@/components/admin/AdminLayout";
import DashboardCard from "@/components/admin/DashboardCard";

import {
  GraduationCap,
  FileText,
  CalendarDays,
  Clock,
} from "lucide-react";

const Dashboard = () => {
  return (
    <AdminLayout title="Dashboard">

      {/* Welcome Banner */}

      <div className="bg-gradient-to-r from-[#0A2342] to-[#12355B] rounded-3xl p-8 text-white mb-8">

        <h1 className="text-4xl font-bold">
          Welcome Back 👋
        </h1>

        <p className="mt-2 text-slate-200">
          Here's what's happening in your university today.
        </p>

      </div>

      {/* Statistics */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <DashboardCard
          title="Programmes"
          value="24"
          icon={GraduationCap}
          color="bg-[#0A2342]"
        />

        <DashboardCard
          title="Applications"
          value="158"
          icon={FileText}
          color="bg-[#D4AF37]"
        />

        <DashboardCard
          title="Pending Reviews"
          value="19"
          icon={Clock}
          color="bg-orange-500"
        />

        <DashboardCard
          title="Events"
          value="8"
          icon={CalendarDays}
          color="bg-green-600"
        />

      </div>

      {/* Bottom Section */}

      <div className="grid lg:grid-cols-3 gap-8 mt-10">

        {/* Recent Applications */}

        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-200">

          <div className="border-b p-6">

            <h2 className="text-xl font-bold text-[#0A2342]">
              Recent Applications
            </h2>

          </div>

          <table className="w-full">

            <thead className="bg-slate-100">

              <tr>

                <th className="text-left p-4">
                  Applicant
                </th>

                <th className="text-left p-4">
                  Programme
                </th>

                <th className="text-left p-4">
                  Status
                </th>

              </tr>

            </thead>

            <tbody>

              <tr className="border-t">

                <td className="p-4">
                  Jane Doe
                </td>

                <td className="p-4">
                  Computer Science
                </td>

                <td className="p-4">

                  <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">

                    Pending

                  </span>

                </td>

              </tr>

              <tr className="border-t">

                <td className="p-4">
                  John Smith
                </td>

                <td className="p-4">
                  Nursing
                </td>

                <td className="p-4">

                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">

                    Accepted

                  </span>

                </td>

              </tr>

              <tr className="border-t">

                <td className="p-4">
                  Mary Kim
                </td>

                <td className="p-4">
                  Business IT
                </td>

                <td className="p-4">

                  <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm">

                    Declined

                  </span>

                </td>

              </tr>

            </tbody>

          </table>

        </div>

        {/* Upcoming Events */}

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">

          <h2 className="text-xl font-bold text-[#0A2342] mb-5">

            Upcoming Events

          </h2>

          <div className="space-y-5">

            <div className="border-l-4 border-[#D4AF37] pl-4">

              <h3 className="font-semibold">
                Open Day
              </h3>

              <p className="text-sm text-slate-500">
                20 August 2026
              </p>

            </div>

            <div className="border-l-4 border-[#D4AF37] pl-4">

              <h3 className="font-semibold">
                Orientation
              </h3>

              <p className="text-sm text-slate-500">
                2 September 2026
              </p>

            </div>

            <div className="border-l-4 border-[#D4AF37] pl-4">

              <h3 className="font-semibold">
                Graduation
              </h3>

              <p className="text-sm text-slate-500">
                14 December 2026
              </p>

            </div>

          </div>

        </div>

      </div>

    </AdminLayout>
  );
};

export default Dashboard;