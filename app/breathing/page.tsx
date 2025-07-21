'use client';

import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import BreathingExercise from './BreathingExercise';
import ExerciseSelector from './ExerciseSelector';
import { useState } from 'react';

const exercises = [
  {
    id: 1,
    name: "4-7-8 Breathing",
    description: "A calming technique that helps reduce anxiety and promote sleep",
    duration: "2-5 minutes",
    difficulty: "Beginner",
    inhale: 4,
    hold: 7,
    exhale: 8,
    cycles: 4
  },
  {
    id: 2,
    name: "Box Breathing",
    description: "Used by Navy SEALs for stress management and focus",
    duration: "3-6 minutes",
    difficulty: "Intermediate",
    inhale: 4,
    hold: 4,
    exhale: 4,
    cycles: 6
  },
  {
    id: 3,
    name: "Triangle Breathing",
    description: "Simple three-part breathing for quick stress relief",
    duration: "2-4 minutes",
    difficulty: "Beginner",
    inhale: 4,
    hold: 4,
    exhale: 4,
    cycles: 5
  },
  {
    id: 4,
    name: "Extended Exhale",
    description: "Longer exhales activate the relaxation response",
    duration: "3-5 minutes",
    difficulty: "Intermediate",
    inhale: 4,
    hold: 2,
    exhale: 8,
    cycles: 6
  }
];

export default function BreathingExercises() {
  const [selectedExercise, setSelectedExercise] = useState(exercises[0]);
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Header />
      
      <div className="flex">
        <Sidebar />
        
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">Breathing Exercises</h1>
              <p className="text-gray-600">Practice guided breathing techniques to reduce stress and find calm</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <BreathingExercise 
                  exercise={selectedExercise}
                  isActive={isActive}
                  onToggle={() => setIsActive(!isActive)}
                />
              </div>
              
              <div>
                <ExerciseSelector 
                  exercises={exercises}
                  selectedExercise={selectedExercise}
                  onSelect={setSelectedExercise}
                  isActive={isActive}
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}