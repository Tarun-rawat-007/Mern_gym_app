import { useState, useEffect } from "react";
import axios from "axios";
import './FitQuest.css';
import { useNavigate } from 'react-router-dom';
const FitQuestDashboard = () => {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const userEmail = localStorage.getItem("userEmail");
  const navigate = useNavigate();

  useEffect(() => {
    if (!userEmail) {
      setError("No user email found.");
      setLoading(false);
      return;
    }

    axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/fitquest/records?email=${userEmail}`)
      .then(response => {
        setRecords(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching records:", error);
        setError("Failed to load records.");
        setLoading(false);
      });
  }, [userEmail]);

  const deleteRecord = async (recordId) => {
    if (!window.confirm("Are you sure you want to delete this record?")) return;

    try {
      await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/fitquest/records/${recordId}`);
      setRecords(records.filter(record => record._id !== recordId));
    } catch (error) {
      console.error("Error deleting record:", error);
      setError("Failed to delete record.");
    }
  };

  const formatDate = (dateString) => new Date(dateString).toLocaleDateString("en-GB");

  const rankOrder = ["🥉 Bronze", "🥈 Silver", "🥇 Gold", "💎 Diamond", "🏆 Master"];
  const maxRank = records.length > 0
    ? records.reduce((max, record) => rankOrder.indexOf(record.rank) > rankOrder.indexOf(max.rank) ? record : max, records[0]).rank
    : "N/A";

  const lowestTime = records.length > 0
    ? Math.min(...records.map(record => record.timer))
    : 0;

  if (loading) return <p>Loading workout history... </p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="dashboard-container">
      
      <h1 className="dashboard-title">📊 FitQuest Score board</h1>

      <div className="dashboard-content">
      <div className="stats-card">
  <h2>🎯  Rank Breakdown</h2>
  <ul className="rank-list">
    <li><span className="rank-icon">🏆</span> <strong>Master : </strong> ≤ 10 min</li>
    <li><span className="rank-icon">💎</span> <strong>Diamond: </strong> ≤ 15 min</li>
    <li><span className="rank-icon">🥇</span> <strong>Gold   :</strong> ≤ 20 min</li>
    <li><span className="rank-icon">🥈</span> <strong>Silver :</strong> ≤ 25 min</li>
    <li><span className="rank-icon">🥉</span> <strong>Bronze :</strong> &gt; more than 25 min</li>
  </ul>
</div>

        <div className="stats-card">
          <h2 >📌 Best Score</h2>
          <p><strong>📧 Email:</strong> {userEmail}</p>
          <div className="rank-highlight">Rank: <span>{maxRank}</span></div>
          <div className="timer-highlight">Time: ⏱️ <span>{Math.floor(lowestTime / 60)}:{(lowestTime % 60).toString().padStart(2, "0")}</span></div>
        </div>
     
        

        <div className="table-container">
          {records.length === 0 ? (
            <p>No past workout records found.</p>
          ) : (
            <table className="dashboard-table">
              <thead>
                <tr>
                  <th>Date </th>
                  <th>Time Taken</th>
                  <th>Calories Burned</th>
                  <th>Tasks Completed</th>
                  <th>Rank</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {records.map((record, index) => (
                  <tr key={index}>
                    <td>{formatDate(record.createdAt)}</td>
                    <td>{Math.floor(record.timer / 60)}:{(record.timer % 60).toString().padStart(2, "0")}</td>
                    <td>{record.caloriesBurned} kcal</td>
                    <td>{record.tasksCompleted}/{record.totalTasks}</td>
                    <td>{record.rank}</td>

                    <td>
                      <button className="delete-button" onClick={() => deleteRecord(record._id)}>🗑️ Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {/* back to dashboard */}
      <button
  onClick={() => navigate('/dashboard')}
  className="bg-black text-white w-12 h-12 rounded-full shadow-md hover:bg-gray-700 transition duration-300 ease-in-out fixed bottom-10 right-10 flex items-center justify-center space-x-2 sm:w-24 sm:h-12 md:w-32 md:h-16 lg:w-36 lg:h-18 border-2 border-white hover:border-gray-400 animate-bounce-slow"
>
  <span className="hidden sm:block text-white text-lg font-medium">Back</span>
  <span className="text-white text-2xl">→</span>
</button>
    </div>
  );
};

export default FitQuestDashboard;
