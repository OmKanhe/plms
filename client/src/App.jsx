import './App.css'
import { Route, Routes } from 'react-router'
import Landing from './components/Landing'
import Register from './components/Register'
import Login from './components/Login'
import CompleteProfile from './components/CompleteProfile'
import Dashboard from '../src/pages/Dashboard'
import UploadExportReport from './pages/UploadExportReport'
import ContactUs from './pages/ContactUs'
import axios from 'axios'
import {Toaster} from "react-hot-toast"
import Footer from './components/Footer'
// import ManagePatients from './pages/ManagePatients'

function App() {

  axios.defaults.baseURL = "http://localhost:3000";
  axios.defaults.withCredentials = true;
 
  
  return (
    <>
    <Toaster
  position="top-center"
  toastOptions={{
    success: {
      style: {
        background: "green",
        color: "white"
      },
    },
    error: {
      style: {
        background: "red",
        color: "white"
      },
    },
    duration: 3000,
    style: {},

    // Aria
    ariaProps: {
      role: "status",
      "aria-live": "polite",
    },
  }}
/>

     <Routes>
     <Route path='/' element = {<Landing/>} />
     <Route path='/register' element = {<Register/>} />
     <Route path='/login' element = {<Login/>} />
     <Route path='/complete-profile' element = {<CompleteProfile/>} />
     <Route path='/dashboard' element = {<Dashboard/>} />
     <Route path='/upload-report' element = {<UploadExportReport/>}/>
     <Route path='/contact-us' element = {<ContactUs/>}/>
     {/* <Route path='/manage-patient' element= {<ManagePatients/>} /> */}

  
     </Routes>
     <Footer/>
    </>
  )
}

export default App
