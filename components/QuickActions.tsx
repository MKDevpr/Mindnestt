'use client';

import Link from 'next/link';

export default function QuickActions() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-blue-100">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
      
      <div className="space-y-4">
        <Link
          href="/breathing"
          className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl hover:from-blue-100 hover:to-indigo-100 transition-all cursor-pointer"
        >
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
              <i className="ri-lungs-line text-white"></i>
            </div>
            <div>
              <p className="font-medium text-gray-800">5-Minute Breathing</p>
              <p className="text-sm text-gray-600">Calm your mind instantly</p>
            </div>
          </div>
          <i className="ri-arrow-right-line text-gray-400"></i>
        </Link>

        <Link
          href="/journal"
          className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl hover:from-purple-100 hover:to-pink-100 transition-all cursor-pointer"
        >
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
              <i className="ri-quill-pen-line text-white"></i>
            </div>
            <div>
              <p className="font-medium text-gray-800">Journal Entry</p>
              <p className="text-sm text-gray-600">Express your thoughts</p>
            </div>
          </div>
          <i className="ri-arrow-right-line text-gray-400"></i>
        </Link>

        <Link
          href="/meditation"
          className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl hover:from-green-100 hover:to-emerald-100 transition-all cursor-pointer"
        >
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
              <i className="ri-meditation-line text-white"></i>
            </div>
            <div>
              <p className="font-medium text-gray-800">Meditation</p>
              <p className="text-sm text-gray-600">Find inner peace</p>
            </div>
          </div>
          <i className="ri-arrow-right-line text-gray-400"></i>
        </Link>
      </div>
    </div>
  );
}