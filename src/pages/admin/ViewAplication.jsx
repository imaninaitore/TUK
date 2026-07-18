import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import AdminLayout from "@/components/admin/AdminLayout";
import { useApplications } from "@/context/ApplicationContext";

const ViewApplication = () => {
  const [showRejectBox, setShowRejectBox] = useState(false);

const [reason, setReason] = useState("");

  const { applicationId } = useParams();

  const navigate = useNavigate();

  const {

    getApplicationById,

    updateApplicationStatus,

  } = useApplications();

  const [application, setApplication] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    loadApplication();

  }, []);

  const loadApplication = async () => {

    const data = await getApplicationById(applicationId);

    setApplication(data);

    setLoading(false);

  };

const handleStatus = async (status) => {
  try {

    await updateApplicationStatus(application.id, status);

    alert(`Application ${status}`);

    navigate("/admin/ManageApplications");

  } catch (error) {

    console.error(error);

    alert("Failed to update application");

  }
};

  if (loading) {

    return (

      <AdminLayout>

        <div className="p-10">

          Loading...

        </div>

      </AdminLayout>

    );

  }

  if (!application) {

    return (

      <AdminLayout>

        <div className="p-10">

          Application not found.

        </div>

      </AdminLayout>

    );

  }

  return (

    <AdminLayout>

      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-10">

        <h1 className="text-3xl font-bold text-[#0A2342] mb-10">

          Applicant Details

        </h1>

        <div className="grid md:grid-cols-2 gap-8">

          <div>

            <h2 className="font-bold mb-4">

              Personal Information

            </h2>

            <p><strong>Name:</strong> {application.firstName} {application.lastName}</p>

            <p><strong>Email:</strong> {application.applicantEmail}</p>

            <p><strong>Phone:</strong> {application.phone}</p>

            <p><strong>Nationality:</strong> {application.nationality}</p>

            <p><strong>ID:</strong> {application.nationalId}</p>

          </div>

          <div>

            <h2 className="font-bold mb-4">

              Programme

            </h2>

            <p><strong>Programme:</strong> {application.programmeName}</p>

            <p><strong>Faculty:</strong> {application.faculty}</p>

            <p><strong>Level:</strong> {application.level}</p>

          </div>

        </div>

        <div className="mt-10">

          <h2 className="font-bold mb-4">

            Academic Information

          </h2>

          <p><strong>School:</strong> {application.highSchool}</p>

          <p><strong>KCSE Index:</strong> {application.kcseIndex}</p>

          <p><strong>Mean Grade:</strong> {application.meanGrade}</p>

          <p><strong>Year Completed:</strong> {application.yearCompleted}</p>

        </div>

        <div className="mt-12 flex gap-6">

          <button
            onClick={() => handleStatus("Accepted")}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl">
            Accept Application

          </button>

          <button

            onClick={() => handleStatus("Rejected")}

            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl">

            Reject Application
          </button>
        </div>
      </div>

    </AdminLayout>

  );

};

export default ViewApplication;