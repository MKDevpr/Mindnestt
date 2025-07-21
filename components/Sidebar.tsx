'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { href: '/', icon: 'ri-home-line', label: 'Home' },
    { href: '/daily-tips', icon: 'ri-lightbulb-line', label: 'Daily Tips' },
    { href: '/breathing', icon: 'ri-lungs-line', label: 'Breathing Exercises' },
    { href: '/journal', icon: 'ri-book-line', label: 'Journaling' },
    { href: '/meditation', icon: 'ri-meditation-line', label: 'Meditation' },
    { href: '/resources', icon: 'ri-book-open-line', label: 'Resources' },
  ];

  return (
    <aside className={`bg-white shadow-sm border-r border-blue-100 transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'} min-h-screen`}>
      <div className="p-4">
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-blue-50 transition-colors cursor-pointer mb-6"
        >
          <i className={`ri-menu-fold-line text-gray-600 ${isCollapsed ? 'rotate-180' : ''} transition-transform`}></i>
        </button>
        
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center space-x-3 px-3 py-3 rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                pathname === item.href
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              <i className={`${item.icon} text-lg flex-shrink-0`}></i>
              {!isCollapsed && <span className="font-medium">{item.label}</span>}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}