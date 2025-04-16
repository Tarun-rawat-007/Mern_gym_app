import { useState, useEffect } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import axios from "axios";
import "./FitQuest.css";
import { toast } from "react-toastify";

// Retrieve the email from localStorage once
const userEmail = localStorage.getItem("userEmail") || null;

const exercises = [
  { name: "100 Push-ups", completed: false, calories: 60, color: "#28a745" },
  { name: "100 Sit-ups", completed: false, calories: 45, color: "#dc3545" },
  { name: "100 Squats", completed: false, calories: 55, color: "#ffc107" },
  { name: "10 Pull-ups", completed: false, calories: 30, color: "#17a2b8" },
];

const getRankWithSuggestion = (minutes) => {
  if (minutes <= 10) return { rank: "🏆 Master", suggestion: "Incredible performance! You crushed it!" };
  if (minutes <= 15) return { rank: "💎 Diamond", suggestion: "Excellent job! Improve efficiency to level up!" };
  if (minutes <= 20) return { rank: "🥇 Gold", suggestion: "Great effort! Focus on reducing rest time." };
  if (minutes <= 25) return { rank: "🥈 Silver", suggestion: "Good job! Improve endurance and consistency." };
  return { rank: "🥉 Bronze", suggestion: "Nice try! Identify weak areas and improve." };
};

const FitQuest = () => {
  const [tasks, setTasks] = useState(exercises);
  const [timer, setTimer] = useState(0);
  const [running, setRunning] = useState(false);
  const [paused, setPaused] = useState(false);
  const [rank, setRank] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const [caloriesBurned, setCaloriesBurned] = useState(0);
  const [showPopUp, setShowPopUp] = useState(false);

  useEffect(() => {
    let interval;
    if (running && !paused) {
      interval = setInterval(() => setTimer((prev) => prev + 1), 1000);
    }
    return () => clearInterval(interval);
  }, [running, paused]);

  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setCaloriesBurned((prev) => prev + (newTasks[index].completed ? newTasks[index].calories : -newTasks[index].calories));
    setTasks(newTasks);

    if (newTasks.every((task) => task.completed)) {
      stopSession();
    }
  };

  const startSession = () => {
    setRunning(true);
    setTimer(0);
    setCaloriesBurned(0);
    setTasks(exercises.map((ex) => ({ ...ex, completed: false })));
    setRank("");
    setShowPopUp(false);
    setPaused(false);
  };

  const pauseResumeSession = () => {
    setPaused(!paused);
  };

  const stopSession = async () => {
    setRunning(false);
    setShowPopUp(true);
    endSession();

    const minutes = timer / 60;
    const { rank, suggestion } = getRankWithSuggestion(minutes);

    // Prevent API call if no email is found
    if (!userEmail) {
      console.error("No email found in localStorage.");
      return;
    }

    const fitQuestData = {
      email: userEmail,
      timer,
      caloriesBurned,
      tasksCompleted: tasks.filter((task) => task.completed).length,
      totalTasks: tasks.length,
      rank,
      suggestion,
    };

    try {
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/fitquest/save`, fitQuestData);
      console.log("FitQuest session saved!");
      toast.info('FitQuest session saved!');
    } catch (error) {
      console.error("Error saving FitQuest session:", error);
      toast.error("Error saving FitQuest session:", error);
    }
  };

  const endSession = () => {
    const minutes = timer / 60;
    const { rank, suggestion } = getRankWithSuggestion(minutes);
    setRank(rank);
    setSuggestion(suggestion);
  };

  const progress = (tasks.filter((task) => task.completed).length / tasks.length) * 100;
  const pieData = tasks.map((task) => ({
    name: task.name,
    value: task.completed ? task.calories : 1,
    color: task.color,
  }));

  return (
    <>
    <div className="tracker-container">
      <h1 className="Gamefied-title">Gamefied Exercise System 🕹️</h1>

      <div className="workout-section">
        <h1 className="workout-title">Workouts Activities 🏋️</h1>
        <div className="button-container">
          <button onClick={startSession} className="start-button">Start</button>
          <button onClick={pauseResumeSession} className="pause-resume-button">{paused ? "Resume" : "Pause"}</button>
        </div>
        <p className="timer">Time: {Math.floor(timer / 60)}:{(timer % 60).toString().padStart(2, "0")}</p>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progress}%` }}></div>
        </div>

        {running && (
          <div className="task-list">
            {tasks.map((task, index) => (
              <div key={index} className={`task-item ${task.completed ? "completed" : ""}`}>
                <input type="checkbox" checked={task.completed} onChange={() => toggleTask(index)} className="task-checkbox" />
                {task.name}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Right Section */}
      <div className="pie-chart-section">
        <h1 className="pie-chart-title">OverAll body Progress</h1>
        <p className="no-task-message">In it Each workout strengthens key muscles and builds your overall physique. 💪🔥</p>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={90} fill="#82ca9d" label>
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
        {!tasks.some((task) => task.completed) && <p className="no-task-message">No exercises completed yet</p>}
        <div className="calories-burned">Calories Burned: {caloriesBurned} kcal</div>
      </div>

      {showPopUp && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h2 className="popup-title">🎉 Workout Completed! 🎉</h2>
            <p className="popup-rank">Rank: {rank}</p>
            <p className="popup-suggestion">💡 {suggestion}</p>
            <p className="popup-time">Time Taken: {Math.floor(timer / 60)}:{(timer % 60).toString().padStart(2, "0")}</p>
            <p className="popup-calories">Total Calories Burned: {caloriesBurned} kcal</p>
            <p className="popup-completed">Tasks Completed: {tasks.filter((task) => task.completed).length}/{tasks.length}</p>
            <button onClick={() => setShowPopUp(false)} className="popup-close-button">Save It !!</button>
          </div>
        </div>
      )}
    </div>

    </>
  );
};

export default FitQuest;
