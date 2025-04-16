import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./index.css";  
import "./App.css";  
import Animcards from "./components/Animcards";
import Contact from "./components/Contact";
import Cards3 from "./components/Cards3";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Mind from "./pages/Mind";
import AboutUs from "./pages/AboutUs";
import Diet from "./pages/Diet";
import Physical from "./pages/Physical";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import Dashboard from "./components/Dashboard";
import TrackPro from "./pages/TrackPro";
import Chatbot from "./components/ChatBot";
import FitQuest from "./pages/FitQuest";
import FitQuestDashboard from "./pages/FitQuestDashboard";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Calender from "./pages/Calender";






function App() {
  const [userEmail, setUserEmail] = useState(null);
 
 
  return (
    <>

 <Router>
    <Navbar userEmail={userEmail}></Navbar>   {/* Navbar remains outside Routes */} {/* Pass email to Navbar */}
    <div className="pt-10"> {/* Padding to avoid navbar overlap */}
        <Routes>
{/* Home page routes all present */}
        <Route path="/" element={       
            <>
            <Header></Header>
              <Animcards />

              <Chatbot></Chatbot>
              <Cards3 />
              <Contact />
              <Footer />
            </>
          } />
          <Route path="/diet" element={<Diet></Diet>} />     {/* All other Routes */}
          <Route path="/physical" element={<Physical ></Physical>} />
          <Route path="/trackpro" element={<TrackPro></TrackPro>} />
          <Route path="/mind" element={<Mind></Mind>} />
          <Route path="/fitquest" element={  <FitQuest></FitQuest>} />
          <Route path="/aboutus" element={  <AboutUs></AboutUs>} />
          <Route path="/dashboard" element={  <Dashboard userEmail={userEmail} ></Dashboard>} />
           {/* Redirect to login if userEmail is not set */}
        <Route path="/dashboard" element={userEmail ? <Dashboard userEmail={userEmail} /> : <Navigate to="/login" />}
        />
          <Route path="/login" element={ <Login setUserEmail={setUserEmail} ></Login>} />
          <Route path="/fit-dashboard" element={<FitQuestDashboard />} />
          <Route path="/checkin" element={<Calender/>} />
        </Routes>
        </div>
      </Router>
      <ToastContainer
  position="top-center" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss  pauseOnHover  theme="dark"/>

    </>
  )
}

export default App
