'use client';

import { useState } from 'react';

const tips = [
  {
    title: "Practice Deep Breathing",
    content: "Take 5 deep breaths, inhaling for 4 counts and exhaling for 6. This simple technique activates your parasympathetic nervous system, promoting relaxation.",
    icon: "ri-lungs-line",
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Mindful Moment",
    content: "Pause and notice 3 things you can see, 2 things you can hear, and 1 thing you can touch. This grounding technique brings you back to the present moment.",
    icon: "ri-eye-line",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Gratitude Practice",
    content: "Write down 3 things you're grateful for today. Gratitude shifts your focus from what's lacking to what's abundant in your life.",
    icon: "ri-heart-line",
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Nature Connection",
    content: "Step outside for 5 minutes and observe nature. Even a brief connection with the outdoors can reduce stress hormones and improve your mood.",
    icon: "ri-leaf-line",
    color: "from-teal-500 to-green-500"
  }
];

export default function DailyTip() {
  const [currentTip, setCurrentTip] = useState(0);

  const nextTip = () => {
    setCurrentTip((prev) => (prev + 1) % tips.length);
  };

  const tip = tips[currentTip];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-blue-100">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Daily Mindfulness</h3>
        <button
          onClick={nextTip}
          className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors cursor-pointer"
        >
          <i className="ri-refresh-line text-blue-600"></i>
        </button>
      </div>

      <div className="relative">
        <div className={`w-12 h-12 bg-gradient-to-br ${tip.color} rounded-full flex items-center justify-center mb-4`}>
          <i className={`${tip.icon} text-white text-xl`}></i>
        </div>
        
        <h4 className="font-semibold text-gray-800 mb-2">{tip.title}</h4>
        <p className="text-gray-600 text-sm leading-relaxed">{tip.content}</p>
        
        <div className="flex justify-center mt-4 space-x-2">
          {tips.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTip(index)}
              className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                index === currentTip ? 'bg-blue-500' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}