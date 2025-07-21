'use client';

import { useState, useEffect } from 'react';

interface Exercise {
  id: number;
  name: string;
  description: string;
  duration: string;
  difficulty: string;
  inhale: number;
  hold: number;
  exhale: number;
  cycles: number;
}

interface BreathingExerciseProps {
  exercise: Exercise;
  isActive: boolean;
  onToggle: () => void;
}

export default function BreathingExercise({ exercise, isActive, onToggle }: BreathingExerciseProps) {
  const [phase, setPhase] = useState<'inhale' | 'hold' | 'exhale' | 'pause'>('pause');
  const [count, setCount] = useState(0);
  const [cycle, setCycle] = useState(0);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    if (!isActive) {
      setPhase('pause');
      setCount(0);
      setCycle(0);
      setScale(1);
      return;
    }

    const interval = setInterval(() => {
      setCount(prev => {
        const newCount = prev + 1;
        
        if (phase === 'inhale') {
          setScale(1 + (newCount / exercise.inhale) * 0.5);
          if (newCount >= exercise.inhale) {
            setPhase('hold');
            return 0;
          }
        } else if (phase === 'hold') {
          if (newCount >= exercise.hold) {
            setPhase('exhale');
            return 0;
          }
        } else if (phase === 'exhale') {
          setScale(1.5 - (newCount / exercise.exhale) * 0.5);
          if (newCount >= exercise.exhale) {
            setCycle(prev => {
              const newCycle = prev + 1;
              if (newCycle >= exercise.cycles) {
                onToggle();
                return 0;
              }
              setPhase('inhale');
              return newCycle;
            });
            return 0;
          }
        }
        
        return newCount;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isActive, phase, exercise, onToggle]);

  useEffect(() => {
    if (isActive && phase === 'pause') {
      setPhase('inhale');
    }
  }, [isActive, phase]);

  const getPhaseText = () => {
    switch (phase) {
      case 'inhale': return 'Breathe In';
      case 'hold': return 'Hold';
      case 'exhale': return 'Breathe Out';
      default: return 'Ready to Begin';
    }
  };

  const getPhaseCount = () => {
    switch (phase) {
      case 'inhale': return exercise.inhale - count;
      case 'hold': return exercise.hold - count;
      case 'exhale': return exercise.exhale - count;
      default: return 0;
    }
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-blue-100">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{exercise.name}</h2>
        <p className="text-gray-600 mb-4">{exercise.description}</p>
        <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
          <span>Duration: {exercise.duration}</span>
          <span>•</span>
          <span>Difficulty: {exercise.difficulty}</span>
        </div>
      </div>

      <div className="flex flex-col items-center space-y-8">
        <div className="relative">
          <div 
            className={`w-48 h-48 rounded-full border-4 transition-all duration-1000 ${
              isActive 
                ? 'border-blue-400 bg-gradient-to-br from-blue-100 to-blue-200' 
                : 'border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100'
            }`}
            style={{ transform: `scale(${scale})` }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold text-blue-600 mb-2">
                  {isActive ? getPhaseCount() : '•'}
                </div>
                <div className="text-sm font-medium text-gray-600">
                  {getPhaseText()}
                </div>
              </div>
            </div>
          </div>
        </div>

        {isActive && (
          <div className="text-center">
            <div className="text-lg font-medium text-gray-800 mb-2">
              Cycle {cycle + 1} of {exercise.cycles}
            </div>
            <div className="w-48 bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((cycle + 1) / exercise.cycles) * 100}%` }}
              ></div>
            </div>
          </div>
        )}

        <button
          onClick={onToggle}
          className={`px-8 py-3 rounded-full font-medium transition-all cursor-pointer whitespace-nowrap ${
            isActive
              ? 'bg-red-500 hover:bg-red-600 text-white'
              : 'bg-blue-500 hover:bg-blue-600 text-white'
          }`}
        >
          {isActive ? 'Stop Exercise' : 'Start Exercise'}
        </button>
      </div>
    </div>
  );
}