import AdminLayout from "@/components/admin/AdminLayout";
import { Plus, Pencil, Trash2, Search } from "lucide-react";

const ManageProgrammes = () => {
  return (
    <AdminLayout title="Manage Programmes">

      {/* Header */}

      <div className="flex flex-col md:flex-row justify-between md:items-center gap-5 mb-8">

        <div>
          <h1 className="text-3xl font-bold text-[#0A2342]">
            Manage Programmes
          </h1>

          <p className="text-slate-500 mt-1">
            Add, edit and manage all university programmes.
          </p>
        </div>

        <button className="flex items-center gap-2 bg-[#D4AF37] hover:bg-yellow-500 text-[#0A2342] font-semibold px-5 py-3 rounded-xl transition">

          <Plus size={20} />

          Add Programme

        </button>

      </div>

      {/* Search */}

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 mb-6">

        <div className="flex items-center gap-3">

          <Search className="text-slate-500" />

          <input
            type="text"
            placeholder="Search programme..."
            className="w-full outline-none"
          />

        </div>

      </div>

      {/* Table */}

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">

        <table className="w-full">

          <thead className="bg-[#0A2342] text-white">

            <tr>

              <th className="p-4 text-left">Programme</th>

              <th className="p-4 text-left">Faculty</th>

              <th className="p-4 text-left">Level</th>

              <th className="p-4 text-left">Duration</th>

              <th className="p-4 text-center">Actions</th>

            </tr>

          </thead>

          <tbody>

            <tr className="border-b hover:bg-slate-50">

              <td className="p-5 flex items-center gap-4">

                <img
                  src="https://placehold.co/70x70"
                  alt=""
                  className="rounded-lg"
                />

                <div>

                  <h3 className="font-semibold">
                    Bachelor of Computer Science
                  </h3>

                  <p className="text-sm text-slate-500">
                    BSc Computer Science
                  </p>

                </div>

              </td>

              <td className="p-5">

                School of Computing

              </td>

              <td className="p-5">

                Undergraduate

              </td>

              <td className="p-5">

                4 Years

              </td>

              <td className="p-5">

                <div className="flex justify-center gap-3">

                  <button className="bg-blue-100 hover:bg-blue-200 text-blue-700 p-3 rounded-lg">

                    <Pencil size={18} />

                  </button>

                  <button className="bg-red-100 hover:bg-red-200 text-red-600 p-3 rounded-lg">

                    <Trash2 size={18} />

                  </button>

                </div>

              </td>

            </tr>

            <tr className="border-b hover:bg-slate-50">

              <td className="p-5 flex items-center gap-4">

                <img
                  src="https://placehold.co/70x70"
                  alt=""
                  className="rounded-lg"
                />

                <div>

                  <h3 className="font-semibold">
                    Bachelor of Nursing
                  </h3>

                  <p className="text-sm text-slate-500">
                    BSc Nursing
                  </p>

                </div>

              </td>

              <td className="p-5">

                School of Health Sciences

              </td>

              <td className="p-5">

                Undergraduate

              </td>

              <td className="p-5">

                4 Years

              </td>

              <td className="p-5">

                <div className="flex justify-center gap-3">

                  <button className="bg-blue-100 hover:bg-blue-200 text-blue-700 p-3 rounded-lg">

                    <Pencil size={18} />

                  </button>

                  <button className="bg-red-100 hover:bg-red-200 text-red-600 p-3 rounded-lg">

                    <Trash2 size={18} />

                  </button>

                </div>

              </td>

            </tr>

          </tbody>

        </table>

      </div>

    </AdminLayout>
  );
};

export default ManageProgrammes;