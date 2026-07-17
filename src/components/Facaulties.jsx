import React from "react";
import facaulty1 from '@/assets/facaultyImages/engineering.jpg'
import facaulty2 from '@/assets/facaultyImages/comp-tech.jpg'
import facaulty3 from '@/assets/facaultyImages/business.jpg'
import facaulty4 from '@/assets/facaultyImages/health.jpg'
import facaulty5 from '@/assets/facaultyImages/law.jpg'
import facaulty6 from '@/assets/facaultyImages/arts.jpg'

const faculties = [
  {
    name: "Faculty of Engineering",
    slug:"engineering",
    image:facaulty1,
  },
  {
    name: "Faculty of Computing",
    slug:"computing",
    image:facaulty2 ,
  },
  {
    name: "Faculty of Business",
     slug:"business",
    image:facaulty3,
  },
  {
    name: "Faculty of Health Sciences",
     slug:"health-sciences",
    image:facaulty4,
  },
  {
    name: "Faculty of Law",
     slug:"law",
    image:facaulty5,
  },
  {
    name: "Faculty of Arts & Humanities",
     slug:"arts-humanities",
    image:facaulty6,
  },
];

function Faculties() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-8">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.35em] text-amber-500 font-semibold">
            Academic Excellence
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#0B1F3A]">
            Our Faculties
          </h2>

          <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mt-6"></div>

          <p className="mt-6 max-w-3xl mx-auto text-slate-600 leading-8">
            Explore our diverse faculties, each committed to delivering
            world-class education, innovative research, and practical
            learning experiences that prepare students for successful careers.
          </p>
        </div>

        {/* Faculty Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {faculties.map((faculty, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 cursor-pointer"
            >
              {/* Image Placeholder */}
              <div className="h-56 bg-slate-200 overflow-hidden">
                <img
                  src={faculty.image}
                  alt={faculty.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Card Content */}
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold text-[#0B1F3A]">
                  {faculty.name}
                </h3>

                <button className="mt-8 text-amber-600 font-semibold hover:text-[#0B1F3A] transition">
                  Learn More →
                </button>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Faculties;