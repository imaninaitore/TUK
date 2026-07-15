import { Link, Navigate } from "react-router";
//import { doSignInWithEmailAndPassword,doSignInWithGoogle } from "@/firebase/auth";
import { useAuth } from "@/context/AuthContext";
import { useState } from "react";
const {userLoggedIn,login} = useAuth('');
const Login = () => {
  const { userLoggedIn } = useAuth('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [isSigningIn, setIsSigningIn] = useState(false)
  const [errorMessage,setErrorMessage] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    if(!isSigningIn ) return;
      setIsSigningIn(true);

    try {
        await login(email, password);
    } catch (error) {
        setErrorMessage(error.message);
        setIsSigningIn(false);
    }
    
  }
  const onGoogleSign =(e) => {
    e.preventDefault()
    if(!isSigningIn){
      setIsSigningIn(true)
      doSignInWithGoogle().catch(err => {
        setIsSigningIn(false)
      })
    }
  }

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-6 py-12">
     {userLoggedIn && (<Navigate to={'/home'} replace={true}/>)}
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-10">

        {/* Heading */}

        <div className="text-center">

          <p className="uppercase tracking-[0.3em] text-sm text-amber-500 font-semibold">
            Bridgeview University
          </p>

          <h1 className="mt-2 text-4xl font-bold text-slate-900">
            Applicant Login
          </h1>

          <p className="mt-4 text-slate-600">
            Sign in to continue your application, upload documents, or track
            your admission status.
          </p>

        </div>

        {/* Form */}

        <form onSubmit={onSubmit} className="mt-10 space-y-6">

          {/* Email */}

          <div>

            <label className="block text-sm font-medium mb-2">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              onChange={(event)=> {
                  setEmail(event.target.value);
                }}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />

          </div>

          {/* Password */}

          <div>

            <label className="block text-sm font-medium mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              onChange={(event)=> {
                  setPassword(event.target.value);
                }}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />

          </div>

          {/* Remember Me & Forgot Password */}

          <div className="flex items-center justify-between">

            <label className="flex items-center gap-2 text-sm text-slate-600">

              <input type="checkbox" />

              Remember Me

            </label>

            <Link
              to="/forgot-password"
              className="text-sm text-amber-600 hover:underline"
            >
              Forgot Password?
            </Link>

          </div>

          {/* Login Button */}
          {errorMessage && (
    <p className="text-red-600 text-sm">
        {errorMessage}
    </p>
      )}
          <button
           type="submit" 
           className="w-full bg-slate-900 hover:bg-slate-800 text-white py-3 rounded-xl transition duration-300 font-medium">
           {isSigningIn ? "Signing In..." : "Sign In"}
            Sign In

          </button>

        </form>

        {/* Divider */}

        <div className="flex items-center my-8">

          <div className="flex-1 border-t border-gray-300"></div>

          <span className="px-4 text-sm text-gray-500">
            OR
          </span>

          <div className="flex-1 border-t border-gray-300"></div>

        </div>

        {/* Register */}

        <p className="text-center text-slate-600">

          Don't have an applicant account?{" "}

          <Link
            to="/register-undergraduate"
            className="text-amber-600 font-semibold hover:underline"
          >
            Create Account 
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Login;