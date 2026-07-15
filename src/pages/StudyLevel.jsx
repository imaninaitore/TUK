import React from 'react'

function StudyLevel() {
  return (
    <div className="min-h-screen bg-[url('/campus.jpg')] bg-cover bg-center py-20 px-6">

  <div className="max-w-7xl mx-auto">

    <div className="text-center mb-14">
      <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900">
        Choose Your Level of Study
      </h1>

      <p className="mt-4 text-lg text-slate-700 max-w-2xl mx-auto">
        Select the level of study you wish to apply for and begin your
        admissions journey with Bridgeview University.
      </p>
    </div>

    {/* Cards */}

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

      {/* Undergraduate */}

      <div className="backdrop-blur-xl bg-white/25 border border-white/40 rounded-3xl shadow-xl p-8 hover:-translate-y-2 hover:bg-white/35 transition-all duration-300">

        <div className="w-16 h-16 rounded-full bg-slate-900 text-white flex items-center justify-center text-3xl mb-6">
          🎓
        </div>

        <h2 className="text-2xl font-semibold text-slate-900">
          Undergraduate
        </h2>

        <p className="mt-4 text-slate-700 leading-relaxed">
          Begin your academic journey with one of our bachelor's degree
          programmes across a wide range of disciplines.
        </p>

        <button className="mt-8 bg-slate-900 text-white px-6 py-3 rounded-xl hover:bg-slate-800 transition">
          Apply →
        </button>

      </div>

      {/* Postgraduate */}

      <div className="backdrop-blur-xl bg-white/25 border border-white/40 rounded-3xl shadow-xl p-8 hover:-translate-y-2 hover:bg-white/35 transition-all duration-300">

        <div className="w-16 h-16 rounded-full bg-slate-900 text-white flex items-center justify-center text-3xl mb-6">
          📘
        </div>

        <h2 className="text-2xl font-semibold text-slate-900">
          Postgraduate
        </h2>

        <p className="mt-4 text-slate-700 leading-relaxed">
          Advance your expertise through master's degrees and postgraduate
          diploma programmes.
        </p>

        <button className="mt-8 bg-slate-900 text-white px-6 py-3 rounded-xl hover:bg-slate-800 transition">
          Apply →
        </button>

      </div>

      {/* Doctoral */}

      <div className="backdrop-blur-xl bg-white/25 border border-white/40 rounded-3xl shadow-xl p-8 hover:-translate-y-2 hover:bg-white/35 transition-all duration-300">

        <div className="w-16 h-16 rounded-full bg-slate-900 text-white flex items-center justify-center text-3xl mb-6">
          🔬
        </div>

        <h2 className="text-2xl font-semibold text-slate-900">
          Doctoral
        </h2>

        <p className="mt-4 text-slate-700 leading-relaxed">
          Pursue advanced research and innovation through our doctoral
          programmes and contribute to future discoveries.
        </p>

        <button className="mt-8 bg-slate-900 text-white px-6 py-3 rounded-xl hover:bg-slate-800 transition">
          Apply →
        </button>

      </div>

    </div>

  </div>

</div>
)
}

export default StudyLevel