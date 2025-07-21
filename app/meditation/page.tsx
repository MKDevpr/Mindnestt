
'use client';

import { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import MeditationTimer from './MeditationTimer';
import GuidedSession from './GuidedSession';
import AmbientSounds from './AmbientSounds';

export default function MeditationPage() {
  const [activeTab, setActiveTab] = useState<'timer' | 'guided' | 'sounds'>('timer');
  const [selectedDuration, setSelectedDuration] = useState(300); // 5 minutes
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [selectedSession, setSelectedSession] = useState<any>(null);

  const durations = [
    { value: 300, label: '5 min' },
    { value: 600, label: '10 min' },
    { value: 900, label: '15 min' },
    { value: 1200, label: '20 min' },
    { value: 1800, label: '30 min' },
  ];

  const guidedSessions = [
    {
      id: '1',
      title: 'Mindful Breathing',
      instructor: 'Sarah Johnson',
      duration: 600,
      description: 'A gentle introduction to mindful breathing techniques',
      steps: [
        'Find a comfortable position and close your eyes',
        'Take a deep breath in through your nose',
        'Hold your breath for a moment',
        'Slowly exhale through your mouth',
        'Focus on the sensation of breathing',
        'Continue this rhythm at your own pace'
      ]
    },
    {
      id: '2',
      title: 'Body Scan Meditation',
      instructor: 'Michael Chen',
      duration: 900,
      description: 'Progressive relaxation through body awareness',
      steps: [
        'Lie down comfortably and close your eyes',
        'Start by focusing on your toes',
        'Notice any tension in your feet',
        'Slowly move your attention up to your legs',
        'Continue scanning each part of your body',
        'Release tension as you go',
        'End with your head and face'
      ]
    },
    {
      id: '3',
      title: 'Loving Kindness',
      instructor: 'Emma Williams',
      duration: 1200,
      description: 'Cultivate compassion for yourself and others',
      steps: [
        'Sit comfortably and breathe naturally',
        'Bring yourself to mind with kindness',
        'Repeat: "May I be happy, may I be peaceful"',
        'Think of someone you love',
        'Send them the same loving wishes',
        'Extend this to all beings everywhere'
      ]
    },
    {
      id: '4',
      title: 'Stress Relief',
      instructor: 'David Kumar',
      duration: 1800,
      description: 'Deep relaxation to release daily stress',
      steps: [
        'Find a quiet space and sit comfortably',
        'Take three deep, cleansing breaths',
        'Visualize a peaceful place',
        'Let go of today\'s worries',
        'Feel tension leaving your body',
        'Embrace this moment of calm',
        'Return to this feeling whenever needed'
      ]
    }
  ];

  const handleTimerComplete = () => {
    setIsTimerActive(false);
    // You could show a completion message or play a sound here
  };

  const handleSessionComplete = () => {
    setSelectedSession(null);
  };

  if (selectedSession) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="flex">
          <Sidebar />
          <div className="flex-1">
            <Header />
            <main className="p-6">
              <div className="mb-6">
                <button
                  onClick={() => setSelectedSession(null)}
                  className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium cursor-pointer whitespace-nowrap"
                >
                  <i className="ri-arrow-left-line"></i>
                  <span>Back to Meditation</span>
                </button>
              </div>
              <GuidedSession session={selectedSession} onComplete={handleSessionComplete} />
            </main>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Header />
          <main className="p-6">
            <div className="max-w-6xl mx-auto">
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Meditation Center</h1>
                <p className="text-gray-600">Find peace and clarity through guided meditation</p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg border border-blue-100 p-6 mb-8">
                <div className="flex space-x-1 mb-8">
                  {[
                    { id: 'timer', label: 'Timer', icon: 'ri-timer-line' },
                    { id: 'guided', label: 'Guided Sessions', icon: 'ri-user-voice-line' },
                    { id: 'sounds', label: 'Ambient Sounds', icon: 'ri-volume-up-line' }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as any)}
                      className={`px-6 py-3 rounded-full font-medium transition-all cursor-pointer whitespace-nowrap ${
                        activeTab === tab.id
                          ? 'bg-blue-600 text-white'
                          : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                      }`}
                    >
                      <i className={`${tab.icon} mr-2`}></i>
                      {tab.label}
                    </button>
                  ))}
                </div>

                {activeTab === 'timer' && (
                  <div className="text-center">
                    <div className="mb-8">
                      <h2 className="text-2xl font-bold text-gray-800 mb-4">Meditation Timer</h2>
                      <p className="text-gray-600 mb-6">Set your preferred duration and meditate in silence</p>
                      
                      <div className="flex justify-center space-x-4 mb-8">
                        {durations.map((duration) => (
                          <button
                            key={duration.value}
                            onClick={() => setSelectedDuration(duration.value)}
                            className={`px-6 py-3 rounded-xl font-medium transition-all cursor-pointer whitespace-nowrap ${
                              selectedDuration === duration.value
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-100 text-gray-700 hover:bg-blue-100'
                            }`}
                          >
                            {duration.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <MeditationTimer
                      duration={selectedDuration}
                      onComplete={handleTimerComplete}
                      isActive={isTimerActive}
                      onPause={() => setIsTimerActive(false)}
                      onResume={() => setIsTimerActive(true)}
                    />

                    {!isTimerActive && (
                      <button
                        onClick={() => setIsTimerActive(true)}
                        className="mt-8 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-colors cursor-pointer whitespace-nowrap"
                      >
                        <i className="ri-play-fill mr-2"></i>Start Timer
                      </button>
                    )}
                  </div>
                )}

                {activeTab === 'guided' && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Guided Meditation Sessions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {guidedSessions.map((session) => (
                        <div key={session.id} className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-gray-800">{session.title}</h3>
                            <span className="text-sm text-blue-600 font-medium">
                              {Math.floor(session.duration / 60)} min
                            </span>
                          </div>
                          <p className="text-gray-600 mb-4">{session.description}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-500">by {session.instructor}</span>
                            <button
                              onClick={() => setSelectedSession(session)}
                              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap"
                            >
                              <i className="ri-play-fill mr-2"></i>Start
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'sounds' && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Ambient Sounds</h2>
                    <AmbientSounds />
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl shadow-lg border border-blue-100 p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <i className="ri-time-line text-blue-600 text-xl"></i>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Daily Practice</h3>
                  <p className="text-gray-600 text-sm">Build a consistent meditation habit with daily reminders</p>
                </div>

                <div className="bg-white rounded-xl shadow-lg border border-blue-100 p-6">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <i className="ri-trophy-line text-green-600 text-xl"></i>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Progress Tracking</h3>
                  <p className="text-gray-600 text-sm">Monitor your meditation journey and celebrate milestones</p>
                </div>

                <div className="bg-white rounded-xl shadow-lg border border-blue-100 p-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <i className="ri-community-line text-purple-600 text-xl"></i>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Community</h3>
                  <p className="text-gray-600 text-sm">Connect with others on their mindfulness journey</p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
