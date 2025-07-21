
'use client';

import { useState } from 'react';

export default function JournalHistory() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const entries = [
    {
      id: 1,
      title: 'A Day of Gratitude',
      date: '2024-01-15',
      mood: 'happy',
      preview: 'Today I realized how grateful I am for the small things in life. The morning coffee tasted especially good, and I had a wonderful conversation with my neighbor...',
      category: 'gratitude',
      wordCount: 342
    },
    {
      id: 2,
      title: 'Overcoming Challenges',
      date: '2024-01-14',
      mood: 'stressed',
      preview: 'Work was particularly challenging today, but I managed to find solutions to most problems. I learned that taking breaks actually helps with productivity...',
      category: 'reflection',
      wordCount: 289
    },
    {
      id: 3,
      title: 'Mindful Moments',
      date: '2024-01-13',
      mood: 'calm',
      preview: 'I spent some time in meditation today and felt more centered. The breathing exercises really helped me stay present and focused on what matters...',
      category: 'mindfulness',
      wordCount: 198
    },
    {
      id: 4,
      title: 'Growth and Learning',
      date: '2024-01-12',
      mood: 'neutral',
      preview: 'Tried something new today - a cooking class. It was intimidating at first, but I learned that stepping out of my comfort zone can be rewarding...',
      category: 'growth',
      wordCount: 456
    },
    {
      id: 5,
      title: 'Feeling Anxious',
      date: '2024-01-11',
      mood: 'anxious',
      preview: 'Had some anxiety about the upcoming presentation, but writing about it helped me process these feelings. I realized my fears were mostly unfounded...',
      category: 'reflection',
      wordCount: 312
    },
    {
      id: 6,
      title: 'Simple Joys',
      date: '2024-01-10',
      mood: 'very-happy',
      preview: 'What a beautiful day! The sun was shining, and I spent time in the garden. These simple moments of joy are what make life meaningful...',
      category: 'gratitude',
      wordCount: 267
    }
  ];

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
    return moods[mood] || '😐';
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'gratitude': 'bg-pink-100 text-pink-700',
      'reflection': 'bg-purple-100 text-purple-700',
      'growth': 'bg-green-100 text-green-700',
      'mindfulness': 'bg-teal-100 text-teal-700'
    };
    return colors[category] || 'bg-gray-100 text-gray-700';
  };

  const filteredEntries = entries.filter(entry => {
    const matchesSearch = entry.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         entry.preview.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || entry.category === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6">
      {/* Search and Filter */}
      <div className="bg-white rounded-2xl shadow-sm p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <i className="ri-search-line absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
            <input
              type="text"
              placeholder="Search your entries..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex space-x-2">
            {['all', 'gratitude', 'reflection', 'growth', 'mindfulness'].map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-4 py-3 rounded-lg font-medium transition-all cursor-pointer whitespace-nowrap ${
                  selectedFilter === filter
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Entries List */}
      <div className="space-y-4">
        {filteredEntries.map((entry) => (
          <div key={entry.id} className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{getMoodEmoji(entry.mood)}</span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{entry.title}</h3>
                  <p className="text-sm text-gray-500">
                    {new Date(entry.date).toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(entry.category)}`}>
                  {entry.category}
                </span>
                <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors">
                  <i className="ri-more-line"></i>
                </button>
              </div>
            </div>
            
            <p className="text-gray-600 mb-4 line-clamp-3">{entry.preview}</p>
            
            <div className="flex items-center justify-between text-sm text-gray-500">
              <span>{entry.wordCount} words</span>
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-1 text-gray-400 hover:text-blue-600 transition-colors">
                  <i className="ri-edit-line"></i>
                  <span>Edit</span>
                </button>
                <button className="flex items-center space-x-1 text-gray-400 hover:text-red-600 transition-colors">
                  <i className="ri-delete-bin-line"></i>
                  <span>Delete</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredEntries.length === 0 && (
        <div className="text-center py-12">
          <i className="ri-file-text-line text-6xl text-gray-300 mb-4"></i>
          <h3 className="text-xl font-semibold text-gray-600 mb-2">No entries found</h3>
          <p className="text-gray-500">Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  );
}
