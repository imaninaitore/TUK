import { Link } from "react-router";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  GraduationCap,
} from "lucide-react";

function Contact() {
  return (
    <div className="bg-slate-50">

      {/* Hero */}
      <section className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <p className="uppercase tracking-widest text-amber-400 font-semibold">
            Bridgeview University
          </p>

          <h1 className="text-5xl font-bold mt-4">
            Contact Us
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-slate-200 text-lg">
            Have questions about admissions, programmes, or student life?
            We'd love to hear from you.
          </p>

        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-blue-900 text-amber-400 flex items-center justify-center mx-auto">
                <Phone size={30} />
              </div>

              <h3 className="text-xl font-bold mt-5">
                Phone
              </h3>

              <p className="text-gray-600 mt-2">
                +254 712 345 678
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-blue-900 text-amber-400 flex items-center justify-center mx-auto">
                <Mail size={30} />
              </div>

              <h3 className="text-xl font-bold mt-5">
                Email
              </h3>

              <p className="text-gray-600 mt-2 break-words">
                admissions@bridgeview.ac.ke
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-blue-900 text-amber-400 flex items-center justify-center mx-auto">
                <MapPin size={30} />
              </div>

              <h3 className="text-xl font-bold mt-5">
                Location
              </h3>

              <p className="text-gray-600 mt-2">
                Nairobi, Kenya
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-blue-900 text-amber-400 flex items-center justify-center mx-auto">
                <Clock size={30} />
              </div>

              <h3 className="text-xl font-bold mt-5">
                Office Hours
              </h3>

              <p className="text-gray-600 mt-2">
                Mon - Fri
                <br />
                8:00 AM - 5:00 PM
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Contact Form */}
      {/* <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">

          {/* Form 
          <div className="bg-white rounded-2xl shadow-xl p-8">

            <h2 className="text-3xl font-bold text-slate-900">
              Send Us a Message
            </h2>

            <p className="text-gray-600 mt-3 mb-8">
              Fill in the form below and we'll respond as soon as possible.
            </p>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full border rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full border rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />

              <textarea
                rows="6"
                placeholder="Your Message"
                className="w-full border rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />

              <button
                className="bg-amber-400 hover:bg-amber-500 text-slate-900 px-8 py-4 rounded-lg font-semibold flex items-center gap-3 transition"
              >
                <Send size={18} />
                Send Message
              </button>

            </form>

          </div> */}

          {/* Right Side */}
          <div className="space-y-8 p-8">

            <div className="bg-slate-900 text-white rounded-2xl p-8">

              <GraduationCap
                className="text-amber-400 mb-5"
                size={45}
              />

              <h2 className="text-3xl font-bold">
                Admissions Office
              </h2>

              <p className="text-slate-300 mt-4 leading-8">
                Our admissions team is available to answer questions regarding
                applications, programme requirements, scholarships, and campus
                life.
              </p>

              <div className="mt-8 space-y-4">

                <div className="flex items-center gap-4">
                  <Phone className="text-amber-400" />
                  +254 712 345 678
                </div>

                <div className="flex items-center gap-4">
                  <Mail className="text-amber-400" />
                  admissions@bridgeview.ac.ke
                </div>

                <div className="flex items-center gap-4">
                  <MapPin className="text-amber-400" />
                  Bridgeview University, Nairobi
                </div>

              </div>

            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden p-6">

                  <MapPin className="mx-auto text-blue-900"size={50}/>

  <iframe
    src="https://www.google.com/maps/embed?pb"
    className="w-full h-80 border-0"
    loading="lazy"
    allowFullScreen
    referrerPolicy="no-referrer-when-downgrade"
    title="Bridgeview University Location"
  ></iframe>
</div>


          </div>


      {/* CTA */}
      <section className="bg-slate-900 text-white py-20 ">

        <div className="max-w-5xl mx-auto text-center px-6">

          <h2 className="text-4xl font-bold">
            Ready to Start Your Journey?
          </h2>

          <p className="mt-5 text-slate-300">
            Apply today and join a community committed to academic excellence
            and innovation.
          </p>

          <Link
            to="/StudyLevel"
            className="inline-block mt-8 bg-amber-400 hover:bg-amber-500 text-slate-900 font-semibold px-8 py-4 rounded-lg transition"
          >
            Apply Now
          </Link>

        </div>

      </section>

    </div>
  );
}

export default Contact;