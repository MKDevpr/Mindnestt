'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import ResourceLibrary from './ResourceLibrary';
import CrisisSupport from './CrisisSupport';
import ArticlesList from './ArticlesList';
import ProfessionalHelp from './ProfessionalHelp';

export default function ResourcesPage() {
  const [activeTab, setActiveTab] = useState('library');

  const tabs = [
    { id: 'library', label: 'Resource Library', icon: 'ri-book-line' },
    { id: 'articles', label: 'Articles & Guides', icon: 'ri-article-line' },
    { id: 'professional', label: 'Professional Help', icon: 'ri-user-heart-line' },
    { id: 'crisis', label: 'Crisis Support', icon: 'ri-phone-line' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Header />
      
      <div className="flex">
        <Sidebar />
        
        <main className="flex-1 p-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-800 mb-2">Mental Health Resources</h1>
              <p className="text-gray-600">Comprehensive tools and support for your wellness journey</p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-blue-100 overflow-hidden">
              <div className="border-b border-blue-100">
                <div className="flex overflow-x-auto">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center space-x-2 px-6 py-4 font-medium whitespace-nowrap transition-colors cursor-pointer ${
                        activeTab === tab.id
                          ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                          : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                      }`}
                    >
                      <i className={`${tab.icon} text-lg`}></i>
                      <span>{tab.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-6">
                {activeTab === 'library' && <ResourceLibrary />}
                {activeTab === 'articles' && <ArticlesList />}
                {activeTab === 'professional' && <ProfessionalHelp />}
                {activeTab === 'crisis' && <CrisisSupport />}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}