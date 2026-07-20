import { Link, Navigate, useNavigate } from "react-router";
import { useAuth } from "@/context/AuthContext";
import React,{useState} from "react";

function RegisterPostgraduate() {
  const navigate = useNavigate();
  const { register, userLoggedIn } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isRegistering, setIsRegistering] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    if (isRegistering) return;

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    setErrorMessage("");
    setIsRegistering(true);

    try {
      await register(email, password);
      navigate("/home"); 
    } catch (error) {
      setErrorMessage(error.message);
      setIsRegistering(false);
    }
  };

  if (userLoggedIn) {
    return <Navigate to="/" replace />;//replace is used to maintain login state instead of taking the user back to login
  }

  return (
 <div className="min-h-screen bg-slate-100 flex items-center justify-center px-6 py-12">

      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-10">

        {/* Heading */}

        <div className="text-center">

          <p className="uppercase tracking-[0.3em] text-sm text-amber-500 font-semibold">
            Bridgeview University
          </p>

          <h1 className="mt-2 text-4xl font-bold text-slate-900">
            Postgraduate Admissions
          </h1>

          <p className="mt-4 text-slate-600">
            Create your undergraduate applicant account to begin your
            admission application.
          </p>

        </div>

        {/* Form */}

        <form 
        onSubmit={onSubmit}
        className="mt-10 space-y-6">

          {/* Name */}

          <div className="grid md:grid-cols-2 gap-5">

            <div>
              <label className="block text-sm font-medium mb-2">
                First Name
              </label>

              <input
                type="text"
                placeholder="John"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Last Name
              </label>

              <input
                type="text"
                placeholder="Doe"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

          </div>

          {/* Email */}

          <div>
            <label className="block text-sm font-medium mb-2">
              Email Address
            </label>

            <input
              type="email"
              placeholder="example@email.com"
              value={email}
              onChange={(event)=> {
                  setEmail(event.target.value); //controlled input
                }}
                required
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          {/* Phone */}

          <div>
            <label className="block text-sm font-medium mb-2">
              Phone Number
            </label>

            <input
              type="tel"
              placeholder="+254..."
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          {/* ID */}

          <div>
            <label className="block text-sm font-medium mb-2">
              National ID / Passport
            </label>

            <input
              type="text"
              placeholder="Enter ID Number"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          {/* Country */}

          <div>
            <label className="block text-sm font-medium mb-2">
              Country
            </label>

            <select className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500">

              <option>Select Country</option>

              <option>Kenya</option>

              <option>Uganda</option>

              <option>Tanzania</option>

              <option>Rwanda</option>

              <option>Other</option>

            </select>

          </div>

          {/* Password */}

          <div className="grid md:grid-cols-2 gap-5">

            <div>
              <label className="block text-sm font-medium mb-2">
                Password
              </label>

              <input
                type="password"
                value={password}
              onChange={(event)=> {
                  setPassword(event.target.value);
                }}
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Confirm Password
              </label>

              <input
                type="password"
                 value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

          </div>

          {/* Terms */}

          <label className="flex items-center gap-3 text-sm">

            <input type="checkbox" />

            I agree to the Terms & Conditions.

          </label>

           {/* Error Message */}

          {errorMessage && (
            <p className="text-red-500 text-sm">{errorMessage}</p>
          )}

          
          {/* Submit Button */}

          <button
            type="submit"
            disabled={isRegistering}
            className="w-full bg-slate-900 hover:bg-slate-800 disabled:bg-slate-500 text-white py-3 rounded-xl transition"
          >
            {isRegistering
              ? "Creating Account..."
              : "Create Applicant Account"}
          </button>

        </form>

        {/* Login */}

        <p className="mt-8 text-center text-slate-600">

          Already have an applicant account?{" "}

          <Link
            to="/login"
            className="text-amber-600 font-semibold hover:underline"
          >
            Sign In
          </Link>

        </p>

      </div>

    </div>
)
}

export default RegisterPostgraduate