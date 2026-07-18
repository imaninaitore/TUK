import { Link } from "react-router";
import { User, GraduationCap, FileText, Clock } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useApplications } from "@/context/ApplicationContext";
import { useEffect } from "react";

const ApplicantDashboard = () => {
  const { currentUser } = useAuth();
  const { application,getMyApplication } = useApplications();

  useEffect(() => {

  if (currentUser) {
    getMyApplication(currentUser.uid);
  }

}, [currentUser]);

  return(
    <div className="min-h-screen bg-slate-100 py-10 px-6">

      <div className="max-w-6xl mx-auto">

        {/* Welcome */}
        <div className="bg-white rounded-2xl shadow p-8 mb-8">

          <h1 className="text-3xl font-bold text-[#0A2342]">
            Welcome,
          </h1>

          <p className="text-lg text-gray-600 mt-2">
            {currentUser?.displayName ||
              currentUser?.email}
          </p>

        </div>

        {/* Status Card */}

        <div className="bg-white rounded-2xl shadow p-8">

          {!application ? (

            <>
              <div className="flex items-center gap-4">

                <div className="bg-yellow-100 p-4 rounded-full">

                  <GraduationCap
                    className="text-yellow-600"
                    size={32}
                  />

                </div>

                <div>

                  <h2 className="text-2xl font-bold text-[#0A2342]">

                    No Application Yet

                  </h2>

                  <p className="text-gray-600 mt-2">

                    Start your university application by
                    choosing a programme.

                  </p>

                </div>

              </div>

              <Link
                to="/faculties"
                className="inline-block mt-8 bg-[#0A2342] hover:bg-[#12355B] text-white px-6 py-3 rounded-xl"
              >
                Browse Faculties
              </Link>

            </>

          ) : (

            <>

              <div className="flex items-center gap-4">

                <div className="bg-green-100 p-4 rounded-full">

                  <Clock
                    className="text-green-600"
                    size={30}
                  />

                </div>

                <>
  {application.status === "Under Review" && (

    <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-xl p-6">

      <h2 className="text-2xl font-bold text-yellow-700">

        Application Under Review

      </h2>

      <p className="mt-3 text-gray-700">

        Thank you for applying to Bridgeview University.

        Your application is currently being reviewed by the Admissions Office.

      </p>

    </div>

  )}

  {application.status === "Accepted" && (

    <div className="bg-green-50 border-l-4 border-green-600 rounded-xl p-6">

      <h2 className="text-2xl font-bold text-green-700">

        🎉 Congratulations!

      </h2>

      <p className="mt-3 text-gray-700">

        You have been offered admission into

      </p>

      <h3 className="text-xl font-bold mt-2 text-[#0A2342]">

        {application.programmeName}

      </h3>

      <button
        className="mt-8 bg-[#D4AF37] hover:bg-yellow-500 text-[#0A2342] font-bold px-8 py-3 rounded-xl"
      >
        Download Admission Letter
      </button>

    </div>

  )}

  {application.status === "Rejected" && (

    <div className="bg-red-50 border-l-4 border-red-600 rounded-xl p-6">

      <h2 className="text-2xl font-bold text-red-700">

        Application Unsuccessful

      </h2>

      <p className="mt-3 text-gray-700">

        Unfortunately, your application was not successful.

      </p>

      <div className="mt-6 bg-white rounded-xl p-5 border">

        <h3 className="font-bold mb-2">

          Reason

        </h3>

        <p>

          {application.rejectionReason}

        </p>

      </div>

    </div>

  )}
</>

              </div>

              <div className="mt-8 bg-slate-100 rounded-xl p-5">

                <h3 className="font-bold text-lg">

                  Programme

                </h3>

                <p>{application.programmeName}</p>

                <p className="text-sm text-gray-600">

                  {application.faculty}

                </p>

              </div>

            </>

          )}

        </div>

      </div>

    </div>
  );
};

export default ApplicantDashboard;