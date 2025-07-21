'use client';

import { useState } from 'react';

const posts = [
  {
    id: 1,
    author: "Sarah M.",
    avatar: "SM",
    time: "2 hours ago",
    content: "Just completed my first week of daily meditation! The 5-minute sessions really make a difference. Feeling more centered and less reactive to stress.",
    likes: 12,
    comments: 3,
    category: "Meditation"
  },
  {
    id: 2,
    author: "Mike R.",
    avatar: "MR",
    time: "4 hours ago",
    content: "Tried the breathing exercise during a stressful meeting today. It helped me stay calm and focused. Thank you for this amazing tool!",
    likes: 8,
    comments: 1,
    category: "Breathing"
  },
  {
    id: 3,
    author: "Emma L.",
    avatar: "EL",
    time: "6 hours ago",
    content: "Gratitude journaling has become my favorite part of the day. Today I'm grateful for morning coffee, my cat's purring, and supportive friends.",
    likes: 15,
    comments: 5,
    category: "Journaling"
  },
  {
    id: 4,
    author: "David K.",
    avatar: "DK",
    time: "8 hours ago",
    content: "Bad day turned good with a 10-minute walk outside. Sometimes the simplest things have the biggest impact on our mental health.",
    likes: 9,
    comments: 2,
    category: "Wellness"
  }
];

export default function CommunityFeed() {
  const [likedPosts, setLikedPosts] = useState<number[]>([]);

  const toggleLike = (postId: number) => {
    setLikedPosts(prev => 
      prev.includes(postId) 
        ? prev.filter(id => id !== postId)
        : [...prev, postId]
    );
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-blue-100">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Community Stories</h3>
        <button className="text-blue-600 hover:text-blue-700 font-medium text-sm cursor-pointer whitespace-nowrap">
          View All
        </button>
      </div>

      <div className="space-y-4 max-h-96 overflow-y-auto">
        {posts.map((post) => (
          <div key={post.id} className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0">
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-medium text-sm">{post.avatar}</span>
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-1">
                  <span className="font-medium text-gray-800 text-sm">{post.author}</span>
                  <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-500">{post.time}</span>
                </div>
                
                <p className="text-gray-700 text-sm mb-3 leading-relaxed">{post.content}</p>
                
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => toggleLike(post.id)}
                    className={`flex items-center space-x-1 cursor-pointer whitespace-nowrap ${
                      likedPosts.includes(post.id) ? 'text-red-500' : 'text-gray-500 hover:text-red-500'
                    } transition-colors`}
                  >
                    <i className={`ri-heart-${likedPosts.includes(post.id) ? 'fill' : 'line'} text-sm`}></i>
                    <span className="text-xs">{post.likes + (likedPosts.includes(post.id) ? 1 : 0)}</span>
                  </button>
                  
                  <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-500 transition-colors cursor-pointer whitespace-nowrap">
                    <i className="ri-chat-3-line text-sm"></i>
                    <span className="text-xs">{post.comments}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}