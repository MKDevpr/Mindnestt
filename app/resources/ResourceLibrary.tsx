'use client';

import { useState } from 'react';

export default function ResourceLibrary() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Resources' },
    { id: 'anxiety', label: 'Anxiety' },
    { id: 'depression', label: 'Depression' },
    { id: 'stress', label: 'Stress Management' },
    { id: 'sleep', label: 'Sleep' },
    { id: 'mindfulness', label: 'Mindfulness' },
    { id: 'relationships', label: 'Relationships' },
  ];

  const resources = [
    {
      id: 1,
      title: 'Understanding Anxiety: A Complete Guide',
      description: 'Learn about different types of anxiety disorders and coping strategies',
      category: 'anxiety',
      type: 'guide',
      icon: 'ri-心-line',
      readTime: '15 min',
      downloadUrl: '#'
    },
    {
      id: 2,
      title: 'Daily Mindfulness Exercises',
      description: 'Simple practices to incorporate mindfulness into your daily routine',
      category: 'mindfulness',
      type: 'worksheet',
      icon: 'ri-meditation-line',
      readTime: '10 min',
      downloadUrl: '#'
    },
    {
      id: 3,
      title: 'Sleep Hygiene Checklist',
      description: 'Practical tips for better sleep quality and establishing healthy routines',
      category: 'sleep',
      type: 'checklist',
      icon: 'ri-moon-line',
      readTime: '5 min',
      downloadUrl: '#'
    },
    {
      id: 4,
      title: 'Stress Management Workbook',
      description: 'Interactive exercises and techniques for managing stress effectively',
      category: 'stress',
      type: 'workbook',
      icon: 'ri-file-text-line',
      readTime: '45 min',
      downloadUrl: '#'
    },
    {
      id: 5,
      title: 'Depression Self-Assessment Tool',
      description: 'Confidential questionnaire to help identify depression symptoms',
      category: 'depression',
      type: 'assessment',
      icon: 'ri-clipboard-line',
      readTime: '8 min',
      downloadUrl: '#'
    },
    {
      id: 6,
      title: 'Healthy Relationship Boundaries',
      description: 'Guide to setting and maintaining healthy boundaries in relationships',
      category: 'relationships',
      type: 'guide',
      icon: 'ri-group-line',
      readTime: '20 min',
      downloadUrl: '#'
    },
    {
      id: 7,
      title: 'Breathing Techniques Reference Card',
      description: 'Quick reference for various breathing exercises and their benefits',
      category: 'anxiety',
      type: 'reference',
      icon: 'ri-lungs-line',
      readTime: '3 min',
      downloadUrl: '#'
    },
    {
      id: 8,
      title: 'Gratitude Journal Template',
      description: 'Structured template for daily gratitude practice and reflection',
      category: 'mindfulness',
      type: 'template',
      icon: 'ri-heart-line',
      readTime: '5 min',
      downloadUrl: '#'
    },
  ];

  const filteredResources = selectedCategory === 'all' 
    ? resources 
    : resources.filter(resource => resource.category === selectedCategory);

  const getTypeColor = (type: string) => {
    const colors = {
      guide: 'bg-blue-100 text-blue-700',
      worksheet: 'bg-green-100 text-green-700',
      checklist: 'bg-purple-100 text-purple-700',
      workbook: 'bg-orange-100 text-orange-700',
      assessment: 'bg-red-100 text-red-700',
      reference: 'bg-indigo-100 text-indigo-700',
      template: 'bg-pink-100 text-pink-700',
    };
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Resource Library</h2>
        <p className="text-gray-600 mb-4">
          Downloadable guides, worksheets, and tools to support your mental health journey
        </p>
        
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full font-medium transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.map((resource) => (
          <div key={resource.id} className="bg-white rounded-xl border border-blue-100 p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <i className={`${resource.icon} text-blue-600 text-xl`}></i>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(resource.type)}`}>
                {resource.type}
              </span>
            </div>
            
            <h3 className="font-semibold text-gray-800 mb-2">{resource.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center text-gray-500 text-sm">
                <i className="ri-time-line mr-1"></i>
                {resource.readTime}
              </div>
              <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer">
                <i className="ri-download-line"></i>
                <span>Download</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}