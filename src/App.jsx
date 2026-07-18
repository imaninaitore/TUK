import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Faculties from './components/Facaulties'
import Footer from './components/Footer'
import StudyLevel from './pages/StudyLevel'
import RegisterUndergraduate from './pages/RegisterUndergraduate'
import RegisterPostgraduate from './pages/RegisterPostgraduate'
import RegisterDoctrate from './pages/RegisterDoctrate'
import Login from './pages/Login'
import { useAuth } from "@/context/AuthContext";
import { Navigate } from 'react-router'
import { Route,Routes } from 'react-router'
import MainLayout from './layout/MainLayout'
import Dashboard from "./pages/admin/Dashboard";
import ManageProgrammes from "./pages/admin/ManageProgrammes";
import ManageEvents from "./pages/admin/ManageEvents";
import ManageHome from "./pages/admin/ManageHome";
import ManageAnnouncements from "./pages/admin/ManageAnnouncements";
import ManageContact from "./pages/admin/ManageContact";
import ManageApplications from "./pages/admin/ManageApplications";
import Programmes from './components/Programmes'
import FacultyProgrammes from './pages/FacaultyProgrammes'
import ApplicantDashboard from './pages/ApplicantsDashboard'
import ProgrammeDetails from './pages/ProgrammeDetails'
import ApplicationForm from './pages/ApplicantionForm'
import { useApplications } from './context/ApplicationContext'

function App() {
  const {isAdmin, userLoggedIn,currentUser} = useAuth();
  const{Applications} = useApplications();
  return (
    <>
    <Routes>
       <Route path="/" element={
          <>
            <Navbar />
            <Header />
            <About />
            <Faculties/>
            <Footer />
          </>
        }/>

       <Route element={<MainLayout/>}>
       <Route path="/StudyLevel" element={<StudyLevel />} /> 
       <Route path="/register-undergraduate" element={<RegisterUndergraduate/>} /> 
       <Route path="/register-postgraduate" element={<RegisterPostgraduate/>} /> 
       <Route path="/register-doctrate" element={<RegisterDoctrate/>} /> 
       <Route path="/login" element={<Login/>} /> 
       <Route path="/programmes" element={<Programmes/>} /> 
       <Route path="/faculties/:faculty" element={<FacultyProgrammes />} /> 
       <Route path="/programmes/:programmeId" element={<ProgrammeDetails />} /> 
        </Route>

      {/* Admin Routes */}
  <Route
    path="/admin"
    element={
      isAdmin ? <Dashboard /> : <Navigate to="/login" replace />
    }
  />

  <Route
    path="/admin/programmes"
    element={
      isAdmin ? <ManageProgrammes /> : <Navigate to="/login" replace />
    }
  />

  <Route
    path="/admin/events"
    element={
      isAdmin ? <ManageEvents /> : <Navigate to="/login" replace />
    }
  />

  <Route
    path="/admin/homepage"
    element={
      isAdmin ? <ManageHome /> : <Navigate to="/login" replace />
    }
  />

  <Route
    path="/admin/contact"
    element={
      isAdmin ? <ManageContact /> : <Navigate to="/login" replace />
    }
  />

  <Route
    path="/admin/announcements"
    element={
      isAdmin ? <ManageAnnouncements /> : <Navigate to="/login" replace />
    }
  />

 <Route
  path="/admin/ManageApplications"
  element={
    userLoggedIn &&
    currentUser?.email === "anna.imaninaitore1726@gmail.com" ? (
      <ManageApplications />
    ) : (
      <Navigate to="/" />
    )
  }
/>
   
  {/*registered applicant page for form and dashboard*/}
  <Route path="/dashboard/application/:programmeId" element={
    userLoggedIn ? (
      <ApplicationForm />
    ) : (
      <Navigate to="/login" />
    )
  }/>

  <Route
  path="/dashboard"
  element={
    userLoggedIn ? (
      <ApplicantDashboard />
    ) : (
      <Navigate to="/login" />
    )
  }/>

</Routes> 
  </>
  )
}

export default App