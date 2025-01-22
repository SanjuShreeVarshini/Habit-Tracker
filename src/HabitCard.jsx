import React from "react";
import "./App.css";

const HabitCard = ({ habit }) => {
  return (
    <div className="habit-card">
      <h2>{habit.name}</h2>
      <p>Progress: {habit.progress}%</p>
      <p>Streak: {habit.streak} days</p>
    </div>
  );
};

export default HabitCard;
