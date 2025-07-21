
'use client';

import { useState } from 'react';

interface Sound {
  id: string;
  name: string;
  icon: string;
  color: string;
}

export default function AmbientSounds() {
  const [activeSound, setActiveSound] = useState<string | null>(null);

  const sounds: Sound[] = [
    { id: 'rain', name: 'Rain', icon: 'ri-rainy-line', color: 'bg-blue-100 text-blue-600' },
    { id: 'ocean', name: 'Ocean', icon: 'ri-water-line', color: 'bg-cyan-100 text-cyan-600' },
    { id: 'forest', name: 'Forest', icon: 'ri-tree-line', color: 'bg-green-100 text-green-600' },
    { id: 'wind', name: 'Wind', icon: 'ri-windy-line', color: 'bg-gray-100 text-gray-600' },
    { id: 'fireplace', name: 'Fireplace', icon: 'ri-fire-line', color: 'bg-orange-100 text-orange-600' },
    { id: 'birds', name: 'Birds', icon: 'ri-bird-line', color: 'bg-yellow-100 text-yellow-600' },
  ];

  const toggleSound = (soundId: string) => {
    setActiveSound(activeSound === soundId ? null : soundId);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-blue-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Ambient Sounds</h3>
        <div className="text-sm text-gray-500">
          {activeSound ? 'Playing' : 'Select a sound'}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {sounds.map((sound) => (
          <button
            key={sound.id}
            onClick={() => toggleSound(sound.id)}
            className={`p-4 rounded-xl border-2 transition-all cursor-pointer whitespace-nowrap ${
              activeSound === sound.id
                ? 'border-blue-300 bg-blue-50'
                : 'border-gray-200 hover:border-blue-200 hover:bg-blue-50'
            }`}
          >
            <div className="flex items-center space-x-3">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${sound.color}`}>
                <i className={`${sound.icon} text-lg`}></i>
              </div>
              <span className="font-medium text-gray-700">{sound.name}</span>
              {activeSound === sound.id && (
                <div className="ml-auto">
                  <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse"></div>
                </div>
              )}
            </div>
          </button>
        ))}
      </div>

      {activeSound && (
        <div className="mt-6 p-4 bg-blue-50 rounded-xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <i className="ri-volume-up-line text-white text-sm"></i>
              </div>
              <span className="text-blue-700 font-medium">
                {sounds.find(s => s.id === activeSound)?.name} Playing
              </span>
            </div>
            <button
              onClick={() => setActiveSound(null)}
              className="w-8 h-8 hover:bg-blue-200 rounded-full flex items-center justify-center transition-colors cursor-pointer"
            >
              <i className="ri-stop-line text-blue-600"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
