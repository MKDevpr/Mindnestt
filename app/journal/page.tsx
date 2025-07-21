
'use client';

import { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import JournalEntry from './JournalEntry';
import JournalHistory from './JournalHistory';
import MoodSelector from './MoodSelector';
import PromptCards from './PromptCards';

export default function JournalPage() {
  const [activeTab, setActiveTab] = useState('write');
  const [selectedMood, setSelectedMood] = useState('');
  const [selectedPrompt, setSelectedPrompt] = useState('');

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Sidebar />
      
      <div className="flex-1 p-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Journal</h1>
            <p className="text-gray-600">Express your thoughts and track your emotional journey</p>
          </div>

          {/* Tab Navigation */}
          <div className="bg-white rounded-2xl shadow-sm p-2 mb-6 inline-flex">
            <button
              onClick={() => setActiveTab('write')}
              className={`px-6 py-3 rounded-xl font-medium transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'write'
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Write Entry
            </button>
            <button
              onClick={() => setActiveTab('history')}
              className={`px-6 py-3 rounded-xl font-medium transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'history'
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Past Entries
            </button>
          </div>

          {activeTab === 'write' ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Journal Entry */}
              <div className="lg:col-span-2">
                <JournalEntry 
                  selectedMood={selectedMood}
                  selectedPrompt={selectedPrompt}
                  onClearPrompt={() => setSelectedPrompt('')}
                />
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <MoodSelector 
                  selectedMood={selectedMood}
                  onMoodSelect={setSelectedMood}
                />
                <PromptCards 
                  selectedPrompt={selectedPrompt}
                  onPromptSelect={setSelectedPrompt}
                />
              </div>
            </div>
          ) : (
            <JournalHistory />
          )}
        </div>
      </div>
    </div>
  );
}
