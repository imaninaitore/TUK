import { useParams, Link } from "react-router";
import { useProgrammes } from "@/context/ProgrammeContext";

const ProgrammeDetails = () => {
  const { programmeId } = useParams();
  const { programmes, loading } = useProgrammes();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading programme...
      </div>
    );
  }

  const programme = programmes.find(
    (p) => p.id === programmeId
  );

  if (!programme) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Programme not found.
      </div>
    );
  }

  return (
    <section className="bg-slate-100 min-h-screen py-16">

      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">

        {/* Hero */}

        <div className="bg-[#0A2342] text-white p-10">

          <h1 className="text-4xl font-bold">

            {programme.name}

          </h1>

          <p className="text-yellow-400 mt-3">

            {programme.code}

          </p>

        </div>

        {/* Content */}

        <div className="p-10">

          {/* Overview */}

          <h2 className="text-2xl font-bold text-[#0A2342] mb-4">

            Programme Overview

          </h2>

          <p className="text-gray-700 leading-8">

            {programme.description}

          </p>

          {/* Information */}

          <div className="grid md:grid-cols-3 gap-6 mt-10">

            <div className="bg-slate-100 rounded-xl p-5">

              <h3 className="font-semibold">

                Faculty

              </h3>

              <p>{programme.faculty}</p>

            </div>

            <div className="bg-slate-100 rounded-xl p-5">

              <h3 className="font-semibold">

                Duration

              </h3>

              <p>{programme.duration}</p>

            </div>

            <div className="bg-slate-100 rounded-xl p-5">

              <h3 className="font-semibold">

                Study Level

              </h3>

              <p>{programme.level}</p>

            </div>

          </div>

          {/* Requirements */}

          <div className="mt-12">

            <h2 className="text-2xl font-bold text-[#0A2342] mb-5">

              Entry Requirements

            </h2>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-xl">

              <p className="leading-8 whitespace-pre-line">

                {programme.requirements}

              </p>

            </div>

          </div>

          {/* Careers */}

          <div className="mt-12">

            <h2 className="text-2xl font-bold text-[#0A2342] mb-5">

              Career Opportunities

            </h2>

            <p className="leading-8 text-gray-700">

              {programme.careers}

            </p>

          </div>

          {/* Apply */}

          <div className="mt-14 text-center">

            <Link
              to={`/dashboard/application/${programme.id}`}
              className="inline-block bg-[#D4AF37] hover:bg-yellow-500 text-[#0A2342] font-bold px-10 py-4 rounded-xl transition"
            >
              Apply Now
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
};

export default ProgrammeDetails;