import React from 'react'
import { useParams } from 'react-router'
import { useProgrammes } from '@/context/ProgrammeContext'
import { Link } from 'react-router';

function FacultyProgrammes() {
  const { faculty } = useParams();
  const { programmes, loading } = useProgrammes()

  if(loading){
    return(
        <div className='text-center py-20'>
            Loading Programmes....
        </div>
    );
  }

   const filteredProgrammes = programmes.filter(
    (programme) =>programme.facultySlug === faculty
  );
  return (
    <div className="max-w-7xl mx-auto py-16 px-6">

      <h1 className="text-4xl font-bold text-[#0A2342] mb-2">

        {decodeURIComponent(faculty)}

      </h1>

      <p className="text-gray-500 mb-10">

        Browse all programmes offered under this faculty.

      </p>

      {filteredProgrammes.length === 0 ? (

        <div className="text-center text-gray-500">

          No programmes found.

        </div>

      ) : (

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {filteredProgrammes.map((programme) => (

            <div
              key={programme.id}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
            >

              <h2 className="text-xl font-bold text-[#0A2342]">

                {programme.name}

              </h2>

              <p className="text-yellow-600 mt-2">

                {programme.code}

              </p>

              <p className="mt-4 text-gray-600">

                {programme.description}

              </p>

              <div className="mt-6 flex justify-between text-sm">

                <span>{programme.level}</span>

                <span>{programme.duration}</span>

              </div>

             <Link to={`/programmes/${programme.id}`}><button
                className="mt-6 w-full bg-[#0A2342] text-white py-3 rounded-xl hover:bg-[#12355B]">
                View Details
              </button></Link> 

            </div>

          ))}

        </div>

      )}

    </div>
  )
}

export default FacultyProgrammes