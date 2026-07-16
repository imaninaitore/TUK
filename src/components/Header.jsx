import React from 'react'
import backgroundImage from "@/assets/bridgeview.jpg"

function Header() {
  return ( 
  <>
    <header  style={{
        backgroundImage:`url(${backgroundImage})`,
        backgroundSize:"cover",
        backgroundPosition:"center",
        height: "500px",
        }}>


<div className='absolute bottom-8 left-8'>
    <button className=" group flex items-center gap-2 px-8 py-3 rounded-xl bg-white/15 backdrop-blur-lg border border-white/30 text-white font-medium shadow-lg hover:bg-white/25 transition-all duration-300">
        Explore Programmes
     <span className="group-hover:translate-x-1 transition-transform duration-300">
    →
  </span>
</button> 
</div>
    </header>
   
<section className="-mt-16 relative z-20">
  <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl px-10 py-10">
    <div className="grid grid-cols-2 md:grid-cols-4 text-center">

      <div>
        <h2 className="text-5xl font-bold text-[#0B1F3A]">10K+</h2>
        <p className="mt-3 text-slate-500 uppercase tracking-wide text-sm">
          Students
        </p>
      </div>

      <div>
        <h2 className="text-5xl font-bold text-[#0B1F3A]">120+</h2>
        <p className="mt-3 text-slate-500 uppercase tracking-wide text-sm">
          Academic Programs
        </p>
      </div>

      <div>
        <h2 className="text-5xl font-bold text-[#0B1F3A]">95%</h2>
        <p className="mt-3 text-slate-500 uppercase tracking-wide text-sm">
          Graduate Employment
        </p>
      </div>

      <div>
        <h2 className="text-5xl font-bold text-[#0B1F3A]">50+</h2>
        <p className="mt-3 text-slate-500 uppercase tracking-wide text-sm">
          Global Partnerships
        </p>
      </div>

    </div>
  </div>
</section>

  </>
  )
}

export default Header