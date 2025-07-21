'use client';

import { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const moodData = [
  { day: 'Mon', stress: 6, mood: 4 },
  { day: 'Tue', stress: 4, mood: 6 },
  { day: 'Wed', stress: 7, mood: 3 },
  { day: 'Thu', stress: 3, mood: 7 },
  { day: 'Fri', stress: 5, mood: 5 },
  { day: 'Sat', stress: 2, mood: 8 },
  { day: 'Sun', stress: 3, mood: 7 },
];

export default function MoodTracker() {
  const [selectedMood, setSelectedMood] = useState('calm');

  const moods = [
    { id: 'excellent', icon: 'ri-emotion-happy-line', label: 'Excellent', color: 'text-green-500' },
    { id: 'good', icon: 'ri-emotion-line', label: 'Good', color: 'text-blue-500' },
    { id: 'calm', icon: 'ri-emotion-normal-line', label: 'Calm', color: 'text-indigo-500' },
    { id: 'stressed', icon: 'ri-emotion-sad-line', label: 'Stressed', color: 'text-yellow-500' },
    { id: 'anxious', icon: 'ri-emotion-unhappy-line', label: 'Anxious', color: 'text-red-500' },
  ];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-blue-100">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Today's Wellness</h3>
      
      <div className="mb-6">
        <p className="text-sm text-gray-600 mb-3">How are you feeling right now?</p>
        <div className="flex space-x-3">
          {moods.map((mood) => (
            <button
              key={mood.id}
              onClick={() => setSelectedMood(mood.id)}
              className={`flex flex-col items-center p-3 rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                selectedMood === mood.id
                  ? 'bg-blue-100 border-2 border-blue-300'
                  : 'bg-gray-50 hover:bg-blue-50 border-2 border-transparent'
              }`}
            >
              <i className={`${mood.icon} text-2xl ${mood.color} mb-1`}></i>
              <span className="text-xs text-gray-700">{mood.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="h-40">
        <p className="text-sm text-gray-600 mb-2">This Week's Stress Levels</p>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={moodData}>
            <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
            <YAxis hide />
            <Area
              type="monotone"
              dataKey="stress"
              stroke="#60a5fa"
              fill="#dbeafe"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}