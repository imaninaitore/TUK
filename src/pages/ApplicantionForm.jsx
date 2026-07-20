//read the selected programme
import { useState } from "react";
import { useParams } from "react-router";
import { useProgrammes } from "@/context/ProgrammeContext";
import { useApplications } from "@/context/ApplicationContext";
import { useAuth} from "@/context/AuthContext";
import {
  User,
  Phone,
  GraduationCap,
  School,
  FileText,
  ShieldCheck,
} from "lucide-react";
import { useNavigate } from "react-router";

const ApplicationForm = () => {

 const navigate = useNavigate(); 
  const { programmeId } = useParams();
  const { programmes } = useProgrammes();
const { submitApplication } = useApplications();
const { currentUser } = useAuth();
  const programme = programmes.find(
    (p) => p.id === programmeId
  );

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    nationality: "",
    nationalId: "",

    email: "",
    phone: "",
    county: "",
    address: "",

    highSchool: "",
    kcseIndex: "",
    meanGrade: "",
    yearCompleted: "",

    guardianName: "",
    relationship: "",
    guardianPhone: "",

    passportPhoto: null,
    kcseCertificate: null,
    nationalIdFile: null,

    declaration: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : type === "file"
          ? files[0]
          : value,
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!formData.declaration) {
    alert("Please accept the declaration before submitting.");
    return;
  }

  // file objects
  const {
    passportPhoto,
    kcseCertificate,
    nationalIdFile,
    ...applicationData
  } = formData;

  try {
    await submitApplication({
      applicantId: currentUser.uid,
      applicantEmail: currentUser.email,

      programmeId: programme.id,
      programmeName: programme.name,
      faculty: programme.faculty,
      level: programme.level,

      ...applicationData,
    });

    alert("Application submitted successfully!");

    navigate("/dashboard");

  } catch (error) {
    console.error(error);
    alert("Failed to submit application.");
  }
};

  if (!programme) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Programme not found.
      </div>
    );
  }


  return (
    <div className="bg-slate-100 min-h-screen py-14 px-6">

      <div className="max-w-5xl mx-auto">

        {/* Header */}

        <div className="bg-[#0A2342] rounded-t-3xl text-white p-10">

          <p className="uppercase tracking-[0.3em] text-yellow-400 font-semibold">
            Bridgeview University
          </p>

          <h1 className="text-4xl font-bold mt-3">
            Undergraduate Application Form
          </h1>

          <p className="text-slate-300 mt-3">
            Complete the application below.
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-b-3xl shadow-xl p-10 space-y-12"
        >

          {/* Programme */}

          <section>

            <div className="flex items-center gap-3 mb-6">

              <GraduationCap className="text-yellow-500" />

              <h2 className="text-2xl font-bold text-[#0A2342]">
                Programme Information
              </h2>

            </div>

            <div className="grid md:grid-cols-3 gap-6">

              <input
                readOnly
                value={programme?.name || ""}
                className="border rounded-xl p-4 bg-slate-100"
              />

              <input
                readOnly
                value={programme?.faculty || ""}
                className="border rounded-xl p-4 bg-slate-100"
              />

              <input
                readOnly
                value={programme?.level || ""}
                className="border rounded-xl p-4 bg-slate-100"
              />

            </div>

          </section>

          {/* Personal */}

          <section>

            <div className="flex items-center gap-3 mb-6">

              <User className="text-yellow-500" />

              <h2 className="text-2xl font-bold text-[#0A2342]">
                Personal Information
              </h2>

            </div>

            <div className="grid md:grid-cols-2 gap-6">

              <input
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="border rounded-xl p-4 focus:border-yellow-500 outline-none"
              />

              <input
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="border rounded-xl p-4 focus:border-yellow-500 outline-none"
              />

              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className="border rounded-xl p-4"
              />

              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="border rounded-xl p-4"
              >
                <option value="">Gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>

              <input
                name="nationality"
                placeholder="Nationality"
                value={formData.nationality}
                onChange={handleChange}
                className="border rounded-xl p-4"
              />

              <input
                name="nationalId"
                placeholder="National ID / Passport"
                value={formData.nationalId}
                onChange={handleChange}
                className="border rounded-xl p-4"
              />

            </div>

          </section>

          {/* Contact */}

          <section>

            <div className="flex items-center gap-3 mb-6">

              <Phone className="text-yellow-500" />

              <h2 className="text-2xl font-bold text-[#0A2342]">
                Contact Information
              </h2>

            </div>

            <div className="grid md:grid-cols-2 gap-6">

              <input
                value={currentUser?.email || ""}
                readOnly
                className="border rounded-xl p-4 bg-slate-100"
              />

              <input
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="border rounded-xl p-4"
              />

              <input
                name="county"
                placeholder="County"
                value={formData.county}
                onChange={handleChange}
                className="border rounded-xl p-4"
              />

              <input
                name="address"
                placeholder="Postal Address"
                value={formData.address}
                onChange={handleChange}
                className="border rounded-xl p-4"
              />

            </div>

          </section>

          {/* Academic */}

          <section>

            <div className="flex items-center gap-3 mb-6">

              <School className="text-yellow-500" />

              <h2 className="text-2xl font-bold text-[#0A2342]">
                Academic Information
              </h2>

            </div>

            <div className="grid md:grid-cols-2 gap-6">

              <input
                name="highSchool"
                placeholder="High School"
                value={formData.highSchool}
                onChange={handleChange}
                className="border rounded-xl p-4"
              />

              <input
                name="kcseIndex"
                placeholder="KCSE Index Number"
                value={formData.kcseIndex}
                onChange={handleChange}
                className="border rounded-xl p-4"
              />

              <input
                name="meanGrade"
                placeholder="KCSE Mean Grade"
                value={formData.meanGrade}
                onChange={handleChange}
                className="border rounded-xl p-4"
              />

              <input
                name="yearCompleted"
                placeholder="Year Completed"
                value={formData.yearCompleted}
                onChange={handleChange}
                className="border rounded-xl p-4"
              />

            </div>

          </section>

          {/* Guardian */}

          <section>

            <div className="flex items-center gap-3 mb-6">

              <User className="text-yellow-500" />

              <h2 className="text-2xl font-bold text-[#0A2342]">
                Parent / Guardian
              </h2>

            </div>

            <div className="grid md:grid-cols-3 gap-6">

              <input
                name="guardianName"
                placeholder="Guardian Name"
                value={formData.guardianName}
                onChange={handleChange}
                className="border rounded-xl p-4"
              />

              <input
                name="relationship"
                placeholder="Relationship"
                value={formData.relationship}
                onChange={handleChange}
                className="border rounded-xl p-4"
              />

              <input
                name="guardianPhone"
                placeholder="Guardian Phone"
                value={formData.guardianPhone}
                onChange={handleChange}
                className="border rounded-xl p-4"
              />

            </div>

          </section>

          {/* Uploads */}

          <section>

            <div className="flex items-center gap-3 mb-6">

              <FileText className="text-yellow-500" />

              <h2 className="text-2xl font-bold text-[#0A2342]">
                Supporting Documents
              </h2>

            </div>

            <div className="grid md:grid-cols-3 gap-6">

              <input
                type="file"
                name="passportPhoto"
                onChange={handleChange}
              />

              <input
                type="file"
                name="kcseCertificate"
                onChange={handleChange}
              />

              <input
                type="file"
                name="nationalIdFile"
                onChange={handleChange}
              />

            </div>

          </section>

          {/* Declaration */}

          <section>

            <div className="flex items-center gap-3 mb-6">

              <ShieldCheck className="text-yellow-500" />

              <h2 className="text-2xl font-bold text-[#0A2342]">
                Declaration
              </h2>

            </div>

            <label className="flex gap-4 items-start">

              <input
                type="checkbox"
                name="declaration"
                value={formData.declaration}
                onChange={handleChange}
              />

              <span>
                I certify that all information provided is true and
                understand that giving false information may lead to
                disqualification.
              </span>

            </label>

          </section>

          {/* Submit */}

          <div className="text-center">

            <button
            type="submit"
              className="bg-[#D4AF37] hover:bg-yellow-500 text-[#0A2342] font-bold px-12 py-4 rounded-xl transition" >
              Submit Application
            </button>

          </div>

        </form>

      </div>

    </div>
  );
};

export default ApplicationForm;