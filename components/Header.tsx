'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-blue-100">
      <div className="w-full px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
              <i className="ri-heart-pulse-line text-white text-lg"></i>
            </div>
            <span className="text-xl font-pacifico text-blue-600">Mindnest</span>
          </div>
          
          <div className="relative">
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center space-x-3 px-3 py-2 rounded-full hover:bg-blue-50 transition-colors cursor-pointer"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-blue-300 to-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-medium text-sm">JD</span>
              </div>
              <span className="text-gray-700 font-medium">Jane Doe</span>
              <i className="ri-arrow-down-s-line text-gray-500"></i>
            </button>
            
            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-blue-100 py-2 z-50">
                <Link href="/profile" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 transition-colors cursor-pointer">
                  <i className="ri-user-line mr-2"></i>Profile
                </Link>
                <Link href="/settings" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 transition-colors cursor-pointer">
                  <i className="ri-settings-line mr-2"></i>Settings
                </Link>
                <div className="border-t border-blue-100 my-2"></div>
                <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 transition-colors cursor-pointer">
                  <i className="ri-logout-box-line mr-2"></i>Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}