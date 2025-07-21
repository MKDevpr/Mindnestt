
'use client';

import { useState } from 'react';

interface JournalEntryProps {
  selectedMood: string;
  selectedPrompt: string;
  onClearPrompt: () => void;
}

export default function JournalEntry({ selectedMood, selectedPrompt, onClearPrompt }: JournalEntryProps) {
  const [entry, setEntry] = useState('');
  const [title, setTitle] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSave = () => {
    if (entry.trim()) {
      // Save logic would go here
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
      setEntry('');
      setTitle('');
      onClearPrompt();
    }
  };

  const getMoodEmoji = (mood: string) => {
    const moods: { [key: string]: string } = {
      'very-happy': '😊',
      'happy': '🙂',
      'neutral': '😐',
      'sad': '😔',
      'very-sad': '😢',
      'anxious': '😰',
      'calm': '😌',
      'stressed': '😫'
    };
    return moods[mood] || '';
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Today's Entry</h2>
        <div className="text-sm text-gray-500">
          {new Date().toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </div>
      </div>

      {/* Mood Display */}
      {selectedMood && (
        <div className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-100">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">{getMoodEmoji(selectedMood)}</span>
            <span className="text-sm text-blue-700 font-medium">
              Current mood: {selectedMood.replace('-', ' ')}
            </span>
          </div>
        </div>
      )}

      {/* Prompt Display */}
      {selectedPrompt && (
        <div className="mb-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-100">
          <div className="flex items-start justify-between">
            <div>
              <div className="text-sm text-purple-600 font-medium mb-1">Writing Prompt:</div>
              <div className="text-gray-700">{selectedPrompt}</div>
            </div>
            <button
              onClick={onClearPrompt}
              className="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
            >
              <i className="ri-close-line"></i>
            </button>
          </div>
        </div>
      )}

      {/* Title Input */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Give your entry a title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
        />
      </div>

      {/* Text Area */}
      <div className="mb-6">
        <textarea
          placeholder="What's on your mind today? Share your thoughts, feelings, or experiences..."
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
          rows={12}
          maxLength={2000}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
        />
        <div className="text-right text-sm text-gray-400 mt-2">
          {entry.length}/2000 characters
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-blue-600 transition-colors cursor-pointer">
            <i className="ri-bold text-lg"></i>
          </button>
          <button className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-blue-600 transition-colors cursor-pointer">
            <i className="ri-italic text-lg"></i>
          </button>
          <button className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-blue-600 transition-colors cursor-pointer">
            <i className="ri-list-unordered text-lg"></i>
          </button>
        </div>

        <div className="flex items-center space-x-3">
          <button className="px-6 py-3 text-gray-600 hover:text-gray-800 transition-colors cursor-pointer whitespace-nowrap">
            Save as Draft
          </button>
          <button
            onClick={handleSave}
            disabled={!entry.trim()}
            className={`px-6 py-3 rounded-lg font-medium transition-all whitespace-nowrap cursor-pointer ${
              entry.trim()
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
            }`}
          >
            Save Entry
          </button>
        </div>
      </div>

      {/* Success Message */}
      {showSuccess && (
        <div className="fixed top-4 right-4 bg-green-100 border border-green-200 text-green-700 px-4 py-3 rounded-lg shadow-lg">
          <div className="flex items-center space-x-2">
            <i className="ri-check-line text-green-600"></i>
            <span>Entry saved successfully!</span>
          </div>
        </div>
      )}
    </div>
  );
}
