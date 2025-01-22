import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

const AddHabit = () => {
  const [habitName, setHabitName] = useState("");
  const [habits, setHabits] = useState([]);
  const navigate = useNavigate();

  // Add Habit
  const handleAddHabit = () => {
    if (habitName.trim()) {
      const newHabit = {
        id: Date.now(),
        name: habitName,
        weekStatus: Array(7).fill(false), // Track completion for 7 days
      };
      setHabits([...habits, newHabit]);
      setHabitName("");
    } else {
      alert("Please enter a valid habit name.");
    }
  };

  // Delete Habit
  const handleDeleteHabit = (id) => {
    setHabits(habits.filter((habit) => habit.id !== id));
  };

  // Toggle Weekly Status
  const toggleDayStatus = (habitId, dayIndex) => {
    setHabits(
      habits.map((habit) =>
        habit.id === habitId
          ? {
              ...habit,
              weekStatus: habit.weekStatus.map((status, index) =>
                index === dayIndex ? !status : status
              ),
            }
          : habit
      )
    );
  };

  return (
    <div className="add-habit">
      <h1>Habit Tracker</h1>

      {/* Add Habit Section */}
      <div className="habit-form">
        <input
          type="text"
          placeholder="Enter a Habit"
          value={habitName}
          onChange={(e) => setHabitName(e.target.value)}
        />
        <button onClick={handleAddHabit}>Add Habit</button>
        <button onClick={() => navigate("/dashboard")}>Go to Dashboard</button>
      </div>

      {/* Display Added Habits */}
      <div className="habit-list">
        {habits.length === 0 ? (
          <p>No habits added yet. Start by adding a new habit!</p>
        ) : (
          <ul>
            {habits.map((habit) => (
              <li key={habit.id} className="habit-item">
                <div className="habit-details">
                  <span>{habit.name}</span>
                  <button onClick={() => handleDeleteHabit(habit.id)}>Delete</button>
                </div>

                {/* Weekly Tracker */}
                <div className="week-tracker">
                  {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
                    <label key={index}>
                      <input
                        type="checkbox"
                        checked={habit.weekStatus[index]}
                        onChange={() => toggleDayStatus(habit.id, index)}
                      />
                      {day}
                    </label>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AddHabit;
