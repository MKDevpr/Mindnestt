'use client';

import { useState } from 'react';

const initialHabits = [
  { id: 1, text: 'Drink 8 glasses of water', completed: true, icon: 'ri-drop-line' },
  { id: 2, text: 'Take a 10-minute walk', completed: true, icon: 'ri-walk-line' },
  { id: 3, text: 'Practice gratitude', completed: false, icon: 'ri-heart-line' },
  { id: 4, text: 'Do 5 minutes of stretching', completed: false, icon: 'ri-body-scan-line' },
  { id: 5, text: 'Read for 15 minutes', completed: false, icon: 'ri-book-open-line' },
  { id: 6, text: 'Limit social media to 30 mins', completed: true, icon: 'ri-smartphone-line' },
  { id: 7, text: 'Practice deep breathing', completed: false, icon: 'ri-lungs-line' },
];

export default function HealthyHabits() {
  const [habits, setHabits] = useState(initialHabits);

  const toggleHabit = (id: number) => {
    setHabits(habits.map(habit => 
      habit.id === id ? { ...habit, completed: !habit.completed } : habit
    ));
  };

  const completedCount = habits.filter(habit => habit.completed).length;
  const progress = Math.round((completedCount / habits.length) * 100);

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-blue-100">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Daily Wellness Habits</h3>
        <div className="text-sm text-gray-600">
          {completedCount}/{habits.length} completed
        </div>
      </div>

      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-600">Progress</span>
          <span className="text-sm font-medium text-blue-600">{progress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <div className="space-y-3 max-h-60 overflow-y-auto">
        {habits.map((habit) => (
          <label key={habit.id} className="flex items-center space-x-3 cursor-pointer group">
            <input
              type="checkbox"
              checked={habit.completed}
              onChange={() => toggleHabit(habit.id)}
              className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
            />
            <div className="flex items-center space-x-2 flex-1">
              <i className={`${habit.icon} text-gray-400 group-hover:text-blue-500 transition-colors`}></i>
              <span className={`text-sm ${habit.completed ? 'line-through text-gray-500' : 'text-gray-700'} transition-colors`}>
                {habit.text}
              </span>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}