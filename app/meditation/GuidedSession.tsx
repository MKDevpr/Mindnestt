
'use client';

import { useState, useEffect } from 'react';

interface GuidedSessionProps {
  session: {
    id: string;
    title: string;
    instructor: string;
    duration: number;
    description: string;
    steps: string[];
  };
  onComplete: () => void;
}

export default function GuidedSession({ session, onComplete }: GuidedSessionProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [timeLeft, setTimeLeft] = useState(session.duration);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const stepDuration = Math.floor(session.duration / session.steps.length);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isActive && !isPaused) {
      interval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            onComplete();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, isPaused, onComplete]);

  useEffect(() => {
    if (isActive) {
      const stepInterval = setInterval(() => {
        setCurrentStep((prev) => {
          if (prev < session.steps.length - 1) {
            return prev + 1;
          }
          return prev;
        });
      }, stepDuration * 1000);

      return () => clearInterval(stepInterval);
    }
  }, [isActive, session.steps.length, stepDuration]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const progress = ((session.duration - timeLeft) / session.duration) * 100;

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-2xl shadow-lg border border-blue-100 p-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{session.title}</h2>
          <p className="text-gray-600">with {session.instructor}</p>
        </div>

        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-gray-500">Progress</span>
            <span className="text-sm text-blue-600 font-medium">{formatTime(timeLeft)}</span>
          </div>
          <div className="w-full bg-blue-100 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-1000"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <div className="text-center mb-8">
          <div className="bg-blue-50 rounded-xl p-6">
            <div className="text-sm text-blue-600 font-medium mb-2">
              Step {currentStep + 1} of {session.steps.length}
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              {session.steps[currentStep]}
            </p>
          </div>
        </div>

        <div className="flex justify-center space-x-4">
          {!isActive ? (
            <button
              onClick={() => setIsActive(true)}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-colors cursor-pointer whitespace-nowrap"
            >
              <i className="ri-play-fill mr-2"></i>Start Session
            </button>
          ) : (
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-colors cursor-pointer whitespace-nowrap"
            >
              <i className={`${isPaused ? 'ri-play-fill' : 'ri-pause-fill'} mr-2`}></i>
              {isPaused ? 'Resume' : 'Pause'}
            </button>
          )}
          
          <button
            onClick={onComplete}
            className="px-8 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium rounded-xl transition-colors cursor-pointer whitespace-nowrap"
          >
            <i className="ri-stop-fill mr-2"></i>Stop
          </button>
        </div>
      </div>
    </div>
  );
}
