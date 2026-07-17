import { useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { Plus, Pencil, Trash2, Search } from "lucide-react";
import { useProgrammes } from "@/context/ProgrammeContext";

const ManageProgrammes = () => {
  
  const [showModal, setShowModal] = useState(false);
  const { programmes, addProgramme, deleteProgramme } = useProgrammes();

const [formData, setFormData] = useState({
  name: "",
  code: "",
  faculty: "",
  level: "Undergraduate",
  duration: "",
  intake: "",
  mode: "Full Time",
  description: "",
  requirements: "",
  status: "Open",
});

const handleChange = (e) => {
  const { name, value } = e.target;

  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
};

const handleSubmit = async (e) => {
  e.preventDefault();

  await addProgramme(formData);

  setFormData({
    name: "",
    code: "",
    faculty: "",
    level: "Undergraduate",
    duration: "",
    intake: "",
    mode: "Full Time",
    description: "",
    requirements: "",
    status: "Open",
  });

  setShowModal(false);
};
  return (
    <AdminLayout>
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

        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 bg-[#D4AF37] hover:bg-yellow-500 text-[#0A2342] font-semibold px-5 py-3 rounded-xl transition"
        >

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

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-x-auto">

        <table className="w-full">

          <thead className="bg-[#0A2342] text-white">

            <tr>

              <th className="p-4 text-left">
                Programme
              </th>

              <th className="p-4 text-left">
                Faculty
              </th>

              <th className="p-4 text-left">
                Level
              </th>

              <th className="p-4 text-left">
                Duration
              </th>

              <th className="p-4 text-center">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {programmes.length === 0 ? (

              <tr>

                <td
                  colSpan="5"
                  className="text-center py-10 text-slate-500"
                >

                  No programmes added yet.

                </td>

              </tr>

            ) : (

              programmes.map((programme) => (

                <tr
                  key={programme.id}
                  className="border-b hover:bg-slate-50"
                >

                  <td className="p-5">

                    <h3 className="font-semibold">

                      {programme.name}

                    </h3>

                    <p className="text-sm text-slate-500">

                      {programme.code}

                    </p>

                  </td>

                  <td className="p-5">

                    {programme.faculty}

                  </td>

                  <td className="p-5">

                    {programme.level}

                  </td>

                  <td className="p-5">

                    {programme.duration}

                  </td>

                  <td className="p-5">

                    <div className="flex justify-center gap-3">

                      <button
                        className="bg-blue-100 hover:bg-blue-200 text-blue-700 p-3 rounded-lg"
                      >

                        <Pencil size={18} />

                      </button>

                      <button
                        onClick={() => deleteProgramme(programme.id)}
                        className="bg-red-100 hover:bg-red-200 text-red-600 p-3 rounded-lg"
                      >

                        <Trash2 size={18} />

                      </button>

                    </div>

                  </td>

                </tr>

              ))

            )}

          </tbody>

        </table>

      </div>

      {/* Modal */}

      {showModal && (

        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

          <div className="bg-white rounded-2xl p-8 w-full max-w-2xl">

            <h2 className="text-2xl font-bold mb-6">

              Add Programme

            </h2>

            {/* FORM COMES HERE */}
            <form
  onSubmit={handleSubmit}
  className="space-y-4"
>

  <input
    type="text"
    name="name"
    placeholder="Programme Name"
    value={formData.name}
    onChange={handleChange}
    className="w-full border rounded-lg p-3"
    required
  />

  <input
    type="text"
    name="code"
    placeholder="Programme Code"
    value={formData.code}
    onChange={handleChange}
    className="w-full border rounded-lg p-3"
  />

  <input
    type="text"
    name="faculty"
    placeholder="Faculty"
    value={formData.faculty}
    onChange={handleChange}
    className="w-full border rounded-lg p-3"
    required
  />

  <select
    name="level"
    value={formData.level}
    onChange={handleChange}
    className="w-full border rounded-lg p-3"
  >
    <option>Undergraduate</option>
    <option>Postgraduate</option>
    <option>Doctorate</option>
  </select>

  <input
    type="text"
    name="duration"
    placeholder="Duration (e.g. 4 Years)"
    value={formData.duration}
    onChange={handleChange}
    className="w-full border rounded-lg p-3"
  />

  <input
    type="text"
    name="intake"
    placeholder="Intake"
    value={formData.intake}
    onChange={handleChange}
    className="w-full border rounded-lg p-3"
  />

  <select
    name="mode"
    value={formData.mode}
    onChange={handleChange}
    className="w-full border rounded-lg p-3"
  >
    <option>Full Time</option>
    <option>Part Time</option>
    <option>Online</option>
  </select>

  <textarea
    name="description"
    placeholder="Programme Description"
    value={formData.description}
    onChange={handleChange}
    rows={4}
    className="w-full border rounded-lg p-3"
  />

  <textarea
    name="requirements"
    placeholder="Admission Requirements"
    value={formData.requirements}
    onChange={handleChange}
    rows={4}
    className="w-full border rounded-lg p-3"
  />

  <select
    name="status"
    value={formData.status}
    onChange={handleChange}
    className="w-full border rounded-lg p-3"
  >
    <option>Open</option>
    <option>Closed</option>
  </select>

  <div className="flex justify-end gap-4">

    <button
      type="button"
      onClick={() => setShowModal(false)}
      className="px-5 py-3 rounded-lg bg-gray-200"
    >
      Cancel
    </button>

    <button
      type="submit"
      className="px-5 py-3 rounded-lg bg-[#D4AF37] font-semibold text-[#0A2342]"
    >
      Save Programme
    </button>

  </div>

</form>

            <button
              onClick={() => setShowModal(false)}
              className="mt-6 bg-gray-200 px-5 py-2 rounded-lg"
            >

              Close

            </button>

          </div>

        </div>

      )}

    </AdminLayout>
  );
};

export default ManageProgrammes;