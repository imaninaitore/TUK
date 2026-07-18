import { useEffect, useState } from "react";
import { Link } from "react-router";
import { Search, Eye } from "lucide-react";
import AdminLayout from "@/components/admin/AdminLayout";
import { useApplications } from "@/context/ApplicationContext";

const ManageApplications = () => {
  const { getAllApplications } = useApplications();

  const [applications, setApplications] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadApplications();
  }, []);

  const loadApplications = async () => {
    const data = await getAllApplications();
    setApplications(data);
  };

  const filteredApplications = applications.filter((application) => {
    const searchTerm = search.toLowerCase();

    return (
      application.firstName?.toLowerCase().includes(searchTerm) ||
      application.lastName?.toLowerCase().includes(searchTerm) ||
      application.programmeName?.toLowerCase().includes(searchTerm) ||
      application.faculty?.toLowerCase().includes(searchTerm)
    );
  });

  const statusColor = (status) => {
    switch (status) {
      case "Accepted":
        return "bg-green-100 text-green-700";

      case "Rejected":
        return "bg-red-100 text-red-700";

      default:
        return "bg-yellow-100 text-yellow-700";
    }
  };

  return (
    <AdminLayout>

      {/* Header */}

      <div className="flex justify-between items-center mb-8">

        <div>

          <h1 className="text-3xl font-bold text-[#0A2342]">
            Applications
          </h1>

          <p className="text-slate-500 mt-2">
            View and manage all submitted applications.
          </p>

        </div>

      </div>

      {/* Search */}

      <div className="bg-white rounded-2xl shadow p-5 mb-8">

        <div className="flex items-center gap-3">

          <Search size={20} className="text-gray-400" />

          <input
            type="text"
            placeholder="Search applicant..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full outline-none"
          />

        </div>

      </div>

      {/* Table */}

      <div className="bg-white rounded-2xl shadow overflow-hidden">

        <table className="w-full">

          <thead className="bg-[#0A2342] text-white">

            <tr>

              <th className="p-4 text-left">
                Applicant
              </th>

              <th className="p-4 text-left">
                Programme
              </th>

              <th className="p-4 text-left">
                Faculty
              </th>

              <th className="p-4 text-left">
                Status
              </th>

              <th className="p-4 text-center">
                Action
              </th>

            </tr>

          </thead>

          <tbody>

            {filteredApplications.length === 0 ? (

              <tr>

                <td
                  colSpan="5"
                  className="text-center py-10 text-gray-500"
                >
                  No applications found.
                </td>

              </tr>

            ) : (

              filteredApplications.map((application) => (

                <tr
                  key={application.id}
                  className="border-b hover:bg-slate-50"
                >

                  <td className="p-5">

                    <div className="font-semibold">

                      {application.firstName} {application.lastName}

                    </div>

                    <div className="text-sm text-gray-500">

                      {application.applicantEmail}

                    </div>

                  </td>

                  <td className="p-5">

                    {application.programmeName}

                  </td>

                  <td className="p-5">

                    {application.faculty}

                  </td>

                  <td className="p-5">

                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${statusColor(
                        application.status
                      )}`}
                    >
                      {application.status}
                    </span>

                  </td>

                  <td className="p-5 text-center">

                    <Link
                      to={`/admin/applications/${application.id}`}
                      className="inline-flex items-center gap-2 bg-[#0A2342] text-white px-4 py-2 rounded-lg hover:bg-[#12355B]"
                    >
                      <Eye size={18} />

                      View

                    </Link>

                  </td>

                </tr>

              ))

            )}

          </tbody>

        </table>

      </div>

    </AdminLayout>
  );
};

export default ManageApplications;