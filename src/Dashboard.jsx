import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import HabitCard from "./HabitCard";

const Dashboard = () => {
  const [habits, setHabits] = useState([
    { name: "Exercise", progress: 50, streak: 3 },
    { name: "Read a Book", progress: 30, streak: 2 },
  ]);
  const navigate = useNavigate();

  return (
    <div className="dashboard">
      <h1>Your Dashboard</h1>
      <button onClick={() => navigate("/add-habit")}>Add Habit</button>
      <div className="habits-container">
        {habits.map((habit, index) => (
          <HabitCard key={index} habit={habit} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
