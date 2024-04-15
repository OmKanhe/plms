import './App.css'
import { Route, Routes } from 'react-router'
import Landing from './components/Landing'
import Register from './components/Register'
import Login from './components/Login'
import CompleteProfile from './components/CompleteProfile'
import Dashboard from '../src/pages/Dashboard'
import UploadExportReport from './pages/UploadExportReport'
import ContactUs from './pages/ContactUs'

function App() {

  return (
    <>
     <Routes>
     <Route path='/' element = {<Landing/>} />
     <Route path='/register' element = {<Register/>} />
     <Route path='/login' element = {<Login/>} />
     <Route path='/complete-profile' element = {<CompleteProfile/>} />
     <Route path='/dashboard' element = {<Dashboard/>} />
     <Route path='/upload-report' element = {<UploadExportReport/>}/>
     <Route path='/contact-us' element = {<ContactUs/>}/>

  
     </Routes>
    </>
  )
}

export default App
