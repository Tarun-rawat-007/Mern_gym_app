import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const Dashboard = () => {
  // Retrieve the email from localStorage
  const userEmail = localStorage.getItem("userEmail");
  
  const [userData, setUserData] = useState(null); // Initialize as null
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [updatedData, setUpdatedData] = useState({ height: "", weight: "", bmi: "", name: "", age: "" });
const navigate=useNavigate();  
  // Fetch user data from MongoDB
  const fetchUserInfo = useCallback(() => {
    if (userEmail) {
      axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/api/user/${userEmail}`)
        .then((response) => {
          if (response.data.success) {
            setUserData(response.data.user);
          }
        })
        .catch((error) => console.error("Error fetching user:", error));
    } else {
      console.log("User email is missing!");
    }
  }, [userEmail]);

  useEffect(() => {
    fetchUserInfo();
  }, [fetchUserInfo]);

  const handleSaveInfo = () => {
    console.log("Updated Data before sending:", updatedData); // Debugging
    // Send a POST request to save the updated user data to the database
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/api/user/save`, {
        email: userEmail, // Include the user's email to identify the record in the database
        ...updatedData, // Spread the current user data (height, weight, BMI, name, age)
      })
      .then((response) => {
        console.log("Response from backend:", response.data); // Debugging
        // Check if the request was successful
        if (response.data.success) {
          toast.success("User info saved successfully!");
          setUserData(response.data.user); // Update the state with the latest saved data
          setIsSettingsOpen(false);
        } else {
          toast.error("Failed to save user info! Error: " + response.data.message)
        }
      })
      .catch((error) => console.error("Error saving user:", error));
  };

  const openSettings = () => {
    console.log("Opening settings with userData:", userData); // Debugging
    setUpdatedData(userData || { height: "", weight: "", bmi: "", name: "", age: "" });
    setIsSettingsOpen(true);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100 mt-4">
      <aside className="w-full md:w-64 bg-black text-white flex flex-col p-5 space-y-6 h-screen">
        <h2 className="text-2xl font-bold text-center">My Dashboard</h2>
        <p className="text-center text-sm text-gray-400">{userEmail}</p>
        <nav className="space-y-4">
  <button className="flex items-center space-x-3 p-2 hover:bg-gray-700 rounded">
    🏠 Home
  </button>
  <button 
    onClick={() => navigate("/fit-dashboard")} 
    className="flex items-center space-x-3 p-1 hover:bg-gray-700 rounded"
  >
    🏋️ FitQuest Scores
  </button>
  <button 
    onClick={() => navigate("/checkin")} 
    className="flex items-center space-x-3 p-2 hover:bg-gray-700 rounded"
  >
    🗓️ Check-in Log
  </button>
  <button 
    onClick={fetchUserInfo} 
    className="flex items-center space-x-3 p-2 hover:bg-gray-700 rounded"
  >
    👤 Fetch info (BD)
  </button>
  <button 
    onClick={openSettings} 
    className="flex items-center space-x-3 p-2 hover:bg-gray-700 rounded"
  >
    ⚙️ Edit info (FD)
  </button>
</nav>

        <button 
          onClick={() => {
            localStorage.removeItem("userEmail"); 
            toast.error("Log out Succesfully !!");
          }} 
          className="p-2 bg-red-600 rounded hover:bg-red-700 mt-auto"
        >
          Log Out
        </button>
      </aside>
      <main className="flex-1 p-6 h-screen flex flex-col">
        <div className="bg-white p-6 rounded shadow mb-2 text-center md:text-left">
          <h1 className="text-2xl font-bold">{userEmail} Welcome to the Dashboard</h1>
        </div>
        {userData && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-1">
            <div className="bg-white text-left text-xl p-6 rounded-2xl shadow-lg col-span-1 max-w-md mx-auto">
              <div className="flex justify-center mb-6">
                <img
                  src="https://plus.unsplash.com/premium_photo-1739178656495-8109a8bc4f53?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UFJPRklMRSUyMFBJQyUyMEJBQ0tHUk9VTkR8ZW58MHx8MHx8fDA%3D"
                  alt="Profile"
                  className="w-32 h-32 md:w-44 md:h-44 rounded-full border-4 border-gray-300 shadow-lg p-2"
                />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">Your Profile</h2>
              <div className="space-y-2 px-4 md:px-6">
                <p className="text-lg"><span className="font-semibold">Name:</span> {userData.name} </p>
                <p className="text-lg"><span className="font-semibold">Age:</span> {userData.age} </p>
                <p className="text-lg"><span className="font-semibold">Height:</span> {userData.height} cm</p>
                <p className="text-lg"><span className="font-semibold">Weight:</span> {userData.weight} kg</p>
              </div>
            </div>
            <div className="col-span-2 flex flex-col gap-4">
              <div className="bg-white p-6 md:p-8 rounded shadow">
                <h2 className="text-lg font-bold">BMI Score : {userData.bmi} kg/m²</h2>
                <p className="text-gray-600 mt-2">
                  {userData.bmi < 18.5
                    ? "Your BMI score is less than 18.5. You need improvement! ⏫"
                    : userData.bmi >= 18.5 && userData.bmi <= 24.9
                    ? "You have a good BMI score! Keep it up! ✅"
                    : "Your BMI score is higher than expected. Time to work on it! ⏬"}
                </p>
              </div>
              <div className="bg-white p-6 md:p-8 rounded shadow">
                <h2 className="text-lg font-bold">Suggestion for Diet : </h2>
                <p className="text-gray-600">
                  {userData.bmi < 18.5
                    ? "You need to consume more calories and follow a nutritious diet! 🍲"
                    : userData.bmi >= 18.5 && userData.bmi <= 24.9
                    ? "Great job! Keep maintaining a healthy lifestyle. 🍱"
                    : "Focus on burning extra calories and staying active! 🧆"}
                </p>
              </div>
              <div className="bg-white p-6 md:p-10 rounded shadow">
                <h2 className="text-lg font-bold text-gray-800">Contact us At</h2>
                <div className="flex items-center space-x-2 mt-4">
                  <img src="https://cdn-icons-png.flaticon.com/128/732/732200.png" alt="Email" className="w-6 h-6" />
                  <span>contact@trainwithus.com</span>
                </div>
                <div className="flex items-center space-x-2 mt-2">
                  <img src="https://cdn-icons-png.flaticon.com/128/463/463387.png" alt="Phone" className="w-6 h-6" />
                  <span>+1 (234) 567-8900</span>
                </div>
              </div>
            </div>
          </div>
        )}
        
      </main>
    
      {isSettingsOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-20 p-4">
          <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Update Your Info Here</h2>
            <label className="block mb-2">Name:</label>
            <input
              type="text"
              value={updatedData.name}
              onChange={(e) => setUpdatedData({ ...updatedData, name: e.target.value })}
              className="w-full p-2 border rounded mb-2"
            />
            <label className="block mb-2">Age:</label>
            <input
              type="number"
              value={updatedData.age}
              onChange={(e) => setUpdatedData({ ...updatedData, age: e.target.value })}
              className="w-full p-2 border rounded mb-2"
            />
            <label className="block mb-2">Height (cm):</label>
            <input
              type="number"
              value={updatedData.height}
              onChange={(e) => setUpdatedData({ ...updatedData, height: e.target.value })}
              className="w-full p-2 border rounded mb-2"
            />
            <label className="block mb-2">Weight (kg):</label>
            <input
              type="number"
              value={updatedData.weight}
              onChange={(e) => setUpdatedData({ ...updatedData, weight: e.target.value })}
              className="w-full p-2 border rounded mb-2"
            />
            <label className="block mb-2">BMI (kg/m²):</label>
            <input
              type="number"
              value={updatedData.bmi}
              onChange={(e) => setUpdatedData({ ...updatedData, bmi: e.target.value })}
              className="w-full p-2 border rounded mb-2"
            />
            <div className="flex justify-between mt-4">
              <button onClick={handleSaveInfo} className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
              <button onClick={() => setIsSettingsOpen(false)} className="bg-gray-500 text-white px-4 py-2 rounded">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
