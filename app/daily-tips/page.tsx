'use client';

import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import TipCard from './TipCard';
import TipCategories from './TipCategories';
import { useState } from 'react';

const tips = [
  {
    id: 1,
    title: "Practice Deep Breathing",
    content: "Take 5 deep breaths, inhaling for 4 counts, holding for 4, and exhaling for 6. This activates your parasympathetic nervous system.",
    category: "Breathing",
    readTime: "2 min",
    image: "https://readdy.ai/api/search-image?query=peaceful%20person%20practicing%20deep%20breathing%20meditation%20in%20a%20serene%20natural%20setting%20with%20soft%20morning%20light%2C%20calming%20blue%20and%20green%20tones%2C%20minimalist%20zen%20atmosphere%2C%20person%20sitting%20cross-legged%20with%20eyes%20closed%20in%20tranquil%20environment&width=400&height=250&seq=tip1&orientation=landscape"
  },
  {
    id: 2,
    title: "Morning Gratitude Practice",
    content: "Start each day by writing down three things you're grateful for. This simple practice can shift your mindset and reduce stress.",
    category: "Mindfulness",
    readTime: "3 min",
    image: "https://readdy.ai/api/search-image?query=peaceful%20morning%20scene%20with%20person%20writing%20in%20gratitude%20journal%20at%20wooden%20desk%2C%20soft%20natural%20lighting%2C%20cozy%20atmosphere%2C%20notebook%20and%20pen%2C%20warm%20colors%2C%20minimalist%20setting%20with%20plants%20and%20tea%20cup&width=400&height=250&seq=tip2&orientation=landscape"
  },
  {
    id: 3,
    title: "Progressive Muscle Relaxation",
    content: "Tense and release each muscle group for 5 seconds, starting from your toes and working up to your head. This helps release physical tension.",
    category: "Relaxation",
    readTime: "4 min",
    image: "https://readdy.ai/api/search-image?query=person%20lying%20down%20on%20yoga%20mat%20doing%20progressive%20muscle%20relaxation%20exercise%2C%20peaceful%20indoor%20setting%2C%20soft%20lighting%2C%20comfortable%20position%2C%20wellness%20and%20relaxation%20theme%2C%20calming%20blue%20and%20white%20tones&width=400&height=250&seq=tip3&orientation=landscape"
  },
  {
    id: 4,
    title: "Digital Detox Hours",
    content: "Set specific hours each day to disconnect from all digital devices. Use this time for reading, walking, or simply being present.",
    category: "Lifestyle",
    readTime: "1 min",
    image: "https://readdy.ai/api/search-image?query=person%20reading%20book%20in%20peaceful%20setting%20with%20phone%20turned%20off%20nearby%2C%20natural%20lighting%2C%20cozy%20reading%20nook%2C%20disconnected%20from%20technology%2C%20serene%20atmosphere%2C%20warm%20and%20inviting%20colors&width=400&height=250&seq=tip4&orientation=landscape"
  },
  {
    id: 5,
    title: "5-4-3-2-1 Grounding Technique",
    content: "Name 5 things you can see, 4 you can touch, 3 you can hear, 2 you can smell, and 1 you can taste. This brings you back to the present moment.",
    category: "Mindfulness",
    readTime: "3 min",
    image: "https://readdy.ai/api/search-image?query=person%20practicing%20mindfulness%20grounding%20technique%20in%20nature%2C%20focusing%20on%20senses%2C%20outdoor%20peaceful%20setting%2C%20natural%20elements%20visible%2C%20calming%20environment%2C%20soft%20natural%20colors%2C%20meditation%20pose&width=400&height=250&seq=tip5&orientation=landscape"
  },
  {
    id: 6,
    title: "Gentle Movement",
    content: "Take a 10-minute walk outside or do some gentle stretching. Physical movement helps reduce cortisol levels and improves mood.",
    category: "Exercise",
    readTime: "2 min",
    image: "https://readdy.ai/api/search-image?query=person%20doing%20gentle%20stretching%20exercises%20in%20peaceful%20outdoor%20setting%2C%20morning%20sunlight%2C%20yoga%20poses%2C%20wellness%20and%20fitness%2C%20natural%20environment%2C%20soft%20warm%20lighting%2C%20healthy%20lifestyle&width=400&height=250&seq=tip6&orientation=landscape"
  },
  {
    id: 7,
    title: "Evening Wind-Down Routine",
    content: "Create a calming bedtime routine with dim lighting, herbal tea, and relaxing activities to prepare your mind for restful sleep.",
    category: "Sleep",
    readTime: "5 min",
    image: "https://readdy.ai/api/search-image?query=cozy%20evening%20scene%20with%20person%20having%20herbal%20tea%2C%20soft%20lighting%2C%20comfortable%20bedroom%20setting%2C%20peaceful%20nighttime%20routine%2C%20calming%20colors%2C%20relaxing%20atmosphere%2C%20wellness%20and%20self-care&width=400&height=250&seq=tip7&orientation=landscape"
  },
  {
    id: 8,
    title: "Mindful Eating",
    content: "Eat slowly and pay attention to the taste, texture, and smell of your food. This reduces stress and improves digestion.",
    category: "Nutrition",
    readTime: "3 min",
    image: "https://readdy.ai/api/search-image?query=person%20eating%20mindfully%20at%20peaceful%20table%20setting%2C%20healthy%20colorful%20food%2C%20natural%20lighting%2C%20focused%20attention%20on%20meal%2C%20wellness%20and%20nutrition%2C%20calm%20dining%20environment%2C%20nourishing%20atmosphere&width=400&height=250&seq=tip8&orientation=landscape"
  }
];

export default function DailyTips() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredTips = selectedCategory === 'All' 
    ? tips 
    : tips.filter(tip => tip.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Header />
      
      <div className="flex">
        <Sidebar />
        
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">Daily Tips</h1>
              <p className="text-gray-600">Discover simple techniques to manage stress and improve your wellbeing</p>
            </div>

            <TipCategories 
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTips.map((tip) => (
                <TipCard key={tip.id} tip={tip} />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}