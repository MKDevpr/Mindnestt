
'use client';

import { useState, useEffect, useRef } from 'react';

interface MeditationTimerProps {
  duration: number;
  onComplete: () => void;
  isActive: boolean;
  onPause: () => void;
  onResume: () => void;
}

export default function MeditationTimer({ duration, onComplete, isActive, onPause, onResume }: MeditationTimerProps) {
  const [timeLeft, setTimeLeft] = useState(duration);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isActive && !isPaused) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            onComplete();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isActive, isPaused, onComplete]);

  useEffect(() => {
    setTimeLeft(duration);
  }, [duration]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const progress = ((duration - timeLeft) / duration) * 100;

  const handlePauseResume = () => {
    if (isPaused) {
      setIsPaused(false);
      onResume();
    } else {
      setIsPaused(true);
      onPause();
    }
  };

  return (
    <div className="flex flex-col items-center space-y-8">
      <div className="relative w-48 h-48">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#e5f3ff"
            strokeWidth="4"
          />
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="4"
            strokeDasharray={`${2 * Math.PI * 45}`}
            strokeDashoffset={`${2 * Math.PI * 45 * (1 - progress / 100)}`}
            className="transition-all duration-1000 ease-linear"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">{formatTime(timeLeft)}</div>
            <div className="text-sm text-gray-500 mt-1">remaining</div>
          </div>
        </div>
      </div>

      <button
        onClick={handlePauseResume}
        className="w-16 h-16 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center text-white transition-colors cursor-pointer"
      >
        <i className={`${isPaused ? 'ri-play-fill' : 'ri-pause-fill'} text-2xl`}></i>
      </button>
    </div>
  );
}
