'use client';

import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import MoodTracker from '@/components/MoodTracker';
import QuickActions from '@/components/QuickActions';
import DailyTip from '@/components/DailyTip';
import HealthyHabits from '@/components/HealthyHabits';
import CommunityFeed from '@/components/CommunityFeed';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Header />
      
      <div className="flex">
        <Sidebar />
        
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-800 mb-2">Welcome back, Jane!</h1>
              <p className="text-gray-600">Let's take care of your mental wellness today.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
              <div className="lg:col-span-2">
                <MoodTracker />
              </div>
              <div>
                <QuickActions />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              <div>
                <DailyTip />
              </div>
              <div>
                <HealthyHabits />
              </div>
              <div>
                <CommunityFeed />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}