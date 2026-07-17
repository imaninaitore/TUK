import React from 'react'
import { useProgrammes } from '@/context/ProgrammeContext'
function Progammes() {
    const { programmes, loading} = useProgrammes();
    if (loading) {
        return <p>Loading programmes</p>
    }
  return (
    <section className="py-20 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12 text-[#0A2342]">
          Our Programmes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {programmes.map((programme) => (

            <div
              key={programme.id}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
            >

              <h3 className="text-xl font-bold text-[#0A2342]">
                {programme.name}
              </h3>

              <p className="text-yellow-600 font-medium mt-2">
                {programme.faculty}
              </p>

              <p className="text-gray-600 mt-4">
                {programme.description}
              </p>

              <div className="mt-6 flex justify-between text-sm">

                <span>{programme.duration}</span>

                <span>{programme.level}</span>

              </div>

              <button
                className="mt-6 w-full bg-[#0A2342] text-white py-3 rounded-xl hover:bg-[#12355B]"
              >
                View Programme
              </button>

            </div>

          ))}

        </div>

      </div>

    </section>
)
}

export default Progammes